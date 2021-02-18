module.exports = {
    presets: [
        [
            '@babel/env',
            {
                loose: true,
                modules: 'auto',
                useBuiltIns: 'usage',
                corejs: 3
                // exclude: ['es.promise', 'es.promise.finally']
            }
        ]
    ]
}
