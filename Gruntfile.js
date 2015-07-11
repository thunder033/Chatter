/**
 * Created by Greg on 7/2/2015.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                reporter: require('jshint-stylish')
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', 'Run tests', function(){

    });

    grunt.registerTask('default', ['jshint']);

    grunt.registerTask('serve', 'launch server', function(){
        grunt.log.writeln('Launching Sails...');
        //sails lift

        if(grunt.option('dev')){
            grunt.log.warn('dev config...');
            grunt.log.writeln('Launching Selenium Web Driver...');
            //launch selenium web driver
        }
    })
};