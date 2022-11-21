import React from 'react';
import MainLayout from '../layouts/MainLayout';

function AboutPage() {
  return (
    <MainLayout>
      <h1 className="font-bold text-2xl flex justify-center py-5 px-5">About us</h1>
        <div>
            <p className="px-5 grid grid-cols-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum consectetur, officia at esse deserunt ipsa. Corporis, laudantium? Voluptas consectetur, asperiores aliquam rerum vero obcaecati doloribus voluptatibus molestiae. Sapiente, error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quos, animi sunt ad, fugit laudantium exercitationem similique aperiam fugiat aliquam velit in itaque quam quas alias a quod quis quo!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis omnis laudantium excepturi eveniet fuga dolorum quam consectetur eligendi recusandae, corrupti ex quasi eum ducimus, laboriosam, deleniti impedit ut officiis doloribus!
            </p>
            <img className="grid grid-cols-2" src="/banner.jpg" alt="Banner" />
        </div>
    </MainLayout>
  );
}

export default AboutPage
