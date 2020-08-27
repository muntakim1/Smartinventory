$(document).ready(function (){
    
    $('input').addClass('form-control')
    $('label').addClass('bmd-label-floating')
    $('select').addClass('form-control')
    $('textarea').addClass('form-control')
    
    $.ajax({
        url:'/transactions/purchase/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var mainObj = JSON.parse(data['purchases']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_phone"] + '</td>';
                
                product.forEach(element => {
                    if(mainObj[i]["fields"]["product"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                
                k+= '<td>' + mainObj[i]["fields"]["date"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["qty"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["Rate"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["amount"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["total_ammount"] + '</td>';

                if(mainObj[i]["fields"]["paid_status"]){
                    
                k+= '<td>' + "Yes" + '</td>';
                }
                else{
                k+= '<td>' + "No" + '</td>';

                }
                
                k+= '<td>' + '<button onclick="purchaseEdit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="purchaseDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('purchaseTable').innerHTML = k;
           


        }
    })

})



function Export(){
    $("table").tableToCSV()
}
function purchaseEdit(id){

    window.location= '/transactions/purchase/'+id;
}
function purchaseDelete(id){

    window.location= '/transactions/purchase/'+id+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/transactions/purchase/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var mainObj = JSON.parse(data['purchases']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Seller_phone"] + '</td>';
                
                product.forEach(element => {
                    if(mainObj[i]["fields"]["product"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                
                k+= '<td>' + mainObj[i]["fields"]["date"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["qty"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["Rate"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["amount"] + '</td>';

                k+= '<td>' +'$'+ mainObj[i]["fields"]["total_ammount"] + '</td>';

                if(mainObj[i]["fields"]["paid_status"]){
                    
                k+= '<td>' + "Yes" + '</td>';
                }
                else{
                k+= '<td>' + "No" + '</td>';

                }
                
                k+= '<td>' + '<button onclick="purchaseEdit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="purchaseDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('purchaseTable').innerHTML = k;
           


        }
    })
})