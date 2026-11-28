(function() {
    var p="Friend";
    console.log(this);
    console.log("hello this ,p " + this,p);
    console.log("hello + p " + p);
            
})();
//console.log("hello = " + p);

function getThis() {
    console.log(this);
}
getThis();
