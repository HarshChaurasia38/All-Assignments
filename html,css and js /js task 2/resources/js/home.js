function verify()
{
    var str=document.getElementById("hello").value;
      console.log(str);

        var str1=str.replace(/[ &\/\\#,+()$~%.'":*?<>{}]/g,'');
         console.log(str1);

         var str2=str1.toLowerCase();
         console.log(str2);
         
          var uniq="";

           for(var x=0;x<str2.length;x++)
          {
            if(uniq.indexOf(str2.charAt(x))==-1)
            {
                uniq+=str2[x];

            }
           }
           console.log(uniq);

    if(uniq.length<26)
    {
     document.getElementById("show").innerHTML="not pangram";
     }

    else
    {
          var count=0;
        
          for(var l=0;l<uniq.length;l++)
          {
           for(var abc=97;abc<123;abc++)
          {
               if(uniq.charCodeAt(l)==abc)
               {
                   count++;
               }
           }
        }
   
        if(count==26)
        {
        document.getElementById("show").innerHTML="pangram";
        console.log("pangram");
       }
         else
        {
         document.getElementById("show").innerHTML="not pangram";
         console.log("not pangram");
        }
    }
      
} 

    // this is not working in javascript  
    //  for(let k = 'a';k <= 'z';k++)
    //    {
    //      if(uniq.indexOf(k)>=0)
    //      {
    //          count++;
    //      }
    //     }



        //  var arr=str2.split('');    
         //console.log(arr);
        //  var index=0;

        //  for(var i=0;i<arr.length;i++)
        //  {
        //      for(var j=0;j<i;j++)
        //      {
        //          if(arr[i]==arr[j])
        //          {
        //          break;
        //          }
        //          if(j==i)
        //          {
        //              arr[index++]=arr[i];
        //          }
        //      }

        //  } 

     
// function fn(){

//     var isflag=verify();
//     if(isflag)
//     {
//       return document.getElementById("show").innerHTML="pangram";
//     }
//     else{
//         return document.getElementById("show").innerHTML="not pangram";
//     }
// }



/*
document.write("hello everyone");
var a="first js  code";
var b=document.getElementById("good").innerHTML;
console.log(b);
// var b=document.getElementById("good").innerHTML=" my name is harsh ";
var b=document.getElementById("good").innerHTML=a;
console.log(typeof(b));
console.log(b);
function multiply(p1,p2)
{
    return p1*p2;
}
var mul=multiply(5,6);
console.log(mul);
document.write(" hello ");
*/