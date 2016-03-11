module.exports = {

        options: {
            spawn: false,
            livereload: true
        },

        scripts: {
            files: [
                'src/**/*.js'
            ],
            tasks: [
                /*'jshint',
                'uglify'*/
            ]
        },

        styles: {
            files: [
                'src/**/*.css'
            ],
            tasks: [
                //'cssmin:dev'
            ]
        },

        html: {
            files: [
                'src/**/*.html'
            ],
            tasks: [
                //'htmlmin:dev'
            ]
        },


};
