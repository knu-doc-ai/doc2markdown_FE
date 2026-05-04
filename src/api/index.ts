import api from './instance';

// Example API Service structure
export const exampleApi = {
  getSample: () => api.get('/sample'),
};

export default api;
