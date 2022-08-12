// forma backend
/*const funca = require('./Api');
(async function main() {
    console.log(funca.ingenieraSistemas());
})();*/

//forma tradicional set type = module in package.json
import Api from './Api.js';
const DataSistemas = await Api.ingenieraSistemas();
//const DataInformatica = await Api.ingenieraInformatica();
//const DataRedes = await Api.ingenieraRedes();

async function setDataSistemas(Sistemas){
    let salva = Sistemas;
    let orden = [];
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            orden[j] = cad;
            console.log(orden[j]);
            j++;
        }
    }
}

async function setDataInformatica(Informatica){
    let salva = Informatica;
    let orden = [];
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            orden[j] = cad;
            console.log(orden[j]);
            j++;
        }
    }
}

async function setDataRedes(Redes){
    let salva = Redes;
    let orden = [];
    let j = 0;
    for(let i = 0;i<salva.length ;i++){
        let cad = salva[i];
        cad = cad.trim();
        if  (cad.length != 0){
            orden[j] = cad;
            console.log(orden[j]);
            j++;
        }
    }
}

//console.log(setDataSistemas(DataSistemas));
//console.log(setDataInformatica(DataInformatica));
//console.log(setDataRedes(DataRedes));