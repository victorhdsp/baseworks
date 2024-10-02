import fs from "node:fs";
import sharp from "sharp";

async function convertImage(path) {
    const name = path.split("/").reverse()[0];
    const webp = name.replace(".png", ".webp");
    await sharp(path).resize(200).toFormat("webp").toFile(webp);
}

async function main() {
    const IMG_DIR = "../png";
    const dir = fs.readdirSync(IMG_DIR);
    for (let index = 0; index < dir.length; index++) {
        const file = dir[index];
        await convertImage(`${IMG_DIR}/${file}`);
    }
}
main();
//convertImage("../png/1.png");