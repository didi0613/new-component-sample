const Path = require("path");

const repoPackagesDir = Path.join(__dirname, "../../../../packages");

module.exports = {
  resolve: {
    alias: {
      
      "new-component-sample": Path.join(repoPackagesDir, "new-component-sample/src"),
      
    },
  modules: [
        
      Path.join(repoPackagesDir, "new-component-sample"),
      Path.join(repoPackagesDir, "new-component-sample/node_modules"),
      
    ]
  }
};
