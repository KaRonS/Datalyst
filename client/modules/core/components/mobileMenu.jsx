import React from 'react';

const changeRoute = (name) => {

  $('html, body').animate({
        scrollTop: $(name).offset().top - 62
    }, 275);

  $("#mobileMenu").fadeToggle( "fast", "linear" );
  
};

const renderNav = () => {
  var nav = [
            {
                    "name" : "Buyers",
                    "route" : "#buyers",
                    "order" : 0
            },
            {
                    "name" : "Sellers",
                    "route" : "#sellers",
                    "order" : 1
            },
            {
                    "name" : "Contact",
                    "route" : "#contact",
                    "order" : 2
            },
            {
                    "name" : "Operation Realtor Rescue",
                    "route" : "#orr",
                    "order" : 3
            }
    ];

    return nav.map((page)=>(
        <div className="navbar-toggler navButton" key={page.order} onClick={changeRoute.bind(this, page.route)}>
            <a className={page.route === "#orr" ? "red" : ""}>{page.name}</a>
        </div>
    ));
};

const MobileMenu = () => ({

    render() {
        return (
            <div id="mobileMenu">
                {renderNav()}
            </div>
        );
    }
});

export default MobileMenu;
