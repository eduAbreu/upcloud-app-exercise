import { request } from 'api/apiClient';

async function getServers() {
  const response = await request({ method: 'get', url: '/server' });
  console.log(response);
  const servers = response.data.servers.server;
  console.log(servers);
  return { data: servers, error: null, status: response.status };
}

export { getServers };
