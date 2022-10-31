const query = require('../config/db_config');

exports.getUsers = (req,res)=>{
    query.query('select * from users',(error,result)=>{
        if(error){
            throw error
        }
        else{
            res.status(200).send({result:result});
        }
    })
}

exports.getUser = (req,res)=>{
    let id = req.params.id;
    query.query('select * from users where id=?',[id],(error,result)=>{
        if(error){
            throw error
        }
        else{
            res.status(200).send({result:result[0]});
        }
    })
}

exports.saveUser = (req,res)=>{
    let age = req.body.age;
    let gender = req.body.gender;
    let username = req.body.username;

    let data = [username,gender,age];

    checkExists(username,(errors,resultCheck)=>{
        if(errors){
            throw errors;
        }
        else{
            if(resultCheck===undefined){
                query.query('insert into users (username,gender,age) values(?,?,?)',data,(error,result)=>{
                    if(error){
                        throw error
                    }
                    else{
                        res.status(201).send({result:'success'});
                    }
                })
            }
            else{
                res.status(205).send({result:'exists'});
            }
        }
    });
}

exports.updateUser = (req,res)=>{
    let id = req.params.id;
    let age = req.body.age;
    let gender = req.body.gender;
    let username = req.body.username;

    let data = [username,gender,age,id];

    query.query('update users set username=?,gender=?,age=? where id=?',data,(error,result)=>{
        if(error){
            throw error
        }
        else{
            res.status(200).send({result:'success'});
        }
    })
}

const checkExists = (username,callback) =>{
    query.query('select * from users where username=?',[username],(error,result)=>{
        if(error){
            return callback(error)
        }
        else{
            return callback('',result[0])
        }
    })
}


exports.deleteUser = (req,res)=>{
    let id = req.params.id;

    query.query('delete from users where id=?',[id],(error,result)=>{
        if(error){
            throw error
        }
        else{
            result.affectedRows>0?res.status(200):res.status(204);
            res.send({result:'success'})
        }
    })
}