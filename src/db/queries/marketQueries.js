import getDatabase from '../db/mongo';


/**
 * Query DB remove and insert many document in prices collection.
 *
 * @returns {Promise}
 */
export async function updatePrices(pricesList){
    const db = await getDatabase();
    return;
}

/**
 * Query DB get all document in prices collection.
 *
 * @returns {Promise}
 */
export async function getPrices(){
    const db = await getDatabase();
}


/**
 * Query specific price document in prices collection.
 *
 * @returns {Promise}
 */
 export async function getPrices(){
    const db = await getDatabase();
}