'use strict';

module.exports = {
    injector: {
        options: {
            relative: true,
            min: true
        },
        files: {
            'src/myapp-management/index.html': ['src/myapp-management/js/*.js',
                                                'src/myapp-management/js/**/*.js',
                                                'src/myapp-management/css/*.css'
                                                ]
        }

    },
    bower_injector: {
        options: {
            relative: true,
            min: true,
            starttag: '<!-- bower_injector:{{ext}} -->',
            endtag: '<!-- endbower_injector -->'
        },
        files: {
            'src/myapp-management/index.html': ['bower.json']
        }
    }
};