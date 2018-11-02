function reset()
{
  document.getElementById("show").innerHTML="";
}

//let x= document.all.name.value;

function myfunction(display)
{
    document.getElementById("show").innerHTML+= display;
}

function calculate()
{

    var ab=document.getElementById("show").innerHTML;
    document.getElementById("show").innerHTML=eval(ab);
   

    // let ab=document.getElementById("show").innerHTML;
    // console.log(ab);

    // let c=ab.toString();
    // console.log(c);

    // // var re = /\s*(+-*)\s*/;
    // // var nameList = c.split(re);
   
    // // console.log(nameList);



    // for(var i=0;i<c.length;i++)
    // {
    //      if(c[i]=='+')
    //      {
    //          result=(+c[i-1])+(+c[i+1]);
    //          document.getElementById("show").innerHTML=result;
    //      }
    //      else if(c[i]=='-')
    //      {
    //         result=(+c[i-1])-(+c[i+1]);
    //         document.getElementById("show").innerHTML=result;
    //      }
    //      else if(c[i]=='*')
    //      {
    //         result=(+c[i-1])*(+c[i+1]);
    //         document.getElementById("show").innerHTML=result;
    //      }
    //      else if(c[i]=='/')
    //      {
    //         result=(+c[i-1])/(+c[i+1]);
    //         document.getElementById("show").innerHTML=result;
    //      }
         



    // }

   
}