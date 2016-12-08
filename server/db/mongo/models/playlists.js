/**
 * Created by hasj on 21/11/2016.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    name: String,
    fiches: [{type: Schema.ObjectId, ref: 'FicheSchema'}]
});

export default mongoose.model('Playlist',PlaylistSchema );