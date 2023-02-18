module.exports = {
    resolve:{
        fallback:{
            process: require.resolve('process/browser'),
            child_process:false,
            fs:false
        },
    }
}