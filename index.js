        var toggle = document.querySelector("#nav-links");
        console.log(toggle);

       function appear(){
        console.log(toggle);
        console.log(toggle.style);

        console.log(toggle.style.display);

        if(toggle.style.display=="block"){
          toggle.style.display="none";
        }
        else{
          toggle.style.display="block";
        }
       }
 