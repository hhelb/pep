/**
 * Created by hasj on 21/11/2016.
 */
import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema({
    id: String,
    text: String
});

export default mongoose.model('Playlist',PlaylistSchema );