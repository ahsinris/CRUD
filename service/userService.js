const { on } = require('nodemon');
const User = require('../models/User');
const bcrypt = require('bcrypt');

class Service {
    async createUserService(reqData) {
        try {
            const { userName, emailId, password } = reqData;

            const isUserExist = await User.findOne({ where: { emailId: emailId } });
            if (isUserExist) {
                return {
                    success: false,
                    status: 400,
                    message: "Email ID already exists"
                };
            }

            const hashPassword = await bcrypt.hash(password, Number(process.env.SALTROUND));

            await User.create({
                userName: userName,
                emailId: emailId,
                password: hashPassword
            });

            return {
                success: true
            };
        } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
        }
    }
    async getAllUserService(reqData) {
        try {
            const result = await User.findAll({
                attributes: { exclude: ['password'] }
            });


            return {
                success: true,
                data: result ? result : undefined
            };
        } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
        }
    }
    async getSingleUserService(req) {
        try {
            const userId = req.params.userId;
            console.log(userId)
            const result = await User.findOne({
                where: { userId: userId },
                attributes: { exclude: ['password'] }
            });

            if (!result) {
                return {
                    success: false,
                    status: 400,
                    message: "user doesnot found"
                }
            }

            return {
                success: true,
                data: result ? result : undefined
            };
        } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
        }
    }
    async UpdateUserService(req) {
        try {
            const userId = req.params.userId;
            console.log(userId)
            const { userName, emailId, password } = req;
            console.log(userId)
          
            const isUserExist = await User.findOne({ where: { userId: userId } });
           
            if (!isUserExist) {
                return {
                    success: false,
                    message: "user does not found"
                }
            }
            let hashPassword
            if (password) {
                hashPassword = await bcrypt.hash(password, Number(process.env.SALTROUND));
            }
            const result = await User.update(
                {
                    userName: userName,
                    emailId: emailId,
                    password: hashPassword
                },
                {
                    where: { userId: userId }
                }
            );

            return {
                success: true,
                data: result ? result : undefined
            };
        } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
        }
    }
    async deleteUserService(req) {
        try {
            const userId = req.params.userId;
            console.log(userId)
            const isUserExist = await User.findOne({ where: { userId: userId } });
            console.log(isUserExist)
            if (!isUserExist) {
                return {
                    success: false,
                    message: "user does not found"
                }
            }
          await User.destroy({where:{userId:userId}})

            return {
                success: true,
                message:"user deleted sucessfully",
            };
        } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
        }
    }
}


module.exports = new Service();
