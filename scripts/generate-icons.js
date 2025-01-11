const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 192, 512];
const inputSvg = path.join(process.cwd(), 'public', 'icon.svg');
const outputDir = path.join(process.cwd(), 'public');

async function generateIcons() {
  // Ensure input SVG exists
  if (!fs.existsSync(inputSvg)) {
    console.error('❌ Input SVG file not found!');
    process.exit(1);
  }

  // Create PNG icons
  for (const size of sizes) {
    try {
      await sharp(inputSvg)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      
      console.log(`✓ Generated ${size}x${size} icon`);
    } catch (error) {
      console.error(`❌ Error generating ${size}x${size} icon:`, error);
    }
  }

  // Create Apple icon
  try {
    await sharp(inputSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-icon.png'));
    
    console.log('✓ Generated Apple icon');
  } catch (error) {
    console.error('❌ Error generating Apple icon:', error);
  }

  // Create favicon.ico (16x16 and 32x32 combined)
  try {
    const favicon16 = await sharp(inputSvg)
      .resize(16, 16)
      .toBuffer();
    
    const favicon32 = await sharp(inputSvg)
      .resize(32, 32)
      .toBuffer();

    await sharp(favicon16)
      .toFormat('ico')
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    console.log('✓ Generated favicon.ico');
  } catch (error) {
    console.error('❌ Error generating favicon.ico:', error);
  }

  console.log('\n✨ Icon generation complete!');
}

generateIcons(); 