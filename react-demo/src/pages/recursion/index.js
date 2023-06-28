import React, { useEffect } from "react";

function Test() {
  console.log("parent Render");
  const tree = {
    key: "3",
    children: [
      {
        key: "0",
        title: "0",
        children: [
          {
            key: "0-1",
            title: "0-1",
            children: [],
          },
          {
            key: "0-2",
            title: "0-2",
            children: [],
          },
        ],
      },
      {
        key: "1",
        title: "1",
        children: [
          {
            key: "1-1",
            title: "1-1",
            children: [],
          },
          {
            key: "1-2",
            title: "1-2",
            children: [],
          },
        ],
      },
    ],
  };

  const tree2 = [
    {
      key: "0",
      title: "0",
      children: [
        {
          key: "0-1",
          title: "0-1",
          children: [],
        },
        {
          key: "0-2",
          title: "0-2",
          children: [],
        },
      ],
    },
    {
      key: "1",
      title: "1",
      children: [
        {
          key: "1-1",
          title: "1-1",
          children: [],
        },
        {
          key: "1-2",
          title: "1-2",
          children: [],
        },
      ],
    },
  ];
  const renderTreeNode = (tree) => {
    if (Array.isArray(tree)) {
      return tree.map((item) => {
        return renderTreeNode(item);
      });
    } else {
      if (tree.children.length === 0) {
        return 
      } else {
        return (
          <div data-id={tree.key}>
            {tree.children.map((child) => {
              return (
                <div data-id={child.key} key={child.key}>
                  {renderTreeNode(child)}
                </div>
              );
            })}
          </div>
        );
      }
    }
  };

  return <div className="App">{renderTreeNode(tree2)}</div>;
}

export default Test;
