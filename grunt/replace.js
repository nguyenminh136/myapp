'use strict';

module.exports = {
	replace_myappmanagement: {
 	 	 src: ['src/myapp-management/index.html'],
   		 overwrite: true,                
  	     replacements: [{
      	 from: '.\/vendors',
         to: '..\/vendors'
      }]
   }
};