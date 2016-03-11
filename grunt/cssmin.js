module.exports = {
    dev: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
    files: {
      'src/css/style.min.css': ['src/**/*.css', 'src/**/*.css'],
      'dist/libs.min.css': ['src/**/*.min.css', 'src/**/*.min.css']
    }
}
}
