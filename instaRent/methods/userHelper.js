User = require('../models/user.js')


userHelper = function() {};

userHelper.prototype.getUserId = function(data) {
    console.log("returning userId: "+data.session.userProfileModel.email);
	return data.session.userProfileModel.email;
};

userHelper.prototype.setDefaultHome = function(userId, homeInfo) {
	//Set the home id and user type in the user related database
    
    User.update({email: userId}, {role: homeInfo.userType, foreignId: homeInfo.id},{},function(err,numberAffected){
        if(err)
            console.log("setDefaultHome database update error" + err);
        else
        {
            console.log("setDefaultHome: numberAffected: "+numberAffected);   
        }
    });
};

userHelper.prototype.getDefaultHome = function (userId) {
	return "55147c99f627d4383a70f632";
}
module.exports = userHelper;