
const COLORS = { 
    primary: "#275997",  
    secondary: "#214D82", // UPDATE THIS 
    third: "#DEEAF7",     
    forth: "#FCF8EF",     
  };
const FONT_STACK = "'Gaegu', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"; // UPDATE THIS 

export function contactEmail(contact, logo_url){

    const {
        first_name,
        last_name,
        email,
        message,
    } = contact;

    const logo = logo_url || "https://www..."

    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        
        <style type="text/css">
          @import url('https://fonts UPDATE THIS'); 
          body {
            margin: 0;
            padding: 0;
          }
          a {
            color: ${COLORS.primary};
          }
        </style>
      </head>
      <body style="margin:0;padding:24px;">
        <div style="
          max-width:640px;
          margin:0 auto;
          background:#ffffff;
          border-radius:16px;
          padding:32px 32px 28px;
          box-shadow:0 10px 30px rgba(0,0,0,0.05);
          font-family:${FONT_STACK};
          color:#111827;
        ">
          <!-- Logo -->
          <div style="text-align:center;margin-bottom:24px;">
            <img src="${logo}" alt="Anna Beauty" style="max-width:170px;height:auto;" />
          </div>
    
          <!-- Title
          <h1 style="
            font-size:26px;
            margin:0 0 16px;
            font-weight:700;
            letter-spacing:0.04em;
            color:${COLORS.primary};
          ">
            TITLE
          </h1>
          -->
    
          <!-- Body text -->
          <p style="font-size:15px;line-height:1.7;margin:0 0 4px;">
            Hi ${first_name || "there"},
          </p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 4px;">
            UPDATE THIS.
          </p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
            UPDATE THIS
          </p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 24px;">
          UPDATE THIS!<br/>
            <span style="white-space:nowrap;">Anna Beauty team</span>
          </p>
    


    
          <!-- Footer -->
          <p style="font-size:12px;color:#9ca3af;text-align:center;margin:0;">
            Questions? Contact Anna Beauty at
            <a href="mailto:anna-beauty@ UPDATE THIS " style="color:${COLORS.primary};text-decoration:none;">
            anna-beauty@ UPDATE THIS
            </a>.
          </p>
        </div>
      </body>
    </html>
    `;

}

export function purcahseEmail(contact, logo_url){

    const {
        name,
        email,
    } = contact;

    const logo = logo_url || "https://www..."

    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        
        <style type="text/css">
          @import url('https://fonts UPDATE THIS'); 
          body {
            margin: 0;
            padding: 0;
          }
          a {
            color: ${COLORS.primary};
          }
        </style>
      </head>
      <body style="margin:0;padding:24px;">
        <div style="
          max-width:640px;
          margin:0 auto;
          background:#ffffff;
          border-radius:16px;
          padding:32px 32px 28px;
          box-shadow:0 10px 30px rgba(0,0,0,0.05);
          font-family:${FONT_STACK};
          color:#111827;
        ">
          <!-- Logo -->
          <div style="text-align:center;margin-bottom:24px;">
            <img src="${logo}" alt="Anna Beauty" style="max-width:170px;height:auto;" />
          </div>
    
          <!-- Title-->
          <h1 style="
            font-size:26px;
            margin:0 0 16px;
            font-weight:700;
            letter-spacing:0.04em;
            color:${COLORS.primary};
          ">
          Thank you for your payment ✨
          </h1>
          
    
          <!-- Body text -->
          <p style="font-size:15px;line-height:1.7;margin:0 0 4px;">
            Hi ${first_name || "there"},
          </p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 4px;">
          I've received your payment for your beauty service. You'll fill out a short questionnaire.
          </p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
          Within <strong>2–3 business days</strong>, you’ll get your custom skincare plan tailored just for you! ✨
          <br/>
            <span style="white-space:nowrap;">Anna Beauty team</span>
          </p>
          

          <div style="text-align:center;margin-bottom:24px;">
            <a href="${reviewUrl}" style="
              display:inline-block;
              padding:12px 40px;
              border-radius:999px;
              background:${COLORS.primary};
              color:#ffffff;
              text-decoration:none;
              font-size:15px;
              letter-spacing:0.08em;
              text-transform:uppercase;
            ">
              View Recipt
            </a>
          </div>
          <div style="text-align:center;margin-bottom:24px;">
            <a href="${reviewUrl}" style="
              display:inline-block;
              padding:12px 40px;
              border-radius:999px;
              background:${COLORS.primary};
              color:#ffffff;
              text-decoration:none;
              font-size:15px;
              letter-spacing:0.08em;
              text-transform:uppercase;
            ">
              Questionnaire
            </a>
          </div>
    


    
          <!-- Footer -->
          <p style="font-size:12px;color:#9ca3af;text-align:center;margin:0;">
            Questions? Contact Anna Beauty at
            <a href="mailto:anna-beauty@ UPDATE THIS " style="color:${COLORS.primary};text-decoration:none;">
            anna-beauty@ UPDATE THIS
            </a>.
          </p>
        </div>
      </body>
    </html>
    `;

}