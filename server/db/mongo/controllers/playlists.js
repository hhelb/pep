/**
 * Created by hasj on 21/11/2016.
 */
import Playlist from '../models/playlists';

/**
 * List
 */
export function all(req, res) {
    Playlist.find({}).exec((err, playlists ) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }

        return res.json(playlists);
    });
}
export default{all}