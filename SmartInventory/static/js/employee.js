$(document).ready(function () {

    $('input').addClass('form-control')
    $('label').addClass('bmd-label-floating')
    $('select').addClass('form-control')
    $('textarea').addClass('form-control')

    $.ajax({
        url: '/employee',
        type: 'GET',
        async:true,
        success: function (data) {

            
            var mainObj = JSON.parse(data['employees']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["full_name"] + '</td>';

               
                // category.forEach(element => {
                //     if(mainObj[i]["fields"]["Category"]==element[0]){
                //         k+= '<td>' + element[1] + '</td>';                   
                //     }

                // });

                k+= '<td>' + mainObj[i]["fields"]["address"] + '</td>';
              
                k+= '<td>' + mainObj[i]["fields"]["birthday"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["join_date"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["designation"] +'</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["salary"] + '</td>';

                k+= '<td>' + mainObj[i]["fields"]["shop"] + '</td>';
                k+= '<td>' + '<button onclick="Employeeedit('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="EmployeeDelete('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';



                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('EmployeeTable').innerHTML = k;



        }
    })

})



function Export(){
    $("table").tableToCSV()
}
function Employeeedit(id,slug){

    window.location= '/employee/'+id+'-'+slug;
}
function EmployeeDelete(id,slug){

    window.location= '/employee/'+id+'-'+slug+'/delete';
}
$('#submit').click(function(){
    $.ajax({
        url:'/employee/',
        type: 'GET',
        success: function(data){

            
            var mainObj = JSON.parse(data['employees']);
            console.log(mainObj)
            var k = '<tbody>'
            for(i = 0;i < mainObj.length; i++){             
                k+= '<tr>';
                k+='<td>' + (i+1) + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["full_name"] + '</td>';

               
                // category.forEach(element => {
                //     if(mainObj[i]["fields"]["Category"]==element[0]){
                //         k+= '<td>' + element[1] + '</td>';                   
                //     }

                // });

                k+= '<td>' + mainObj[i]["fields"]["address"] + '</td>';
              
                k+= '<td>' + mainObj[i]["fields"]["birthday"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["join_date"] + '</td>';
                k+= '<td>' + mainObj[i]["fields"]["designation"] +'</td>';
                k+= '<td>' +'$'+ mainObj[i]["fields"]["salary"] + '</td>';

                k+= '<td>' + mainObj[i]["fields"]["shop"] + '</td>';
                k+= '<td>' + '<button onclick="Employeeedit('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-primary bmd-btn-icon"><i class="material-icons">edit</i></button>' + '</td>';
                k+= '<td>' + '<button onclick="EmployeeDelete('+mainObj[i]["pk"]+','+"'"+ mainObj[i]["fields"]["Slug"]+"'"+')" type="button" class="btn btn-danger bmd-btn-icon"><i class="material-icons">delete</i></button>' + '</td>';



                k+= '</tr>';
            } 
            k+='</tbody>';
            document.getElementById('EmployeeTable').innerHTML = k;



        }
    })
})