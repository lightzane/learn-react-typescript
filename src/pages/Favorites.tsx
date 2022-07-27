import { useContext } from 'react';
import { MeetupList } from '../components/meetups/MeetupList';
import { FavoritesContext } from '../store/favorites.context';

export const FavoritesPage = () => {

    const favoritesCtx = useContext(FavoritesContext);

    let content: JSX.Element;

    if (favoritesCtx.totalFavorites <= 0) {
        content = <p className='text-center'>Nothing here</p>;
    } else {
        content = <MeetupList meetupItems={favoritesCtx.favorites} />;
    }

    return (
        <section className='container'>
            <h2 className='header text-center my-3'>Favorites</h2>
            {content}
        </section>
    );
};