class Persona{
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    fullName(){
        return `${this.name} ${this.surname}`
    }
}

module.exports = Persona