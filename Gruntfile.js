module.exports = function(grunt) {

    grunt.initConfig({
      responsive_images: {
        dev: {
          options: {
            engine: 'im',
            sizes: [
                {
                  name: 'small',
                  width: 320
                },
                {
                  name: "medium",
                  width: 600
                },
                {
                  name: "large",
                  width: 1024
                },
            ]
          },

          files: [{
            expand: true,
            src: ['*.{gif,jpg,png}'],
            cwd: 'img/',
            dest: 'img_responsive/'
          }]
        }
      },

      /* Clear out the images directory if it exists */
      clean: {
        dev: {
          src: ['img_responsive'],
        },
      },

      /* Generate the images directory if it is missing */
      mkdir: {
        dev: {
          options: {
            create: ['img_responsive']
          },
        },
      },

      /* Copy the "fixed" images that don't go through processing into the images/directory */
      copy: {
        dev: {
          files: [{
            expand: true,
            src: 'img/fixed/*.{gif,jpg,png}',
            dest: 'img_responsive/'
          }]
        },
      },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

  };
