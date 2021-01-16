import React from "react";
import Wrapper from 'components/Wrapper';
import Card from 'components/Card'; 
import css from 'styled-jsx/css';

import { getStorage } from '../api/storage';

const styles = css`
    @import 'rem';
    @import 'color';

    .storage-title {
        text-transform: capitalize;
        font-size: rem(18px);
    }

    .storage-size {
        padding-left: rem(5px);
        color: color(grey, disabled-text);
    }
`;

export const getStaticProps= async () => {
    const storagesData = await getStorage();

    const normalizedStorages = storagesData.data.reduce((acc, storage) => {
        if(acc[storage['access']]) {
            acc[storage['access']].push( storage )
        } else {
            acc[storage['access']] = [ storage ]
        }
        return acc;
    }, {});
    
    return {
      props: {
        normalizedStorages
      }
    }
}

const Servers = ({ normalizedStorages }) => (
    <Wrapper>
        <div style={{ marginTop: '1rem' }}>
            <Card>
                <style jsx>{styles}</style>
                <Card.Head title="Storages" />
                <Card.Content>
                    {
                        Object.keys(normalizedStorages).map((access) => (                                
                            <ul key={`storage-${access}`}>
                                <h4 className="storage-title">{access}</h4>
                                {
                                    normalizedStorages[access].map(({ uuid, title, size }) => (                                
                                        <li key={`storage-${uuid}`}>
                                            {title}
                                            <span className="storage-size">{`(${size} GB)`}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </Card.Content>
            </Card>
        </div>
    </Wrapper>
);

export default Servers;