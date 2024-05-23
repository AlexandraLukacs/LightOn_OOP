export default class Lampa {
    #allapot;
    #id;
    #divELem;
    #szuloELem;

    constructor(id, allapot, szuloElem) {
        this.#allapot=allapot;
        this.#id=id;
        this.#szuloELem=szuloElem;
        this.#megjelenit();
        this.#divELem=this.#szuloELem.children("div:last-child");
        this.#szinBeallit();
        this.#esemenyKezelo();
    }

    #esemenyKezelo(){
        this.#divELem.on("click", ()=>{
            this.#trigger("kapcsolas");
            //console.log(this.#id);
        })
    }

    #megjelenit(){
        let txt =`
                <div class="lampa">
                    
                </div>
                `;
        this.#szuloELem.append(txt);
    }

    #szinBeallit(){
        /* Az elem állapotától függően hozzáadja a .felkapcs classt */
        if(this.#allapot){
            this.#divELem.addClass("felkapcs")
        }
    }

    #trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev,{detail:this.#id});
        window.dispatchEvent(e);
    }
}