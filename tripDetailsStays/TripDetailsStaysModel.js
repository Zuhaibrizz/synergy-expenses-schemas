
const trip_details_stays =
{
    "name": "",
    "tableName": "trip_details_stays",
    "viewName": "v_trip_details_stays_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "trip_id" , 
            "location" , 
            "departure_date",
            "checkin_date_time",
            "checkout_date_time",
            "preferences",
            "description",
            "qty",
            "rate",
            "ext_amount",
            "discount_amount",
            "net_amount",
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
        "trip_id":{
            "type":"integer"
        } ,
        "location":{
            "type":"string"
        } ,
        "departure_date":{
            "type":"datetime"
        } ,
        "checkin_date_time":{
            "type":"datetime"
        } ,
        "checkout_date_time":{
            "type":"datetime"
        } ,
        "preferences":{
            "type":"string"
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
        "trip": {
            "tableName":"trip",
            "key":"id",
            "bindingKey":"trip_id"
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
            "trip",
             "modifiedUser",
             "createdUser"
        ],
        "sort": [
            "trip_details_stays.id asc"
        ]
    }
}
module.exports = trip_details_stays
