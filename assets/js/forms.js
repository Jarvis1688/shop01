// ************************************  用户登录验证

var Login = function () {

	return {
		initLogin: function () {
			// 验证登录表单
			$("#sky-form1").validate({
				// 表单验证规则
				rules:
				{
					email:
					{
						required: true,
						email: true
					},
					password:
					{
						required: true,
						minlength: 3,
						maxlength: 20
					}
				},
									
				// 表单验证提示信息
				messages:
				{
					email:
					{
						required: '请输入您的Email地址',
						email: '请输入一个合法的Email地址'
					},
					password:
					{
						required: '请输入您的密码',
						minlength: '密码不能少于3个字符',
						maxlength: '密码不能多于20个字符'
					},
				},                  
				
				// 错误提示
				errorPlacement: function(error, element)
				{
					error.insertAfter(element.parent());
				}
			});
		}
	}


}();



// ************************************  用户注册验证


var Registration = function () {

    return {
        
        //注册表单
        initRegistration: function () {
	        // 验证       
	        $("#sky-form4").validate({                   
	            // 表单验证规则
	            rules:
	            {
	                username:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                password:
	                {
	                    required: true,
	                    minlength: 3,
	                    maxlength: 20
	                },
	                passwordConfirm:
	                {
	                    required: true,
	                    minlength: 3,
	                    maxlength: 20,
	                    equalTo: '#password'
	                },
	                firstname:
	                {
	                    required: true
	                },
	                lastname:
	                {
	                    required: true
	                },
	                terms:
	                {
	                    required: true
	                }
	            },
	            
	            // 表单验证信息
	            messages:
	            {
	                login:
	                {
	                    required: '请输入您的登录名'
	                },
	                email:
	                {
	                    required: '请输入您的Email地址',
	                    email: '请输入一个合法的Email地址'
	                },
	                password:
	                {
	                    required: '请输入您的密码',
						minlength: '密码不能少于3个字符',
						maxlength: '密码不能多于20个字符'
	                },
	                passwordConfirm:
	                {
	                    required: '请再次输入您的密码',
	                    equalTo: '请输入相同的密码'
	                },
	                firstname:
	                {
	                    required: '请输入您的姓'
	                },
	                lastname:
	                {
	                    required: '请输入您的名称'
	                },
	                terms:
	                {
	                    required: '您必须同意服务条款'
	                }
	            },                  
	            
	            // 错误提示
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
}();


// ************************************  用户评论验证

var PageContactForm = function () {

    return {
        
        //商品评论表单验证
        initPageContactForm: function () {
	        // 验证表单
	        $("#sky-form3").validate({
	            // 验证规则
	            rules:
	            {
	                name:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 10
	                },
					// 远程Ajax验证
	                captcha:
	                {
	                    required: true,
	                    remote: '../../../process.php'
	                }
	            },
	                                
	            // 验证提示信息
	            messages:
	            {
	                name:
	                {
	                    required: '请输入您的名称',
	                },
	                email:
	                {
	                    required: '请输入您的Email地址',
	                    email: '请输入一个合法的Email地址'
	                },
	                message:
	                {
	                    required: '请输入您的评论',
						minlength: '评论长度不能少于10个字符'
	                },
	                captcha:
	                {
	                    required: '请输入验证码',
	                    remote: '请输入正确的验证码'
	                }
	            },
	                                
	            // 通过AJAX方式提交表单                  
	            submitHandler: function(form)
	            {
					// 使用jquery.forms插件中提供的方法ajaxSubmit 
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#sky-form3 button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#sky-form3").addClass('submited');
	                    }
	                });
	            },
	            
	            // 错误提示
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
    
}();


