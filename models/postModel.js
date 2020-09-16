const db = require('./conn')

class updateRanking {
    
    static async sendData(data){
        try {
            for (let ranking in data) {
                if(data[ranking]) { await db.result(`UPDATE langauges SET ranking  = ${data[ranking]} WHERE language = '${ranking}'; `)}
            }
        }
        catch (error) {
            return error.message;
        }
    }
}

module.exports = updateRanking;