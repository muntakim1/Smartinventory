$(document).ready(function (){
    
    $('input').addClass('form-control')
    $('label').addClass('bmd-label-floating')
    $('select').addClass('form-control')
    $('textarea').addClass('form-control')
    
    $.ajax({
        url:'/transactions/order/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var mainObj = JSON.parse(data['order']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_phone"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_country"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["date"] + '</td>';
                
                product.forEach(element => {
                    if(mainObj[i]["fields"]["product"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                
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
                
                k+= '<td>' + '<button onclick="Orderedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="OrderDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                
                k+= '<td>' + '<button onclick="OrderInvoice('+mainObj[i]["pk"]+',\'purchase\')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">report</i></button>' + '</td>';


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('purchaseTable').innerHTML = k;
           


        }
    })

})


function OrderInvoice(id,value){
    window.location= '/transactions/order/'+id+"/"+value;
}
function Export(){
    $("table").tableToCSV()
}
function Orderedit(id){

    window.location= '/transactions/order/'+id;
}
function OrderDelete(id){

    window.location= '/transactions/order/'+id+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/transactions/order/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var mainObj = JSON.parse(data['order']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_name"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_address"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_phone"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Customer_country"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["date"] + '</td>';
                
                product.forEach(element => {
                    if(mainObj[i]["fields"]["product"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                
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
                
                k+= '<td>' + '<button onclick="Orderedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="OrderDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="OrderInvoice('+mainObj[i]["pk"]+',\'purchase\')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">report</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('purchaseTable').innerHTML = k;
           

        }
    })
})