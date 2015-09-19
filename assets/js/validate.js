(function($,W,D)
			{
			    var JQUERY4U = {};

			    JQUERY4U.UTIL =
			    {
                    setupFormValidation: function()
                    {
                        //form validation rules
                        $("#register-form").validate({
                            rules: {
                                firstname: "required",                                
                                email: {
                                    required: true,
                                    email: true
                                },
                                phoneNumber: {
                                    required: true
                                },
                                fieldMessage: "required"
                                
                                
                            },
                            messages: {
                                firstname: "Não esqueça de preencher seu nome",
                                email: "Seu e-mail está errado",
                                phoneNumber: "Preencha o telefone, é importante para mantermos contato",
                                fieldMessage: "Ops, não esqueça a mensagem"
                                
                            },
                            submitHandler: function(form) {
                                form.submit();
                            }
                        });
                    }
                }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);