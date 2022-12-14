import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';

// Registring a new User
export const registerUser = async(req, res)=>{
 const {username, email, password, firstname, lastname} = req.body;
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password, salt);

 const newUser = new UserModel({username, email, password: hashedPassword, firstname, lastname});
 
 try {
    await newUser.save();
    res.status(200).json(newUser);
 } catch (error) {
    res.status(500).json({message: error.message});   
 }

};
// Login a user
export const loginUser = async (req, res)=>{
const {email, password} = req.body;

  try {
    const user = await UserModel.findOne({email:email})
    if(user){
        const validity = await bcrypt.compare(password, user.password);
        validity? res.status(200).json(user): res.status(400).json("Wrong Password");
    }else{
      res.status(404).json("User Does not exists");
    }
  } catch (error) {
     res.status(500).json({message: error.message});
  }
}


