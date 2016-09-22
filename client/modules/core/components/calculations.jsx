import React from 'react';
import {LineChart} from 'react-d3';

const calculateGraphs = (results) => {
    var lineData = [];
    var names = Object.keys(results[0]);
    names.splice(0,2);

    for (i in names){
        delete results[i][""];
        var name = names[i];
        var values = [];

        if (name !== "Year") {
            for (x in results) {
                values[x] = {
                    x: x < 8 ? parseInt(results[x].Year) : parseInt(results[x].Year) + 8,
                    y: Number(results[x][name])
                }
            }

            lineData[i] = {
                name: names[i],
                values: values
            }
        }
    }
    
    return lineData;
}

const renderGraphs = (results) => {
    var lineData = calculateGraphs(results);

    if (lineData) {
        return (
        <LineChart
          legend={true}
          data={lineData}
          width={800}
          height={800}
          title="Olympic Data Predictions"
        />
        )
    }
}

const CalculationsComponent = ({results}) => ({

    render() {
        return (
            <div id="calculations">
                {renderGraphs(results)}
            </div>
        );
    }

});

export default CalculationsComponent;