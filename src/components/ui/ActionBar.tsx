import React from 'react';

interface ActionBarProps {
    title: string;
    children: React.ReactNode;
}

const ActionBar = ({ title, children }: ActionBarProps) => {
    return (
        <div
            style={{
                padding: '1rem',
            }}
        >
            <div
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                }}
            >{title}</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >{children}</div>
        </div>
    )
}

export default ActionBar