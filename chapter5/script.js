`use strict`;

const lang = document.querySelector('html').lang;

if(lang === 'ja') {
  document.querySelector('option[value="5-02_location.html"]').selected = true;
}
else if(lang === 'en') {
  document.querySelector('option[value="5-02_location-en.html"]').selected = true;
}
else if(lang === 'zh') {
  document.querySelector('option[value="5-02_location-zh.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}