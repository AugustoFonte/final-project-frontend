import React from 'react';


function Contact() {
  return (
    <div className="grid grid-cols-3">
        <div className="p-4 grid grid-cols-2">
            <ul className=" py-5 px-10">
            <li>Number: XXX XXX XXX</li>
            <hr />
            <li>Adress: Estrada do Caminho Nº99</li>
            <hr />
            <li>Email: info@standcarrocinha.com</li>
            </ul>
        </div>
        <form className="p-4">
            <p>Name</p>
                <input className="border-2 rounded-lg " type="text" />
            <p>Contact</p>
                <input className="border-2 rounded-lg " type="email" name="" id="" />
            <p>Message</p>
                <input className="border-2 text-sm py-10 px-3 rounded-lg" type="text" />
                <button className="border-2 rounded-lg py-1 px-1"  type="submit">Send</button>
        </form>
        <div>
            <img src="" alt="" srcset="" />
        </div>
    </div>
  );
}
export default Contact;







