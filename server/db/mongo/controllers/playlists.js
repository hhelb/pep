/**
 * Created by hasj on 21/11/2016.
 */
import Playlist from '../models/playlists';
import Fiche from '../models/fiches';
/**
 * List
 */
export function all(req, res) {
    Playlist.find().populate({
        path:'fiches', //name of the field
        model: 'Fiche' // the object I would like to get
    })
        .exec((err, playlists ) => {
        if (err) {
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data');
        }
        return res.json(playlists);
    });
}

export function add(req, res){
    let playlist = new Playlist({
        name: req.body.name,
        fiches: req.body.fiches
    });
    return playlist.save((err) => {
        if(err){return res.status(400).send("playlist not created");}
        return res.status(200).send("Playlist created");
    })
}
export default{
    all,
    add
}