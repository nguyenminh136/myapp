'use strict';

module.exports = {
  concat : {
     options: {
       shorthandCompacting: false,
       roundingPrecision: -1,
       report : 'gzip'
     },
       files: {
         'tmp/css/myappInfra.css': ['public/stylesheets/*.css']
       }
  },
  cssmin: {
        files: [{
          expand: true,
          cwd: 'tmp/css',
          src: ['myappInfra.css', '!*.min.css'],
          dest: 'tmp/css',
          ext: '.min.css'
        }]
  } 
};