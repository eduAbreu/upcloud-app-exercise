import { request } from 'api/apiClient';

async function getServers() {
  try {
    const response = await request({ method: 'get', url: '/server' });
    const servers = response.data.servers.server;
    return { data: servers, error: null, status: response.status };
  } catch (error) {
    return { data: null, error, status: 500 };
  }  
}

export { getServers };
