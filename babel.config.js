module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        cwd: "packagejson",
        alias: {
          actions: './src/actions',
          api: './src/api',
          services: './src/services',
          components: './src/components',
          constants: './src/constants',
          constraints: './src/constraints',
          screens: './src/screens',
          hooks: './src/hooks',
          locale: './src/locale',
          reducers: './src/reducers',
          selectors: './src/selectors',
          store: './src/store',
          utils: './src/utils',
          navigators: './src/navigators',
        },
      },
    ],
  ],
};
