const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  tableName: process.env.DYNAMODB_CUSTOMER_TABLE,
};