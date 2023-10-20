import React, { useState } from "react";

const FolderExplorer = ({ FolderExplorerMock }) => {
  console.log(FolderExplorerMock, "FolderExplorerMock");
  const [expand, setExpand] = useState(false);
  if (FolderExplorerMock.isChildren) {
    return (
      <React.Fragment>
        <div onClick={() => setExpand(!expand)}>{FolderExplorer.name}</div>
        <div
          style={{
            display: expand ? "block" : "none",
            padding: "10px",
            margin: "10px",
          }}
        >
          {FolderExplorerMock.item.map((items) => {
            return <FolderExplorer FolderExplorerMock={items} />;
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <div>{FolderExplorerMock.name}</div>;
  }
};

export default FolderExplorer;
