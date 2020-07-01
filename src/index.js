const getComponent = name => require(`./components/${name}`).default;
const getLibrary = name => require(`./utils/${name}`);

export {
  getComponent,
  getLibrary
};
