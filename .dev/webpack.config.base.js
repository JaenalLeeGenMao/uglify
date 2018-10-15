/**
 * How to use
 *
 * step 1
 * on consumer repo [.e.g Mola, Twoc, Sstv, etc..]
 * yarn add --dev svg-url-loader url-loader file-loader raw-loader file-loader babel-loader @babel/preset-env @babel/preset-flow @babel/preset-react @babel/plugin-transform-react-constant-elements @babel/plugin-transform-react-inline-elements babel-plugin-transform-react-remove-prop-types @babel/plugin-proposal-decorators @babel/plugin-proposal-function-sent @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-throw-expressions @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-import-meta @babel/plugin-proposal-class-properties @babel/plugin-proposal-json-strings isomorphic-style-loader css-loader postcss-loader null-loader
 *
 *
 * step 2
 * add babel.config.js files on ROOT folder of consumer repo
 * with settings below
 *
 *  module.exports = {
 *    presets: [
 *      [
 *        '@babel/preset-env',
 *        {
 *          targets: {
 *            node: 'current'
 *          }
 *        }
 *      ],
 *      '@babel/preset-flow',
 *      '@babel/preset-react'
 *    ],
 *    ignore: ['node_modules', 'build'],
 *    plugins: [
 *      // Stage 2
 *      ['@babel/plugin-proposal-decorators', { legacy: true }],
 *      '@babel/plugin-proposal-function-sent',
 *      '@babel/plugin-proposal-export-namespace-from',
 *      '@babel/plugin-proposal-numeric-separator',
 *      '@babel/plugin-proposal-throw-expressions',
 *      // Stage 3
 *      '@babel/plugin-syntax-dynamic-import',
 *      '@babel/plugin-syntax-import-meta',
 *      ['@babel/plugin-proposal-class-properties', { loose: false }],
 *      '@babel/plugin-proposal-json-strings'
 *    ]
 *  };
 */

/**
 * This webpack base config is mainly suitable for react-starter-kit projects
 */
const path = require("path");
const BASE_DIR = path.resolve(__dirname, "..");

const pkg = require("../package.json");

/* http://cssnano.co */
const minimizeCssOptions = {
    discardComments: { removeAll: true }
};

const baseConfig = {
    context: BASE_DIR,
    mode: "development",
    output: {
        path: BASE_DIR,
        publicPath: "/assets/",
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: ["node_modules", "src"],
        symlinks: true
    },
    module: {
        rules: []
    },
    devtool: "cheap-module-inline-source-map"
};

/**
 * @param ROOT_DIR => root directory is compulsory, and must be passed from repo that consumes Gandalf
 * @param env => process.env.NODE_ENV or process.env.REACT_APP_ENV
 */
const Config = module.exports = {
    default: baseConfig,
    updateConfig: ({
        isDebug = false,
        isVerbose = false,
        reScript = /\.(js|jsx|mjs)$/,
        reStyle = /\.(css|less|styl|scss|sass|sss)$/,
        reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/,
        ROOT_DIR = path.resolve(__dirname, ".."),
        staticAssetName = "[path][name].[ext]?[hash:8]",
        env = "development"
    }) => {

        const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
        const SRC_DIR = resolvePath("src");
        const BUILD_DIR = resolvePath("build");

        Config.default = {
            ...baseConfig,
            context: ROOT_DIR,
            mode: env === "development"
                ? "development"
                : "production" /** development, production */,
            output: {
                path: resolvePath(BUILD_DIR, "public/assets"),
                publicPath: "/assets/",
                pathinfo: isVerbose,
                filename: isDebug ? "[name].js" : "[name].[chunkhash:8].js",
                chunkFilename: isDebug ? "[name].chunk.js" : "[name].[chunkhash:8].chunk.js",
                // Point sourcemap entries to original disk location (format as URL on Windows)
                devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, "/")
            },
            resolve: {
                extensions: [".js", ".jsx", ".json"],
                modules: ["node_modules", "src"],
                symlinks: true
            },
            module: {
                rules: [
                    /* Rules for images */
                    {
                        test: reImage,
                        oneOf: [
                            /* Inline lightweight images into CSS */
                            {
                                issuer: reStyle,
                                oneOf: [
                                    /* Inline lightweight SVGs as UTF-8 encoded DataUrl string */
                                    {
                                        test: /\.svg$/,
                                        loader: "svg-url-loader",
                                        options: {
                                            name: staticAssetName,
                                            limit: 4096 // 4kb
                                        }
                                    },
                                    /* Inline lightweight images as Base64 encoded DataUrl string */
                                    {
                                        loader: "url-loader",
                                        options: {
                                            name: staticAssetName,
                                            limit: 4096 // 4kb
                                        }
                                    }
                                ]
                            },
                            /* Or return public URL to image resource */
                            {
                                loader: "file-loader",
                                options: {
                                    name: staticAssetName
                                }
                            }
                        ]
                    },
                    /* Convert plain text into JS module */
                    {
                        test: /\.txt$/,
                        loader: "raw-loader"
                    },
                    /* Return public URL for all assets unless explicitly excluded */
                    /* DO NOT FORGET to update `exclude` list when you adding a new loader */
                    {
                        exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/],
                        loader: "file-loader",
                        options: {
                            name: staticAssetName
                        }
                    },
                    {
                        test: /\.md$/,
                        loader: resolvePath("./tools/lib/markdown-loader.js")
                    },
                    /* Rules for JS / JSX */
                    {
                        test: reScript,
                        include: [SRC_DIR, resolvePath("tools")],
                        loader: "babel-loader",
                        options: {
                            /* https://github.com/babel/babel-loader#options */
                            cacheDirectory: isDebug,
                            /* https://babeljs.io/docs/usage/options */
                            babelrc: false,
                            presets: [
                                /* A Babel preset that can automatically determine the Babel plugins and polyfills
                                   https://github.com/babel/babel-preset-env */
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            browsers: pkg.browserslist
                                        },
                                        forceAllTransforms: !isDebug,
                                        modules: false,
                                        useBuiltIns: false,
                                        debug: false
                                    }
                                ],
                                /* Experimental ECMAScript proposals
                                   https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-
                                   Flow
                                   https://github.com/babel/babel/tree/master/packages/babel-preset-flow */
                                "@babel/preset-flow",
                                /* JSX
                                   https://github.com/babel/babel/tree/master/packages/babel-preset-react */
                                ["@babel/preset-react", { development: isDebug }]
                            ],
                            plugins: [
                                /* Treat React JSX elements as value types and hoist them to the highest scope
                                   https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements */
                                ...(isDebug ? [] : ["@babel/plugin-transform-react-constant-elements"]),
                                /* Replaces the React.createElement function with one that is more optimized for production
                                   https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements */
                                ...(isDebug ? [] : ["@babel/plugin-transform-react-inline-elements"]),
                                /* Remove unnecessary React propTypes from the production build
                                   https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types */
                                ...(isDebug ? [] : ["babel-plugin-transform-react-remove-prop-types"]),
                                /* Stage 2 */
                                ["@babel/plugin-proposal-decorators", { legacy: true }],
                                "@babel/plugin-proposal-function-sent",
                                "@babel/plugin-proposal-export-namespace-from",
                                "@babel/plugin-proposal-numeric-separator",
                                "@babel/plugin-proposal-throw-expressions",
                                /* Stage 3 */
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-syntax-import-meta",
                                ["@babel/plugin-proposal-class-properties", { loose: false }],
                                "@babel/plugin-proposal-json-strings"
                            ]
                        }
                    },
                    /* Rules for Style Sheets */
                    {
                        test: reStyle,
                        rules: [
                            /* Convert CSS into JS module */
                            {
                                issuer: { not: [reStyle] },
                                use: "isomorphic-style-loader"
                            },
                            /* Process external/third-party styles */
                            {
                                exclude: SRC_DIR,
                                loader: "css-loader",
                                options: {
                                    sourceMap: isDebug,
                                    minimize: isDebug ? false : minimizeCssOptions
                                }
                            },
                            /* Process internal/project styles (from src folder) */
                            {
                                include: SRC_DIR,
                                loader: "css-loader",
                                options: {
                                    /* CSS Loader https://github.com/webpack/css-loader */
                                    importLoaders: 1,
                                    sourceMap: isDebug,
                                    /* CSS Modules https://github.com/css-modules/css-modules */
                                    modules: true,
                                    localIdentName: isDebug ? "[name]-[local]-[hash:base64:5]" : "[hash:base64:5]",
                                    /* CSS Nano http://cssnano.co */
                                    minimize: isDebug ? false : minimizeCssOptions
                                }
                            },
                            /* Apply PostCSS plugins including autoprefixer */
                            {
                                loader: "postcss-loader",
                                options: {
                                    config: {
                                        path: resolvePath("./tools/postcss.config.js")
                                    }
                                }
                            }
                        ]
                    },
                    /* Exclude dev modules from production build */
                    ...(isDebug
                        ? []
                        : [
                            {
                                test: resolvePath("node_modules/react-deep-force-update/lib/index.js"),
                                loader: "null-loader"
                            }
                        ])
                ]
            },
            devtool: isDebug ? "cheap-module-inline-source-map" : "source-map"
        };
        return Config.default;
    }
};
