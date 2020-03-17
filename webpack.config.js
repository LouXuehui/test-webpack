let path = require("path"); //自带的路径插件
let htmlWebpackPlugin = require("html-webpack-plugin"); // html插件

module.exports = {
  devServer: {
    //开发服务器的配置
    port: 3000, //端口
    progress: true, //展示进度条
    contentBase: "./build", // 运行静态服务地址
    open: true, //启动浏览器
    compress: true //gzip 压缩
  },
  mode: "development", //模式 默认两种 production 生产模式 development 开发模式
  entry: "./src/index.js", //入口 从那个地方开始打包
  output: {
    //出口
    filename: "bundle[hash:8].js", //打包后的文件名  加hash戳，避免缓存 8只显示8位
    path: path.resolve(__dirname, "build") //路径必须是一个绝对路径 加__dirname代表在当前目录下产生dist目录，不加也可以
  },
  plugins: [
    //数组，放着所有webpack的插件
    new htmlWebpackPlugin({
      template: "./src/index.html", //模板
      filename: "index.html", //打包后的文件名
      minify: {
        //打包压缩
        removeAttributeQuotes: true, //删除双引号
        collapseWhitespace: true //打包成一行
      },
      hash: true //hash戳
    })
  ]
};
