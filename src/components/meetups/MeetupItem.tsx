import React from 'react';
import { IMeetupItem } from '../../shared/interfaces/meetup-item.interface';
import { Card } from '../ui/Card';

interface Props {
    meetupItem: IMeetupItem;
}

export const MeetupItem: React.FC<Props> = ({ meetupItem }) => {
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
                    <button className='btn btn-outline-primary'>
                        <span className='bi bi-star me-2'></span>
                        Add to Favorites
                    </button>
                </div>
            </div>
        </Card>
    );
};