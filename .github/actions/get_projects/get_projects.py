import os
import yaml
from github import Github
import requests

GITHUB_TOKEN = os.environ["MATHESAR_ORG_GITHUB_TOKEN"]
OUTPUT_FILE = "_data/projects.yml"
ORG = "mathesar-foundation"
PROJECT_NUMBER = 2

headers = {
    "Authorization": f"bearer {GITHUB_TOKEN}",
    "Content-Type": "application/json",
}

# Step 1: Get project ID
query_id = f"""
query {{
  organization(login: "{ORG}") {{
    projectV2(number: {PROJECT_NUMBER}) {{
      id
    }}
    projectsV2(first: 100) {{
      nodes {{
        number
        title
        url
      }}
    }}
  }}
}}
"""

resp = requests.post(
    "https://api.github.com/graphql", headers=headers, json={"query": query_id}
)

print("GraphQL response:")
print(resp.text)

# Add error handling for the GraphQL response
if resp.status_code != 200:
    raise Exception(
        f"GraphQL request failed with status {resp.status_code}: {resp.text}"
    )

response_data = resp.json()
if "errors" in response_data:
    raise Exception(f"GraphQL errors: {response_data['errors']}")

if response_data["data"]["organization"]["projectV2"] is None:
    print("Available projects:")
    for project in response_data["data"]["organization"]["projectsV2"]["nodes"]:
        print(f"  #{project['number']}: {project['title']} - {project['url']}")
    raise Exception(
        f"Project #{PROJECT_NUMBER} not found for user '{ORG}'. Check if the project exists and is accessible with your token."
    )

project_id = response_data["data"]["organization"]["projectV2"]["id"]

# Step 2: Query items
query_items = f"""
query {{
  node(id: "{project_id}") {{
    ... on ProjectV2 {{
      items(first: 50) {{
        nodes {{
          fieldValueByName(name: "Status") {{
            ... on ProjectV2ItemFieldSingleSelectValue {{
              status: name
            }}
          }}
          content {{
            __typename
            ... on Issue {{
              title
              url
              number
              state
              repository {{ nameWithOwner }}
            }}
          }}
        }}
      }}
    }}
  }}
}}
"""

resp = requests.post(
    "https://api.github.com/graphql", headers=headers, json={"query": query_items}
)

print("GraphQL response:")
print(resp.text)

# Add error handling for the second GraphQL response
if resp.status_code != 200:
    raise Exception(
        f"GraphQL request failed with status {resp.status_code}: {resp.text}"
    )

response_data = resp.json()
if "errors" in response_data:
    raise Exception(f"GraphQL errors: {response_data['errors']}")

items = response_data["data"]["node"]["items"]["nodes"]

# Step 3: Format and convert to YAML
formatted = []
for item in items:
    content = item["content"]
    if content is None:
        continue  # skip blank rows
    
    # Skip DraftIssue items that don't have the required fields
    if content["__typename"] == "DraftIssue":
        continue

    # Get status from the new query structure
    status = "Unknown"
    if item["fieldValueByName"] and item["fieldValueByName"].get("status"):
        status = item["fieldValueByName"]["status"]

    formatted.append(
        {
            "title": content["title"],
            "url": content["url"],
            "type": content["__typename"],
            "state": content["state"],
            "repo": content["repository"]["nameWithOwner"],
            "number": content["number"],
            "status": status,
        }
    )

yaml_data = yaml.dump(formatted, sort_keys=False)

print(yaml_data)

# # Step 4: Commit to website repo
# gh = Github(GITHUB_TOKEN)
# repo = gh.get_repo("mathesar-foundation/mathesar-website")

# try:
#     existing = repo.get_contents(OUTPUT_FILE)
#     repo.update_file(
#         OUTPUT_FILE,
#         "Automated update to project file.",
#         yaml_data,
#         existing.sha
#     )
# except Exception as e:
#     # If file doesn't exist, create it
#     if "404" in str(e):
#         repo.create_file(
#             OUTPUT_FILE,
#             "Automated update to project file.",
#             yaml_data
#         )
#     else:
#         raise e

print("Successfully updated project data!")
