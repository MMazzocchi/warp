var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var derequire = require('gulp-derequire');

const CLIENT_SRC = './client/src/';
const CLIENT_DIST = './client/dist/';

function buildFile(in_file, out_dir, new_filename) {
  var filename = new_filename;

  if(filename === undefined) {
    var tokens = in_file.split(/\/+/);
    filename = tokens[tokens.length - 1];
  }

  return new Promise(function(resolve) {
    var stream = browserify(in_file)
      .bundle()
      .pipe(source(filename))
      .pipe(derequire())
      .pipe(gulp.dest(out_dir));

    stream.on('end', function() {
      resolve(out_dir+"/"+filename);
    });
  });
};

function build() {
  return Promise.all([
    buildFile(CLIENT_SRC+'/WarpClient.js', CLIENT_DIST),
  ]);
};

gulp.task('build', build);
gulp.task('default', gulp.series('build'));
