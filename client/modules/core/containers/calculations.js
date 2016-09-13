import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Calculations } from '/lib/collections';
import CalculationsComponent from '../components/calculations.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('calculations').ready()) {

        try {
          var results = Calculations.findOne({}).data;
          console.log(results);
        } catch(TypeError) {}

        onData( null, { results } );
    }

};

export default composeWithTracker(composer)(CalculationsComponent);
