import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/projects', withCredentials: true });
const AUTH = axios.create({ baseURL: 'http://localhost:5000/admin', withCredentials: true });

export const loginAdmin = (credentials) => AUTH.post('/login', credentials);
export const getProjects = () => API.get('/all').then(res => res.data);
export const getProjectById = (id) => API.get(`/${id}`).then(res => res.data);
export const addProject = (data) => API.post('/add', data);
export const updateProject = (id, data) => API.put(`/${id}`, data);
export const deleteProject = (id) => API.delete(`/${id}`);
