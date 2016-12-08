/**
 * Created by hasj on 02/12/2016.
 */
import axios from 'axios';

// get the fiche with the given id
const serviceFiche = {
    getFiche: (id) => axios.get('/fiches/fiche/'+id)
};


export default serviceFiche;
