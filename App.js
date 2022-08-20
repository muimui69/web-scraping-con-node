import inquirer from 'inquirer';
import  'colors';
import ora from 'ora';
import Api from './db.js'

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

const spinner = ora('cargando aplicacion...\n').start();
Api.OnApi();
const Informatica = await Api.getDataInformatica();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.succeed('Aplicacion lista.');
    spinner.stop();
    console.log(Informatica);
    inquirer.prompt([
    {
        type:'list',
        name:'opciones',
        message:'A que carrera perteneces?',
        choices : [
            {
                value:'187-3',
                name:`1 Ingenieria Informatica.`,
                key:'1'
            },
            {
                value:'187-4',
                name:`2 Ingenieria en Sistemas.`,
                key:'2'
            },
            {
                value:'187-5',
                name:`3 Ingenieria en Redes.`,
                key:'3'
            }
        ]
    },
    {
        type:'input',
        name:'SIGLA',
        message:'Por favor introduce la sigla de la materia en la que estas interesado.',
    },
    {    
        type:'input',
        name:'GRUPO',
        message:'Por favor introduce el grupo de la materia indicada.',
    },
    {
        type:'checkbox',
        name:'extra',
        message:'que desea?',
        choices :[
            'Mostrar todas las materias con cupo y sin cupo.',
            'Mostrar solo las materias sin cupo.',
            'Mostrar las materias sin cupo.'
        ]
    }])
},27000);


