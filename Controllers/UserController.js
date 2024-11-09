import UserModel from '../Models/userModel.js'


export const getUser = async(req,res) => {
    console.log('---4',req.params)
    const id  = req.params.id
    
    try{
        console.log('---5',id)
        const user = await UserModel.findById(id);
        console.log('-----8',user)
        if(user) res.status(200).json(user)
        else res.status(400).json({msg:'User does not exist'})

    }
    catch(err){
        res.status(500).json(err)
    }
}

export const postUser = async(req,res) => {
    
}