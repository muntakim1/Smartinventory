
$(document).ready(function (){
   
    $.ajax({
        url:'/shop',
        type: 'GET',
        success: function(data){
            
            var mainObj = JSON.parse(data['shop']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                // k+= '<td>' + mainObj[i]["fields"]["Manager_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["shop_name"] + '</td>';
                k+= '<td>' +mainObj[i]["fields"]["phone"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["city"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["country"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["zipcode"] + '</td>';

                
                
                k+= '<td>' + '<button onclick="Shopedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="ShopDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('shopTable').innerHTML = k;
           


        }
    })

})



function Export(){
    $("table").tableToCSV()
}
function Shopedit(id){

    window.location= '/shop/'+id;
}
function ShopDelete(id){

    window.location= '/shop/'+id+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/shop/',
        type: 'GET',
        success: function(data){
            var mainObj = JSON.parse(data['shop']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                // k+= '<td>' + mainObj[i]["fields"]["Manager_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["shop_name"] + '</td>';
                k+= '<td>' +mainObj[i]["fields"]["phone"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["city"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["country"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["zipcode"] + '</td>';

                
                k+= '<td>' + '<button onclick="Shopedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="ShopDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('shopTable').innerHTML = k;
           



        }
    })
})