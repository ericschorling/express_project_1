const db = require('./conn')

class LanguageRanking {
    constructor(language, ranking, ranking_value){
        this.language = language;
        this.ranking = ranking;
        this.ranking_value = ranking_value;
    }
    static async getAll(){
        try {
            const response = await db.any('SELECT langauges.language, rankings.ranking, rankings.ranking_value FROM langauges INNER JOIN rankings ON langauges.ranking = rankings.id ORDER BY language ASC;');
            return response
        }
        catch (error) {
            return error.message;
        }
    }
}

module.exports = LanguageRanking;