import React from 'react';


function Footer() {
  return (
    <div className="bg-slate-900">
      <div className="flex content-flex text-white">
        
        <ul className="py-5 px-10">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Test-Drive</li>
        </ul>

        <ul className=" py-5 px-10">
          <li>Number: XXX XXX XXX</li>
          <li>Adress: Estrada do Caminho Nº99</li>
          <li>Email: info@standcarrocinha.com</li>
        </ul>
        
      

      </div>
      <div className="flex justify-center text-white">
        Copyright Stand Carrocinha. All Rights Reserved
      </div>
    </div>
  );
}
export default Footer;







