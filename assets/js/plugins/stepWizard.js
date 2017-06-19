var StepWizard = function () {

    return {

        initStepWizard: function () {


            var form = $(".shopping-cart");

                // 使用jquery steps插件验证表单是否合法
                form.validate({
                    errorPlacement: function errorPlacement(error, element) { element.before(error); },
                    rules: {
                        confirm: {
                            equalTo: "#password"
                        }
                    }
                });  // end validate

                // 使用jquery steps插件渲染向导效果
                form.children("div").steps({

                    headerTag: ".header-tags",
                    bodyTag: "section",
                    transitionEffect: "fade",

                    onStepChanging: function (event, currentIndex, newIndex) {
                        // Allways allow previous action even if the current form is not valid!
                        // 如果当前的表单不合法，总是允许前一个步骤
                        if (currentIndex > newIndex)
                        {
                            return true;
                        }
                        form.validate().settings.ignore = ":disabled,:hidden";
                        return form.valid();
                    },  //onStepChanging 事件函数

                    onFinishing: function (event, currentIndex) {
                        form.validate().settings.ignore = ":disabled";
                        return form.valid();
                    },


                    onFinished: function (event, currentIndex) {
                        alert("!");
                    }


                });
        }, 

    };
}();        