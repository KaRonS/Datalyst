import React from 'react';

const menuClick = () => {
  $("#mobileMenu").fadeToggle( "fast", "linear" );
};

const changeRoute = (name) => {
  $('html, body').animate({
        scrollTop: $(name).offset().top - 62
    }, 275);
};

const renderNav = () => {
  var nav = [
            {
                    "name" : "Overview",
                    "route" : "#overview",
                    "order" : 0
            },
            {
                    "name" : "Analysis",
                    "route" : "#analysis",
                    "order" : 1
            },
            {
                    "name" : "Contact",
                    "route" : "#contact",
                    "order" : 2
            },
            {
                    "name" : "References",
                    "route" : "#sellers",
                    "order" : 3
            }
    ];
    return nav.map((page)=>(
        <div className="navbar-toggler navButton" key={page.order} onClick={changeRoute.bind(this, page.route)}>
          {page.name}
        </div>
    ));
};

const Navigation = ({navItems}) => (
     <div  id="nav-contain">
      <nav className="navbar navbar-yeah hidden-sm-down">
        {renderNav()}
      </nav>
         <div className="hw-brand hidden-md-up">
             <a className="plainLink" href="tel:1-717-968-8368"><i className="fa fa-phone" aria-hidden="true"></i></a>
             Datalyst
         </div>
         <div id="menuToggle" className="hidden-md-up navbar-toggler navButton" onClick={menuClick.bind(this)}>
             <i className="fa fa-bars" aria-hidden="true"/>
         </div>
      </div>
);

export default Navigation;
