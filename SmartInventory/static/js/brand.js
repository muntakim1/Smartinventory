$('#submit').click(function (){
    console.log("clicked")
    
    $.ajax(
            {
                url:'/products/brand',
                type: 'get',
                data: {
                    brand: $('#brand').val(),
                    slug: $('#brand').val()
                },
                success: function(data){
                    var mainObj = JSON.parse(data);
                    var k = '<tbody>'
    
                    for(i = 0;i < mainObj.length; i++){             
                        k+= '<tr>';
                        k+='<td>' + (i+1) + '</td>';
                        k+= '<td>' + mainObj[i]["fields"]["brand_Name"] + '</td>';
                        k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                        k+= '<td>' + '<button onclick="brandedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                        k+= '<td>' + '<button onclick="brandDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                        k+= '</tr>';
                    }
                    k+='</tbody>';
                    document.getElementById('brandData').innerHTML = k;
                    
                } 
             }
        )
})

function brandedit(id){

    window.location= 'brand/'+id;
}

function brandDelete(id){

    window.location= 'brand/'+id+'/delete';
}
$(document).ready(function (){
    
    $.ajax(
        {
            url:'/products/brand',
            type: 'get',
            
            success: function(data){
                var mainObj = JSON.parse(data);
                var k = '<tbody>'

                for(i = 0;i < mainObj.length; i++){             
                    k+= '<tr>';
                    k+='<td>' + (i+1) + '</td>';
                    k+= '<td>' + mainObj[i]["fields"]["brand_Name"] + '</td>';
                    k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                    k+= '<td>' + '<button onclick="brandedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                    k+= '<td>' + '<button onclick="brandDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                    k+= '</tr>';
                }
                k+='</tbody>';
                document.getElementById('brandData').innerHTML = k;
                
            } 
         }
    )
})