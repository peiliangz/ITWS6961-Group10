var email;
$(document).ready(function update_password() {
	//get the email

	 $.get('/settings/getEmail',{},function(res){
		    email=res.email;

	});
	console.log("update_password outside");
	var password_org;

	$('#update_password').bootstrapValidator({
	feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
        fields: {
        	password: {
        		validators: {
        			notEmpty: {
        				message: 'The new password is required and cannot be empty'
        			}
        			/*
        			identical: {
        				field:{{password}}
        				message: 'The password is not correct'
        			}
        			*/
        		}
        	},
        	password_new: {
                validators: {
                    notEmpty: {
                        message: 'The new password is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        message: 'The new password must be minimum 5 characters '
                    }
              	}
            },
            password_conf: {
                validators: {
                    notEmpty: {
                        message: 'The password Confirmation is required and cannot be empty'
                    },
                    stringLength: {
                        min: 5,
                        message: 'The password Confirmation must be minimum 5 characters'
                    },
                    identical: {
                    	field: 'password_new',
                    	message:'The new password and its confirm are not the same'
                	}
              	}
            }
        }

	});
	$('#update_password').submit(function() {
		console.log("update_password");
		var $password=$("#password");
		var $password_new=$("#password_new");
		var $password_conf=$("#password_conf");

		var password=$password.val().trim();
		var password_new=$password_new.val().trim();
		var password_conf=$password_conf.val().trim();

		console.log(password, password_new, password_conf);

		$.ajax({
			type: 'POST',
			url: "/settings/changeUserPassword",  // needed changes in account.js file, not done yet
			data: //"&password=" + password + "&password_new=" +password_new + "&password_conf=" + password_conf,
			//dataType: "jsonp",
			{
				email:email,
				password:password,
				password_new:password_new,
				password_conf:password_conf
			},
			success: function(resp) {
				if(resp=="Success") {
					console.log("response success");
					alert("Updated successfully!");
				}
	      else if(resp=="incorrect"){
					alert("please retype your password!");
					window.location.href="/settings";
				}
			},
			error: function(xhr, textStatus, err) {
				console.log("error log");
        console.log("readyState: " + xhr.readyState);
				console.log("responseText: "+ xhr.responseText);
				console.log("status: " + xhr.status);
				console.log("text status: " + textStatus);
				console.log("error: " + err);
			}
		});
	});
});
