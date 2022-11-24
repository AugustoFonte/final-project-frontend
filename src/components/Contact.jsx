import React from 'react';


function Contact() {
  return (
    <div className="flex justify-center gap-20">
      
       <div className="py-10">
            <iframe className="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746.732621653364!2d-8.62266134401796!3d41.527446371358124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245231ee6d0fe3%3A0xe5bbea71725c2061!2sPonte%20de%20Barcelos!5e0!3m2!1sen!2spt!4v1669043948005!5m2!1sen!2spt" width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0" />
        </div>
        <form className="p-10">
            <p>Name</p>
                <input className="border-2 rounded-lg w-60" type="text" />
            <p>Contact</p>
                <input className="border-2 rounded-lg w-60" type="email" name="" id="" />
            <p>Message</p>
            <input className="border-2 text-sm py-10 px-3 rounded-lg w-60" type="text" />
                <button className="flex border-2 rounded-lg py-1 px-1 w-60 text-center bg-sky-700 text" type="submit">Send</button>
                
        </form>
        
    </div>
  );
}
export default Contact;







