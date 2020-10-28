##### 单元测试工具：Mocha
 * 地址：https://mochajs.org/

   安装：全局安装 npm install --global mocha

   使用require引入，module.exports导出；

 * 如果需要使用 export/import 需要引入babel
   
   1、使用 @babel/register  @babel/core
      npm install --save-dev @babel/core @babel/register

   2、直接调用 
      mocha --require @babel/register
      然后报错了，因为我们是全局安装mocha的；需要调用local的mocha
      还需要创建 文件 .babelrc 内容；
      {
         "presets": ["@babel/preset-env"]
      }
      ./node_modules/.bin/mocha --require @babel/register （这条命令在windows上报错）








##### 单元测试工具：Code Coverage





##### 单元测试工具：对HTML—Parser进行单元测试




##### 单元测试工具：所有工具与generator的集成