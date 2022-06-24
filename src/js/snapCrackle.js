function inicioString (str){
    if (str!=""){
        str = str + ", "
    }
    return str
}

function snapCrackle (maxValue){
    let value = 1
    let str = ""
    for (let i=0;i<maxValue;i++){
        if(value %2 != 0){
            if(value %5 == 0){
                str = inicioString(str)
                str = str + "SnapCrackle"
            }
            else{
                str = inicioString(str)
                str = str + "Snap"
            }
        }
        else{
            if(value %5 == 0){
                str = inicioString(str)
                str = str + "Crackle"
            }
            else{
                str = inicioString(str)
                str = str + value
            }
        }
        value++
        }
        return str
    }

    function prime(maxValue){
        let divisores = 0
        for(let i=1;i<=maxValue;i++){
            if(maxValue%i==0){
                divisores++
            }
        }
        if(divisores==2){
            return "Primo"
        }
    }

    function snapCracklePrime (maxValue){
        let value = 1
        let str = ""
        for (let i=0;i<maxValue;i++){
            if(value %2 != 0){
                if(prime(value)=="Primo"){
                    if(value %5 == 0){
                        str = inicioString(str)
                        str = str + "SnapCracklePrime"
                    }
                    else{
                        str = inicioString(str)
                        str = str + "SnapPrime"
                    }
                }
                else{
                    if(value %5 == 0){
                        str = inicioString(str)
                        str = str + "SnapCrackle"
                    }
                    else{
                        str = inicioString(str)
                        str = str + "Snap"
                    }
                }
            }
            else{
                if(prime(value)=="Primo"){
                    if(value %5 == 0){
                        str = inicioString(str)
                        str = str + "CracklePrime"
                    }
                    else{
                        str = inicioString(str)
                        str = str + "Prime"
                    }
                }
                else{
                    if(value %5 == 0){
                        str = inicioString(str)
                        str = str + "Crackle"
                    }
                    else{
                        str = inicioString(str)
                        str = str + value
                    }
                }
            }
            value++
            }
            return str
    }

        let opcao = Number(prompt("Digite 01 para snapCrackle ou Digite 02 para snapCracklePrime"))

        if(opcao == 01 || opcao == 1){
            let valor = Number(prompt("Digite o número a ser analisado pela função snapCrackle"))
            alert(snapCrackle(valor))
        }
        else if(opcao == 02 || opcao == 2){
            let valor = Number(prompt("Digite o número a ser analisado pela função snapCracklePrime"))
            alert(snapCracklePrime(valor))
        }