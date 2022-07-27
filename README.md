# Learn React Typescript

Learning React (https://reactjs.org/) with Typescript (https://www.typescriptlang.org/)

```
npx create-create-app <app-name> --template typescript
```

## Browser Router

https://reactrouter.com/docs/en/v6/getting-started/overview

- `index.tsx`
- `App.tsx`
- `src/pages/**/*.tsx`

```
npm install react-router-dom --save
```

**index.tsx**

```tsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

**App.tsx**

```tsx
import { Route, Routes } from 'react-router-dom';
import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from './pages';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AllMeetupsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
```

## Adding Links and Navigations

`src/components/layout/MainNavigation.tsx`

```tsx
import { NavLink } from 'react-router-dom';

export function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
```

Update **App.tsx** to integrate `MainNavigation`

```diff
 export function App() {
   return (
+    <>
+      <MainNavigation />
       <Routes>
         <Route path='/' element={<AllMeetupsPage />} />
         <Route path='/new-meetup' element={<NewMeetupPage />} />
         <Route path='/favorites' element={<FavoritesPage />} />
       </Routes>
+    </>
   );
 }
```

## Adding CSS Modules

(Global) `<name>.css` or if using **Sass**: `<name>.scss`

(Scope) `<name>.module.css` or if using **Sass**: `<name>.module.scss`

Adding the word module in the filename as show above will scope the styles and will not be global. See: **MainNavigation.module.scss**

```scss
// <name>.module.scss
.header {
  color: red;
}
```

```tsx
import anyVarNameClass from '<name>.module.scss';
<header className={anyVarNameClass.header} />;
```

## Update AllMeetups

pages/**AllMeetups.tsx**

## Adding Props Children

- components/ui/**Card.tsx**
- components/meetups/**MeetupItem.tsx**

**Card.tsx**

```tsx
import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={'card border-rounded overflow-hidden shadow-sm m-2 ' + className}>
            {children}
        </div>
    );
};
```

**MeetupItem.tsx**

```tsx
export const MeetupItem: React.FC<Props> = ({ meetupItem }) => {
    return (
        <Card className='w-25'>
            <div className='card-body'>
              <p>This will be displayed as children inside that <b>Card</b> component</p>
            </div>
        </Card>
    );
};
```

## Getting User and Handling Form submission

`forwardRef` and `useRef`

- components/meetups/**NewMeetupForm.tsx**

Sample:

```tsx
import { useRef } from 'react'

// Parent
export const Parent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>()
  // console.log(inputRef.current.value)
  const childInputRef = useRef<HTMLInputElement>()
  // console.log(childInputRef.current.value)
  return (
    <div>
      <input type='text' ref={inputRef} />
      <ChildField ref={childInputRef} />
    </div>
  )
}

interface Props { example?: string }
// Child
export const ChildField = forwardRef<HTMLInputElement, Props>((props, ref)=>{
  return (<input type='text' ref={ref} />)
})
```

## Navigate Programatically

- src/pages/**NewMeetup.tsx**

```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()
navigate('/', { replace: true }); // will NOT record the URL in history
```

## useEffect

src/pages/**AllMeetups.tsx**

```tsx
useEffect(()=>{
  // init API and update states
  // when states are changed, React Components will execute again
  // which can lead to infinite loop
  // Solution: useEffect()
  // it will trigger conditionally
}, []) // <-- the array here are dependencies (you can put state variables etc).
  // When dependencies are changed, it will trigger useEffect again
  // when empty, useEffect will only trigger once
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
