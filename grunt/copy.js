'use strict';

module.exports = {
  dist : {
    files: [
     {
      expand: true , cwd:'tmp/' , flatten: true,  filter: 'isFile',
      dest: 'src/myapp-management/js' ,
      src: ['js/*.js']
     },
     {
      expand: true , cwd:'tmp/' , flatten: true,  filter: 'isFile',
      dest: 'src/myapp-management/css' ,
      src: ['css/*.css']
     },
     {
      expand: true , cwd:'views/' , flatten: false,  filter: 'isFile',
      dest: 'src/myapp-management/' ,
      src: ['templates/*']
     },
   ]
  }
};