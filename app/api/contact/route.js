import {resend} from "resend"
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req){
    try {
        const {first_name, last_name, email, message} = await req.json();

        if(!first_name || !last_name || !email || !message){
            return NextResponse.json(
                { ok: false, error: "Missing name/last name/email/message"},
                { status: 400}
            );
        }

        const from_email = process.env.CONTACT_FROM;
        const business = process.env.BUSINESS_NAME;

        if(process.env.RESEND_API_KEY){

            await resend.emails.send({
                from: `${business} <${from_email}>`,
                to: email,
                cc: [from_email],
                subject: `Thank you for contacing ${business}✨`,
                html:``
            })
        }


    }catch (error){

    }
}