
const trip_details_travel =
{
    "name": "",
    "tableName": "trip_details_travel",
    "viewName": "v_trip_details_travel_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "trip_id" , 
            "trip_type" , 
            "depart_from",
            "arrive_at",
            "carrier",
            "departure_date",
            "arrival_date",
            "preferred_seats",
            "prefered_departure_timings",
            "preferered_arrival_timings",
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
        "trip_type":{
            "type":"text"
        } ,
        "depart_from":{
            "type":"string"
        } ,
        "arrive_at":{
            "type":"string"
        } ,
        "carrier":{
            "type":"string"
        } ,
        "departure_date":{
            "type":"datetime"
        } ,
        "arrival_date":{
            "type":"datetime"
        } ,
        "preferred_seats":{
            "type":"integer"
        } ,
        "prefered_departure_timings":{
            "type":"datetime"
        } ,
        "preferered_arrival_timings":{
            "type":"datetime"
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
            "trip_details_travel.id asc"
        ]
    }
}
module.exports = trip_details_travel
