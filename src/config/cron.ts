import cron from "node-cron";
// import fetchPrices from '../services/marketService';
import getDatabase from '../db/mongo';

/**
 * Update prices in Database 
 * 
 */
cron.schedule("1 * * * * *", async () => {
    // const priceList = await fetchPrices();
    const db = await getDatabase();
    const db_prices = db.collection("prices");
    // db_prices.deleteMany();
    const options = { ordered: true };
    // const result = await db_prices.insertMany(priceList, options);
    // console.log(`${result.insertedCount} documents were inserted`);
});

export default cron;