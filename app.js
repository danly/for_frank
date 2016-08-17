// Logic here
function fn() {
  var firstBtnEl = document.getElementById('first_btn'),
      content = document.getElementsByClassName('content')[0];

  firstBtnEl.addEventListener('click', function() {
    content.innerHTML = 'This is a simple boilerplate for you';
  });

  console.log('JS loaded!');
}

// Vanilla js document ready
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Init
ready(fn);
