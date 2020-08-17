$('#search').on("keyup",function(){
    var value=$(this).val();
    $("table tr").each(function(records){
        if(records !==0){
            var id=$(this).find("td").text();
            if(id.indexOf(value)!==0 && id.toLowerCase().indexOf(value.toLowerCase())<0){
                $(this).hide();
            }
            else {
                $(this).show();
            }
        }
        else {
            console.log("not found")
        }
    })
})