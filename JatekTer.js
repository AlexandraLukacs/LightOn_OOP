import Lampa from "./Lampa.js";

export default class JatekTer {
    #allapotLISTA=[];

    constructor(allapotLISTA){
        this.#allapotLISTA=allapotLISTA;
        let szuloElem=$(".jatekTer");
        szuloElem.empty();
        this.#allapotLISTA.forEach((element, index) => {
            new Lampa(index, element, $(".jatekTer"));
        });
    }
}