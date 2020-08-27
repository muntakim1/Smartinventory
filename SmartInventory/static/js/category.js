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
                        k+= '<td>' + '<button onclick="Categoryedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                        k+= '<td>' + '<button onclick="CategoryDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                        k+= '</tr>';
                    }
                    k+='</tbody>';
                    document.getElementById('categoryData').innerHTML = k;
                    
                } 
             }
        )
})

function Categoryedit(id){

    window.location= 'category/'+id;
}
function CategoryDelete(id){

    window.location= 'category/'+id+'/delete';
}
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
                    k+= '<td>' + '<button onclick="Categoryedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                    k+= '<td>' + '<button onclick="CategoryDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';

                    k+= '</tr>';
                }
                k+='</tbody>';
                document.getElementById('categoryData').innerHTML = k;
                
            } 
         }
    )
})