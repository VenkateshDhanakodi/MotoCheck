const {dbUrl, mongoose} = require('../config/dbConfig');
const {bookingModel} = require('../models/bookingShema');
mongoose.set('strictQuery', false)
mongoose.connect(dbUrl);

const getBooking = async(req, res)=>{
    try {
    const data = await bookingModel.find();
    res.status(200).send({
        message: "Entered booking via mongoose",
        data: data
    })    
    } catch (error) {
        console.log(error);
        res.status(500).send('External server error', error);
    }
}

module.exports = {getBooking};