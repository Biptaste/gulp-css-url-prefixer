# gulp-css-url-prefixer
Gulp plugin to prefix url in css with a base url

## Instalation

Install via npm:

```
npm install gulp-css-assets --save-dev
```

## Usage

```js
var cssAssets = require('gulp-css-assets');

gulp.task('scripts', function() {
  return gulp.src('src.css')
    .pipe(cssAssets('http://example.com'))
    .pipe(gulp.dest('style.css'));
});
```
