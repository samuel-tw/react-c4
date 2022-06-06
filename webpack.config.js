const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/')
    },
    devServer: {
        //contentbase: "./dist",        (2022-06-04) 原書中contentbase 改成 static 
        static: "./dist",               // 參考 https://juejin.cn/post/7017836945384407070

        open: true,                     //(2022-06-04)加上這行
    },

    module:{
        rules: [
            
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            
            {

                test:  /\.(scss)$/,    
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options:{
                            modules:{
                                localIdentName: '[path][local]___[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
  
                ],    
                    
            
            },
            
        ],
    },
    
    plugins: [
        
        
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
      
  ],
    

};