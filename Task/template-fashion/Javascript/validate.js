$(document).ready(function(){

    $("#frm").validate({

        rules: {
                name:{
                    required: true,
                    minlength:6
            },
                email:{
                    required: true,
                    email: true
            },
                number:{
                    required: true,
                    number: true,
                    maxlength:10,
                    minlength: 10
            }
        },

        messages: {
            name:{
                required:"Please enter first field",
                minlength:"Atleast 6 characters"
            },
            email:{
                required:"Please enter this field",
                email:"Enter valid emailid"
            },
            number:{
                required:"Please enter this field",
                number: "Enter your mobile no.",
                maxlength: "10 digits must",
                minlength:"10 digit must"
            },
        },
        submitHandler: function(frm){
            frm.submit();
        }
    });


});