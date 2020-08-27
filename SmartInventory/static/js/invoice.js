$(document).ready(function (){
    console.log(window.location.href)
    $.ajax({
        url:String(window.location.href),
        type: 'GET',
        success: function(data){
            var product= data['products']
            console.log(product)
            var mainObj = JSON.parse(data['invoice']);
            console.log("object: ",mainObj)
            var count=0;
            count=count+ mainObj.length
            if(mainObj[0]["fields"].Seller_name){
                document.getElementById("invoiceNumber").innerHTML=count
                document.getElementById("duedate").innerHTML=mainObj[0]["fields"]["date"]
                document.getElementById("name").innerHTML=mainObj[0]["fields"]["Seller_name"]
                document.getElementById("address").innerHTML=mainObj[0]["fields"]["Seller_address"]
                document.getElementById("phone").innerHTML=mainObj[0]["fields"]["Seller_phone"]
            }
            else if(mainObj[0]["fields"].Customer_name){
                document.getElementById("invoiceNumber").innerHTML=count
                document.getElementById("duedate").innerHTML=mainObj[0]["fields"]["date"]
                document.getElementById("name").innerHTML=mainObj[0]["fields"]["Customer_name"]
                document.getElementById("address").innerHTML=mainObj[0]["fields"]["Customer_address"]
                document.getElementById("phone").innerHTML=mainObj[0]["fields"]["Customer_phone"]
            }
           
            
            product.forEach(element => {
                if(element[0]==mainObj[0]["fields"]["product"])
                document.getElementById("product_name").innerHTML= element[1]
            });
            
            document.getElementById("total_quantity").innerHTML=mainObj[0]["fields"]["qty"]
            document.getElementById("rate").innerHTML=mainObj[0]["fields"]["Rate"]
            document.getElementById("total_price").innerHTML=parseFloat(parseFloat(mainObj[0]["fields"]["Rate"]) * parseInt(mainObj[0]["fields"]["qty"]))

            


        }
    })

})

