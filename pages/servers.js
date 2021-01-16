import React from "react";
import Wrapper from 'components/Wrapper';
import ServerData from 'components/ServerData';

import { getServers } from '../api/server';


export const getStaticProps= async () => {
    const serversData = await getServers();
    
    return {
      props: {
        serversData
      }
    }
}

const Servers = ({ serversData }) => {
    return (
        <Wrapper>
            <div style={{ marginTop: '1rem' }}>
                <ServerData data={serversData.data} />
            </div>
        </Wrapper>
    )
};

export default Servers;