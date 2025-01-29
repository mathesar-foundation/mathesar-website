import os

import yaml
from github import Github


GITHUB_TOKEN = os.environ['MATHESAR_ORG_GITHUB_TOKEN']
CONTRIBUTORS_FILE = '_data/contributors.yml'

gh = Github(GITHUB_TOKEN)
repo = gh.get_repo("mathesar-foundation/mathesar")
contributors = repo.get_contributors()

contributors_data = []
for contributor in contributors:
    contributors_data.append({
        'username': contributor.login,
        'name': contributor.name,
        'profile_url': f'https://github.com/{ contributor.login}',
        'profile_image': f'https://github.com/{ contributor.login}.png'
    })
contributors_current = yaml.dump(contributors_data)

website_repo = gh.get_repo("mathesar-foundation/mathesar-website")
contributors_master = website_repo.get_contents(CONTRIBUTORS_FILE)
website_repo.update_file(
    CONTRIBUTORS_FILE,
    'Automated update to contributors file.',
    contributors_current,
    contributors_master.sha
)
