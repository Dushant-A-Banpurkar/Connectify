import jwt from 'jsonwebtoken';
import {Response} from 'express';

interface GenerateTokenAndSetCookie{
    (userId:string,res:Response):void;
}


const generateTokenAndSetCookie:GenerateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET as string,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, //Milliseconds
        httpOnly:true, //prevent XSS attack cross-site scripting attacks 
        sameSite:"strict",// CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !=='development'
    })
}

export default generateTokenAndSetCookie;