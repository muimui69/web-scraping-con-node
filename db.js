import Api from './Api.js';
import {Lista} from './listas/Lista.js';

//const DataSistemas = await Api.ingenieraSistemas();
//const DataInformatica = await Api.ingenieraInformatica();
const DataRedes = await Api.ingenieraRedes();

/* vector de siglas */
let siglaSistemas = ['MAT101','INF110','INF119','FIS100','LIN100',
                    'MAT102','INF120','MAT103','FIS102','LIN101',
                    'MAT207','INF210','INF211','FIS200','ADM100',
                    'MAT202','MAT205','INF220','INF221','ADM200',
                    'MAT302','INF310','INF312','ECO300','ADM330',
                    'MAT329','INF323','INF322','INF342','ADM320',
                    'MAT419','INF433','INF413','INF412','INF432',
                    'ECO449','INF423','INF442','INF422','INF462',
                    'INF511','INF513','INF512','INF552',
                    'GRL001'  
];

let siglaInformatica = ['MAT101','INF110','INF119','FIS100','LIN100',
                        'MAT102','INF120','MAT103','FIS102','LIN101',
                        'MAT207','INF210','INF211','FIS200','ADM100',
                        'MAT202','MAT205','INF220','INF221','ADM200',
                        'MAT302','INF318','INF310','INF312','INF319',
                        'MAT329','INF323','INF322','INF342','INF329',
                        'MAT419','INF418','INF433','INF413','INF412',
                        'ECO449','INF423','INF442','INF422','INF428',
                        'INF511','INF513','INF512','INF552',
                        'GRL001'  
];

let siglaRedes = ['MAT101','INF110','INF119','FIS100','LIN100',
                  'MAT102','INF120','MAT103','FIS102','LIN101',
                  'MAT207','INF210','INF211','RDS210','ELT241',
                  'MAT202','MAT205','INF220','INF221','RDS220',
                  'MAT302','RDS310','INF312','ELT352','ELT354',
                  'MAT329','INF323','INF322','ELT362','RDS320',
                  'MAT419','INF433','INF413','RDS410','ELT374',
                  'ECO449','INF423','RDS421','RDS429','ELT384',
                  'INF511','INF513','RDS511','RDS512','RDS519',
                  'GRL001'  
];


/* vector de datas */
let inf = [];
let sis = [];
let red = [];

/* vetor que unifica las 3 carreras */
let alldate = [];

async function setDataSistemas(Sistemas){
    let salva = Sistemas;
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            sis[j] = cad;
            console.log(sis[j]);
            j++;
        }
    }
}


async function setDataInformatica(Informatica){
    let salva = Informatica;
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            inf[j] = cad;
            console.log(inf[j]);
            j++;
        }
    }
}

async function setDataRedes(Redes){
    let salva = Redes;
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            red[j] = cad;
            console.log(red[j]);
            j++;
        }
    }
}


/* METODOS AUXILIARES */
function pos (texto,cadena){
    let s = "";
    for(let i = 0;i<texto.length ;i++){
        s+=texto[i];
        if(s.toLocaleUpperCase()===cadena.toLocaleUpperCase()){
            return true;
        }
    }
    return false;
}

function posVector(texto,vectorSigla){
    for(let i = 0;i<vectorSigla.length ;i++){
        if(pos(texto,vectorSigla[i])){
            return true;
        }
    }
    return false;
}



function GruposSistemas(){
    console.log("******************************************************");
    for (let j = 0;j<5;j++){
        for(let i = 0;i<sis.length ;i++){
            if(pos(sis[i],siglaSistemas[j])){
                console.log("----------------------------------------------------");
                console.log(sis[i]);
                for(let k=i+1;k<sis.length-1;k++){
                    if(!posVector(sis[k],siglaSistemas)){
                        console.log(sis[k]);
                    }else break;
                }
                break;
            }
        }
    }
}


function GruposInformatica(){
    console.log("******************************************************");
    for (let j = 0;j<5;j++){
        for(let i = 0;i<inf.length ;i++){
            if(pos(inf[i],siglaInformatica[j])){
                console.log("----------------------------------------------------");
                console.log(inf[i]);
                for(let k=i+1;k<inf.length-1;k++){
                    if(!posVector(inf[k],siglaInformatica)){
                        console.log(inf[k]);
                    }else break;
                }
                break;
            }
        }
    }
}

function GruposRedes(){
    console.log("******************************************************");
    let grupo = [];
    let sigla =[];
    let s = "";
    for (let j = 0;j<5;j++){
        for(let i = 0;i<red.length ;i++){
            if(pos(red[i],siglaRedes[j])){
                console.log("----------------------------------------------------");
                //console.log(red[i]);
                sigla[j] = new Lista();
                sigla[j].add(siglaRedes[j]);
                grupo[j] =  new Lista();
                for(let k=i+1;k<red.length-1;k++){
                    if( (!posVector(red[k],siglaRedes))){ 
                        //console.log(red[k]);
                        if(pos(red[k],"GRUPO")){
                            grupo[j].add(red[k]);
                        }
                    }else break;
                }
                console.log(sigla[j] +  "--->" + grupo[j].toString());
                break;
            }
        }
    }
}


setDataRedes(DataRedes);
GruposRedes();