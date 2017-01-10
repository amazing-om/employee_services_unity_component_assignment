import React, { Component } from 'react';
//import SmartInput from 'unity-components/react/components/smartFormv2/SmartInput.jsx';
import SmartGrid from 'unity-components/react/components/SmartTable/SmartGrid.jsx';
// import itemTableConfig from './data.js';

var data = [{
    "id": 0,
    "actorName": "virat",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 1,
    "actorName": "Jhon Doe",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 2,
    "actorName": "Jane Doe",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 3,
    "actorName": "Om",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 4,
    "actorName": "Bhuban",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 5,
    "actorName": "Anjali",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 6,
    "actorName": "Ram",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 7,
    "actorName": "Risi",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 8,
    "actorName": "Rahul",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 9,
    "actorName": "Vivek",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
},{
    "id": 10,
    "actorName": "Ved",
    "actionTime": "Tue July 26 2016 15:48:29 GMT+5:30 (IST)",
    "summary": "Took Parcel from warehouse for delivery"
}];
/*var itemTableConfig = {
  dataList: data,
  config: {
    columnMetadata: [
      {"columnName": "actorName",  "displayName": "Item Code"},
      {"columnName": "actionTime",   "displayName": "SKU Code"},
      {"columnName": "summary",    "displayName": "PO Code"}
    ],
    showSettings: false,
    externalResultsPerPage: 10
  }
};*/

var itemTableConfig = {
  data: data,
  columnMetadata: [
    {"columnName": "actorName",  "displayName": "Item Code"},
    {"columnName": "actionTime",   "displayName": "SKU Code"},
    {"columnName": "summary",    "displayName": "PO Code"}
  ],
  currentPage: 1,
  resultsPerPage: 10
};


class EmployeeForm extends Component{

	constructor( props ){
		super( props );

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onChangeGrid = this.onChangeGrid.bind(this);
		this.onRowClick = this.onRowClick.bind(this);
	}

	onChange(){
		console.log("Inside input")
	}

	onFormSubmit(evt){
		console.log(arguments);
		evt.preventDefault();
		this.props.collectFormFields({
			name: this.refs.employeeNameInp.value,
			designation: this.refs.employeeDesignationInp.value,
			company: this.refs.employeeCompanyInp.value
		});
		this.refs.employeeNameInp.value = '';
		this.refs.employeeDesignationInp.value = '';
		this.refs.employeeCompanyInp.value = '';
	}

	onChangeGrid (event, data) {
        //var tableConfig = Object.assign({},this.state.tableConfig, data);
        this.setState({tableConfig: itemTableConfig});
    }

    onRowClick(){
    	console.log("Row Clicked");
    }

	render(){ 
		return  <div>
				<form>
					<label htmlFor="employeeName">
						Name: 
						{/*<SmartInput onChange={this.onChange} label="Sample label" elementId = 'input' value="Sample Value" mandatory={false} regex="" className="containerClass" placeholder="type..."/>*/}
						<input id="employeeName" type="text" ref="employeeNameInp" />
					</label>
					<label htmlFor="employeeDesignation">
						Designation: 
						<input id="employeeDesignation" type="text" ref="employeeDesignationInp" />
					</label>
					<label htmlFor="employeeCompany">
						Company: 
						<input id="employeeCompany" type="text" ref="employeeCompanyInp" />
					</label>
					<button onClick={this.onFormSubmit} >Submit</button>
				</form>
				<SmartGrid title="Default Row" onChangeGrid={this.onChangeGrid} onRowClick={this.onRowClick} topItems={3} {...itemTableConfig}/> 
		</div>
	}
}
export default EmployeeForm;