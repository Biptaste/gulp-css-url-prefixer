# gulp-css-url-prefixer
Gulp plugin to prefix url in css with a base url

## Instalation

Install via npm:

```
npm install gulp-css-url-prefixer --save-dev
```

## Usage

```js
var urlPrefixer = require('gulp-css-url-prefixer');

gulp.task('css-assets', function() {
  return gulp.src('src.css')
    .pipe(urlPrefixer('http://example.com'))
    .pipe(gulp.dest('style.css'));
});
```
