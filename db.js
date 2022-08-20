import Api from './Api.js';
import {Lista} from './listas/Lista.js';

//const DataSistemas = await Api.ingenieraSistemas();
//const DataInformatica = await Api.ingenieraInformatica();
//const DataRedes = await Api.ingenieraRedes();
let DataInformatica;
let DataSistemas;
let DataRedes; 


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
let grupo = [];

/* fase casi final */
let allsiglas = [];
let allsiglasOrigimal = [];
let alldate = [];
let marca = [];

async function setDataSistemas(Sistemas){
    let salva = Sistemas;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            //sis[j] = cad;
            //console.log(sis[j]);
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
            //inf[j] = cad;
            //console.log(inf[j]);
            alldate.push(cad);
        }
    }
}

async function getDataInformatica(){
    return new Promise((resolve) =>  {
        setTimeout(() =>{
          resolve(inf);
        },54000);
    });
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

async function OnApi(){
    DataInformatica = await Api.ingenieraInformatica();
    setDataInformatica(DataInformatica)
    DataSistemas = await Api.ingenieraSistemas();
    setDataSistemas(DataSistemas);
    DataRedes = await Api.ingenieraRedes();
    setDataRedes(DataRedes);
}

function GruposSistemas(){
    for (let j = 0;j<5;j++){
        for(let i = 0;i<sis.length ;i++){
            if(pos(sis[i],siglaSistemas[j])){
                sigla[j] = new Lista();
                sigla[j].add(siglaSistemas[j]);
                grupo[j] =  new Lista();
                for(let k=i + 1;k<sis.length-1;k++){
                    if(!posVector(sis[k],siglaSistemas)){
                        if(pos(sis[k],"GRUPO")){
                            grupo[j].add(sis[k]);
                        }
                    }else break;
                }
                console.log(sigla[j] +  "--->" + grupo[j].toString());
                break;
            }
        }
    }
}


function GruposInformatica(){
    let cupos = [];
    for (let j = 0;j<5;j++){
        for(let i = 0;i<inf.length ;i++){
            if(pos(inf[i],siglaInformatica[j])){
                sigla[j] = new Lista();
                sigla[j].add(siglaInformatica[j]);
                grupo[j] =  new Lista();
                cupos[j] = new Lista();
                for(let k=i + 1;k<inf.length - 1;k++){
                    if(!posVector(inf[k],siglaInformatica)){
                        if(pos(inf[k],"GRUPO")){
                            grupo[j].add(inf[k]);
                        }
                        if (pos(inf[k],"CUPOS LIBRES")){
                            cupos[j].add(inf[k+1]);
                        }
                    }else break;
                }
                console.log(sigla[j].toString());
                console.log(grupo[j].toString());
                console.log(cupos[j].toString());
                break;
            }
        }
    }
}


function GruposRedes(){
    for (let j = 0;j<5;j++){
        for(let i = 0;i<red.length ;i++){
            if(pos(red[i],siglaRedes[j])){
                sigla[j] = new Lista();
                sigla[j].add(siglaRedes[j]);
                grupo[j] =  new Lista();
                for(let k=i + 1;k<red.length - 1;k++){
                    if( (!posVector(red[k],siglaRedes))){ 
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



function existeInVector(vector,dato){
    for(let i = 0; i<vector.length;i++){
        if (vector[i]===dato){
            return true;
        }
    }
    return false;
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
        console.log(allsiglasOrigimal[ac]);
        ac++;
    }
  }
  
  for(let y = 0;y<alldate.length;y++){
        marca[y] = false;
  }
}



function indexOfSigla(Sigla){
    for(let i = 0;i<alldate.length;i++){
        if( (pos(alldate[i],Sigla)) && (marca[i]===false) ){
            return i;
        }
    }
    return -1;
} 
 
function runAllDate(){  //tanta hueva paq de esta maldita cosa JAJAJAJA
    setDataInformatica(DataInformatica);
    setDataSistemas(DataSistemas);
    setDataRedes(DataRedes);
    unirTodasSiglas();
    setTimeout(() =>{
        let sigla =[];
        for (let j = 0;j<5;j++){
            let res ='';
            let index = indexOfSigla(allsiglasOrigimal[j]);
            while(index != -1){
                index = indexOfSigla(allsiglasOrigimal[j]);
                if(index!=-1){
                    if(marca[index]===false){
                        sigla[j] = new Lista();
                        sigla[j].add(allsiglasOrigimal[j]);
                        marca[index] = true;
                        console.log(sigla[j].toString());
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
    },3000)
}

function runDate(j){
    if(j<5){
        runDate(j + 1);
    }
}


function pruebaInformatica(){
    let res ='';
    for (let j = 0;j<5;j++){
        for(let i = 0;i<inf.length ;i++){
            if(pos(inf[i],siglaInformatica[j])){
                sigla[j] = new Lista();
                sigla[j].add(siglaInformatica[j]);
                for(let k=i + 1;k<inf.length - 1;k++){
                    if(!posVector(inf[k],siglaInformatica)){
                        if(pos(inf[k],"GRUPO")){
                            res+=inf[k] + '.\n';
                        }
                        if (pos(inf[k],"CUPOS LIBRES")){
                            res+='CUPOS LIBRES: ';
                            res+=inf[k+1] + '.\n';
                        }
                    }else break;
                }
                console.log(sigla[j].toString());
                console.log(res);
                break;
            }
        }
    }
}


//runAllDate();
export default{OnApi};