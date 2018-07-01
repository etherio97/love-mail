var ls = function () {
    var a = location.search;
    var b = a.slice(1);

    return b.split("&");
}

function lsMethod(num) {
    //* String Method on Location Search 
    var method = {0:"decode", 1:"encode"};
    
    return method[num];
}

var method = lsMethod();
var param = ls();