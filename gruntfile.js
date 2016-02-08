// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'src/less/**/*.less',
            tasks: ['less']
        },
        less: {
		  development: {
			options: {
			  paths: ["src"]
			},
			files: {
			  "src/css/style.css": "src/less/style.less"
			}
		  }
		},
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'src/*.html',
						'src/**/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './demo'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['less', 'watch']);
};