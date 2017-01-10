let data = [{
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

export default {
  data: data,
  columnMetadata: [
      {"columnName": "actorName",  "displayName": "Item Code"},
      {"columnName": "actionTime",   "displayName": "SKU Code"},
      {"columnName": "summary",    "displayName": "PO Code"}
  ],
  actionList: [
      {id: 'download', label: 'DOWNLOAD'},
      {id: 'bulk_upload', label: 'BULK UPLOAD'},
      {id: 'print_barcodes', label: 'PRINT BARCODES'}
  ],
  currentPage: 1,
  resultsPerPage: 10,
  selectedRows: {},
  showCheckbox: true,
  forceRender: false,
  showFooter: false
}