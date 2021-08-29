export default function override(config) {
    let loaders = config.module.rules[1].oneOf;
    loaders.splice(loaders.length - 1, 0, 
        {
            test: /\.md$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        });
    return config;
  }
