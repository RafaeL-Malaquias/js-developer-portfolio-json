/* consumindo api  */


async function fetchProfileData() {
 const url = 'https://raw.githubusercontent.com/RafaeL-Malaquias/js-developer-portfolio/refs/heads/main/data/profile.json?token=GHSAT0AAAAAAC3SS5B4KXM2OETJMJPSCUJI2FQWTOA';
    const fetching = await fetch(url)
    return await fetching.json()
}