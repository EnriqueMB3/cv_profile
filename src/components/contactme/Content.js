import React from 'react';
import emailjs from 'emailjs-com';

export const Content = ({toggle}) => {


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cvprofile', 'template_cvprofile', e.target, 'user_UIjdTGNriEIQqRoEOJ7p2')
          .then((result) => {
              console.log(result.text);
              toggle();
          }, (error) => {
              console.log(error.text);
          });
         

      }

    return (
        <div className="__contactme_content" onSubmit={sendEmail}>
             <form className="__contactme-form" >
                <input type="hidden" name="contact_number" required />
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit"  className="btn btn-green btn-xl" >Send</button>
            </form>
        </div>
    )
}
