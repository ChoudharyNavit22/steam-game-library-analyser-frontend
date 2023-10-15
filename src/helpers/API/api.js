import { axiosInstance, errorHelper, generateSuccess } from './axiosInstance';

class API {
  async getSteamUser(id) {
    return axiosInstance
      .get(`steam/user/${id}`)
      .then((response) => {
        return generateSuccess(response.data.data);
      })
      .catch((error) => errorHelper(error));
  }
  async getSteamUserGames(id) {
    return axiosInstance
      .get(`steam/user/${id}/games?liveUpdate=false`)
      .then((response) => {
        return generateSuccess(response.data.data);
      })
      .catch((error) => errorHelper(error));
  }
}
const instance = new API();
export default instance;
