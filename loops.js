var arr = [150, 20, 500, 280, 90];
var newarr = arr.map(myfun)

function myfun(num)
{
    return num/10;
}

newarr.forEach(myprint)

function myprint(num)
{
    console.log(num+" ");
}