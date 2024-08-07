
const expense_details =
{
    "name": "",
    "tableName": "expense_details",
    "viewName": "v_expense_details_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "expense_header_id" , 
            "trans_date" , 
            "expense_id",
            "description",
            "qty",
            "rate",
            "ext_amount",
            "discount_amount",
            "net_amount",
            "documents",
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
        "expense_header_id":{
            "type":"integer"
        } ,
        "trans_date":{
            "type":"datetime"
        } ,
        "expense_id":{
            "type":"integer"
        } ,
        "description":{
            "type":"text"
        } ,
        "qty":{
            "type":"float"
        } ,
        "rate":{
            "type":"float"
        } ,
        "ext_amount":{
            "type":"float"
        } ,
        "discount_amount":{
            "type":"float"
        } ,
        "net_amount":{
            "type":"float"
        } ,
        "documents":{
            "type":"text"
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
        "expense_header": {
            "tableName":"expense_header",
            "key":"id",
            "bindingKey":"expense_header_id"
         } ,
         "expense": {
            "tableName":"expense",
            "key":"id",
            "bindingKey":"expense_id"
         } ,
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
            "expense_header",
            "expense",
             "modifiedUser",
             "createdUser"
        ],
        "sort": [
            "expense_details.id asc"
        ]
    }
}
module.exports = expense_details
