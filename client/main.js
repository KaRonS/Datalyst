import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './templates/info.html';

Template.info.helpers({
  // this can be changed to support any functionality
  scrapeTest() {
    var website;
    var handle = Meteor.subscribe("scrapes");
    if (handle.ready()){
      website = Scrapes.findOne();
      website = JSON.stringify(website);
    }
    return website;
  },
});
