import jwt from 'jsonwebtoken';
import Users from '../models/usersModel.js';


export const VerifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken || req.headers['x-access-token'] || req.headers['authorization'];
    if (accessToken == null) return res.sendStatus(401)
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async(err, decoded) => {
        if(err) return res.sendStatus(403);

        try {
            const user = await Users.findAll({
                where:{
                    email:decoded.email
                }
            })
            await next();
        } catch (error) {
            console.log(error)
        }




    })
}