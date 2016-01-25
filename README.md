#打包开发环境 在easy目录中使用命令 npm run dev /npm run-script dev
webpack -d -w
#打包线上环境 在easy目录中使用命令 npm run server /npm run-script publish
webpack -p
#hot 服务   在easy目录中使用命令 npm run hot /npm run-script hot
webpack-dev-server --content-base public/ --hot --inline --devtool eval --progress --colors
#
