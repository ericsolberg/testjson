import React from "react";

const App: React.FC = () => {
  // this solution from: https://survivejs.com/webpack/techniques/dynamic-loading/
  const context = require.context(
    "json-loader!./metadata",
    true, // Load files recursively. Pass false to skip recursion.
    /^\.\/.*\.md$/ // Match files ending with .md.
  );

  const foo = context("./foo.md");

  return <div>{foo.bar}</div>;
};

export default App;
