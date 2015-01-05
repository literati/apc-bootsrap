module.exports = function(grunt) {

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			multiple: {
				command: [
					'bower install',
					//'cp bower_components/bootstrap/dist/css/bootstrap.min.css public/css/',
					'cp bower_components/bootstrap/dist/js/bootstrap.min.js public/js/',
					'cp bower_components/jquery/dist/jquery.min.js public/js/'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	//Default Tasks
	grunt.registerTask('default', ['shell']);
};
