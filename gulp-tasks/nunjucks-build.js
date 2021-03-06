var nunjucksRender = require('gulp-nunjucks-render');
var removeCode = require('gulp-remove-code');

var data = require('gulp-data');

module.exports = function (gulp, plugins) {
    return function () {
       gulp.src('app/**/*.+(html)')
       .pipe(data(function() {
                return {
                    data: require('./../app/data.json')
                }
            }))
      .pipe(nunjucksRender({
           path: ['app/templates']
        }))
        .pipe(removeCode({
           tmp: true
        }))
      .pipe(gulp.dest('.tmp'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }))
    };
};
