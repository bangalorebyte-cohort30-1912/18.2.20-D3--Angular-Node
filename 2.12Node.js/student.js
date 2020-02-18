const student ={
    name:'sanju',
    language:'python',
    skill:'front-end'
}

class ByteStudent {
    constructor(name, skill){
        this.name = name,
        this.skill = skill
    }
    greet(){
        return `${this.name} is a student of ByteAcademy with ${this.skill} skill`
    }
}

module.exports = {  student:student, 
                    ByteStudent:ByteStudent
                }