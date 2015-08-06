var generators = require('yeoman-generator');
var path = require('path');
var yosay = require('yosay');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('appName', { type: String, required: false });
    this.appName = this._.camelize(this._.slugify(this._.humanize(this.appName)));
  },

  welcome: function() {
    this.log(yosay(
      'welcome to the gulp-angular-breeze generator!'
    ));
  },

  prompting: function() {
    if (this.appName) {
      return;
    }

    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What would you like to name the app?',
      default: this.appName || path.basename(process.cwd())
    }];

    this.prompt(prompts, function(answers){
      this.appName = answers.appName;
      this.appName = this.appName || path.basename(process.cwd());
      done();
    }.bind(this));
  },

  displayName: function() {
    this.log('Creating ' + this.appName
      + ' app based on gulp-angular-breeze generator.');
  },

  scaffoldFolders: function() {
    this.mkdir('src');
    this.mkdir('src/client');
    this.mkdir('src/client/app');
    this.mkdir('src/server');
  }

});
