import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.info.helpers({
  // this can be changed to support any functionality
  testData() {
    return "";
  },
});
