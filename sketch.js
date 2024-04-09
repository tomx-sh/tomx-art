const margin = 20;
const fontSize = 20;
const vSpacing = fontSize * 2;
const hSpacing = fontSize * 2;
let font;
const chars = "../|{@";


function preload() {
    font = loadFont('public/SF-Mono-Medium.otf');
}


function setup() {
    createCanvas(700, 700);
    frameRate(24);

    textFont(font);
    textSize(fontSize);
    textAlign(LEFT, TOP);
    

}


function draw() {
    background(20);

    const noiseScale = 0.01;
    const noiseSpeed = 0.0007;
    const cursorRadius = 250;
    
    for (let y = margin; y < height - margin; y += vSpacing) {
        for (let x = margin; x < width - margin; x += hSpacing) {

            fill(180);

            var b = noise(x * noiseScale, y * noiseScale, frameCount * noiseSpeed); // 0 to 1
            b = adjustContrast(b);

            let d = dist(mouseX, mouseY, x, y);
            if (d < cursorRadius) {
                b *= map(d, 0, cursorRadius, 0, 1); // Decrease b towards the cursor
            }



            const charIndex = floor(map(b, 0, 1, 0, chars.length, true));
            const char = chars.charAt(charIndex);

            if (charIndex == 0) {
                fill(50);
            }

            text(char, x, y);
        }
    }
}



function adjustContrast(value) {
    const exponent = 0.3; // Smaller values increase contrast
    let shiftedValue = (value - 0.5) * 2;
    shiftedValue = Math.sign(shiftedValue) * Math.pow(Math.abs(shiftedValue), exponent);
    return (shiftedValue / 2) + 0.5;
}