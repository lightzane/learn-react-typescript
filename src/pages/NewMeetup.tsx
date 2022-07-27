import { NewMeetupForm } from '../components/meetups/NewMeetupForm';

export const NewMeetupPage = () => {
    return (
        <section className='container'>
            <h2 className='header text-center my-3'>New Meetup</h2>
            <NewMeetupForm />
        </section>
    );
};