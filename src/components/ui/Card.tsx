import React from 'react';
import './Card.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={'card border-rounded overflow-hidden shadow-sm m-2 ' + className}>
            {children}
        </div>
    );
};