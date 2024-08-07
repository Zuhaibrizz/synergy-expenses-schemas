
const expenses =
{
    "name": "",
    "tableName": "expenses",
    "viewName": "v_expenses_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "code" , 
            "name" , 
            "itemized",
            "rpts_required",
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
        "code":{
            "type":"string"
        } ,
        "name":{
            "type":"string"
        } ,
        "itemized":{
            "type":"integer"
        } ,
        "rpts_required":{
            "type":"integer"
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
            "expenses.id asc"
        ]
    }
}
module.exports = expenses
