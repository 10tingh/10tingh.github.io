(function(){
  var form = document.getElementById('contactForm');
  if (!form) return;
  var statusEl = form.querySelector('.contact-form-status');
  var submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Honeypot: Web3Forms silently accepts (but flags) submissions where
    // this hidden field got filled in -- a real visitor never sees or
    // touches it, only bots that fill in every field blindly do.
    if (form.botcheck && form.botcheck.checked) return;

    submitBtn.disabled = true;
    statusEl.textContent = 'Sending…';
    statusEl.className = 'contact-form-status';

    // Submitting the raw FormData (rather than JSON.stringify with an
    // explicit application/json Content-Type) keeps this a CORS "simple
    // request" -- multipart/form-data is one of the three content types
    // that skip the preflight OPTIONS round-trip, which Web3Forms' API
    // doesn't answer correctly, causing every JSON-header submission to
    // fail with a CORS error before it ever reaches their server.
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    })
      .then(function(res){ return res.json(); })
      .then(function(result){
        if (result.success) {
          form.reset();
          statusEl.textContent = 'Thanks — message sent. I’ll get back to you soon.';
          statusEl.classList.add('is-success');
        } else {
          statusEl.textContent = 'Something went wrong. Try again, or email me directly.';
          statusEl.classList.add('is-error');
        }
      })
      .catch(function(){
        statusEl.textContent = 'Something went wrong. Try again, or email me directly.';
        statusEl.classList.add('is-error');
      })
      .finally(function(){
        submitBtn.disabled = false;
      });
  });
})();
