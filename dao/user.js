
// database reference
let users

export default class User {
    
    static async injectdb(connection) {
        console.log("injecting connection")
        if (users) return

        try {
            // create a reference to the database
            users = await connection.db(process.env.SDNGH_NS).collection('users')
        } catch(e) {
            // handle error 
        }
    }

   static async getUsers() {
       
       try {
           let cursor = await users.find({})
           const usersList = await cursor.toArray()
           return usersList
       } catch(e) {
           return []
       }
   } 

   static async addUser(user) {
      
      try {
        await users.insertOne(user)
      } catch(e) {
        return false
      }

      return true
   }
}
