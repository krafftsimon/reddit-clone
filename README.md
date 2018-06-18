# React / Redux Boilerplate
Simple React / Redux boilerplate with webpack 4, babel, redux-thunk, and axios.
```Shell
git clone https://github.com/krafftsimon/react-boilerplate.git
cd react-boilerplate
npm install
```

# Features
- sass (scss)
- development server
- hot module replacement
- minification and tree shaking for production
- source maps for both dev and prod
- Redux
- Jest with Enzyme
- ESLint (Airbnb config)
- css autoprefixer
- cache busting

# Commands
## Development
```Shell
npm run start
```
Starts the development server on port 3000 with Hot Module Replacement enabled.

To access the server through LAN, change the follow line in webpack.dev.js
```diff
devServer: {
  contentBase: './build',
  open: true,
-  host: 'localhost',
+  host: '0.0.0.0',
  port: 3000,
  hot: true,
  historyApiFallback: true,
},
```

## Production
```Shell
npm run build
```
Builds the application for development. Applies minification and tree shaking.
Generates a bundle and a source map in the build folder.

## Tests
```Shell
npm run test
```

## Analyze bundle.js
Install source-map-explorer
```Shell
npm install -g source-map-explorer
```
Analyze:
```Shell
source-map-explorer main.[hash].js main.[hash].js.map
```

## Enable ESLint
Add the following line to .eslintrc file, to enable the Airbnb configuration.
Feel free to use any other configuration.
```diff
{
  "parser": "babel-eslint",
+ "extends": "airbnb",
  "rules": {
    "linebreak-style": 0
  },
  "env": {
    "browser": true
  }
}
```
