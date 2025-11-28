function Greeting(name){
    console.log(`Hello, ${name}`);
}

const name = process.argv[2]; // argv[0]=node, argv[1]=script.js, argv[2]=first param
Greeting(name);