var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = ['assets/css/*', 'assets/img/*'];

gulp.task('css', function () {
    return gulp.src(['assets/css/style.css', 'assets/css/colorful.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('themes/custom/static/css'));
});

gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('themes/custom/static/js'));
});

gulp.task('fonts', function () {
    return gulp.src(['node_modules/bootstrap/dist/fonts/*', 'src/fonts/*'])
        .pipe(gulp.dest('themes/custom/static/fonts'));
});

gulp.task('images', function () {
    return gulp.src('assets/img/*').pipe(gulp.dest('themes/custom/static/img'));
});

gulp.task('default', ['css', 'js', 'fonts', 'images']);

gulp.task('watch', function () {
    gulp.watch(paths, ['default']);
});