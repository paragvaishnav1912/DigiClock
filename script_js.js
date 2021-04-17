var a = document.getElementById( "hr" );
var b = document.getElementById( "min" );
var c = document.getElementById( "sec" );
var f = document.getElementById( "pre_anti" );
var d = new Date();
a.innerText = d.getHours();
var sec = d.getSeconds();
var min = d.getMinutes();
var hour = d.getHours();
setInterval( function e ()
{
    if ( sec < 10 )
    {
        flag = false;
        b.innerText = min;
        c.innerText = '0' + sec;
        sec++;
    }
    else
    {
        sec++;
        c.innerText = sec;
        b.innerText = min;
        if ( sec >= 59 )
        {
            sec = 0;
            c.innerText = "0" + sec;
            min++;
            b.innerText = min;
            if ( min == 59 )
            {
                hour++;
                a.innerText = hour;
            }
            e();
        }
    }
}, 1000 );

if ( d.getHours() >= 0 && d.getHours() <= 11 )
{
    f.innerText = "AM";
}
else
{
    f.innerText = "PM";
}
