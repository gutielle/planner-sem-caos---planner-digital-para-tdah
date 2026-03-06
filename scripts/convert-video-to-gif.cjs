
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputPath = path.join(__dirname, '../public/images/videos/video-planner2.mov');
const outputPath = path.join(__dirname, '../public/images/planner/hero.gif');

console.log(`Converting ${inputPath} to ${outputPath}...`);

ffmpeg(inputPath)
  .outputOption('-vf', 'fps=10,scale=640:-1:flags=lanczos')
  .on('end', () => {
    console.log('Conversion finished successfully');
  })
  .on('error', (err) => {
    console.error('Error during conversion:', err);
    process.exit(1);
  })
  .save(outputPath);
