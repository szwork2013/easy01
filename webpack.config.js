/**
 * Created by chenwei on 2016/1/20.
 */

var webpack=require('webpack');
var path=require('path');
//提取css文件
var ExtractTextPlugin=require('extract-text-webpack-plugin');
//提取根据模板动态打包html文件
var HtmlWebpackPlugin=require('html-webpack-plugin');
//debug=true,为开发包，false为发布包
var debug=false;
var entryConfig=[];
var output={};
if(debug){
     entryConfig=[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './src/app/home.js'
     ];
    output={
        path: path.join(__dirname,"/public/"),
        publicPath: "/",
        filename: "app/build/js/app.js"
    }
}else{
     entryConfig=[
         './src/app/home.js'
     ];
    output={
        path: path.join(__dirname,"/public/app/assets/"),
        publicPath: "/app/assets/",
        filename: "js/app.js",
        chunkFilename:'js/[id].chunk.js'
    }
}

module.exports={
    entry:entryConfig,
    output:output,
    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.(png|jpg|gif|jpeg|svg|eot|woff2|woff|ttf|ico)$/, loader: "url-loader?limit=10000&name=app/build/img/[hash:8].[name].[ext]" }
        ]
    },
    resolve:{
        root:[__dirname+'/src',__dirname+'/node_modules'],
        extensions:['','.js','.json','.css','.scss','.ejs','.png','.jpg'],
        alias:{
            appType:root+'style/',
            appJs:root+'js/',
            appImg:root+'images/'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app/build/js/comment.js'),
        new ExtractTextPlugin('app/build/css/[name].css',{allChunks:true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            favicon:'./src/app/img/icon/easy.ico',
            filename:'app/build/view/index.html',
            template:'./src/app/view/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })
    ]
}