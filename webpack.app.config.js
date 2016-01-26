/**
 * Created by chenwei on 2016/1/20.
 */

var webpack=require('webpack');
var path=require('path');
//提取css文件
var ExtractTextPlugin=require('extract-text-webpack-plugin');
//提取根据模板动态打包html文件
var HtmlWebpackPlugin=require('html-webpack-plugin');

var debug=true;
var url='http://localhost:3000';
var entryConfig=[];
var output={};
var plugin=[];
if(debug){
    entryConfig=[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
        './src/entry/app/home.js'
     ];
    output={
        path: path.join(__dirname,"/public/app/build/"),
        publicPath: "http://localhost:3000/app/build/",
        filename: "js/app.js"
    };
    plugin=[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
        new ExtractTextPlugin('css/[name].css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            title:'EASY',
            favicon:'./src/img/icon/easy.ico',
            filename:'/view/index.html',
            template:'./src/view/app/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })
    ]
}else{
    entryConfig=[
         './src/entry/app/home.js'
     ];
    output={
        path: path.join(__dirname,"/public/app/assets/"),
        publicPath: url+"/app/assets/",
        filename: "js/app.js",
        chunkFilename:'js/[id].chunk.js'
    };
    plugin=[
        new webpack.optimize.CommonsChunkPlugin('js/comment.js'),
        new ExtractTextPlugin('css/[name].css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({    //压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        }),
        new HtmlWebpackPlugin({
            title:'EASY',
            favicon:'./src/img/icon/easy.ico',
            filename:'/view/index.html',
            template:'./src/view/app/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ]
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
            { test: /\.(png|jpg|gif|jpeg|svg|eot|woff2|woff|ttf|ico)$/, loader: "url-loader?limit=10000&name=img/[hash:8].[name].[ext]" }
        ]
    },
    resolve:{
        root:[__dirname+'/src',__dirname+'/node_modules'],
        extensions:['','.js','.json','.css','.scss','.ejs','.png','.jpg'],
        alias:{
            cssPath:__dirname+'/src/css',
            jsPath:__dirname+'/src/img',
            imgPath:__dirname+'/src/js',
            htmPath:__dirname+'/src/view',
            libPath:__dirname+'/src/lib',
            modules:"../../../node_modules"
        }
    },
    plugins: plugin
}