
module.exports = {
    optimization: {
        noEmitOnErrors: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    }
};