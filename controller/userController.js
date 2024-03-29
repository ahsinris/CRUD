const Service =require('../service/userService')

class Controller{
    async createUserController(req,res,next){
        try{
            const result = await Service.createUserService(req.body)
            if(!result.success){
                return res.status(result.status).json({
                    message:result.message
                })
            }
            return res.status(200).json({
                message:"user created sucessfully"
            })

        }
        catch(e){
            return res.status(500).json({
                message:" error in controller internal server error"+e
            })
        }
    }
    async getUserController(req,res,next){
        try{
            const result = await Service.getAllUserService(req.body)
            return res.status(200).json({
                message:"user fetched sucessfully",
                data:result.data
            })

        }
        catch(e){
            return res.status(500).json({
                message:" error in controller internal server error"+e
            })
        }
    }
    async getSingleUserController(req,res,next){
        try{
            const result = await Service.getSingleUserService(req)
            return res.status(200).json({
                message:"user fetched sucessfully",
                data:result.data
            })

        }
        catch(e){
            return res.status(500).json({
                message:" error in controller internal server error"+e
            })
        }
    }
    async UpdateController(req,res,next){
        try{
            const result = await Service.UpdateUserService(req)
            if(!result.success){
                return res.status(400).json({
                    message:result.message
                })
            }
            return res.status(200).json({
                message:"user datails updated sucessfully",
            })

        }
        catch(e){
            return res.status(500).json({
                message:" error in controller internal server error"+e
            })
        }
    }
    async deleteController(req,res,next){
        try{
            const result = await Service.deleteUserService(req)
        
            return res.status(200).json({
                message:"user datails deleted sucessfully",
            })

        }
        catch(e){
            return res.status(500).json({
                message:" error in controller internal server error"+e
            })
        }
    }
    
}

module.exports =new Controller()