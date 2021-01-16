import React from "react";
import { getServers } from '../api/server';

export const getStaticProps= async () => {
    const serversData = await getServers();

    console.log(serversData);
    return {
      props: {
        serversData
      }
    }
}

const Servers = ({ serversData }) => {
    const host = "name";
    return (
        <div>
            <div>
                Servers
            </div>
            <div>
                <div>server status</div>
                <div>
                    <p>server</p>
                    <span>{`Hostname: ${host}`}</span>
                </div>
            </div>
        </div>
    )
};

export default Servers;