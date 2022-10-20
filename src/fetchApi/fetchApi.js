import axios from 'axios';

const key = '29902848-4caa0334233f13416a85444fb';
axios.defaults.baseURL =
  'https://pixabay.com/api/';

export const fetchApi = async (q, page) => {
  const config = {
    params: {
      key,
      q,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  };

  return await axios(config);
};