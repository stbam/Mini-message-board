const mongoose = require('mongoose');
const { DateTime } = require('luxon'); // Import DateTime from Luxon

const Schema = mongoose.Schema;

const MessageSchema= new Schema({
    text:{type:String,required:true},
    user:{type:String,required:true },
    added:{
        type:Date,
        default:Date.now,
    }
})
MessageSchema.virtual("addednew").get(function () {
    return DateTime.fromJSDate(this.added,{zone:UTC}).toLocaleString(DateTime.DATE_MED);
});

const Message= mongoose.model('Message',MessageSchema);
module.exports = Message