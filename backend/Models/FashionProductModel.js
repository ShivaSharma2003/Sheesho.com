const mongoose = require('mongoose');

const FashionProductSchema = mongoose.Schema(
    {
        url : String,
        name : String,
        sub_title : String,
        brand : String,
        model : Number,
        color : String,
        price : Number,
        currency : String,
        availability : String,
        description : String,
        avg_rating : Number,
        review_count : Number,
        images : String,
        available_sizes : String,
        uniq_id : String,
        scraped_at : String
    }
)

module.exports = mongoose.model('FashionProducts' , FashionProductSchema)