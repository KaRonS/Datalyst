import React from 'react';
import Calculations from '../containers/calculations.js';

const Home = () => ({

    render() {
        return (
            <div>
            <div id="about" className="site-block-full block-1">
            </div>
                <div id="overview" className="site-block">
                    <div className="block-text">
                        <center><h2>Project Overview</h2></center>
                        <div>
                        <p>The Datalyst Project is a graph that attempts to predict the time records for the 2016 Men’s Summer Olympic Games 100-meter dash and beyond.</p>
                        <p>This was be done by using an array of software such as, Meteor.js (Node.js, MongoDB, React), D3.js, and R.</p>
                        <p>You can see the calculations below, generated in real time as well as the graph.</p>
                        </div>
                        </div>
                </div>
                <div id="orr" className="back-block">
                <Calculations />
                </div>
                 <div id="analysis" className="window-block">
                </div>
                <div id="buyers" className="site-block">
                    <div className="block-text">

                        <center><h2>R and Time Series Analysis</h2></center>
                        <div>
                            <p>Time Series Analysis performs predictions based upon historical time records.</p>
                            <p>During our exploration of this subject, we learned that the methods and data
                            necessary to accurately perform analysis that yield good results are far out of the scope of possiblity
                            given the nature of the project. In short, we would need a lot of money and resources to make any real predictions.</p>
                            <p>Despite this realization, we decided to strive forward and make something out of an unexpected road block.</p>
                            <p>According to Investopedia, a time series is a sequence of numerical data points in successive order,
                            usually occurring in uniform intervals.
                            In plain English, a time series is simply a sequence of numbers collected at regular intervals over a period of time.
                            Time series analysis can be useful to see how a given asset, security or economic variable changes over time.
                            It can also be used to examine how the changes associated with the chosen data point compare to shifts in other variables over the same time period.
                            (Time Series, 2006).  The Precursor dataset is based on the annual recorded performance of each athlete for the 100m dash.
                            Using this data set we were able to predict the annual record performance from 2016 to the year 2022.</p>
                        </div>

                        <center><h2>Technology Used</h2></center>
                        <div>
                            <p>Meteor.js is a full stack real-time web application framework that allows developers to create scalable,
                            cross platform applications fluidly. The frontend, React, uses a container/component system for managing DOM elements.
                            The containers are fed data from MongoDB reactively, and the containers pass this data to the relevant components.</p>
                            <p>React uses a virtual DOM that compares changes to the data as Javascript objects in memory, and updates the DOM
                            when changes are found. Since the time it takes to traverse the DOM is much higher than comparing objects in memory,
                            React offeres serious client side performance gains.</p>
                            <p>Meteor is special in the fact that it makes reactive data sources possible without polling and diffing by keeping track of MongoDB's OPLOG</p>
                            <p>Meteor also creates a client side version of MongoDB called "Minimongo" that receives a copy of the data that it is allowed by rules set on the server.
                            Changes to the database are written in an operation log that Meteor tracks, sending updates from client to server and vice versa as soon as the change occurs.
                            This in turn creates instantaneous feedback for the user, as the performance exceeds user expectations very often.</p>
                        </div>

                    </div>
                </div>
                <div id="contact" className="site-block-fixed block-4">
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
                        <p>Quick-R: Time Series. (2016). Statmethods.net. Retrieved 2 September 2016, from <a href="http://www.statmethods.net/advstats/timeseries.html">http://www.statmethods.net/advstats/timeseries.html</a></p>
                        <p>Using R for Time Series Analysis — Time Series 0.2 documentation. (2016). A-little-book-of-r-for-time-series.readthedocs.io. Retrieved 2 September 2016, from <a href="http://a-little-book-of-r-for-time-series.readthedocs.io/en/latest/src/timeSchneider">http://a-little-book-of-r-for-time-series.readthedocs.io/en/latest/src/timeSchneider</a>, T.</p>
                        <p>Schneider, T. (2016). A Statistical Analysis of the Learned League Trivia Competition. toddwschneider.com. Retrieved 2 September 2016, from <a href="http://toddwschneider.com/posts/statistical-analysis-of-learnedleague-trivia-competition">http://toddwschneider.com/posts/statistical-analysis-of-learnedleague-trivia-competition</a></p>
                        <p>Proper Running Footstrike: Forefoot vs. Heel-strike vs. Midfoot Technique. (2016). YouTube. Retrieved 13 September 2016, from <a href="https://www.youtube.com/watch?v=--YU8YcWeUU">https://www.youtube.com/watch?v=--YU8YcWeUU</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;