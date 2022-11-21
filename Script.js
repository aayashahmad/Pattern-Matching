
function checkEmail(str)
{

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str))
    document.getElementById("message").innerHTML = "Please enter a valid email address";  
   
}

function emailerror(){
    document.getElementById("message").innerHTML = " ";  
  }


  function checkStr(str)
{



    var stri = 'Hello world!! This is Educative';

    // let pattern = /${str}/gi
    // stri.match(pattern)
    
    if ( stri.search(str) != -1 ) {
    document.getElementById("message2").innerHTML = "Matching." + str + " at " + stri.indexOf(str);  
}
else {
    document.getElementById("message2").innerHTML = " Not matching." + stri.indexOf(str); 
}
}
function ferror(){
    document.getElementById("message2").innerHTML = " ";  
  }

//   const regex = new RegExp(/^a...s$/);
// console.log(regex.test('alias'));

//using search()
// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); 
// console.log(str.search(reDot)); 
