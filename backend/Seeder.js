const data = require('./Data/MockData.json')
const DatabaseConnection = require('./Database/Database');
const dotenv = require('dotenv');
const FashionProduct = require('./Models/FashionProductModel');

dotenv.config()
DatabaseConnection()

const ImportData = async () =>
{
    await FashionProduct.deleteMany()
    FashionProduct.insertMany(data , (err , result) =>
    {
        console.log(result)
        process.exit()
    })
}

ImportData()
