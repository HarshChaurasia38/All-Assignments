
// $(document).ready(function() {
//     $("#get-data").click(function(event){
//        $('#table-data').load('http://assignmentapi.aspcore.net/api/users');
//     });
//  });


// page auto reload after 10 seconds

// setTimeout(function(){
//   window.location.reload(1);
// }, 10000);



// //button auto click after 6 second
// window.onload = function(){

//   var button = document.getElementById('get-data');

//   setInterval(function(){
//       button.click();
//   },6000);             // this will make it click again every 6000 miliseconds
// };


//get json user details

 $(document).ready(function() {

    $("#get-data").on('click',function(event){

      $(this).prop('disabled',true);
        
       $.getJSON('http://assignmentapi.aspcore.net/api/users',function(data1) {

          //  console.log(data1);


           $.each(data1.data,function(index,value){

            if(index==10){
              return false;
            }

                // console.log(value);

          $('#table-data1').append('<tr>');
          $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].id +'</td>');
          $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].firstName +'</td>');
          $('#table-data1').append('<td style="padding-left:100px;">' + data1.data[index].lastName  + '</td>');
          $('#table-data1').append('<td style="padding-left:130px; padding-right:40px;">' + data1.data[index].email + '</td>');
          $('#table-data1').append('<td style="padding-right:67px;">' + data1.data[index].phone  + '</td>');
          $('#table-data1').append('<td><button style="margin-right:120px; margin-bottom:6px;" onclick="foo('+data1.data[index].id+')" data-toggle="modal" data-target="#edit-modal" class="btn btn-primary" type="button">Edit</button></td>');
          $('#table-data1').append('<td><button style:"margin-bottom:6px;"onclick="del('+data1.data[index].id+')" class="btn btn-outline-warning" type="button">Delete</button></td>');
          $('#table-data1').append('</tr><br>');
          
           });
           console.log(data1.data.length);
       });
            
    });
 });


//Previous and Next button code

var maxRecords=0;

 $(document).ready(function(){

  $("#next").on('click',function(event){
    
     $.getJSON('http://assignmentapi.aspcore.net/api/users',function(data1) {

        //  console.log(data1);

        $('#table-data1').empty();
        
              maxRecords=maxRecords+10;


         for(let index=maxRecords;index<maxRecords+10;index++)
          {

        $('#table-data1').append('<tr>');
        $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].id +'</td>');
        $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].firstName +'</td>');
        $('#table-data1').append('<td style="padding-left:100px;">' + data1.data[index].lastName  + '</td>');
        $('#table-data1').append('<td style="padding-left:130px; padding-right:40px;">' + data1.data[index].email + '</td>');
        $('#table-data1').append('<td style="padding-right:67px;">' + data1.data[index].phone  + '</td>');
        $('#table-data1').append('<td><button style="margin-right:120px; margin-bottom:6px;" onclick="foo('+data1.data[index].id+')" data-toggle="modal" data-target="#edit-modal" class="btn btn-primary" type="button">Edit</button></td>');
        $('#table-data1').append('<td><button style:"margin-bottom:6px;"onclick="del('+data1.data[index].id+')" class="btn btn-outline-warning" type="button">Delete</button></td>');
        $('#table-data1').append('</tr><br>');
        
         };
           
         console.log(data1.data.length);
     });
          
  });
});


$(document).ready(function(){

  $("#prev").on('click',function(event){
    
     $.getJSON('http://assignmentapi.aspcore.net/api/users',function(data1) {

        //  console.log(data1);

        $('#table-data1').empty();
        
              maxRecords=maxRecords-10;

         for(let index=maxRecords;index<maxRecords+10;index++)
          {
        $('#table-data1').append('<tr>');
        $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].id +'</td>');
        $('#table-data1').append('<td style="padding-left:83px;">' + data1.data[index].firstName +'</td>');
        $('#table-data1').append('<td style="padding-left:100px;">' + data1.data[index].lastName  + '</td>');
        $('#table-data1').append('<td style="padding-left:130px; padding-right:40px;">' + data1.data[index].email + '</td>');
        $('#table-data1').append('<td style="padding-right:67px;">' + data1.data[index].phone  + '</td>');
        $('#table-data1').append('<td><button style="margin-right:120px; margin-bottom:6px;" onclick="foo('+data1.data[index].id+')" data-toggle="modal" data-target="#edit-modal" class="btn btn-primary" type="button">Edit</button></td>');
        $('#table-data1').append('<td><button style:"margin-bottom:6px;"onclick="del('+data1.data[index].id+')" class="btn btn-outline-warning" type="button">Delete</button></td>');
        $('#table-data1').append('</tr><br>');
        
         };
           
         console.log(data1.data.length);
     });
          
  });
});











//add new user data in json 


function popup()
    {      
      var obj={

        firstName: $("#first-name").val(),
        lastName: $("#last-name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
  
      }  



     $.post('http://assignmentapi.aspcore.net/api/users',obj,function(data1) {
         
     if(data1.success)
     {
       console.log("success");
       alert("data saved");
       location.reload();
     }
     else{
       console.log("not success");
     }
          
    });
  };




  //edit user details

 function foo(id){
  
     getId=id;

       console.log(id);

          $.getJSON('http://assignmentapi.aspcore.net/api/users/'+id,function(dat) {


            $("#Fname").val(dat.data.firstName);
            $("#Lname").val(dat.data.lastName);
            $("#Email").val(dat.data.email);
            $("#Phone").val(dat.data.phone);
         
         console.log("click working");

       });
 };


//update user details

function update() {

  console.log("hello");

  var object2 = {

    firstName: $("#Fname").val(),
    lastName: $("#Lname").val(),
    email: $("#Email").val(),
    phone: $("#Phone").val(),

  }

  $.post('http://assignmentapi.aspcore.net/api/users/' + getId, object2, function (data3) {

    if (data3.success) {
      console.log("success");
      alert("data updated");
      location.reload();
    }
    else {
      console.log("not updated");
    }

  });
};


//delete user details

function del(del)
{

  $.ajax({
    url: 'http://assignmentapi.aspcore.net/api/users/' + del,
    type: 'DELETE',

      success: function(result) {
      
      if(result.success){
        alert("data deleted");
        location.reload();
      }
      else{
        console.log("error");
      }
    },
    
});

};



//  function remove(){

//   $('#table-data1').remove();
//   }
 

  // console.log(del)

      
  //      $.getJSON('http://assignmentapi.aspcore.net/api/users/'+del,function(data4) {
      
  //        console.log(data4.data);
         
  //          data:delete data4.data;

  //        console.log(data4.data);

    
      
  //       // $.post('http://assignmentapi.aspcore.net/api/users/' + del, object6, function (data6) {

  //           console.log(data4.data);
         
  //             if (data4.success) 
  //                {
  //                 alert("data deleted");

  //                 console.log("success");
  //                  }
  //                else {
  //                  console.log("not deleted");
  //                 }

  //               });
// };


//   fetch('http://assignmentapi.aspcore.net/api/users')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });



// // //var $j = jQuery.noConflict();
// $(document).ready(function(){
//     $("#get-data").click(function(){
//         $.get('http://assignmentapi.aspcore.net/api/users',function(jd){
//             $("#table-data").html('<p>FirstName:- ' + jd.firstname + '</p>');
//         })
//     });
// });



// jQuery(document).ready(function($){
// $(document).ready(function() {		
//     $("#get-data").click(function(){
//        $.getJSON('http://assignmentapi.aspcore.net/api/users', function(jd) {
//           $('#table-data').append('<span>Id: ' + jd.id + '</span>');
//           $('#table-data').append('<span>FirstName: ' + jd.firstName + '</span>');
//           $('#table-data').append(' <span>LastName: ' + jd.lastName + '</span>');
//        });
//     });   
//  });
// });

   ////for show or hide a form in jquery
//    '$("#formButton").click(function(){
//     $("#form1").toggle();
// });

// https://stackoverflow.com/questions/22265512/how-to-change-text-box-value-with-jquery
// https://stackoverflow.com/questions/31357199/changing-table-data-using-javascript-with-innerhtml
// search for the extedn function

// $('#dataTable1').DataTable( {      
//   "searching": false,
//   "paging": true, 
//   "info": false,         
//   "lengthChange":false 
// });




// $(document).ready(function(){      

//   // append some data to an existing table in the DOM
//   for (var i =0 ; i < 10; i++) {
//     var $nr = $('<tr><td>A-' + i + '</td><td>B-' + i  + '</td></tr>');
//     $('#myTable').append($nr);
//   }

//   // after table is populated, initiate plug-in and point to table
//   $('#myTable').DataTable(
//        { "lengthMenu": [[5, 10, -1], [5, 10, "All"]] });
// });