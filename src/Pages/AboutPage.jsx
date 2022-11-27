import React from "react";
import MainLayout from "../layouts/MainLayout";

function AboutPage() {
  return (
    <MainLayout>
      <div>
        <h1 className="font-bold text-4xl flex justify-center py-10 px-5 text-sky-900">
          About us
        </h1>
      </div>
      <div className="grid p-10 flex container mx-auto grid-cols-2">
      <img className="rounded-lg" src="/aboutimg.jpg" alt="Banner" />
        <p className="p-5 text-lg w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          nostrum consectetur, officia at esse deserunt ipsa. Corporis,
          laudantium? Voluptas consectetur, asperiores aliquam rerum vero
          obcaecati doloribus voluptatibus molestiae. Sapiente, error! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fuga quos, animi
          sunt ad, fugit laudantium exercitationem similique aperiam fugiat
          aliquam velit in itaque quam quas alias a quod quis quo! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Reiciendis omnis
          laudantium excepturi eveniet fuga dolorum quam consectetur eligendi
          recusandae, corrupti ex quasi eum ducimus, laboriosam, deleniti
          impedit ut officiis doloribus!
        </p>
      
      
        
      </div>
    </MainLayout>
  );
}

export default AboutPage;
