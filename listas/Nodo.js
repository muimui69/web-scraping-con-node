export class Nodo{
    constructor(Data){
        this.Data = Data;
        this.Link = null;
    }
    getData() {
        return this.Data;
    }
    setData(Data) {
        this.Data = Data;
    }

    getLink() {
        return this.Link;
    }

    setLink(Link) {
        this.Link = Link;
    }
}

