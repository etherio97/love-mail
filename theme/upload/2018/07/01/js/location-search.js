 var recipient = recipient();
 recipient = function recipient() {
    ls = location.search;
    ls = ls.slice(1);
    ls = ls.split("&");
    return ls;
}

function lsMethod() {
    //* String Method on Location Search 

}