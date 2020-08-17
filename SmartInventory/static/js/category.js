$('#submit').click(function (){
    console.log("clicked")
    
    $.ajax(
            {
                url:'/products/category',
                type: 'get',
                data: {
                    category: $('#category').val(),
                    slug: $('#category').val()
                },
                success: function(data){
                    var mainObj = JSON.parse(data);
                    var k = '<tbody>'
    
                    for(i = 0;i < mainObj.length; i++){             
                        k+= '<tr>';
                        k+='<td>' + (i+1) + '</td>';
                        k+= '<td>' + mainObj[i]["fields"]["Category_Name"] + '</td>';
                        k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                        k+= '</tr>';
                    }
                    k+='</tbody>';
                    document.getElementById('categoryData').innerHTML = k;
                    
                } 
             }
        )
})
$(document).ready(function (){
    $.ajax(
        {
            url:'/products/category',
            type: 'get',
            
            success: function(data){
                var mainObj = JSON.parse(data);
                var k = '<tbody>'

                for(i = 0;i < mainObj.length; i++){             
                    k+= '<tr>';
                    k+='<td>' + (i+1) + '</td>';
                    k+= '<td>' + mainObj[i]["fields"]["Category_Name"] + '</td>';
                    k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                    k+= '</tr>';
                }
                k+='</tbody>';
                document.getElementById('categoryData').innerHTML = k;
                
            } 
         }
    )
})