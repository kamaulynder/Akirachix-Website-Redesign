var gulp        = require('gulp');
var runSequence = require('run-sequence');

// Run all tasks needed for a build in defined order
gulp.task('build', function(callback) {
  runSequence(
  [
    'jekyll',
    'sass',
    'images',
    'copy:fonts',
    'cloudcannon:assets',
    'shopify:assets'
  ],
  'base64',
  callback);
});