// ReferenceError: React is not defined 回避のため
// 詳細：https://github.com/gatsbyjs/gatsby/issues/28657
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic"
    }
  });
};
