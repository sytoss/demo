module.exports = [
  {
    test: /\.jsx?/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
      },
    ],
  },
  {
    test: /\.css$/,
    use: ['style-loader', {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    }],
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      'sass-loader',
    ],
  },
];
