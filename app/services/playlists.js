/**
 * Created by hasj on 06/12/2016.
 */
import  axios  from 'axios';

const servicePlaylists =  {
    getPlaylists: () => axios.get('/playlists')
};

export default servicePlaylists;