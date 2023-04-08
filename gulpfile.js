const gulp = require('gulp'),
    cheerio = require('gulp-cheerio'),
    svgo = require('gulp-svgo'),
    svgSprite = require("gulp-svg-sprite");

const path = {
    src: {
        svg: {
            icons: 'src/images/svg/icons',
            icons_min: 'src/images/svg/icons_min',
        }
    },
    production: {
        svg: {
            icons: 'www/images/svg'
        },
    }
};

gulp.task('svgmin', function () {
    return gulp.src(path.src.svg.icons + '/*.svg')
        .pipe(svgo())
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(gulp.dest(path.src.svg.icons_min));
});
gulp.task('sprite',
    function () {
        return gulp.src(path.src.svg.icons_min + '/*.svg')
            .pipe(svgSprite({mode: {symbol: true}}))
            .pipe(gulp.dest(path.production.svg.icons));
    }
);
