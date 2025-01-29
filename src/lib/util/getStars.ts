export async function getStars() {
  let count = 0
  try {
    const response = await fetch("https://api.github.com/repos/mathesar-foundation/mathesar");
    const data = await response.json();
    count = data.stargazers_count
  } catch(error) {
    console.error("Failed to collect stars count")
  }
  return count;
}
