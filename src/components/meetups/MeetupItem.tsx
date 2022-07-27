import React from 'react';
import { useContext } from 'react';
import { IMeetupItem } from '../../shared/interfaces/meetup-item.interface';
import { FavoritesContext } from '../../store/favorites.context';
import { Card } from '../ui/Card';

interface Props {
    meetupItem: IMeetupItem;
}

export const MeetupItem: React.FC<Props> = ({ meetupItem }) => {

    const favoritesCtx = useContext(FavoritesContext);

    const isItemFavorite = favoritesCtx.isFavorite(meetupItem._id);

    let btnFavClass: string;
    let icoFavClass: string;
    let txtFavClass: string;

    if (isItemFavorite) {
        btnFavClass = 'btn-primary';
        icoFavClass = 'bi-star-fill';
        txtFavClass = 'Favorite';
    } else {
        btnFavClass = 'btn-outline-primary';
        icoFavClass = 'bi-star';
        txtFavClass = 'Add to Favorites';
    }

    function removeFavorite() {
        if (isItemFavorite) {
            favoritesCtx.removeFavorite(meetupItem._id);
        } else {
            favoritesCtx.addFavorite(meetupItem);
        }
    }

    return (
        <Card className='w-25'>
            <img className='card-img-top' src={meetupItem.image} alt={meetupItem.title} width='100%' />
            <div className="card-body">
                <div>
                    <h4>{meetupItem.title}</h4>
                    <address className='text-primary'>{meetupItem.address}</address>
                    <hr />
                    <p>{meetupItem.description}</p>
                </div>
                <div className='text-center'>
                    <button className={'btn ' + btnFavClass} onClick={removeFavorite}>
                        <span className={'bi me-2 ' + icoFavClass}></span>
                        {txtFavClass}
                    </button>
                </div>
            </div>
        </Card>
    );
};