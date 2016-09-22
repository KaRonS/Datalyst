import React from 'react';

const Pricing = () => ({


    plan1(){
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EVJ7L9W7A6UY8';
    },

    plan2(){
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AQEYVXWZASB7G';
    },

    plan3(){
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6J58FBMUCVJK8';
    },

    render() {
        return (
            <div id="home" className="hw-card">
                <div className="card-deck-wrapper">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-block hw-block">
                                <h4 className="champagneBold">Plan 1</h4>
                                <h6>Personal Use</h6>
                                <h1>$14.99/month</h1>
                                <button className="btn btn-primary-outline" onClick={this.plan1.bind(this)}>Buy Now</button>
                                <br/>
                                <ul>
                                    <li className="features">Limited Tech Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-block hw-block">
                                <h4 className="champagneBold">Plan 2</h4>
                                <h6>Entrepreneurs/Start-ups</h6>
                                <h1>$21.34/month</h1>
                                <button className="btn btn-primary-outline" onClick={this.plan2.bind(this)}>Buy Now</button>
                                <br/>
                                <ul>
                                    <li className="features">9 to 5 Tech Support</li>
                                    <li className="features">Free SEO</li>
                                    <li className="features">Page Tracking/Analytics</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-block hw-block">
                                <h4 className="champagneBold">Plan 3</h4>
                                <h6>Online Retailers/Businesses</h6>
                                <h1>$26.52/month</h1>
                                <button className="btn btn-primary-outline" onClick={this.plan3.bind(this)}>Buy Now</button>
                                <br/>
                                <ul>
                                    <li className="features">24/7 Tech Support</li>
                                    <li className="features">Free SEO</li>
                                    <li className="features">Page Tracking/Analytics</li>
                                    <li className="features">eCommerce</li>
                                    <li className="features">Real Estate MLS Feed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Pricing;
