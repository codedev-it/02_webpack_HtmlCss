const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main:'./src/main.js',
    },
    mode:"development",
    output:{
        filename:'[name]-bundle.js',
        path:path.resolve(__dirname, '../dist'),
    },
    devServer:{
        contentBase:'dist',
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                    },
                ]
            },
            {
                test:/\.html$/i,
                use:[
                    {
                        loader:'html-loader',
                        options:{minimize:true}
                    },
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
    ],
}