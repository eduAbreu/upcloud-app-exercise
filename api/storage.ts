import { request } from 'api/apiClient';

async function getStorage() {
  const response = await request({ method: 'get', url: '/storage' });
  console.log(response)
//   const servers = response.data.servers.server;
//   return { data: servers, error: null, status: response.status };
  return { data: [], error: null, status: "ok" };
}

export { getStorage };
