import React from 'react';
import Calculations from '../containers/calculations.js';

const Home = () => ({

    render() {
            return (
                <div>
                <div id="about" className="site-block-full block-1">
                </div>
                    <div className="site-block">
                        <div className="block-text">
                            <center><h2>Project Overview</h2></center>
                            <div>
                            <p>The Datalyst Project is a graph that will predict the time records for the 2016 Men’s Summer Olympic Games 100-meter dash and beyond.</p>
                            <p>This will be done by using an array of software such as, Meteor, Node.js, MongoDB, JavaScript, and R.</p>
                            </div>
                            </div>
                    </div>
                    <div id="orr" className="site-block-full block-2">
                    <Calculations />
                    </div>
                    <div id="buyers" className="site-block">
                        <div className="block-text">
                            <center><h2>R and Time Series Analysis</h2></center>
                            <div>
                            <p>Time Series Analysis performs predictions based upon historical time records.</p>
                            </div>
                        </div>
                    </div>
                    <div id="contact" className="site-block-fixed block-3">
                        <div className="card contact-card">
                            <div className="form-group">
                                <input type="text" className="form-control" id="email" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="pw1" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="pw1" placeholder="Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Write us a message."/>
                            </div>
                            <div className="btn btn-primary-outline">Contact Us</div>
                        </div>
                    </div>
                    <div id="sellers" className="site-block">
                        <div className="block-text">
                            <center><h2>References</h2></center>
                            <div>
                            <p>Quick-R: Time Series. (2016). Statmethods.net. Retrieved 2 September 2016, from http://www.statmethods.net/advstats/timeseries.html</p>
                            <p>Using R for Time Series Analysis — Time Series 0.2 documentation. (2016). A-little-book-of-r-for-time-series.readthedocs.io. Retrieved 2 September 2016, from http://a-little-book-of-r-for-time-series.readthedocs.io/en/latest/src/timeSchneider, T.</p>
                            <p>Schneider, T. (2016). A Statistical Analysis of the Learned League Trivia Competition. toddwschneider.com. Retrieved 2 September 2016, from http://toddwschneider.com/posts/statistical-analysis-of-learnedleague-trivia-competition/</p>
                            <p>Proper Running Footstrike: Forefoot vs. Heel-strike vs. Midfoot Technique. (2016). YouTube. Retrieved 13 September 2016, from https://www.youtube.com/watch?v=--YU8YcWeUU</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
    },

    componentDidMount() {
        // hide or show logo based on scroll location
        $(window).scroll(()=>{
            if ($(window).scrollTop() > 500) {
                $('.navLogo').hide('fadeout')
            } else {
                $('.navLogo').show('fadein')
            }
        });
    }
});

export default Home;