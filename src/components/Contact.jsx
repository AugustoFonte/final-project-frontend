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
                <input className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" />
            <p>Email</p>
                <input className="p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" />
            <p>Message</p>
              <textarea rows="6" className="p-2.5 px-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
            <button type="submit" className=" gap-y-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>

                
        </form>
        
    </div>
  );
}
export default Contact;
