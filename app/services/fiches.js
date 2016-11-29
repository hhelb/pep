/**
 * Created by hasj on 21/11/2016.
 */
import axios from 'axios';

const serviceFiche = {
    getFiches: () => axios.get('/fiches')
};

export default serviceFiche;
