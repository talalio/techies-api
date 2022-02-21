import User from '../dao/user.js'

export default class UserController {

    static async apiGetUsers(req, res, next) {
        
        const usersList = await User.getUsers()
        
        if (usersList.length > 0) {
         res.status(200).json({users: usersList})
         return
        }

        res.status(500).json({error: "no users"})
    }

    static async apiAddUser(req, res, next) {
        const userDetails = ['fname', 'lname', 'email', 'picture', 'bio', 'city', 'social']
        const user = req.body.user || {}

        if(!(userDetails.every((field) => field in user))) { 
            res.status(400).json({result: "failed"})
            return
        }

        const result = await User.addUser(user)
        if(result) {
            res.status(302).json({result: "sucess"})
            return
        }
        res.status(400).json({result: "failed"})
    }

}
