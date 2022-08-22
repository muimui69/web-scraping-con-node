import inquirer from 'inquirer';
import  'colors';
import Api from './db.js';
import {createSpinner} from 'nanospinner';

function print_logo(){
    const ascci = '\n'+
    '888888888\\     888\\    888\\    888\\     88888888-\\       88888888888\\ \n' +
    '888 \\____\\|    888 |   888 |   888 |    888 \\ 888 \\      888\\ ___888 | \n' +
    '888 |          888 |   888 |   888 |    888 |  888 \\ 	 888 |   888 | \n' + 
    '888888888\\     888 |   888 |   888 |    888 |	888 |    888 |   888 | \n' + 
    '88 \\__888 |    888 |   888 |   888 |    888 |  888 \\| 	 888 |   888 | \n' +    
    '88 |  888 |    88888888888 |   888 |    888 | 888 \\|     888 |   888 | \n' +
    '888888888 |    88888888888 |   888 |    88888888 \\|      88888888888 | \n' +  
    '\\________\\|    \\__________\\|   \\__\\|    \\_______\\|	 \\__________\\| \n';
    return ascci;
}   

function print_waringMessage(){
    const message =
    `
    ${'Todos los derechos reservados wido corporation(r) \n'.yellow}
    ${'Advertencia:'.red} 
    ${'El presente trabajo,no tiene relacion alguna con ningun partido politico,es un proyeto personal,por favor si es usted de un partido politico abstenganse de decir huevadas,gracias.\n'.green}
    `
    return message;
}

console.log(print_logo().cyan);
console.log(print_waringMessage());

const spinner = createSpinner('cargando aplicacion...\n').start();
Api.OnApi();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.success('Aplicacion lista.');
    inquirer.prompt([
    {
        type:'input',
        name:'SIGLA',
        message:'Por favor introduce la sigla(s) de la materia en la que estas interesado.(Introducela con -S separadas por un espacio ej. -S INF110 MAT101 ... )',
    }
    /*{
        type:'input',
        name:'GRUPO',
        message:'Por favor introduce el grupo de la materia. (Si estas interesado en un grupo o cierta cantidad de grupos ponglos asi ej. -G Z2 SS SF ...) o (Simplemnte dale enter y por defecto se mostraran todos los grupos)',
    }*/
    ]).then( ({SIGLA}) => {
       Api.getPeticion(SIGLA);       
        //console.log(SIGLA,GRUPO);
    });
},181000); //27000 -->  81000  -->181000


