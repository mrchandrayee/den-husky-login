# Den — Husky Login UI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/den-husky-login/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable, responsive HTML/CSS/JavaScript reconstruction of the uploaded **7.57-second** screen recording (720 × 1280, 30 fps).

## Run
1. Extract `den-husky-login.zip`.
2. Open `index.html` in Chrome, Edge, Firefox or Safari.
3. Enter any non-empty username and password, then press **Sign in**.
4. Focus the password field to see the husky cover its eyes with its paws.
5. Use the eye icon to show/hide the password.
6. Try Remember me, Forgot password?, Create account, Google and Apple controls.

No npm, build tools, backend or API keys are required.

Optional local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`.

## What is visible in the video

The video shows a dark navy browser-like canvas with a centered glassy login panel and a cartoon husky mascot above it.

- Brand/title: **Den**
- Subtitle: **Welcome back. Your husky's keeping watch.**
- Username and Password inputs
- Password visibility eye icon
- Remember me checkbox
- Forgot password? link
- Blue gradient **Sign in** button with small decorative icons
- Google and Apple sign-in buttons
- Footer link: **New to Den? Create account**
- Small source preview cards at the bottom labelled HTML, CSS and JS.

The video demonstrates text entry in the username field, then password entry while the husky covers its eyes. The sign-in button changes to **Signing you in...**, a small animated icon changes appearance, and the final state displays **Welcome back!** The husky closes its eyes in a happy expression.

## Source extraction note

The three HTML/CSS/JS source panels at the bottom of the recording are visible but very small. Individual source lines are not legible enough for a faithful character-by-character transcription. The panels in this reconstruction are explanatory examples, not claimed to be the original source. The rest of the code is rebuilt from the visible UI and observed interactions.

## Implemented
- Responsive dark login panel with subtle glass effect and blue ambient background.
- Custom SVG husky mascot.
- Husky paw-cover animation while the password field is focused/filled.
- Password show/hide control.
- Remember me checkbox.
- Forgot password modal.
- Create account modal.
- Google / Apple informational sign-in modals.
- Sign in loading state and animated spinner.
- Demo success state: “Welcome back!”
- Keyboard-accessible native form controls.
- Reduced-motion support.

## Files
- `index.html` — page structure, SVG mascot, login form and source preview cards.
- `styles.css` — dark glass UI, mascot states, loading/success animations and responsive styling.
- `app.js` — password visibility, mascot reactions, form validation, simulated login and modal actions.
- `README.md` — run instructions and video observations.

## Important limitations
This is a frontend-only demonstration. Any non-empty username/password pair produces a simulated successful login. There is no real authentication, password verification, OAuth, account creation, password reset, database or session handling. Google and Apple buttons explain the absent OAuth connection instead of pretending to authenticate. For production use, connect the form to a secure backend, hash passwords server-side, implement session management and configure the OAuth providers.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
