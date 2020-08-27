$(document).ready(function (){
    
    $('input').addClass('form-control')
    $('label').addClass('bmd-label-floating')
    $('select').addClass('form-control')
    $('textarea').addClass('form-control')
    
    $.ajax({
        url:'/products/',
        type: 'GET',
        success: function(data){
            var brand= data['brand']
            var category=data['category']
            console.log(brand[1]+' '+category[1])
             var mainObj = JSON.parse(data['products']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Product_Name"] + '</td>';
                
                brand.forEach(element => {
                    if(mainObj[i]["fields"]["Brand"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                category.forEach(element => {
                    if(mainObj[i]["fields"]["Category"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';                   
                    }
                    
                });
                
                k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                if(mainObj[i]["fields"]["Slug"]){
                    
                k+= '<td>' + "Yes" + '</td>';
                }
                else{
                k+= '<td>' + "No" + '</td>';

                }
                k+= '<td>' + mainObj[i]["fields"]["color"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["description"] + '</td>';
                k+= '<td>' + '<img src="/media/'+mainObj[i]["fields"]["image"]+'" width="100" height="100"/>' + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["price"] +'</td>';
                k+= '<td>' + mainObj[i]["fields"]["qty"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["size"] + '</td>';
                k+= '<td>' + '<button onclick="Productedit('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="ProductDelete('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';
                


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('productTable').innerHTML = k;
           


        }
    })

})



function Export(){
    $("table").tableToCSV()
}
function Productedit(id,slug){

    window.location= '/products/'+id+'-'+slug;
}
function ProductDelete(id,slug){

    window.location= '/products/'+id+'-'+slug+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/products/',
        type: 'GET',
        success: function(data){
            var brand= data['brand']
            var category=data['category']
            console.log(brand[1]+' '+category[1])
             var mainObj = JSON.parse(data['products']);
            console.log(mainObj[0])
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Product_Name"] + '</td>';
                brand.forEach(element => {
                    if(mainObj[i]["fields"]["Brand"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';
                    
                    }

                });
                category.forEach(element => {
                    if(mainObj[i]["fields"]["Category"]==element[0]){
                        k+= '<td>' + element[1] + '</td>';                   
                    }
                    
                });
                k+= '<td>' + mainObj[i]["fields"]["Slug"] + '</td>';
                if(mainObj[i]["fields"]["Slug"]){
                    
                k+= '<td>' + "Yes" + '</td>';
                }
                else{
                k+= '<td>' + "No" + '</td>';

                }
                k+= '<td>' + mainObj[i]["fields"]["color"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["description"] + '</td>';
                k+= '<td>' + '<img src="/media/'+mainObj[i]["fields"]["image"]+'" width="100" height="100"/>' + '</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["price"] +'</td>';
                k+= '<td>' + mainObj[i]["fields"]["qty"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["size"] + '</td>';
                k+= '<td>' + '<button onclick="Productedit('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="ProductDelete('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('productTable').innerHTML = k;
           


        }
    })
})