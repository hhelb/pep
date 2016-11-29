import axios from 'axios';

const serviceTopic = {
  getTopics: () => axios.get('/topic')
};

export default serviceTopic;

