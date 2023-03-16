$(function (){
    $("#myform").validate({
        rules: {
           email: {
               required: true,
               email: true
           },

        },
        message: {
            email: {
                required: 'Enter a email address.',
                email: 'Enter a <em>valid</em> email'
            }
        }
    });
});