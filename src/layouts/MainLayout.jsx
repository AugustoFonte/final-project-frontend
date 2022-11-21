import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout(props) {
  return (
    <div className="MainLayout">
      <Navbar />
      <main>{props.children}</main>
        <div className="fixed bottom-0" >
        <Footer />
        </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;