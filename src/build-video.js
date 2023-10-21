const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const FFmpeg = require('fluent-ffmpeg');

FFmpeg.setFfmpegPath(ffmpegPath);

const gify1 = new FFmpeg({
  source: path.resolve(__dirname, './public/icons/like-noBG.gif')
});
const gify2 = new FFmpeg({
  source: path.resolve(__dirname, './public/icons/loading-noBG.gif')
});
const gify3 = new FFmpeg({
  source: path.resolve(__dirname, './public/icons/search-after.gif')
});

gify1
  .clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, './public/icons/like-noBG.mp4'));

gify1
  .clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, './public/icons/like-noBG.webm'));

gify2
  .clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, './public/icons/loading-noBG.mp4'));

gify2
  .clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, './public/icons/loading-noBG.webm'));

gify3
  .clone()
  .withVideoCodec('libx264')
  .withFps(25)
  .toFormat('mp4')
  .saveToFile(path.resolve(__dirname, './public/icons/search-after.mp4'));

gify3
  .clone()
  .withFps(25)
  .toFormat('webm')
  .saveToFile(path.resolve(__dirname, './public/icons/search-after.webm'));
