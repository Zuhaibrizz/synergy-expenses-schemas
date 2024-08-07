const expenseDetails = require('./ExpenseDetailsModel')
const Model = require('@tiburadev/model')
 
const getAll = async ($config,$userInfo) =>{
    let $expenseDetailsModel = new Model(expenseDetails)
    return await $expenseDetailsModel.findAll($config)
}
 
const create = async  ($data,$userInfo) =>{
    let $expenseDetailsModel = new Model(expenseDetails)
    let $okToRemove = beforeSave('remove',$data,$userInfo)
    if($okToRemove) {
        let $inserted = await $expenseDetailsModel.insert($data,expenseDetails.tableName)
        return $inserted.data
    }else {
        return {"error":2001,"message":"Access Denied!. Please check permissions"}
    }
}
 
const update =  async  ($data,$where,$userInfo) => {
    let $expenseDetailsModel = new Model(expenseDetails)
    let $okToRemove = beforeSave('remove',$data,$userInfo)
    if($okToRemove) {
        let $updated = await $expenseDetailsModel.update(expenseDetails.tableName,$data,$where)
        return $updated.data
    }else {
        return {"error":2001,"message":"Access Denied!. Please check permissions"}
    }
}
const remove =  async ($data,$userInfo) =>{
    let $expenseDetailsModel = new Model(expenseDetails)
    $data.active=0
    $data.deleted=1
    let $okToRemove = beforeSave('remove',$data,$userInfo)
    if($okToRemove) {
        let $updated = await $expenseDetailsModel.update(expenseDetails.tableName,$data,$where)
        return $updated.data
    } else {
        return {"error":2001,"message":"Access Denied!. Please check permissions"}
    }
}
 
const beforeFind = () =>{
 
}
const afterFind = () =>{
 
}
 
const beforeSave = ($type,$data,$userInfo) =>{
    if($type=='create') {
        $data.active =1
        $data.created = new Date();
        $data.created_by = $userInfo.userId;
    }
    $data.modified = new Date();
    $data.modified_by = $userInfo.userId
    return true
}
 
const afterSave =() =>{
    /* Post Event expenseDetails Saved */
}
 
const validate =() =>{  
 
}
 
module.exports ={
    getAll,create,update,remove
}