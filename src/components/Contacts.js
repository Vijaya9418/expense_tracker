import React, { Component } from 'react'
import "./contact.css"
import imgboys from '../images/boy.jpeg'
 class Contacts extends Component {
    render() {
        return (
            <div>
              <div class="container">
   <div class="contact-parent">
   
      <div class="contact-child child1">
      <h2 className="text">Contact Information</h2>
      <p>
          Fill up the form and our team will<br></br> get back to you within 24 hours
         </p>

         <p>
            <i class="fa fa-home" aria-hidden="true"></i> Address <br />
            <span> Ash Lane 110
            <br />
            London, UK
            </span>
         </p>
         <p>
            <i class="fa fa-phone" aria-hidden="true"></i> Let's Talk <br />
            <span> 0787878787</span>
         </p>
         <p>
            <i class="fa fa-envelope" aria-hidden="true"></i> General Support <br />
            <span>contact@example.com</span>
         </p>
      </div>
      <div class="contact-child child2">
         <div class="inside-contact">
            <h2>Contact Us</h2>
            <h3>
               <span id="confirm"></span>
            </h3>
            <p>Name *</p>
            <input id="txt_name" type="text" Required="required"></input>
            <p>Email *</p>
            <input id="txt_email" type="text" Required="required"></input>
            <p>Phone *</p>
            <input id="txt_phone" type="text" Required="required"></input>
            <p>Subject *</p>
            <input id="txt_subject" type="text" Required="required"></input>
            <p>Message *</p>
            <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
            <input type="submit" id="btn_send" value="SEND"></input>
         </div>
      </div>
   </div>
</div>
            </div>
        )
    }
}
export default Contacts;
