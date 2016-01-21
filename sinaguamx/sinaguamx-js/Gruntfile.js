module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      main: {
        files: ['src/**/*.js', 'src/**/*.png', 'src/**/*.html', 'src/jsx/**/*.jsx', 'src/less/**/*.less'],
        tasks: ['react', 'less', 'browserify:main', 'copy:html', 'concat:dist'],
        options: {
          spawn: false
        }
      }
    },
    clean: {
      options: {force: true},
      build: {
        src: [
          'build/**/*', 'src/components/**/*',
          '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/css/**/*',
          '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/js/**/*',
          '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/*.html'
        ]
      }
    },
    copy: {
      html: {
        files: [
          {expand: true, src: ['src/index.html'], dest: 'build/', flatten: true, filter: 'isFile'},
          {expand: true, src: ['src/less/fonts/*'], dest: 'build/css/fonts/', flatten: true, filter: 'isFile'}
        ]
      },
      app: {
        files: [
          {expand: true, cwd:'build/js/', src: ['app.js'], dest: '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/js/'},
          {expand: true, cwd:'build/css/', src: ['app.css'], dest: '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/css/'},
          {expand: true, cwd:'build/css/fonts/', src: ['*'], dest: '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/css/fonts'},
          {expand: true, cwd:'build/', src: ['index.html'], dest: '../sinaguamx-webapps/sinaguamx-front/src/main/webapp/'}
        ]
      }
    },
    less: {
      main: {
        options: {
          paths: ["src/less/*"],
          compress: true,
          ieCompat: false,
          strictImports: true,
          syncImport: true,
          cleancss: true
        },
        files: {
          'build/css/app.css': 'src/less/app.less'
        }
      }
    },
    react: {
      files: {
        expand: true,
        cwd: 'src/jsx/',
        src: ['**/*.jsx','*.jsx'],
        dest: 'src/components',
        ext: '.js'
      }
    },
    browserify: {
      main: {
        files: {
          'build/js/app.js' : [
            'src/components/index.js'
          ]
        }
      }
    },
    uglify: {
      main: {
        files: {
          'build/js/app.js': ['build/js/app.js']
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/libs/jquery.js', 'src/libs/bootstrap.js', 'build/js/app.js'],
        dest: 'build/js/app.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['watch:main']);
  grunt.registerTask('dev', ['clean:build', 'react', 'less', 'browserify:main', 'copy:html', 'concat:dist']);
  grunt.registerTask('prod', ['clean:build', 'react', 'less', 'browserify:main', 'uglify', 'copy:html', 'concat:dist', 'copy:app']);
};
