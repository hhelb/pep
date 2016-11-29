import { voteService } from 'services';

const fetchvoteData = () => {
  return voteService.getTopics()
      .then(res => res.data);
};

export default fetchvoteData;

