
try {
    // simple types;
// explicit types only takes a value that is a string and cant be re assigned!;
let username: string = 'keli'

// impilcit types: takes any value attached to a string;

let user_name = 'keli jimmy'

// special types:
// any
let jaba : any = 'miraa'
    jaba = 10

    // unknown dataType;
let variable : unknown  = 'unknown_data'
variable = {}

// unknow is a safer option;

// types and arrays;
const users : string[] = ["keli", "jimmy", "muthengi"]
// users.push("james") this line of code should work;
// users.push(10) will mnot work as users array expects an array of strings

// read only arrays dont take in other value data types;

const users_list : readonly string[] = []
// users_list.push() push wont work ar read only arrays cant be modified;

// array inferance;

const numbersArray  = [1, 2, 4]
// numbersArray.push("keli") || wont push any data type that is not arrray into the numbersArray;

// typed Arrays = []

let typeTuple : [string, number, boolean]
    // typeTuple = ['keli', 10, false]  correct format since all values of a typeTuple fit decription

    // read only tuples:
let newTypeTuple : readonly [string, boolean, number] = ['keli', true, 26]

// newTypeTuple.push()  wont work since the tuple object ia  a read only
 
// typescriopt object types:

const car : {type: string, model: string, price:number} = {
    type:'toyota',
    model:'prado',
    price:9000
}

// object inference
const user : {} = {name:'keli'}
// user.name = 10 wont work as type string cant be assigned a number!

// optional parameters in an object;
const user_data : {name?:string, adress?:string, phone?:string} = {}
user_data.adress = '@kabete';

// user_data is an object that takes in name adress and phone but can accomodate any of the three..

// enums: numeric

enum statusCode{
    errorCode=400,
    successCode=200,
    internalServerError=500
}

// console.log( "statusCode -=-=-==->" , statusCode)

// STRING ENUMS;
enum cardinalPoints{
    north = 'North',
    west = 'West',
    east='East',
    south='South'
}

// console.log('cardinal Points', cardinalPoints)

// ALIASES AND INTERFACES:

interface User {
    username:string,
    useremail?:string,
    age?:number,
    title?:string
}

const sessionusers : User = {
    username:'keli',
    useremail:'keli@gmail.com',
    age:10,
    title:'admin'
}

// interface extensions::::;; ==---->=

interface Customer extends User{
    customerType:string
}

const customer : Customer = {
    customerType:'coa',
    useremail:'customerone@gmail.com',
    username:'Keli_Customer'
}

// console.log("customer Data ==-=-=-=-=>", customer)

} catch (error: any) {
    console.log(error)
}

// UNIONS;

function checkstatuscode(code:  number | string){
   
}

// FUNCTIONS RETURN TYPES;
// this function explicityl returns {numbers, strings};
function addsNumbers():number{
    return 1+ 1
}

const subtratctsNumbers = (): number => {
    return 3 -1
}
// VOID RETURN TYPES;

const returnNothing = () :void => {
    console.log('I am function that returns nothing:: :===: ')
}

// functions and parameters:

const sendUserData = (username: string, useremail:string) : void => {
    console.log("testing testing parameters :: ")
}

// functions with interfaced parameters:

interface userData{
    username:string,
    useremail?:string
}

const redirectUser = (userObject: userData ): void => {
    console.log("redirect the user =====<><>", userObject)
}

// redirectUser({username:'keli'})

// OPTIONAL PARAMETERS:

function generateReport(target: string, targetNumber?: number): void{
    console.log("I will generate a report to : ->", target)
}
// generateReport('keli')

// defau;t parameters:

function doDefaultParameters(username: string = 'keli'):void{
    console.log('I am a defualt parameter: ', username)
}
// doDefaultParameters()

// NAMED PARAMETERS;
function named_parameters({username, useremail}: {username:string, useremail?:string}):object{

    return { username}
}

const funcData =  named_parameters({username:'keli'});
// console.log('funcData' ,funcData)

// TYPE ALIAS;
type AliasFunction = (value: number) => string;

const aliasfunc: AliasFunction = (inputValue) => {
    console.log("inputValue", inputValue)
    return 'return';
};

// aliasfunc(10)

// CASTING

const numbers: unknown = 89767567579
// console.log((numbers as unknown as string).length) returns undefined
// console.log((numbers as string).length) this wont work convert to  number first:

// console.log((<string>numbers).length);

// MEMBERS AND VISIBILITY AND CLASSES ;

class Person{
    private username:string;
    private userEmail:string
    public constructor(username: string, userEmail:string){
        this.username = username
        this.userEmail = userEmail
    }

    public getName():string{
        return this.username + ' ' + this.userEmail
    }
}

const person = new Person('keli', 'keli@gmail.com')

// console.log(person.getName())

// READ ONLY;

class Customer{
    private readonly customername:string;

    constructor(customername:string){
        this.customername = customername
    }

    async getCustomerName(): Promise <any>{
        // this.customername = 'jimmy'
        // console.log('I am a customer', this.customername)
        return this.customername
    }
}

const customer = new Customer('kui')

// console.log("customer ;-----", customer.getCustomerName())

// IMPLEMENTS ::
interface Shape{
    getArea: () => Promise <number> 
}

class ShapeArea implements Shape{

    constructor(readonly height: number, readonly width: number){
        this.height = height
        this.width = width
    }

    async getArea(){
        return this.height * this.width
    }
}

class Pythogoras extends ShapeArea{
    constructor( readonly length: number, width: number){

        super(length, width)

        // console.log("length", length)
        // console.log("length", width)
    }

    async getArea(){

        // console.log("this width ------>", this.width)
        return this.height * this.width
    }
}

const calculateArea = new Pythogoras(10, 20)

// console.log('area of calculations : -----<.<.<', calculateArea.getArea().then((data: number) => console.log(data)))

// classes extensions -->



// BASIC GENERICS;


// KEY OF;

interface Human{
    name:string,
    age:number
}

async function getHumanType(human: Human, property: keyof Human):Promise<any>{

    return console.log('check key of ', human[property], " which is ", property)
}

const newHUman = {
    name:'keli',
    age:20
}

// getHumanType(newHUman, "age")

// NULL AND UNDEFINED;

let user_value : string | number | null | undefined = 'string'
user_value = null
console.log('user_value =====<>', user_value)