import React from 'react';

const Dashboard= () => ({


    logout(){
        FlowRouter.go("/logout");
    },

    render() {
        return (
            <div id="dashboard">
                <h1>Site: <a href="http://yeah-hbg.com" className="siteName">http://yeah-hgb.com</a></h1>
                <h1>Subscription Status: <div className="sActive">Active</div></h1>
                <br/>
                <br/>
                <button className="btn btn-primary-outline" onClick={this.logout.bind(this)}>Edit your site.</button>
                <div className="or"></div>
                <button className="btn btn-primary-outline" onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
});

export default Dashboard;
