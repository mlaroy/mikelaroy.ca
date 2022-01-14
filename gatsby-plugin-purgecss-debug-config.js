{
  context: '/Users/mlaroy/Sites/mikelaroy',
  entry: { app: '/Users/mlaroy/Sites/mikelaroy/.cache/production-app' },
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js',
    path: '/Users/mlaroy/Sites/mikelaroy/public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        include: [Function: include],
        type: 'javascript/auto',
        use: [
          {
            options: {
              stage: 'build-javascript',
              configFile: true,
              compact: true
            },
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/utils/babel-loader.js'
          }
        ]
      },
      {
        test: /\.ya?ml/,
        use: [
          {
            options: {},
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/json-loader/index.js'
          },
          {
            options: {},
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/yaml-loader/index.js'
          }
        ]
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/url-loader/dist/cjs.js',
            options: { limit: 10000, name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/url-loader/dist/cjs.js',
            options: { limit: 10000, name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/url-loader/dist/cjs.js',
            options: { limit: 10000, name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/
      },
      {
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/file-loader/dist/cjs.js',
            options: { name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.pdf$/
      },
      {
        test: '/Users/mlaroy/Sites/mikelaroy/node_modules/@reach/router/es/index.js',
        type: 'javascript/auto',
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/utils/reach-router-add-basecontext-export-loader.js'
          }
        ]
      },
      {
        test: /\.(js|mjs)$/,
        exclude: [Function: exclude],
        type: 'javascript/auto',
        use: [
          {
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                '/Users/mlaroy/Sites/mikelaroy/node_modules/babel-preset-gatsby/dependencies.js'
              ],
              sourceMaps: false,
              cacheIdentifier: 'build-javascript---gatsby-dependencies@0.2.26'
            },
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1,
                  modules: true
                }
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js',
                options: { sourceMap: false }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                options: {},
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-postcss/node_modules/postcss-loader/src/index.js',
                options: { sourceMap: false }
              }
            ]
          },
          {
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  modules: true,
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/postcss-loader/lib/index.js',
                options: {
                  ident: 'postcss-1',
                  sourceMap: false,
                  plugins: [Function: plugins],
                  browsers: undefined
                }
              }
            ],
            test: /\.module\.css$/
          },
          {
            use: [
              {
                options: { hmr: false },
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/css-loader/index.js',
                options: {
                  sourceMap: false,
                  camelCase: 'dashesOnly',
                  localIdentName: '[name]--[local]--[hash:base64:5]',
                  importLoaders: 1
                }
              },
              {
                loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/postcss-loader/lib/index.js',
                options: {
                  ident: 'postcss-2',
                  sourceMap: false,
                  plugins: [Function: plugins],
                  browsers: undefined
                }
              }
            ],
            test: /\.css$/
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-purgecss/loader.js',
            options: {
              content: [
                '/Users/mlaroy/Sites/mikelaroy/src/**/!(*.d).{ts,js,jsx,tsx}',
                '/Users/mlaroy/Sites/mikelaroy/node_modules/prismjs/themes/prism-okaidia.css'
              ],
              rejected: true,
              printRejected: true,
              printAll: false,
              debug: true,
              ignore: [],
              tailwind: true,
              develop: true,
              whitelist: [
                'html',
                'body',
                '.article-body .gatsby-resp-image-wrapper'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    IgnorePlugin {
      options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
      checkIgnore: [Function: bound checkIgnore]
    },
    DefinePlugin {
      definitions: {
        'process.env': '{}',
        'process.env.NODE_ENV': '"production"',
        'process.env.PUBLIC_DIR': '"/Users/mlaroy/Sites/mikelaroy/public"',
        'process.env.BUILD_STAGE': '"build-javascript"',
        'process.env.CYPRESS_SUPPORT': undefined,
        'process.env.GATSBY_LOGGER': '"ink"',
        'process.env.GATSBY_BUILD_STAGE': '"build-javascript"',
        __BASE_PATH__: '""',
        __PATH_PREFIX__: '""',
        __ASSET_PREFIX__: '""'
      }
    },
    MiniCssExtractPlugin {
      options: {
        filename: '[name].[contenthash].css',
        moduleFilename: [Function: moduleFilename],
        ignoreOrder: false,
        chunkFilename: '[name].[contenthash].css'
      }
    },
    GatsbyWebpackStatsExtractor {
      plugin: { name: 'GatsbyWebpackStatsExtractor' },
      options: {}
    },
    DefinePlugin {
      definitions: { __MANIFEST_PLUGIN_HAS_LOCALISATION__: undefined }
    }
  ],
  target: 'web',
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader: {
    modules: [
      '/Users/mlaroy/Sites/mikelaroy/node_modules',
      '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/loaders',
      'node_modules'
    ],
    plugins: [ { apply: [Function: nothing] } ]
  },
  resolve: {
    extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ],
    alias: {
      'gatsby$': '/Users/mlaroy/Sites/mikelaroy/.cache/gatsby-browser-entry.js',
      '@babel/runtime': '/Users/mlaroy/Sites/mikelaroy/node_modules/@babel/runtime',
      'core-js': '/Users/mlaroy/Sites/mikelaroy/node_modules/core-js',
      'react-hot-loader': '/Users/mlaroy/Sites/mikelaroy/node_modules/react-hot-loader',
      'react-lifecycles-compat': '/Users/mlaroy/Sites/mikelaroy/.cache/react-lifecycles-compat.js',
      'create-react-context': '/Users/mlaroy/Sites/mikelaroy/.cache/create-react-context.js',
      '@reach/router': '/Users/mlaroy/Sites/mikelaroy/node_modules/@reach/router/es'
    },
    plugins: [
      { apply: [Function: nothing] },
      { apply: [Function: nothing] },
      {
        apply: [Function: nothing],
        makePlugin: [Function (anonymous)],
        moduleLoader: [Function (anonymous)],
        topLevelLoader: { apply: [Function: nothing] },
        bind: [Function (anonymous)],
        tsLoaderOptions: [Function (anonymous)],
        forkTsCheckerOptions: [Function (anonymous)]
      },
      GatsbyThemeComponentShadowingResolverPlugin {
        cache: {},
        themes: [
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/internal-plugins/dev-404-page',
            themeName: 'dev-404-page'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/internal-plugins/load-babel-config',
            themeName: 'load-babel-config'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/internal-plugins/internal-data-bridge',
            themeName: 'internal-data-bridge'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/internal-plugins/prod-404',
            themeName: 'prod-404'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing',
            themeName: 'webpack-theme-component-shadowing'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-react-helmet',
            themeName: 'gatsby-plugin-react-helmet'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-postcss',
            themeName: 'gatsby-plugin-postcss'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-tailwindcss',
            themeName: 'gatsby-plugin-tailwindcss'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-styled-components',
            themeName: 'gatsby-plugin-styled-components'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-source-filesystem',
            themeName: 'gatsby-source-filesystem'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-source-filesystem',
            themeName: 'gatsby-source-filesystem'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-transformer-sharp',
            themeName: 'gatsby-transformer-sharp'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-sharp',
            themeName: 'gatsby-plugin-sharp'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-manifest',
            themeName: 'gatsby-plugin-manifest'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-transformer-remark',
            themeName: 'gatsby-transformer-remark'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-remark-images',
            themeName: 'gatsby-remark-images'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/@weknow/gatsby-remark-twitter',
            themeName: '@weknow/gatsby-remark-twitter'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-remark-prismjs',
            themeName: 'gatsby-remark-prismjs'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-catch-links',
            themeName: 'gatsby-plugin-catch-links'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-purgecss',
            themeName: 'gatsby-plugin-purgecss'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-google-analytics',
            themeName: 'gatsby-plugin-google-analytics'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-feed',
            themeName: 'gatsby-plugin-feed'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-netlify',
            themeName: 'gatsby-plugin-netlify'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy',
            themeName: 'default-site-plugin'
          },
          {
            themeDir: '/Users/mlaroy/Sites/mikelaroy/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          }
        ],
        projectRoot: '/Users/mlaroy/Sites/mikelaroy',
        extensions: [ '.mjs', '.js', '.jsx', '.wasm', '.json' ]
      }
    ]
  },
  node: { __filename: true },
  optimization: {
    runtimeChunk: { name: 'webpack-runtime' },
    moduleIds: 'hashed',
    splitChunks: {
      name: false,
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        commons: { name: 'commons', chunks: 'all', minChunks: 2.5 },
        react: {
          name: 'commons',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/
        },
        styles: {
          name: 'styles',
          test: /\.(css|scss|sass|less|styl)$/,
          chunks: 'all',
          enforce: true,
          priority: 10
        }
      }
    },
    minimizer: [
      TerserPlugin {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: [Function: chunkFilter],
          warningsFilter: [Function: warningsFilter],
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: [Function: cacheKeys],
          parallel: true,
          include: undefined,
          exclude: /\.min\.js/,
          minify: undefined,
          terserOptions: {
            output: { ecma: 5 },
            ie8: false,
            mangle: { safari10: true },
            parse: { ecma: 8 },
            compress: { ecma: 5 }
          }
        }
      },
      OptimizeCssAssetsWebpackPlugin {
        pluginDescriptor: { name: 'OptimizeCssAssetsWebpackPlugin' },
        options: {
          assetProcessors: [
            {
              phase: 'compilation.optimize-chunk-assets',
              regExp: /\.css(\?.*)?$/i,
              processor: [Function: processor]
            }
          ],
          canPrint: undefined,
          assetNameRegExp: /\.css(\?.*)?$/i,
          cssProcessor: [Function: creator] { process: [Function (anonymous)] },
          cssProcessorOptions: {},
          cssProcessorPluginOptions: {
            preset: [
              'default',
              {
                svgo: {
                  full: true,
                  plugins: [
                    {
                      removeUselessDefs: true,
                      addAttributesToSVGElement: true,
                      addClassesToSVGElement: true,
                      cleanupAttrs: true,
                      cleanupEnableBackground: true,
                      cleanupIDs: true,
                      cleanupListOfValues: true,
                      cleanupNumericValues: true,
                      collapseGroups: true,
                      convertColors: true,
                      convertPathData: true,
                      convertStyleToAttrs: true,
                      convertTransform: true,
                      inlineStyles: true,
                      mergePaths: true,
                      minifyStyles: true,
                      moveElemsAttrsToGroup: true,
                      moveGroupAttrsToElems: true,
                      prefixIds: true,
                      removeAttributesBySelector: true,
                      removeAttrs: true,
                      removeComments: true,
                      removeDesc: true,
                      removeDimensions: true,
                      removeDoctype: true,
                      removeEditorsNSData: true,
                      removeElementsByAttr: true,
                      removeEmptyAttrs: true,
                      removeEmptyContainers: true,
                      removeEmptyText: true,
                      removeHiddenElems: true,
                      removeMetadata: true,
                      removeNonInheritableGroupAttrs: true,
                      removeOffCanvasPaths: true,
                      removeRasterImages: true,
                      removeScriptElement: true,
                      removeStyleElement: true,
                      removeTitle: true,
                      removeUnknownsAndDefaults: true,
                      removeUnusedNS: true,
                      removeUselessStrokeAndFill: true,
                      removeXMLNS: true,
                      removeXMLProcInst: true,
                      reusePaths: true,
                      sortAttrs: true
                    }
                  ]
                }
              }
            ]
          }
        },
        phaseAssetProcessors: {
          'compilation.optimize-chunk-assets': [
            {
              phase: 'compilation.optimize-chunk-assets',
              regExp: /\.css(\?.*)?$/i,
              processor: [Function: processor]
            }
          ],
          'compilation.optimize-assets': [],
          emit: []
        },
        deleteAssetsMap: {}
      }
    ]
  }
}