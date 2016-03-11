module.exports = {

  // Настройки задач
  options: {
    limit: 3
  },

  // Задачи для разработки
  devFirst: [
    'clean',
    'htmlmin',
    'watch'
  ],
  devSecond: [
    /*'sass:dev',
    'uglify'*/
  ],

  // Задачи для продакшна
  prodFirst: [
    'clean',
    'jshint'
  ],
  prodSecond: [
    /*'sass:prod',*/
    'uglify'
  ],

  // Image tasks
  imgFirst: [
    'imagemin'
  ]
};
