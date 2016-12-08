/**
 * Created by hasj on 21/11/2016.
 */
import axios from 'axios';

// ask the server the fiches list
const serviceFiches = {
    getFiches: () => axios.get('/fiches')
};

export default serviceFiches;
