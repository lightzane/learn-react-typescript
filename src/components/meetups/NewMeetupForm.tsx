import React from 'react';
import { InputField } from '../InputField';
import { Card } from '../ui/Card';

export const NewMeetupForm: React.FC = () => {
    return (
        <Card className='w-50 m-auto p-3 pb-0'>
            <form className='card-body'>
                <InputField label='Meetup Title' />
                <InputField label='Meetup Image' type='url' />
                <InputField label='Address' />
                <InputField label='Description' type='textarea' />
                <div className="actions d-flex flex-row-reverse">
                    <button className='btn btn-primary'>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};