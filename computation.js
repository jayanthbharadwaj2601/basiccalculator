d=undefined
e=undefined
function input1()
{
    a=document.getElementById("num1").value
    d=parseInt(a);
    console.log(d);
}
function input2()
{
    a=document.getElementById("num2").value
    e=parseInt(a);
    console.log(e);
}
x=undefined
function add()
{     
    if(d!=undefined && e!=undefined)
    {   
        f=d+e;
        console.log(f)
        g=document.createElement('p')
        h=document.getElementsByClassName("result")
        console.log(h)
        g.innerText=String(f);
        console.log(g);
        if (x==undefined)
        {   x=g
            h[0].appendChild(g);
        }
        else
        {
            h[0].replaceChild(g,x);
            x=g;
        }    
    }
}
function subtract()
{
    if(d!=undefined && e!=undefined)
    {   
        f=d-e;
        console.log(f)
        g=document.createElement('p')
        h=document.getElementsByClassName("result")
        console.log(h)
        g.innerText=String(f);
        console.log(g);
        if (x==undefined)
        {   x=g
            h[0].appendChild(g);
        }
        else
        {
            h[0].replaceChild(g,x);
            x=g;
        }
        
    }

}
function multiply()
{
    if(d!=undefined && e!=undefined)
    {   
        f=d*e;
        console.log(f)
        g=document.createElement('p')
        h=document.getElementsByClassName("result")
        console.log(h)
        g.innerText=String(f);
        console.log(g);
        if (x==undefined)
        {   x=g
            h[0].appendChild(g);
        }
        else
        {
            h[0].replaceChild(g,x);
            x=g;
        }    
    }
}
function divide()
{
    if(d!=undefined && e!=undefined)
    {   
        f=d/e;
        console.log(f)
        g=document.createElement('p')
        h=document.getElementsByClassName("result")
        console.log(h)
        g.innerText=String(f);
        console.log(g);
        if (x==undefined)
        {   x=g
            h[0].appendChild(g);
        }
        else
        {
            h[0].replaceChild(g,x);
            x=g;
        }    
    }
}