module.exports = {
  all: {
    options: {
        optimizationLevel: 5,
	progressive: true,
    },
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['img/*.{png,jpg,gif}'],
      dest: 'dist/'
    }]
  }
};
