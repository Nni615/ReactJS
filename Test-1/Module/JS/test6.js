var p,r,t;                                  
p=prompt("enter the value of p: ");
r=prompt("enter the value of r: ");
t=prompt("enter the value of t: ");
let amount=p*(Math.pow((1+r/100),t));
let CI =amount-p;
document.write("Compound Intrest = "+CI);