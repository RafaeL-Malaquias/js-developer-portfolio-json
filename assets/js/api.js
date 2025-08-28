/* consumindo api  */


async function fetchProfileData() {
 const url = 'https://raw.githubusercontent.com/RafaeL-Malaquias/js-developer-portfolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC3SS5B4PQH5QVUKQ7GI2HOG2FQXCUQ';
    const fetching = await fetch(url)
    return await fetching.json()
}