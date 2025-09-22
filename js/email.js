
  // email.js - EmailJS form submit
  // Service ID provided by user: service_ktegr9n
  // You MUST replace TEMPLATE_ID and USER_ID with your EmailJS template id and public key (user id).
  (function(){
    // load EmailJS SDK
    var script = document.createElement('script');
    script.src = 'https://cdn.emailjs.com/sdk/3.2.0/email.min.js';
    script.onload = function () {
      if(window.emailjs){ emailjs.init('YOUR_EMAILJS_USER_ID'); }
    };
    document.head.appendChild(script);

    window.sendContactForm = function(e){
      e.preventDefault();
      var btn = document.querySelector('#sendBtn');
      btn.disabled = true;
      var form = document.querySelector('#contactForm');
      var formData = new FormData(form);
      var params = {};
      formData.forEach(function(value, key){ params[key] = value; });

      // TODO: set correct template id and ensure you've initialized emailjs with your user id.
      var SERVICE_ID = 'service_ktegr9n';
      var TEMPLATE_ID = 'template_2d4q888'; // <-- REPLACE this with your EmailJS template id
      var USER_ID = '6dA8y7utpJK6zFv2a'; // <-- REPLACE with your EmailJS public key/user id

      if(!window.emailjs || !emailjs.send){
        alert('EmailJS not loaded. Please check your network or include EmailJS SDK and set your USER_ID.');
        btn.disabled = false;
        return;
      }

      emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
        .then(function(){
          var successMsg = document.querySelector('[data-i18n="send_success"]');
          alert(successMsg ? successMsg.innerText : 'Sent');
          form.reset();
          btn.disabled = false;
        }, function(err){
          console.error(err);
          var errMsg = document.querySelector('[data-i18n="send_error"]');
          alert(errMsg ? errMsg.innerText : 'Error');
          btn.disabled = false;
        });
    };
  })();
