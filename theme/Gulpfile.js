var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = ['src/css/*', 'src/img/*'];

gulp.task('css', function () {
    return gulp.src(['src/css/style.css', 'src/css/colorful.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('fonts', function () {
    return gulp.src(['node_modules/bootstrap/dist/fonts/*', 'src/fonts/*']).pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function () {
    return gulp.src('src/img/*').pipe(gulp.dest('build/img'));
});

gulp.task('default', ['css', 'js', 'fonts', 'images']);

gulp.task('watch', function () {
    gulp.watch(paths, ['default']);
});