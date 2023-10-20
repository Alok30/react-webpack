import React from "react";
import FolderExplorer from "./FolderExplorer";
import { FolderExplorerMock } from "./MockData/ExplorerMock";
if (process.env.NODE_ENV !== "production") {
  console.log("running in production mode");
}

const HomePage = React.lazy(() => import("./Home"));
const App = () => {
  return (
    <React.Suspense fallback={<div className="Container">.... Loading</div>}>
      <HomePage />
      <FolderExplorer FolderExplorerMock={FolderExplorerMock} />
    </React.Suspense>
  );
};
export default App;
