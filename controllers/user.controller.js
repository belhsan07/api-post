const userSchema = require('../models/user.model')
const bcrypt = require('bcrypt')



exports.addUser = async(req,res)=> {
    const {email,password} = req.body
    try {
        const userExist = await userSchema.findOne({email:email})
        if (userExist) {
            return res.status(400).send({msg:'user already exist...'})
        }
        const newUser = new userSchema(req.body)
        const passwordHashed = bcrypt.hashSync(password,10)
        newUser.password = passwordHashed
        await newUser.save()
        return res.status(200).send({msg:'user added successfully..',newUser})
    } catch (error) {
        return res.status(500).send({msg:error})
    }
}
exports.getAllUser = async(req,res)=>{
    try {
        const users = await userSchema.find()
        return res.status(200).send({users})
    } catch (error) {
        return res.status(500).send({error})
    }
}