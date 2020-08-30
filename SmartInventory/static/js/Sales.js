
$(document).ready(function (){
    
    $('input').addClass('form-control')
    $('label').addClass('bmd-label-floating')
    $('select').addClass('form-control')
    $('textarea').addClass('form-control')
    
    $.ajax({
        url:'/transactions/sales/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var shop= data['shop']
            var mainObj = JSON.parse(data['sales']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
               
                shop.forEach(element => {
                    if(mainObj[i]["fields"]["shop"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                product.forEach(element => {
                    if(mainObj[i]["fields"]["product"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                
                k+= '<td>' + mainObj[i]["fields"]["date"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["qty"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["Rate"] + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["amount"] + '</td>';
                // k+= '<td>' +'$'+ mainObj[i]["fields"]["total_ammount"] + '</td>';

                if(mainObj[i]["fields"]["paid_status"]){
                    
                k+= '<td>' + "Yes" + '</td>';
                }
                else{
                k+= '<td>' + "No" + '</td>';

                }
                
                k+= '<td>' + '<button onclick="Salesedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="SalesDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                k+= '<td>' + '<button id="invoice" onclick="SalesInvoice('+mainObj[i]["pk"]+',\'sales\')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">report</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('SalesTable').innerHTML = k;
           


        }
    })

})


function SalesInvoice(id,value){
    window.location = '/transactions/invoice/'+id+'/'+value;
    url='/transactions/invoice/'+id+'/'+value;
}


function Export(){
    $("table").tableToCSV()
}
function Salesedit(id){

    window.location= '/transactions/sales/'+id;
}
function SalesDelete(id){

    window.location= '/transactions/sales/'+id+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/transactions/sales/',
        type: 'GET',
        success: function(data){
            var product= data['products']
            var shop= data['shop']
            var mainObj = JSON.parse(data['sales']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
               
                shop.forEach(element => {
                    if(mainObj[i]["fields"]["shop"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
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
                
                k+= '<td>' + '<button onclick="Salesedit('+mainObj[i]["pk"]+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="SalesDelete('+mainObj[i]["pk"]+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                
                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('SalesTable').innerHTML = k;
           



        }
    })
})