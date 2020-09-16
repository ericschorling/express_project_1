const db = require('./conn')

class Rankings {
    constructor(ranking, ranking_value){
        this.ranking = ranking;
        this.ranking_value = ranking_value;
    }
    static async getRanking(){
        try {
            const response = await db.any('SELECT * FROM rankings;');
            return response
        }
        catch (error) {
            return error.message;
        }
    }
}

module.exports = Rankings;