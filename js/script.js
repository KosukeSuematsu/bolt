      var contactBtn = document.getElementById("under_menu-bar");
      contactBtn.style.display ="none";

      var menuBtn = document.getElementsByClassName('wrapper_menu-bars')[0];
      menuBtn.addEventListener('click', function() {
        if(contactBtn.style.display=="block"){
          // noneで非表示
          contactBtn.style.display = "none";
        }else{
          // blockで表示
          contactBtn.style.display = "block";
        }
      });