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

                // const result = await db.query('SELECT * FROM users;')
                // const users = result.rows.map(a => ({ id: a.id, name: a.name }))
                // console.log(users)
                // res(users)

            } catch (err) {
                // rej('Error!' + err)
            }
        })
    }
}
