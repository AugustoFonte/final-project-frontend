import React from 'react';

import MainLayout from "../layouts/MainLayout";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <MainLayout>
      <h1 className="font-bold text-4xl flex justify-center py-5 px-5 text-sky-900">
          Our Contact
        </h1>
      <Contact />
    </MainLayout>
  );
}

export default ContactPage
