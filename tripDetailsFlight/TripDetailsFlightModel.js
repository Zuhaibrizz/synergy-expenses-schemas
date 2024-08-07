
const trip_details_flight =
{
    "name": "",
    "tableName": "trip_details_flight",
    "viewName": "v_trip_details_flight_list",
    "id": "id",
    "displayField": "name",
    "findOnly": [
            "id" , 
            "trip_id" , 
            "depart_from" , 
            "arrive_at",
            "departure_date",
            "arrival_date",
            "flight_class",
            "prefered_departure_timings",
            "preferered_arrival_timings",
            "description",
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
        "depart_from":{
            "type":"string"
        } ,
        "arrive_at":{
            "type":"string"
        } ,
        "departure_date":{
            "type":"datetime"
        } ,
        "arrival_date":{
            "type":"datetime"
        } ,
        "flight_class":{
            "type":"string"
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
            "trip_details_flight.id asc"
        ]
    }
}
module.exports = trip_details_flight
