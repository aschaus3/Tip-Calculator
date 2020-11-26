$(document).ready(function()
{
    $('#custom').hide();
    $('#percent').on('change',function(e)
    {
        var current = $(e.currentTarget);
        if(e.currentTarget.value == 1)
        {
            $('#custom').show();
        }
        if(e.currentTarget.value != 1)
        {
            $('#custom').hide();
        }

    });
});


document.getElementById("calculate").addEventListener("click", bill);
function bill()
{
    var BillCost = document.getElementById("cost").value;
    var numPeople = document.getElementById("people").value;
    var percent = document.getElementById("percent").value;
    var cPercent = (document.getElementById("custom").value) * .01;

    if(BillCost == "" || BillCost <=0)
    {
        alert("Please enter a price");
    }

    if(numPeople == ""||numPeople <1)
    {
        alert("Please enter a posative integer for number of people")
    }

    if(cPercent == ""){
        var tipTotal = (percent * BillCost);
        var totalcost = (tipTotal - -BillCost);
    }
    else{
        var tipTotal = (cPercent * BillCost);
        var totalcost = (tipTotal - -BillCost);
    }

    var perPerson = totalcost/numPeople
    perPerson = perPerson.toFixed(2);

    if(BillCost != "" && BillCost >0 && numPeople != "" && numPeople>=1)
        alert("Total for each person: " + perPerson)
}
