var x= prompt("enter a year: ");

if((0 == x % 4) && (0 != x % 100) || (0 == x % 400))
{
    document.write("It is an leap year: "+x);
}
else{
    document.write("it is not an leap year: "+x);
}