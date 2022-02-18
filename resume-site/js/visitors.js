function getVisitors() {
    addVisitor();
    $.get("https://vrweeaypt3.execute-api.eu-central-1.amazonaws.com/Prod/count").done(function(data){
        $("#visitors").text("You are visitor number " + data.count);
    });
}

function addVisitor() {
    $.get("https://vrweeaypt3.execute-api.eu-central-1.amazonaws.com/Prod/add").done(function(data){
        console.log("Your visit has been logged!");
    });
}