// import tokens from '../data/whitelist.json';
class MarketController {
  /**
   * GET /api/coins/balance/:address
   */
  async getTokenBalance(req, res) {
    res.setHeader('Content-Type', 'application/json'); // res.end(JSON.stringify(tokens));

    return res;
  }
  /**
   * GET /api/balance/:address
   */


  async getCoinBalance(req, res) {
    if (!req.params.address) {
      return res.status(500);
    }

    res.setHeader('Content-Type', 'application/json'); // res.end(JSON.stringify(tokens));

    return res;
  }

}

export default new MarketController();