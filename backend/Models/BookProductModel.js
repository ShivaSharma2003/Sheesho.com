const mongoose = require('mongoose');

const BookSchema =  mongoose.Schema(
    {
        Title : String,
        Url : String,
        Price : String,
        ISBN_10 : String,
        ISBN : String,
        Author : String,
        Format : String,
        Pages : String,
        Publisher : String,
        Language : String,
        Weight : String,
        Dimensions : String,
        Case_Pack : Number,
        Raw_Description : String,
        Availability : String,
        Item_Condition : String,
        Images : String,
        Scraped_At : Date,
        Uniq_Id : String,
    }
)

module.exports = mongoose.model('BooksProduct' ,BookSchema)
