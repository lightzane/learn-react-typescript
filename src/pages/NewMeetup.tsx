import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NewMeetupForm } from '../components/meetups/NewMeetupForm';
import { API_URL } from '../shared/constants/api-url.constant';
import { IMeetupItem } from '../shared/interfaces/meetup-item.interface';

export const NewMeetupPage = () => {

    const navigate = useNavigate();

    function handleAddMeetup(meetupData: IMeetupItem): void {
        axios.post<IMeetupItem>(API_URL, meetupData)
            .then((res) => {
                if (res) {
                    // navigate('/', { replace: false }) // (will record the URL in history) -- allows User to go back to previous page
                    navigate('/', { replace: true }); // will NOT record the URL in history
                }
            });
    }

    return (
        <section className='container'>
            <h2 className='header text-center my-3'>New Meetup</h2>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </section>
    );
};