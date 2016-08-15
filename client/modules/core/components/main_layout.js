import React from 'react';

const Layout = ({ content = () => null }) => (
  <div>
    <div className="c-nav">
      <a href="/home">Home</a>
    </div>
    <div id="page-content">
      {content()}
    </div>
  </div>
);

export default Layout;
