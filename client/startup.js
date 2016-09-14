import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

Meteor.AppCache.config({onlineOnly: ['/images/']});

});