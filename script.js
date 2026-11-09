const form = document.getElementById('loginForm');
const button = document.getElementById('signin');
const husky = document.getElementById('husky');
const statusLine = document.getElementById('status');
const password = document.getElementById('password');
const username = document.getElementById('username');
const togglePassword = document.getElementById('togglePassword');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

togglePassword.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  togglePassword.textContent = showing ? '◎' : '◉';
  togglePassword.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

password.addEventListener('focus', () => husky.classList.add('is-watching'));
password.addEventListener('blur', () => husky.classList.remove('is-watching'));

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  button.disabled = true;
  button.classList.remove('dooropen', 'walking', 'out');
  husky.classList.remove('is-happy');
  statusLine.textContent = 'Opening the Den…';

  // Door opens, the little visitor walks through, then the husky celebrates.
  await wait(80);
  button.classList.add('dooropen');
  await wait(380);
  button.classList.add('walking');
  await wait(180);
  button.classList.add('out');
  await wait(760);
  button.classList.remove('walking', 'out', 'dooropen');
  husky.classList.add('is-happy');
  statusLine.textContent = `Welcome${username.value.trim() ? ', ' + username.value.trim() : ''}! Demo sign-in complete.`;
  button.disabled = false;
});

document.getElementById('forgotLink').addEventListener('click', (e) => {
  e.preventDefault();
  statusLine.textContent = 'Password recovery is a demo placeholder.';
});
document.getElementById('createLink').addEventListener('click', (e) => {
  e.preventDefault();
  statusLine.textContent = 'Account creation is a demo placeholder.';
});
document.getElementById('google').addEventListener('click', () => {
  statusLine.textContent = 'Google sign-in needs OAuth configuration.';
});
document.getElementById('apple').addEventListener('click', () => {
  statusLine.textContent = 'Apple sign-in needs OAuth configuration.';
});

// Keep the mascot gently alive while the page is idle.
setInterval(() => {
  if (!husky.classList.contains('is-happy') && !husky.classList.contains('is-watching')) {
    husky.classList.toggle('is-watching');
    setTimeout(() => husky.classList.remove('is-watching'), 350);
  }
}, 4200);
