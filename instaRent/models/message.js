var mongoose = require('./mongoose_connector').mongoose;
var Schema = mongoose.Schema;
var MsgSchema = new Schema({

 topicid: String,
 message: String,
 userType: String,
 senderid: String,
 landlordid: String,
 date: Date,
 fname: String,
 firstname: String,
 lastname: String

});


var Msg=mongoose.model('Msg',MsgSchema);

exports.Msg=Msg;

