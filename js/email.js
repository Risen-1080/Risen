// email.js - EmailJS form submit (final version)

function sendContactForm(e){
  e.preventDefault();

  var btn = document.querySelector('#sendBtn');
  btn.disabled = true;

  var form = document.querySelector('#contactForm');
  var formData = new FormData(form);
  var params = {};
  formData.forEach(function(value, key){ params[key] = value; });

  // ✅ 配置 EmailJS
  var SERVICE_ID = "service_ktegr9n";          // 你的 Service ID
  var TEMPLATE_ID = "template_2d4q888";        // 你的 Template ID
  var USER_ID = "6dA8y7utpJK6zFv2a";           // 你的 Public Key

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
    .then(function(){
      alert("✅ 邮件发送成功！我们会尽快回复。");
      form.reset();
      btn.disabled = false;
    }, function(err){
      console.error(err);
      alert("❌ 邮件发送失败，请稍后重试。");
      btn.disabled = false;
    });
}
