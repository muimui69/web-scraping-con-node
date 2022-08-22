import Api from './Api.js';
import {Lista} from './listas/Lista.js';

let DataInformatica;
let DataSistemas;
let DataRedes; 

let allsiglas = [];
let allsiglasOrigimal = [];
let alldate = [];
let marca = [];

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


function pos(texto,cadena){
    let s = "";
    for(let i = 0;i<texto.length;i++){
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


function existeInVector(vector,dato){
    for(let i = 0; i<vector.length;i++){
        if (vector[i]===dato){
            return true;
        }
    }
    return false;
}


function indexOfSigla(Sigla){
    for(let i = 0;i<alldate.length;i++){
        if( (pos(alldate[i],Sigla)) && (marca[i]===false) ){
            return i;
        }
    }
    return -1;
} 


function unirTodasSiglas(){
    let g;
    let i;
    let j;
    let k;
    for(i = 0;i<siglaSistemas.length;i++){
     allsiglas[i]=siglaSistemas[i];
    }
   g = i;
   for(j =0 ; j<siglaRedes.length;j++){
     allsiglas[g]=siglaRedes[j];
     g++;   
   }
 
   g = j;
   for( k =0 ;k<siglaInformatica.length;k++){
     allsiglas[g]=siglaInformatica[k];
     g++;   
   }
 
   let ac = 0;
   for(let u = 0;u<allsiglas.length;u++){
     if(!existeInVector(allsiglasOrigimal,allsiglas[u])){
         allsiglasOrigimal[ac]=allsiglas[u];
         ac++;
     }
   }
   
   for(let y = 0;y<alldate.length;y++){
         marca[y] = false;
   }
}
 

async function setDataSistemas(Sistemas){
    let salva = Sistemas;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            alldate.push(cad);
        }
    }
}


async function setDataInformatica(Informatica){
    let salva = Informatica;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            alldate.push(cad);
        }
    }
}


async function setDataRedes(Redes){
    let salva = Redes;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            //red[j] = cad;
            //console.log(red[j]);
            alldate.push(cad);
        }
    }
}


async function OnApi(){
    DataInformatica = await Api.ingenieraInformatica();
    DataSistemas = await Api.ingenieraSistemas();
    DataRedes = await Api.ingenieraRedes();
    setDataInformatica(DataInformatica)
    setDataSistemas(DataSistemas);
    setDataRedes(DataRedes);
    unirTodasSiglas();
}


/* -------------------  funciones usuario ---------------- */
let recibe = [];
function setPeticion(peticion){
    peticion = peticion.trim();
    if(peticion.length===0){
        console.log('Por favor ingrese de nuevo.');
        return;
    }else{
        peticion = peticion.split(' ');
        for(let i = 0;i<peticion.length;i++){
            if(peticion[i].length!=0){
                recibe.push(peticion[i]);
            }
        }
    }
}

function getPeticion(dato){ 
    setPeticion(dato);
    for(let i=0;i<recibe.length;i++){
        let res ='';
        let index = indexOfSigla(recibe[i]);
        if(index===-1){
            console.log('Error: Sigla no valida: ' + recibe[i] + '.');
        }
        while(index != -1){
            index = indexOfSigla(recibe[i]);
            if(index!=-1){
                if(marca[index]===false){
                    marca[index] = true;
                }
                for(let k=index + 1;k<alldate.length - 1;k++){
                    if( (!posVector(alldate[k],allsiglasOrigimal))){ 
                        if(pos(alldate[k],"GRUPO")){
                            res+=alldate[k] + '.\n';
                        }

                        if (pos(alldate[k],"CUPOS LIBRES")){
                            res+='CUPOS LIBRES: ';
                            res+=alldate[k+1] + '.\n';
                        }
                    }else break;    
                }   
            }
        }
        console.log(res);
    }
}

export default{OnApi,getPeticion};