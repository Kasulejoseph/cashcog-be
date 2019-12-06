import User from '../model/user';

class Expense {
    static async addUser(req, res) {
        const data =  new User({
            first_name: "kasule",
            last_name: "joseph"
        })
        await data.save()
        res.send({
            data
        })
    }

}

export default Expense