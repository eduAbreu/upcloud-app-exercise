import { request } from 'api/apiClient';

async function getStorage() {
  try {
    const response = await request({ method: 'get', url: '/storage' });
    const storages = response.data.storages.storage;

    const normalizedStorages = storages.reduce(
      (acc: Array<any>, storage: any) => {
        if (acc[storage['access']]) {
          acc[storage['access']].push(storage);
        } else {
          acc[storage['access']] = [storage];
        }
        return acc;
      },
      {},
    );

    return { data: normalizedStorages, error: null, status: response.status };
  } catch (error) {
    console.error(error);
    return { data: null, error, status: 500 };
  }
}

export { getStorage };
