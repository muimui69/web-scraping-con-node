import {Lista} from '../listas/Lista.js';

//let grupos = ['SA','SB','SC','SE','SD','SH','SF','NX','NW','SP','SK','SG','SI','SS','SX','SZ','Z1','Z2','Z3','Z4','Z5'];
//let materia = [];
class date {
    constructor(){
        //let grupos = ['SA','SB','SC','SE','SD','SH','SF','NX','NW','SP','SK','SG','SI','SS','SX','SZ','Z1','Z2','Z3','Z4','Z5'];
        let semestre = [];
        semestre[0] = new Lista();
        for (let j = 0;j<materia.length;j++ ){
            semestre[0].add(materia[j]);
        }
        console.log(semestre[0].toString());
    }

}

let p = new date();