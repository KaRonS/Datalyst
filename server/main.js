import {Meteor} from 'meteor/meteor';
import {exec} from 'child_process';
import Future from 'fibers/future';
import R from 'r-script';
import Baby from 'babyparse';
import {Calculations} from '/lib/collections.js';

Meteor.methods({
	'calculateDash': () => {
		const results = new Future(); // enable async in foreign environment

	    exec('pwd', (error, stdout, stderr) => {

	    	const path = stdout.split('.meteor')[0]; // temporary workaround

			exec('Rscript ' + path + 'public/data/calculateDash.r', (error, stdout, stderr) => {

				exec('cat ' + path + 'public/data/dash.csv', (error, stdout, stderr) => {

					results.return(Baby.parse(stdout, {header: true, skipEmptyLines: true})); // tell future that result is ready

				});
			});
	    });

	    return results.wait(); // tell client to wait for async result

	},
	'processDash': () => {
		Meteor.call('calculateDash', (err, res) => {
			if (!err && res) {
				Calculations.remove({}); // clear old result
				Calculations.insert(res); // insert calculations into mongodb
			}
		});
	}
});

Meteor.publish('calculations', () => {
	return Calculations.find({});
});