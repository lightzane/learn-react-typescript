import React, { forwardRef } from 'react';

interface Props {
    label: string;
    type?: 'text' | 'url' | 'textarea';
}

export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(({ label, type }, ref) => {

    type = type || 'text';

    let field: JSX.Element;

    switch (type) {
        case 'textarea':
            field = <textarea className='form-control' id={label} rows={5} ref={ref as React.Ref<HTMLTextAreaElement>} required />;
            break;
        default:
            field = <input className='form-control' id={label} type={type} ref={ref as React.Ref<HTMLInputElement>} required />;
            break;
    }

    return (
        <div className="mb-3">
            <label className='form-label' htmlFor={label.toLowerCase()}>{label}</label>
            {field}
        </div>
    );
});