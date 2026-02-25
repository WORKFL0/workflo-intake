const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

function createLogo() {
    const canvas = createCanvas(300, 100);
    const ctx = canvas.getContext('2d');

    // Create circular background
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI * 2);
    ctx.fill();

    // Create neon yellow W
    ctx.fillStyle = '#eab308'; // Workflo yellow
    ctx.beginPath();
    ctx.moveTo(35, 70);
    ctx.lineTo(25, 30);
    ctx.lineTo(35, 30);
    ctx.lineTo(45, 70);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(55, 70);
    ctx.lineTo(45, 30);
    ctx.lineTo(55, 30);
    ctx.lineTo(65, 70);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(70, 70);
    ctx.lineTo(60, 30);
    ctx.lineTo(70, 30);
    ctx.lineTo(80, 70);
    ctx.fill();

    // Workflo text
    ctx.fillStyle = '#0a0a0a';
    ctx.font = 'bold 36px "Outfit", Arial';
    ctx.fillText('WORKFLO', 100, 62);

    const out = fs.createWriteStream(path.join(__dirname, 'public', 'logo.png'));
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    console.log('logo.png generated');
}

function createSignature() {
    const canvas = createCanvas(200, 60);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000000';
    ctx.font = 'italic 34px "Brush Script MT", cursive, serif';
    ctx.fillText('Florian', 30, 45);

    const out = fs.createWriteStream(path.join(__dirname, 'public', 'signature.png'));
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    console.log('signature.png generated');
}

createLogo();
createSignature();
