var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var outputPath = 'output-generator';

gulp.task('styleguide:generate', function() {
  return gulp.src('sass/*.scss')
    .pipe(styleguide.generate({
        title: 'NYPL Styleguide',
        server: true,
        port: 3001,
        rootPath: outputPath,
        overviewPath: 'readme.md',
        styleSource: 'css/*.css'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src([ 'sass/application.scss' ])
    .pipe(compass({
      // errLogToConsole: true
      // config_file: './config.rb'
      // css: 'css',
      // sass: 'sass'
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:copyStatic', ['images', 'fonts']);

gulp.task('images', function() {
  gulp.src(['imgs/**'])
    .pipe(gulp.dest(outputPath + '/imgs'))
    .pipe(gulp.dest(outputPath + '/assets/img'));
});

gulp.task('fonts', function() {
  gulp.src(['fonts/**'])
    .pipe(gulp.dest(outputPath + '/fonts'))
    .pipe(gulp.dest(outputPath + '/assets/fonts'));
});

gulp.task('watch', ['styleguide'], function() {
  gulp.watch(['sass/*.scss'], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles', 'styleguide:copyStatic']);

gulp.task('default', ['styleguide']);
