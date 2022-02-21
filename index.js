import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import User from './dao/user.js'

const main = async () => {
    
    dotenv.config()
    
    const client = new mongodb.MongoClient(process.env.SDNGH_DB_URI)
    const port = process.env.PORT || 8000

    try {
        await client.connect()
        await User.injectdb(client)
        app.listen(port, () => {
            console.log(`Listening on port : ${port}`)
        })
    } catch(e) {
        console.error(e)
        process.exit(1)
    }

}

main().catch(console.error)
