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
            console.log(mainObj[0])
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["Product_Name"] + '</td>';
                k+= '<td>' + brand[mainObj[i]["fields"]["Brand"]-1][1] + '</td>';
                k+= '<td>' + category[mainObj[i]["fields"]["Category"]-1][1] + '</td>';
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


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('productTable').innerHTML = k;
           


        }
    })

})

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
                k+= '<td>' + brand[mainObj[i]["fields"]["Brand"]-1][1] + '</td>';
                k+= '<td>' + category[mainObj[i]["fields"]["Category"]-1][1] + '</td>';
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


                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('productTable').innerHTML = k;
           


        }
    })
})