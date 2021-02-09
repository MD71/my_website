var dog = document.getElementById("dog1"),
    count = 0;
var cat2 = document.getElementById("cat1"),
    count2 = 0;

dog.addEventListener('click', function(){
count +=1;
var writeIt = document.getElementById("my-elem");
writeIt.innerHTML = count;
if (count >=30){
alert("You sure love dogs!");
}
}, false)
;

cat2.addEventListener('click', function(){
count2 +=1;
var writeIt = document.getElementById("my-elem2");
writeIt.innerHTML = count2;
}, false);
