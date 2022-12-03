import apiConfig from '../config';

import Axios from '@/libs/axios';

class ItemApi {
  #link = apiConfig.apiUrls.items

  getItems = () => Axios.get(this.#link);
}

export default new ItemApi()
