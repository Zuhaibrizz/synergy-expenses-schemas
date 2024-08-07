
const trips =
{
    "name": "",
    "tableName": "trips",
    "viewName": "v_trips_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "doc_num" , 
            "doc_date" , 
            "name",
            "description",
            "type",
            "requested_by",
            "requested_date",
            "approved_by",
            "approved_date",
            "active" , 
            "created" , 
            "modified" , 
            "created_by" , 
            "modified_by" , 
            "deleted"  
    ],
    "entity": {
        "id":{
            "type":"integer"
        } ,
        "doc_num":{
            "type":"integer"
        } ,
        "doc_date":{
            "type":"datetime"
        } ,
        "name":{
            "type":"string"
        } ,
        "description":{
            "type":"text"
        } ,
        "type":{
            "type":"text"
        } ,
        "requested_by":{
            "type":"string"
        } ,
        "requested_date":{
            "type":"datetime"
        } ,
        "approved_by":{
            "type":"string"
        } ,
        "approved_date":{
            "type":"datetime"
        } ,
        "active":{
            "type":"integer" 
        } , 
        "created":{
            "type":"datetime" 
        } , 
        "modified":{
            "type":"datetime" 
        } , 
        "created_by":{
            "type":"integer" 
        } , 
        "modified_by":{
            "type":"integer" 
        } , 
        "deleted":{
            "type":"integer" 
        }  
    },
    "rules": [],
    "acls": [],
    "belongsTo": {
         "modifiedUser": {
            "dataBaseName":"dev_syn_expenses",
            "tableName":"users",
            "aliasName":"modifiedUser",
            "key":"id",
            "bindingKey":"modified_by"
         } ,
         "createdUser": {
            "dataBaseName":"dev_syn_expenses",
            "tableName":"users",
            "aliasName":"createdUser",
            "key":"id",
            "bindingKey":"created_by"
         }
    },
    "hasMany": {},
    "methods": {},
    "error": [],
    "options": {
        "data": {},
        "condition": [
            {
                "active": 1
            }
        ],
        "contain": [
             "modifiedUser",
             "createdUser"
        ],
        "sort": [
            "trips.id asc"
        ]
    }
}
module.exports = trips
