import { createCanvas, loadImage } from 'canvas';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function findMainYellow() {
    try {
        const image = await loadImage(join(process.cwd(), 'public/background.png'));
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let mainYellow = {};
        
        for (let i = 0; i < imageData.length; i += 4) {
            const r = imageData[i];
            const g = imageData[i+1];
            const b = imageData[i+2];
            const a = imageData[i+3];
            
            if (a < 50) continue;
            
            // "Yellowness" criteria (high red and green, low blue)
            
            if (r > 150 && g > 150 && b < 100) {
                const hex = '#' + [r,g,b].map(x => {
                    const h = x.toString(16);
                    return h.length === 1 ? '0' + h : h;
                }).join('');
                if (mainYellow[hex]) mainYellow[hex]++;
                else mainYellow[hex] = 1;
            }
        }
        
        let bestHex = null;
        let maxCount = 0;
        for (const [hex, count] of Object.entries(mainYellow)) {
            if (count > maxCount) {
                maxCount = count;
                bestHex = hex;
            }
        }
        
        console.log("BEST YELLOW:", bestHex);
    } catch (e) {
        console.error(e);
    }
}

findMainYellow();
