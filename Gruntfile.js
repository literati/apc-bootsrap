module.exports = function(grunt) {

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			multiple: {
				command: [
					'npm update',
					'bower update',
					//'cp bower_components/bootstrap/dist/css/bootstrap.min.css public/css/',
					'cp bower_components/bootstrap/dist/js/bootstrap.min.js public/js/',
					'cp bower_components/jquery/dist/jquery.min.js public/js/',
					'find google_drive_data/google_raw -name \*.docx -maxdepth 3 -type f -exec node node_modules/docxtohtml/docxtohtml.js {} ";"',
					'mv google_drive_data/google_raw/*.html google_drive_data/formatted_html/'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	//Default Tasks
	grunt.registerTask('default', ['shell']);
};

//https://doc-0g-6c-docs.googleusercontent.com/docs/secure/4kdvpse1r50dj305fn9aacudpgv428ks/plr1q43p85fi0s5fd5r5vffj1kgnqbur/1420473600000/06702729442107668201/06702729442107668201/YuQHT0unAJNOWUd2ur1GfJDkNbRFv7KVCPEXZQ8ixuJiDBTIk9GV3FjtTjMW26L3Y_Aq7iFZtfFAIf3sBGO18M6mXXH3T-0898q0HXlHyNHdr9Ruo5gt2hdpXL6wa_eR?ai=YuQHT0unAJNOWUd2ur1GfJDkNbRFv7KVCPEXZQ8ixuJiDBTIk9GV3FjtTjMW26L3Y_Aq7iFZtfFAIf3sBGO18M6mXXH3T-0898q0HXlHyNHdr9Ruo5gt2hdpXL6wa_eR&ap=grOCTZLfQ5UvCL0ymS_mPP8eGXG9a7Lc0-q_BAkseQXW-m9dySAbQQ&a=Ready_to_go_-_Jason_and_Kristen-2015-01-05.zip&nonce=74li53hg4tfee&user=06702729442107668201&hash=6vqgia23ag3kv3deh9c110cpqamsk4h3
