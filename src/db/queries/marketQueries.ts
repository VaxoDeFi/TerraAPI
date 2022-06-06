import getDatabase from '../mongo';


/**
 * Query DB remove and insert many document in prices collection.
 *
 * @returns {Promise}
 */
export const updatePrices = async (): Promise<any> => {
    const db = await getDatabase();
    return;
}

/**
 * Query DB get all document in prices collection.
 *
 * @returns {Promise}
 */
export const getPrices = async (): Promise<any> => {
    const db = await getDatabase();
}


/**
 * Query specific price document in price collection.
 *
 * @returns {Promise}
 */
 export const getPrice = async (): Promise<any> => {
    const db = await getDatabase();
}