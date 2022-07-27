import React, { useRef } from 'react';
import { IMeetupItem } from '../../shared/interfaces/meetup-item.interface';
import { InputField } from '../InputField';
import { Card } from '../ui/Card';
import classes from './NewMeetupForm.module.scss';

export const NewMeetupForm: React.FC = () => {

    const inputTitleRef = useRef<HTMLInputElement>();
    const inputImageRef = useRef<HTMLInputElement>();
    const inputAddressRef = useRef<HTMLInputElement>();
    const inputDescriptionRef = useRef<HTMLTextAreaElement>();

    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const meetupItem: IMeetupItem = {
            id: (Math.floor(Date.now() / 1000)).toString(16),
            title: inputTitleRef.current?.value,
            image: inputImageRef.current?.value,
            address: inputAddressRef.current?.value,
            description: inputAddressRef.current?.value
        };

        console.log(meetupItem);
    }

    return (
        <Card className={'m-auto p-3 pb-0 ' + classes.newMeetupForm}>
            <form className='card-body' onSubmit={handleSubmit} >
                <InputField label='Meetup Title' ref={inputTitleRef} />
                <InputField label='Meetup Image' type='url' ref={inputImageRef} />
                <InputField label='Address' ref={inputAddressRef} />
                <InputField label='Description' type='textarea' ref={inputDescriptionRef} />
                <div className="actions d-flex flex-row-reverse">
                    <button className='btn btn-primary'>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};