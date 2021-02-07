class Game{
    constructor(){
        
    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
}