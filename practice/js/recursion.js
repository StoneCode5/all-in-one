/**
 * 将树状结构转成平铺的数组
 */

const data = {
  a: 1,
  b: {
    1: 2,
    2: {
      1: 3,
      2: 4,
    },
  },
  c: {
    1: {
      1: {
        1: 5,
        2: 8,
      },
      2: 6,
      3: {
        1: {
          2: 9,
        },
      },
    },
    2: 7,
  },
};

const convert = (target) => {
  const result = {};
  const keys = [];

  if (typeof target !== "object") {
    return target;
  }
};

const result = {
  a: 1,
  "b-1": 2,
  "b-2-1": 3,
  "b-2-2": 4,
  "c-1-1-1": 5,
  "c-1-2": 6,
  "c-2": 7,
  "c-1-1-2": 8,
  "c-1-3-1-2": 9,
};

/**
 * 广度优先遍历
 */

const bfs = (tree) => {
  const queen = [];
  queen.push(tree);

  function qfor() {
    const node = queen.unshift();
    console.log("node", node);
    node.children.forEach((item) => {
      queen.push(node);
    });
    qfor();
  }

  qfor();
};

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

const renderTreeNode2 = (tree) => {
  if (!tree.children) {
    return `<h1 key={tree.key} />`;
  } else {
    return tree.children.map((child) => {
      return `<h1 key={tree.key}>${renderTreeNode(child)}</h1>;`;
    });
  }
};
