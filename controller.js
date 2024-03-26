import Helper from './helper.js'

const users=[{
    id:1,
    name:"badri",
    email:"badrish@gmail.com",
    password:'123'
},
{
    id:2,
    name:"muku",
    email:"mukund@gmail.com",
    password:'446'
},
{
    id:3,
    name:"dhana",
    email:"dhana@gmail.com",
    password:'1213'
}]


const index = (req,res)=>{
    res.status(200).send('<h1>Express Crud</h1>')
}

const getAllUsers = (req,res)=>{
    res.status(200).send({
        message:"data fetch successful",
        users
    })
}

const getUserByID = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
    res.status(200).send({
        message:"data fetch by ID successful",
        users:users[index]
    })
    }
    else
    {
        res.status(400).send({
            message:"Invalid ID"
        })  
    }
}

const editUserByID = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
    req.body.id = id
    users.splice(index,1,req.body)    
    res.status(200).send({
        message:"User Edited successfully"
    })
    }
    else
    {
        res.status(400).send({
            message:"Invalid ID"
        })  
    }
}

const deleteUserByID = (req,res)=>{
    let {id} = req.params
    let index = Helper.findIndex(users,id)
    if(index!=-1)
    {
    users.splice(index,1)    
    res.status(200).send({
        message:"User deleted successfully"
    })
    }
    else
    {
        res.status(400).send({
            message:"Invalid ID"
        })  
    }
}

const createUser = (req,res)=>{
    let duplicateUser = users.filter((e)=>e.email === req.body.email)
    if (duplicateUser.length == 0)
    {
    req.body.id = users.length?users[users.length-1].id+1 : 1
    users.push(req.body)
    res.status(200).send({
        message:"User created Successfully",
    })
    }
    else
    {
        res.status(200).send({
            message:`User with the email ${req.body.email} already exists`,
        })
    }
}

export default {
    index,
    getAllUsers,
    getUserByID,
    createUser,
    editUserByID,
    deleteUserByID
}