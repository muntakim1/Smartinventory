$('#login').click(function (){
    console.log("clicked")
    
    $.ajax(
            {
                url:'/profile/login',
                type: 'get',
                data: {
                    username: $('#inline-user-name').val(),
                    password: $('#inline-password').val()
                },
                success: function(data){
                    console.log(data)
                    if (data == "fine") {
                        window.location = '/dashboard';
                    }
                    else{
                        $("#warningbody").show();
                        
                    } 
                } 
             }
        )
})

$(document).ready(function(){
    $("#warningbody").hide();
})