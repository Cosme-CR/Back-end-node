/**************************************************************************
 *  Objetivo: calculo da tabuada
 *  Data:     04/03/2026
 *  Autor:    Cosme
 *  Versão:   1.0
**************************************************************************/


function calculoTabuada(tInicio, tFinal, ncomeco,nfinal){
    let inicioT  = Number(tInicio)       //tabuada inicial
    let fimT     = Number(tFinal)        //tabuada final
    let comeconum = Number(ncomeco)      //numero iinicial
    let finalnum   = Number(nfinal)      //numero final

    //esse primerio while faz ir da tabuada de começo ate tabuada de fim
    while(inicioT <= fimT){

        //aux reccebe o numero inicial sempre q o segundo while começar
        let aux = comeconum
        console.log("")
        console.log("Tabuada do ["+inicioT+"]")
        //faz os calcuco da tabuada do numero inicial ate o final
        while (aux<=finalnum) {

            let resul =(inicioT*aux)
            console.log(inicioT+"x"+aux+"="+resul)
            //let test = inicioT+"x"+aux
            //console.table([test,resul],["tabuada", "resultado"])
            //vai encrementando o aux ate ele chegar no valor de numero final 
            aux++
        }
        //vai incrementando a tabuada de inicio ate ela chegar no fim da tabuada
        inicioT++
    }
}
calculoTabuada(3,15,0,15)
