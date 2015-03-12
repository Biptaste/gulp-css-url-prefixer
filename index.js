// Dependencies
var through = require('through2');
var gutil = require('gulp-util');

// Consts
var PLUGIN_NAME = 'gulp-css-assets';


function gulpCssAssets(assetsBaseUrl) {

    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
        }

        if (file.isBuffer()) {
            var reg = new RegExp("url[(]'?([^')]*)'?[)]", "g");

            var contents = file.contents.toString('utf8');

            file.contents = new Buffer(
                contents.replace(reg, 'url('+assetsBaseUrl+'$1)')
            );
        }

        if (file.isStream()) {
            return this.emit('error', new gutil.PluginError(PLUGIN_NAME,  'Streaming not supported'));
        }

        cb(null, file);
    });
}

module.exports = gulpCssAssets;
