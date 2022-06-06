// import tokens from '../data/whitelist.json';

class BasicController {

  /**
   * GET /
   */
  async getHome(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('toto'));
    return res;
  }
}

export default new BasicController();
