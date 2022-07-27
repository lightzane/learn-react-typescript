import React from 'react';
import { IMeetupItem } from '../../shared/interfaces/meetup-item.interface';
import { MeetupItem } from './MeetupItem';

interface Props {
    meetupItems: IMeetupItem[];
}

export const MeetupList: React.FC<Props> = ({ meetupItems }) => {
    return (
        <div className='d-flex justify-content-center flex-wrap align-items-center'>
            {meetupItems.map(meetup => <MeetupItem key={meetup.id} meetupItem={meetup} />)}
        </div>
    );
};