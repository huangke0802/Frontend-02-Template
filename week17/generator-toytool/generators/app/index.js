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
      "name": "vue-demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "mocha --require @babel/register",
        "build": "webpack",
        "coverage": "nyc mocha"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {

      },
      "dependencies": {}
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.npmInstall(['vue'], {
      'save-dev': false
    });
    this.npmInstall(['webpack', 'vue-loader', 'vue-template-compiler', 'vue-style-loader', 'css-loader', 'copy-webpack-plugin',
      "babel-loader",
      "@babel/core",
      "@babel/preset-env",
      "@istanbuljs/nyc-config-babel",
      "babel-plugin-istanbul",
      "babel-register",
      'webpack-cli',
      'mocha', 'nyc',
    ], {
      'save-dev': true
    });

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copyTpl(
      this.templatePath('.nycrc'),
      this.destinationPath('.nycrc')
    );
    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue')
    );

    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('src/index.html'), {
        title: answers.name
      }
    );
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js')
    );
  }


};