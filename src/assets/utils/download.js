import fs from "node:fs";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

async function downloadImage(id) {
    const response = await fetch(`${BASE_URL}/${id}.png`);
    if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(`./${id}.png`, buffer);
    } else {
        console.log("Erro na imagem "+id)
    }
}

async function main() {
    for (let index = 0; index < 10277; index++) {
        await downloadImage(index);
    }
}
main();