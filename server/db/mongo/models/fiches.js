/**
 * Created by hasj on 21/11/2016.
 */
import mongoose from 'mongoose';

const FicheSchema = new mongoose.Schema({
    id: String,
    text: String,
    name: String
});
export default mongoose.model('Fiche', FicheSchema);

