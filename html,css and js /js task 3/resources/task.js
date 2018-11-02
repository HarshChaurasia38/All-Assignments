

var b=document.getElementById("textbox").value;

console.log(b);

var count=0;

function deletion()
{
    for (let i=0;i<b.length-1;i++)
    {
            if(b[i]==b[i+1])
            {
                count++;
            }
    }

     document.getElementById("show").innerHTML="No. of deletion required ="+count; 
     console.log(count);

}