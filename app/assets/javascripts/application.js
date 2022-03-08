// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function DrumItBaby() {
  console.log("Starting Drum It Baby");
  console.log("  > Setting up a listener on the keyboard.");
  document.addEventListener("keydown",
    function (my_event) {
      let my_pressed_key = my_event.key.toUpperCase();
      let my_key_code = my_pressed_key.charCodeAt().toString();
      console.log(`  > Key pressed : ${my_pressed_key} (${my_key_code})`);
      // let my_span = document.getElementsByTagName(`div[data-key='${my_key_code}']`)[0];
      let my_key_divs = document.getElementsByClassName("key");
      console.log("  > Key table:" + my_key_divs);
      for (i = 0; i < my_key_divs.length; i++) {
        console.log("    - Key element: " + my_key_divs[i]);
        if (my_key_divs[i].getAttribute("data-key") == my_key_code) {
          let my_div = my_key_divs[i];
          console.log("  > <div class='key'> with data-key='" + my_key_code + "' has been found!");
          // let my_sound_type = my_div.childNodes[1].textContent;
          my_div.classList.add('playing');
          let my_sound_type = my_div.getElementsByTagName("span")[0].textContent;
          // let my_audio = new Audio(my_sound_type + ".wav");
          console.log(`  > Now trying to play : '${my_sound_type}.wav'`);
          document.getElementById(my_sound_type).currentTime = 0;
          document.getElementById(my_sound_type).play();
        }
        else {
          console.log("  > OUPS! This is not the <div class='key'> with data-key='" + my_key_code + "' you've been looking for. Try again!");
        }
        my_key_divs[i].addEventListener('transitionend', removeTransition)
      }
    });
}

DrumItBaby();
