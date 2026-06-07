import axios from 'axios';

const BASE_URL =
  process.env.REACT_APP_API_URL;
const API = axios.create({   baseURL: `${BASE_URL}/api/projects`
, withCredentials: true });
const AUTH = axios.create({   baseURL: `${BASE_URL}/admin`
, withCredentials: true });
const CERT_API = axios.create({
    baseURL: `${BASE_URL}/api/certifications`,
  withCredentials: true,
});

const EXP_API = axios.create({
    baseURL: `${BASE_URL}/api/experience`
,
  withCredentials: true,
});


export const loginAdmin = (credentials) => AUTH.post('/login', credentials);
export const getProjects = () => API.get('/all').then(res => res.data);
export const getProjectById = (id) => API.get(`/${id}`).then(res => res.data);
export const addProject = (data) => API.post('/add', data);
export const updateProject = (id, data) => API.put(`/${id}`, data);
export const deleteProject = (id) => API.delete(`/${id}`);
export const checkAdminAuth = () =>
  AUTH.get("/check-auth");

export const logoutAdmin = () =>
  AUTH.post("/logout");

export const getCertifications = () =>
  CERT_API.get("/all").then((res) => res.data);

export const addCertification = (data) =>
  CERT_API.post("/add", data);

export const deleteCertification = (id) =>
  CERT_API.delete(`/${id}`);

export const getExperiences = () =>
  EXP_API.get("/all").then((res) => res.data);

export const addExperience = (data) =>
  EXP_API.post("/add", data);

export const deleteExperience = (id) =>
  EXP_API.delete(`/${id}`);