class Player{
    constructor(){
        
    }
    getcount(){
        var playercountref=database.ref("playercount")
        playercountref.on("value",function(data){
            playercount=data.val()
        })
    }
    updatecount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(name){
        var playerindex="player"+playercount
database.ref(playerindex).set({
    name:name
})    }
}