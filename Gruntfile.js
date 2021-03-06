module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {
        data: {
            pkg: grunt.file.readJSON('package.json')
        }
    });
//  grunt.initConfig({
//      concat: {
//         concatcss: {
//            src: [
//               'src/css/bootstrap.css',
//               'src/css/style.css',
//            ],
//            dest: 'dest/css/name.css'
//         },
         
//         concatjs: {
//            src: [
//               'src/js/jquery.js',
//               'src/js/name.js',               
//            ],
//            dest: 'dest/js/name.js'
//         },
//      },
//      cssmin: {
//         zipcss: {
//            src: 'dest/css/name.css',
//            dest: 'dest/css/name.min.css'
//         },
         
//      },
//      uglify: {
//         zipjs: {
//            src: 'dest/js/name.js',
//            dest: 'dest/js/name.min.js',
//         }
//      }
//  });
 
//  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.registerTask('dist', ['ngAnnotate', 'uglify', 'cssmin', 'copy']);
 grunt.registerTask('inject', ['injector', 'replace']);
//  grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};