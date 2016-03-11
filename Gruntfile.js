module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                'js/libs/*.js',
            'js/common.js', // Все JS в папке libs
            'js/script.js'  // Конкретный файл
            ],
            dest: 'js/build/production.js',
        }
    },

    cssmin: {
       dist: {
          options: {
             banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
         },
         files: {
            'dist/css/style.min.css': ['css/**/*.css']
        }
    }
},

imagemin: {
       png: {
           options: {
               optimizationLevel: 7,
               pngquant: true
           },
           files: [{
               expand: true,
               cwd:"img/",
               src: ["**/*.png"],
               dest: "img/r/",
               ext: ".png"
           }]
       },

       jpg: {
           options: {
               progressive: true
           },
           files: [{
               expand: true,
               cwd:"img/",
               src: ["**/*.jpg"],
               dest: "img/r/",
               ext: ".jpg"
           }]
       }
 },


watch: {
  options: {
          spawn: false,
          livereload: true
      }
}

});

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','cssmin','imagemin','watch']);

};
