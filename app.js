(() => {
 const $=s=>document.querySelector(s),form=$("#loginForm"),card=$(".login-card"),username=$("#username"),password=$("#password"),button=$("#signIn"),msg=$("#message"),welcome=$("#welcome");
 let busy=false,timer;
 function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>t.classList.remove("show"),1800)}
 function mascotWatch(on){card.classList.toggle("watching",on)}
 password.addEventListener("focus",()=>mascotWatch(true));
 password.addEventListener("blur",()=>{if(!password.value)mascotWatch(false)});
 password.addEventListener("input",()=>mascotWatch(password.value.length>0));
 $("#togglePassword").addEventListener("click",()=>{const visible=password.type==="password";password.type=visible?"text":"password";$("#togglePassword").textContent=visible?"◎":"◉";$("#togglePassword").setAttribute("aria-label",visible?"Hide password":"Show password")});
 function setBusy(on){busy=on;button.disabled=on;button.classList.toggle("loading",on);button.querySelector(".btn-text").textContent=on?"Signing you in...":"Sign in"}
 form.addEventListener("submit",async e=>{
  e.preventDefault();if(busy)return;
  if(!username.value.trim()||!password.value){toast("Enter your username and password");return}
  card.classList.remove("done");setBusy(true);msg.textContent="";msg.classList.remove("show");welcome.textContent="Checking your details...";
  await new Promise(resolve=>setTimeout(resolve,1500));
  setBusy(false);card.classList.add("done");mascotWatch(false);
  button.classList.add("success");button.querySelector(".btn-text").textContent="Welcome back!";
  welcome.textContent=`Good to see you, ${username.value.trim()}. Your husky's happy.`;
  msg.textContent="✓ Signed in successfully (demo)";msg.classList.add("show");
  $("#password").blur();toast("Welcome back!");
 });
 function openModal(title,content){$("#modalContent").innerHTML=`<h2>${title}</h2>${content}`;$("#modal").classList.add("open")}
 function closeModal(){$("#modal").classList.remove("open")}
 $("#forgot").addEventListener("click",()=>openModal("Reset your password",`<p>Enter your username or email and we'll show the next step.</p><label>Username or email</label><input id="resetIdentity" placeholder="you@example.com"><button class="action" id="resetSubmit">CONTINUE</button>`));
 $("#create").addEventListener("click",()=>openModal("Create your Den account",`<p>New to Den? Create an account to get started.</p><label>Choose a username</label><input id="newUsername" placeholder="Your username"><label>Email address</label><input id="newEmail" type="email" placeholder="you@example.com"><button class="action" id="createSubmit">CREATE ACCOUNT</button>`));
 $("#google").addEventListener("click",()=>openModal("Continue with Google",`<p>This demo does not connect to Google OAuth. In a production app, this button would redirect to your Google sign-in flow.</p><button class="action" id="socialClose">GOT IT</button>`));
 $("#apple").addEventListener("click",()=>openModal("Continue with Apple",`<p>This demo does not connect to Apple Sign in. In a production app, this button would start Apple's authentication flow.</p><button class="action" id="socialClose">GOT IT</button>`));
 $("#closeModal").addEventListener("click",closeModal);
 $("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
 document.addEventListener("click",e=>{
  if(e.target.id==="socialClose"){closeModal();return}
  if(e.target.id==="resetSubmit"){const value=$("#resetIdentity").value.trim();if(!value){toast("Enter your username or email");return}closeModal();toast("Password reset flow is a demo")}
  if(e.target.id==="createSubmit"){const value=$("#newUsername").value.trim(),email=$("#newEmail").value.trim();if(!value||!email){toast("Complete both fields");return}closeModal();username.value=value;toast("Account creation is a demo")}
 });
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
})();