import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { MeetupList } from '../components/meetups/MeetupList';
import { API_URL } from '../shared/constants/api-url.constant';
import { IMeetupItem } from '../shared/interfaces/meetup-item.interface';

export const AllMeetupsPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [meetupData, setMeetupData] = useState<IMeetupItem[]>([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get<IMeetupItem[]>(API_URL)
            .then((res) => {
                setIsLoading(false);
                if (res.data) {
                    setMeetupData(res.data);
                }
            });
    }, [] /* <-- whatever is PUT in this array is a dependency, every change that it will detect, will trigger the useEffect again*/);

    if (isLoading) {
        return (
            <section className='container'>
                <h3 className='header text-center my-3'>Loading...</h3>
            </section>
        );
    }

    return (
        <section className='container'>
            <h2 className='header text-center my-3'>All Meetups</h2>
            <MeetupList meetupItems={meetupData} />
        </section>
    );
};