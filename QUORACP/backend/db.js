const mongoose = require('mongoose');
// mongoose.connect('mongodb://27017/quoraclone')
const url = 'mongodb+srv://sharadnarzo10:Nwm9q6ESDupF30mJ@cluster0.wnewvoq.mongodb.net/quoraclone?retryWrites=true&w=majority';

module.exports = connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
};
