import mysqlConnection from 'mysql2/promise.js';


const properties = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'rest-api'
};

export const pool = mysqlConnection.createPool(properties);
