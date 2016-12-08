/**
 * Created by hasj on 06/12/2016.
 */
import { playlistService } from 'services';

const fetchPlaylistData = () => {
    return playlistService.getPlaylists()
        .then(res => res.data);
};

export default fetchPlaylistData;

