document.getElementById("submitbutton").onclick = function()
{
    let temp;

    if(document.getElementById("cRadio").checked)
    {
        temp = document.getElementById("floatingText").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("floatingCon").value = temp + "°C";
    }
    else if(document.getElementById("fRadio").checked)
    {
        temp = document.getElementById("floatingText").value;
        temp = Number(temp);
        temp = toFarenheit(temp);
        document.getElementById("floatingCon").value = temp + "°F";
        
    }
    else{
        alert("Select any radio");
    }
}




function toCelsius(temp)
{
    return (temp - 32) * (5/9);
}
function toFarenheit(temp)
{
    return (temp * 9/5) + 32;
}