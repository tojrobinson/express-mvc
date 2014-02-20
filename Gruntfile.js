module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: {
         files: ['public/min']
      },
      uglify: {
         options: {
            mangle: true,
            compress: true
         },
         main: {
            files: {
               'public/min/main.min.js': ['']
            }
         }
      },
      cssmin: {
         options: {
            noAdvanced: true
         },
         main: {
            files: {
               'public/min/main.min.css': ['']
            }
         }
      },
      jshint: {
         all: [''],
         options: {
            jshintrc: '.jshintrc'
         }
      },
      concurrent: {
         dev: {
            tasks: ['nodemon', 'watch'],
            options: {
               logConcurrentOutput: true
            }
         }
      },
      watch: {
         dist: {
            files: [''],
            tasks: ['clean', 'uglify', 'cssmin'],
            options: {
               livreload: true
            }
         }
      },
      nodemon: {
         dev: {
            script: 'server.js',
            options: {
               nodeArgs: ['--debug'],
               ext: 'dust,js,css',
               delayTime: 1000,
               callback: function(nodemon) {

                  nodemon.on('config:update', function() {
                 /*    setTimeout(function() {
                        require('child_process').exec('firefox http://localhost:5000');
                     }, 1000);*/
                  });

                  nodemon.on('restart', function() {

                  });
               }
            },
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-concurrent');
   grunt.loadNpmTasks('grunt-nodemon');

   grunt.registerTask('check', ['jshint']);
   grunt.registerTask('init', ['clean', 'uglify', 'cssmin']);
   grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'concurrent']);
}
