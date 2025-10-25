# Studio — Web Solutions (Vite + React + Tailwind)

This is a small professional portfolio/agency website scaffold built with Vite, React and Tailwind CSS. It includes:

- Home, Projects and Contact sections
- Contact form that posts to a Google Sheets-backed webhook (Google Apps Script) and falls back to EmailJS for direct email
- Simple project showcase for your provided projects

Quick setup
1. Install dependencies

```powershell
npm install
```

2. Copy `.env.example` to `.env` and fill values

- `VITE_GOOGLE_SCRIPT_URL` — (recommended) deploy the Google Apps Script web app that appends POSTed data to a Google Sheet. See the "Google Apps Script" section below.
- Or optionally configure EmailJS (`VITE_EMAILJS_USER`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`) as fallback.

3. Run dev server

```powershell
npm run dev
```

Google Apps Script (to receive form submissions and append to Google Sheets)
1. Create a new Google Sheet (this will act like your "Excel")
2. In the sheet go to Extensions → Apps Script and replace Code.gs with the following:

```javascript
function doPost(e){
  try{
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name, data.email, data.company || '', data.message]);
    return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err){
    return ContentService.createTextOutput(JSON.stringify({status:'error', error:err})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Deploy → New deployment → Select "Web app" → Set "Who has access" to "Anyone" (or as you prefer) → Deploy. Copy the Web App URL and paste into `VITE_GOOGLE_SCRIPT_URL`.

EmailJS fallback
1. Sign up at https://www.emailjs.com/
2. Create a service (e.g., Gmail) and a template. The client code uses template variables: `from_name`, `from_email`, `message`, `company`.
3. Add `VITE_EMAILJS_USER`, `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` to `.env`.

Notes
- The contact form first attempts to POST to the Google Apps Script URL. If that fails, it tries EmailJS (client-side). Configure at least one.
- For production, consider using a server or serverless function with authenticated SMTP or a verified transactional email provider if you want guaranteed delivery and logging.

Next steps / customization ideas
- Add analytics, newsletter signup, or a CMS for easy project updates
- Improve accessibility and tests
- Add CI/CD deployment steps for Vercel/Netlify
