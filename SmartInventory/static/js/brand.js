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
                        k+= '</tr>';
                    }
                    k+='</tbody>';
                    document.getElementById('brandData').innerHTML = k;
                    
                } 
             }
        )
})
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
                    k+= '</tr>';
                }
                k+='</tbody>';
                document.getElementById('brandData').innerHTML = k;
                
            } 
         }
    )
})