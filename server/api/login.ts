import jwt from 'jsonwebtoken';
import postmark from 'postmark';

export default defineEventHandler(async (event) => {
    const email = await readBody(event);
    /* email.email */

    const token = {
        access: jwt.sign(
            {name: email.email},
            'secret',
            {expiresIn: '1h', algorithm: 'none'},
        )
    }

    const options = {
        "From": "login@redsquad.tech",
        "To": email.email,
        "Cc": "bavadim@redsquad.tech",
        "Bcc": "julibel@redsquad.tech",
        "Subject": "Insight Stream confirm",
        "Tag": "Invitation",
        "HtmlBody": `<a href="https://insightstream-nuxt.vercel.app/howto?token=${token.access}">
                    Confirm email
                    </a>`,
        "TextBody": "Hello",
        "ReplyTo": "login@redsquad.tech",
        "Metadata": {
            "Color":"blue",
            "Client-Id":"12345"
        },
        "Headers": [
            {
                "Name": "CUSTOM-HEADER",
                "Value": "value"
            }
        ],
        "TrackOpens": true,
        "TrackLinks": "HtmlOnly",
        "MessageStream": "outbound"
    };

    const res = await fetch("https://api.postmarkapp.com/email", {
        body: JSON.stringify(options),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Postmark-Server-Token": "a5857605-ddcc-4ca0-857c-076a72505a83",
        },
        method: "POST",
    });

    return {
        message: 'Email sent',
        link: `https://insightstream-nuxt.vercel.app/howto?token=${token.access}` };
});
