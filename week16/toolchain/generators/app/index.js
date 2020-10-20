var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  async step1() {

    const answers = await this.prompt([{
      type: "input",
      name: "name",
      message: "Your project name",
      default: this.appname
    }, ]);

    const pkgJson = {
      devDependencies: {
        eslint: '^3.15.0'
      },
      dependencies: {
        react: "^16.2.0"
      }
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.npmInstall();

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'), {
        title: answers.name
      }
    );
  }

};