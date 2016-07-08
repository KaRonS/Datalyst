import { Meteor } from 'meteor/meteor';
import { Scrape } from 'meteor/anonyfox:scrape';

Meteor.methods({
  'scrape.test'() {
    return Scrapes.find({}).fetch();
  }
});
