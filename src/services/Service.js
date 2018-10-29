import Axios from '../plugins/axios';

class Service {
  constructor(path) {
    this.path = path;
    this.$axios = Axios;
  }

  getUrl() {
    return `/api/${this.path}`;
  }
}

export default Service;
