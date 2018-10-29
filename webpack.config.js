/*** webpack.config.js ***/

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      components: path.resolve('./assets/scripts/components'),
    }
  }  
}
