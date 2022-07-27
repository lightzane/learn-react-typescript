import { MeetupList } from '../components/meetups/MeetupList';
import { IMeetupItem } from '../shared/interfaces/meetup-item.interface';

const DUMMY_DATA: IMeetupItem[] = [
    {
        id: (Date.now() / 1000).toString(16),
        title: 'This is the first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tea_Graden_Idukki.JPG/1280px-Tea_Graden_Idukki.JPG',
        address: 'Idukki District, Kerala',
        description: 'This is a first, amazing meetup which you definitely should not miss.'
    },
    {
        id: (Date.now() / 1000).toString(16),
        title: 'This is the first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Beautiful_Colosseum_in_Rome_.jpg/1200px-Beautiful_Colosseum_in_Rome_.jpg?20210122115511',
        address: 'Colosseum, Rome, Italy',
        description: 'Another amazing meetup which you definitely should not miss.'
    }
];

export const AllMeetupsPage = () => {
    return (
        <section className='container'>
            <h2 className='header text-center my-3'>All Meetups</h2>
            <MeetupList meetupItems={DUMMY_DATA} />
        </section>
    );
};