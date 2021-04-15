/*
Dev: Joao Victor Fernandes dos Santos
*/
class Fighter {
    constructor(name, maxHP, currHP, attackPower, isDead) {
        this.name = name
        this.maxHP = maxHP
        this.currHP = currHP
        this.attackPower = attackPower
        this.isDead = this.currHP <= 0
    }
    attack(){
        console.log(`\n${this.name} attacks!`)
        const number = Math.floor(Math.random() * 100);  
        if (number <= 35){
            return true
        }
        else{
            return false
        }       
    }
    takeDamage(amt){
        this.currHP = this.currHP - amt
        console.log(`${this.name} takes ${amt} damage!`)
        this.isDead = this.currHP <= 0 
    }

    displayStats(){
        console.log(`   ${this.name}: ${this.currHP}/${this.maxHP} HP`)
    }
}

function displayGameOverMessage(fighterA, fighterB) {
    console.log(`${fighterB.name} is dead!`)
    console.log("\nBATTLE OVER!")
    console.log(`${fighterA.name} wins!\n`)
}

function startBattle() {
    let fighter1 = new Fighter ("Ryu", 20, 20, 5) 
    let fighter2 = new Fighter ("Ken", 30, 30, 3)
    console.log("Battle Start!") 
    console.log(`${fighter1.name} (${fighter1.maxHP}HP) vs ${fighter2.name} (${fighter2.maxHP}HP)\n`)

    while(true){
        if(fighter1.attack()) { 
        fighter2.takeDamage(fighter1.attackPower) 
        }else{ 
            console.log(`${fighter1.name} misses!`) 
        } if(fighter2.isDead){ 
            displayGameOverMessage(fighter1,fighter2)
            fighter1.displayStats(), fighter2.displayStats()
            break
        }else{
            console.log('\n')
            fighter1.displayStats(), fighter2.displayStats() 
        }


        if(fighter2.attack()) {
            fighter1.takeDamage(fighter2.attackPower)
        }else{
            console.log(`${fighter2.name} misses!`)
        }
        if(fighter1.isDead){
            displayGameOverMessage(fighter2,fighter1) 
            fighter1.displayStats(), fighter2.displayStats() 
            break
        }else{
            console.log('\n')
            fighter1.displayStats(), fighter2.displayStats()
        }
    }
}

startBattle()