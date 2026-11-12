// type userType={
//     userName:string,
//     age:number,
//    // confirmEmail:boolean,
//     address?:string
// }

// type confirmEmailType=number|Date
// let confirmEmail:confirmEmailType;
// confirmEmail=new Date()
// confirmEmail=12
// confirmEmail.toFixed()

// type inputType=number|string
// function sum(num1:number|string,num2:number):number {
//     return num1 as number+num2;
// }
// console.log(sum(2,7));
// enum GenderEnum{
//     MALE,
//     FEMALE
// }
// let gender:GenderEnum
// gender=GenderEnum.MALE
// console.log({gender});




// class Person{
//     count:number=0
//     constructor( public username:string, protected age:number){
//     }
// }
// class Message{
//     static count :number=0
//     constructor(
//         public content:string,
//         public createdBy:Person,

//     ){
//                 Message.count++
//     }
// }
// class Doctor extends Person{
// constructor(DocName:string,DocAge:number,public major:string){
//     super(DocName,DocAge)
// }
// static getCount(){
//     return Message.count
// }
// }
// const doc=new Doctor("seih",19,"teeth")

// interface Login{
//     email:string,
//     password:string
// }
// interface Signup extends Login{
//     age:number,

// }
// class humen{
//     constructor(){}
//     public login(data:Login){
//         console.log(data); 
//     }
//     public sign(data:Signup){
//         console.log(data); 
//     }
// }

// const user=new humen()
// user.login({email:"kwd@yahoo.com",password:"164"})


// console.log({doc});

// const message1=new Message("hello",new Person("USER1",18))
// const message2=new Message("hello",new Person("USER1",18))
// const message3=new Message("hello",new Person("USER1",18))
// const person=new Person("teyst",25)
// console.log(person.username);
// console.log(person);

// console.log({Message});



// *****  ASS14    *****
class User {
    constructor(
    public name:string,
    public id:number,
    public email:string,
    protected Password:string,
    private Phone:string,
    public age:number
    ){
        if (age<18||age>60) {
            throw new Error("error in age");
            
        }
    }
}
class Admin extends User{
    constructor(
        name:string,
        id:number,
        email:string,
        Password:string,
        Phone:string,
        age:number
    )
    {super(name,id,email,Password,Phone,age)}
}
class Note {
    constructor(
        public Id:number,
        public title:string,
        public content:string,
        public userId:User
    ) {}
    preview(): string {
        return this.content.substring(0, 15);
    }
}
const displayInfo=new User("seif",25,"seif@gmail","05","01200000",19)
const note1=new Note(1,"Study","I am studying TypeScript today",displayInfo);
console.log(displayInfo.email);
console.log(note1.preview());



