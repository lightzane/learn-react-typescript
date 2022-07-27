import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './components/layout/MainNavigation';
import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from './pages';


export function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </>
  );
}
