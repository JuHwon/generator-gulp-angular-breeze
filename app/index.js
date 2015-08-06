var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
  constructor: function () {
    generators.NamedBase.apply(this, arguments);
  },

  method1: function() {
    console.log('method1 just ran');
  }
});
