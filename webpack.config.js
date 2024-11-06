const path = require('path');

module.exports = {
  entry: './src/index.js',  // Caminho para o arquivo principal de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho da pasta de saída
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Regra para arquivos de imagem
        use: [
          {
            loader: 'file-loader', // Carrega arquivos de imagem
            options: {
              name: '[name].[ext]', // Nome do arquivo de saída
              outputPath: 'images', // Caminho para salvar as imagens na pasta de saída
            },
          },
        ],
      },
      // Outras regras para JavaScript, CSS, etc., caso necessário
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensões que o Webpack vai resolver automaticamente
  },
};
