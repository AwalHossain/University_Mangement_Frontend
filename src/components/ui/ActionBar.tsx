import React from 'react';

interface ActionBarProps {
    title: string;
    children: React.ReactNode;
}

const ActionBar = ({ title, children }: ActionBarProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div

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
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >{children}</div>
            </div>
        </div>
    )
}

export default ActionBar