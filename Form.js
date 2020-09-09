class Form{
    constructor(){
        this. title=createElement('h1','Car Racing Game')
         this.input=createInput('name');
    this.button=createButton('play')
    this.greeting=createElement('h2')
    }

    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }

display(){
    
    this.title.position(displayWidth/2-50,0)
    this.input.position(displayWidth/2,displayHeight/2-50)
    this.button.position(displayWidth/2,displayHeight/2-10)
    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount+=1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount);
        this.greeting.html('hello '+player.name)
        this.greeting.position(displayWidth/2,displayHeight/2-10)
    })
}





}



