import axios from 'axios';
import { authStore } from '@/store';
import { useToast } from 'vue-toastification'
import router from '@/router';
const createAxiosInstance = (baseURL) => {
  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      const store = authStore();
      const token = store.getToken ? store.getToken : null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
    
  );
  

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
      function (error) {
        // Des exemples d'interceptions de requêtes
        if (error.response.status == 401) {
          console.log("Vous n'avez pas les permissions requises");
          const store = authStore();
          store.logout();

          // useToast().error('Veuillez vous connecter pour continuer')
        } else if (error.response.status == 404) {
          console.log("La ressource demandée n'a pas été trouvée");
        }
        return Promise.reject(error);
      }
  );

  return axiosInstance;
};

// const axiosInstance = createAxiosInstance('http://51.68.119.154:8098/api/');
const axiosInstance = createAxiosInstance('https://mcfsp-uac.portedevie.com/api/');
// const axiosInstance = createAxiosInstance('http://127.0.0.1:8001/api/');
export default axiosInstance;
