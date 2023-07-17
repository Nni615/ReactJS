var rows=5;
var row="";
for(let i=1; i<=rows; i++){
    for(let j=0; j<i; j++)
    {
        row+="*";
    }
    row+="<br>";
}
console.log(row);

var i,j;
for(i=5; i>=1; i--)
{
    for(j=1; j<=i; j++){
        document.write("*");
        document.write("<br>");
    }
}