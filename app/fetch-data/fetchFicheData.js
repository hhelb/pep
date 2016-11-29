/**
 * Created by hasj on 21/11/2016.
 */
import { ficheService } from 'services';

const fetchFicheData = () => {
    return ficheService.getFiches()
        .then(res => res.data);
};

export default fetchFicheData;

