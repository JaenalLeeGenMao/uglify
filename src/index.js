/**
 *
 * @param {*} name e.g. text-input | mola-player | vo-player | theo-player | text-input | lazyload | video-thumbnail | layout
 */
const getComponent = name => require(`./components/${name}`).default;

/**
 *
 * @param {*} name e.g. ellipsis | encrypt
 */
const getLibrary = name => require(`./utils/${name}`);

export { getComponent, getLibrary };
