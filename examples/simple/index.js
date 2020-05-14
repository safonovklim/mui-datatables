import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "../../src/";

class Example extends React.Component {

  render() {

    const columns = ["Name", "Value", "Title", "Location"];

    const data = [
      ["Gabby George", 5, "Business Analyst", "Minneapolis"],
      ["Aiden Lloyd", 1, "Business Consultant", "Dallas"],
      ["Jaden Collins", false, "Attorney", "Santa Ana"],
      ["Franky Rees", true, "Business Analyst", "St. Petersburg"],
      ["Aaren Rose", 12345, null, "Toledo"]
    ];


    const options = {
      filter: true,
      filterType: 'checkbox',
      responsive: 'stacked',
    };

    return (
      <MUIDataTable title={"ACME Employee list"} data={data} columns={columns} options={options} />
    );

  }
}

export default Example;
