const person = {
    firstName: 'John',
    lastName: 'Doe',
    // fullName: function() {}
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const e = new Error();
        if (typeof value !== 'string')
            throw new Error('Value is not a string');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
try{
    person.fullName = 'Alice Smith';
}
catch(e){
    console.log(e);
    // alert(e);
}
console.log(person.fullName)