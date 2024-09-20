import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const HelpCenter = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_4d574bg', 'template_xxo8v4f', form.current, {
            publicKey: 'Eblfhrh3axXzu0qKZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <div class="contact_us_2">
        <div class="responsive-container-block big-container">
            <div class="blueBG">
            </div>
            <div class="responsive-container-block container">
            <form class="form-box" ref={form} onSubmit={sendEmail}>
                <div class="container-block form-wrapper">
                <p class="text-blk contactus-head">
                    Get in Touch
                </p>
                
                <div style={{ width:'600px'}}>
                    <div fr class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p class="text-blk input-title">
                        NAME
                    </p>
                    <input class="input w-full" id="ijowk" name="user_name" placeholder="Please enter first name..." />
                    </div>
                    <div fr class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p class="text-blk input-title">
                        TITLE
                    </p>
                    <input class="input w-full" id="ijowk" name="title" placeholder="Please enter first name..." />
                    </div>
                    <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p class="text-blk input-title">
                        EMAIL
                    </p>
                    <input class="input" id="ipmgh" name="user_email" placeholder="Please enter email..." />
                    </div>
                    <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                    <p class="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea class="textinput" id="i5vyy" name='message' placeholder="Please enter query..."></textarea>
                    </div>
                </div>
                <button class="submit-btn">
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
  )
}

export default HelpCenter