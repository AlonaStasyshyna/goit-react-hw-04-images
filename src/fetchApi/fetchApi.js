import axios from 'axios';

const key = '29902848-4caa0334233f13416a85444fb';
axios.defaults.baseURL =
  'https://pixabay.com/api/';

export const fetchApi = async (q, page, perPage) => {
  const config = {
    params: {
      key,
      q,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  };

  return await axios(config);
};