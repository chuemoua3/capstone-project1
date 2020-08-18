import axios from 'axios';

const SONGS_REST_API_URL = 'http://localhost:8081/api/songs';

class SongService {
    getSongs(){
       return axios.get(SONGS_REST_API_URL);
    }
}

export default new SongService();