const {dbUrl, mongoose} = require('../config/dbConfig');
const {serviceModel} = require('../models/serviceSchema');
mongoose.connect(dbUrl);

const getService = async(req, res)=>{
    try {
        const data = await serviceModel.find();
        res.status(200).send({
            message: "Entered Services via mongoose",
            data: data
        })    
        } catch (error) {
            console.log(error);
            res.status(500).send('External server error', error);
        }
}

module.exports = {getService};