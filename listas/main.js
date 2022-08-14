import {Lista} from './Lista.js';

function main(){
    let p = new Lista();
    console.log(p.isVacia());
    p.add(23);
    p.add(1);
    p.add(56);
    p.add(30);
    console.log(p.toString());
}

main();