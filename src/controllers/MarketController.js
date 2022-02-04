class MarketController {
  constructor() {
    // super();
  }

  async getPrices(req, res) {
    return res.status(200).send("test");
  }

  async getTokens(req, res) {
    return res.status(200).send("test");
  }
}

export default new MarketController();
