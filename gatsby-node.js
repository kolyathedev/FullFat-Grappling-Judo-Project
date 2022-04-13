exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /materialize-css/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
  