var method = lsOutput(0);
var recipient = lsOutput(1);

function lsOutput(x){
    var result = search(x);
    return result[1];
}

function search(x) {
    var a = decodeURIComponent(location.search);
    var b = a.slice(1);
        a = b.split("&");
    return a[x].split("=");
}