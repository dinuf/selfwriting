window.onload = function () {

  var input = document.getElementById('input');
  var newInput =
      `
     
      /* Hello, my name is Florin Dinu.
      Frontend Web Developer & UX Enthusiast.
      Here you can check my self-writing Portofolio.
      I hope you will enjoy it. */

      /* Start css */

      #body {
        transition:1s;
        background: rgb(156,161,180);
        background: linear-gradient(0deg, rgba(156,161,180,1) 0%, rgba(156,161,180,1) 16%, rgba(122,126,140,1) 30%, rgba(153,158,177,1) 100%);
      }
     
      #linkedin-contact {
      background: rgb(34,35,40);
      width: 300px;
      height: 260px;
      background: linear-gradient(90deg, rgba(34,35,40,1) 0%, rgba(31,32,37,1) 50%, rgba(28,29,34,1) 100%);
      margin-right:20px;
      margin-left:20px;
      }

      #latestwork-contact {  
        background: rgb(28,29,34);
        width: 300px;
        height: 260px;
        background: linear-gradient(90deg, rgba(28,29,34,1) 0%, rgba(38,39,44,1) 50%, rgba(57,58,63,1) 100%);
        margin-right:20px;
        margin-left:20px;
        }

        #github-contact {
          background: rgb(59,60,65);
          width: 300px;
          height: 260px;
          background: linear-gradient(90deg, rgba(59,60,65,1) 0%, rgba(66,68,72,1) 50%, rgba(69,71,75,1) 100%);
          margin-right:20px;
          margin-left:20px;
          }

      .contact-index {
        display: inline-block;
        color:rgb(255, 255, 255);
        transition:2s;
        font-size:20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 25px;
        margin-left:45px;
      }

     .logos {
        display:block;
        width: 60px;
        height: 60px;
        transition:2s;
        margin:50px auto 0px auto;
     }
     .contact-text {
      display:block;
      color:rgb(255, 255, 255);
      transition: 2s;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size:22px;
      width: fit-content;
      margin:45px auto 0px auto;

      /* End css */
      `;


      
      setTimeout(selfWriting,6300);
      
  function selfWriting(){

    var commNumber=0;
    var chars = newInput.split("");
    
    var styleText = '';
    charsToSpan = '';
 
    var jsElem = document.createElement('style');
    document.getElementById('body').appendChild(jsElem);
  
    i = 0;
    var comm = false;

  


  var clear = setInterval(function () {

    var result = '';
    charsToSpan = charsToSpan + chars[i];
    if (chars[i] == "/" && chars[i + 1] == "*") {

      comm = true;
      result +=  "<em id=comment" + commNumber + " class=comment-color>/</em>";
    }

    else if (chars[i-1] =="/" && chars[i - 2] == "*") {

      comm = false;
      commNumber++;
      
    }
    

    if (comm){
 
    var toBeAdded = 'comment'+ commNumber
    if(document.getElementById(toBeAdded)){
      
      document.getElementById(toBeAdded).innerHTML+=chars[i];
    }
    
      

     }

    if (!comm) {

      result += chars[i];


    }

    input.innerHTML += result;

    if (!comm) {

      styleText = styleText + chars[i];

    }
      jsElem.innerHTML = styleText;
    

    i = i + 1;
    if (i == newInput.length - 1) {

      clearInterval(clear);

    }

    var bottomScroll=document.getElementById("chat");
    bottomScroll.scrollTop=input.scrollHeight+input.clientHeight;

  }, 40);





  }

  


};
