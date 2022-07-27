# Learn React Typescript

Learning React (https://reactjs.org/) with Typescript (https://www.typescriptlang.org/)

```
npx create-create-app <app-name> --template typescript
```

## Install

```
npm i bootstrap@5.2.0
```

## Set Defaults

`src/style.scss`

```scss
@import './scss/custom-bootstrap';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css');

html,
body,
#root {
  font-size: 1rem;
  height: 100%;
  // font-family: var(--font-family); // primeflex
  // background-color: var(--surface-ground); // primeflex
  // color: var(--text-color); // primeflex
  padding: 0;
  margin: 0;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eff3f8;
}
```

### Custom Bootstrap

https://getbootstrap.com/docs/5.2/customize/sass/

`src/scss/custom-bootstrap.scss`

```scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import '../../node_modules/bootstrap/scss/functions';

// 2. Include any default variable overrides here
@import './variables';

// 3. Include remainder of required Bootstrap stylesheets
@import '../../node_modules/bootstrap/scss/variables';

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import '../../node_modules/bootstrap/scss/maps';
@import '../../node_modules/bootstrap/scss/mixins';
@import '../../node_modules/bootstrap/scss/root';

// 6. Optionally include any other parts as needed
@import '../../node_modules/bootstrap/scss/utilities';
@import '../../node_modules/bootstrap/scss/reboot';
@import '../../node_modules/bootstrap/scss/buttons';
@import '../../node_modules/bootstrap/scss/containers';
@import '../../node_modules/bootstrap/scss/grid';

@import '../../node_modules/bootstrap/scss/card';
@import '../../node_modules/bootstrap/scss/forms/form-control';
@import '../../node_modules/bootstrap/scss/forms/labels';
@import '../../node_modules/bootstrap/scss/forms/form-select';
@import '../../node_modules/bootstrap/scss/badge';
@import '../../node_modules/bootstrap/scss/helpers/color-bg';

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import '../../node_modules/bootstrap/scss/utilities/api';

// 8. Add additional custom code here
@import './maps';
@import './mixins';
@import './custom-button';

textarea.form-control {
  resize: none;
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
