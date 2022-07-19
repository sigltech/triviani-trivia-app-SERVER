const db = require("../dbConfig/init");


module.exports = class User {

    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.score = data.score

    }

    static get all() {
        return new Promise(async (res, rej) => {
            try {

                const result = await db.query('SELECT * FROM users;')
                const users = result.rows.map(a => ({ id: a.id, name: a.name }))
                console.log(users)
                res(users)

            } catch (err) {
                rej('Error!' + err)
            }
        })
    }

    
    static create(username, score){
        return new Promise(async (resolve, reject) => {
            try {
                console.log(username)
                const result = await db.query('INSERT INTO users (name, score) VALUES ($1, $2) RETURNING *;', [ username, score ]);
                const user = new User(result.rows[0]);

                resolve(user)
            } catch (err) {
                reject(`Error creating user: ${err}`)
            }
        })
    }
}
