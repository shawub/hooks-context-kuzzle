import { BaseController } from "kuzzle-sdk";

class GSS extends BaseController {
  constructor (kuzzle) {
    super(kuzzle, 'jwtauth/customer');
  }
  async login (gss) {
    const apiRequest = {
      action: 'verify',
      token: gss
    };
    const response = await this.query(apiRequest);
    return response.result;
  }
}

export default GSS