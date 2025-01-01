const mobileInput = document.getElementById('mobile-number');
const continueBtn = document.querySelector('.continue-btn');
const closeBtn = document.querySelector('.close-btn');

// Enable button when input is valid
mobileInput.addEventListener('input', () => {
  const isValid = mobileInput.value.trim().length === 10 && /^[0-9]+$/.test(mobileInput.value);
  if (isValid) {
    continueBtn.classList.add('active');
    continueBtn.removeAttribute('disabled');
  } else {
    continueBtn.classList.remove('active');
    continueBtn.setAttribute('disabled', true);
  }
});

// Close modal
closeBtn.addEventListener('click', () => {
  document.querySelector('.modal-overlay').style.display = 'none';
});
