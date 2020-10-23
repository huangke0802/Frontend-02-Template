var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async initPackage() {
    const answers = await this.prompt([{
      type: "input",
      name: "name",
      message: "Your project name",
      default: this.appname
    }, ]);

    const pkgJson = {
      "name": answers.name,
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {},
      "dependencies": {}
    };


    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.npmInstall(["vue"], {
      'save-dev': false
    });


    this.npmInstall(["webpack", "vue-loader","vue-loader-plugin",
      "vue-style-loader", "css-loader", "vue-template-compiler","html-webpack-plugin"
    ], {
      'save-dev': true
    });

  }

  copyFiles() {
    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue')
    );
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    );
  }

};