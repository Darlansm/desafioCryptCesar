const alphabetDown = 'abcdefghijklmnopqrstuvwxyz';

const alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function crypto(mensagem, key = 0) {

    if (!mensagem || !key) {
        console.log('')
    }

    let cryptographAux = ''
    let posicao = 0



    for (let i = 0; i < mensagem.length; i++) {
        //transformar em valor

        if (mensagem[i] === ' ') {

            cryptographAux += ' '

        } else if (mensagem[i] === '.') {
            cryptographAux += '.'
        }
        else if (!isUp(mensagem[i], alphabetUp)) {

            if (((alphabetDown.indexOf(mensagem[i])) + key) > 25) {
                posicao = ((alphabetDown.indexOf(mensagem[i])) + key) % alphabetDown.length

            } else {

                posicao = ((alphabetDown.indexOf(mensagem[i])) + key)

            }
            cryptographAux += (alphabetDown.substr(posicao, 1))
        }else {
            if (((alphabetUp.indexOf(mensagem[i])) + key) > 25) {
                posicao = ((alphabetUp.indexOf(mensagem[i])) + key) % alphabetUp.length

            } else {

                posicao = ((alphabetUp.indexOf(mensagem[i])) + key)

            }
            cryptographAux += (alphabetUp.substr(posicao, 1))

        }

    }

    function isUp(re, str) {
        let midstring
        if (str.search(re) != -1) {
            return true
        } else {
            return false
        }
    }
    console.log('Mensagem criptada: '+ mensagem)
    console.log('Mensagem decriptada: '+ cryptographAux)

     return cryptographAux
};



console.log(crypto('abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ .', 30))

console.log('abcdefghijklmnopqrstuvwxyz .');


