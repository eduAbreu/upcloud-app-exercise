import React from 'react';
import Card from 'components/Card'; 

import styles from './styles';

const ServerData = ({ data }) => (
    <Card>
        <style jsx>{styles}</style>
        <Card.Head title="Servers" />
        <Card.Content>
            {
                data.map(({ uuid, state, title, hostname }) => (
                    <Card.Section key={`server-${uuid}`}>
                        <div className="server-content">
                            <div className={`server-state server-state--${state}`}></div>
                            <div className="server-data">
                                <p>{title}</p>
                                <span>{`Hostname: ${hostname}`}</span>
                            </div>
                        </div>
                    </Card.Section>
                ))
            }
        </Card.Content>
    </Card>
);

export default ServerData;