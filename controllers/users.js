import {v4 as uuidv4} from 'uuid'

let users = [
    {
        "firstName":"Hiro", 
        "lastName":"Hamada",
        "age":14,
        "id":1
    }
]


export const allUsers = (req,res)=>{
    res.send(users)
}

export const createUser = (req,res)=>{
    const user = req.body
    const userId = uuidv4()//Generates random ID
    const userWithId = {...user,id:userId}
    users.push(userWithId)
    res.send(userId)
}

export const getUser = (req,res)=>{
    const {id} = req.params
    let foundUser = users.find((user)=>user.id==id)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=>user.id!=id)
    res.send(`User with ID ${id} is deleted`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params
    const {age}=req.body
    const user = users.find((user)=>user.id==id)
    if(age) user.age=age
    res.send(`User with ID {id} is updated`)
}
