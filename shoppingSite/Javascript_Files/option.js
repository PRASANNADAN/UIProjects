document.addEventListener("DOMContentLoaded", () => {
var str=''; // variable to store the options
for (var i=0; i < countries.length;++i)
{
str += '<option value="'+ countries[i] +'">'+ countries[i] +' </option>'; // Storing options in variable
}
// console.log(str);
var my_list=document.getElementById("country");
my_list.innerHTML = str;
// document.querySelector(my_list).innerHTML = str
})