import { Nodo } from "./Nodo.js";

export class Lista{
    constructor(){
        this.L = null;
        this.n = 0;
    }
    
    add(dato){ 
        let Ant = null;
        let p = this.L;
        while( p!==null ){
            Ant = p;
            p = p.getLink();
        }
        
        let nuevo = null;
        if (Ant === null){  
            nuevo = new Nodo(dato);
            nuevo.setLink(this.L);
            this.L = nuevo;
            this.n++;
        }else{
            nuevo = new Nodo(dato);
            Ant.setLink(nuevo);
            nuevo.setLink(p);
            this.n++;
        }
    }

    exist(dato){
        let p = this.L;
        while (p !== null){
            if(p.getData===dato){
                return true;
            }
            p = p.getLink();
        }
       return false;
    }


    toString(){ 
        let S = "[";
        let coma="";
        let p = this.L;
        while (p !== null){
            S += coma + p.getData();
            coma=", ";
            p = p.getLink();
        }
       return S+"]";
    }

}
