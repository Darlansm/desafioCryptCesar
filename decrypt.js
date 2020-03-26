const alphabetDown = 'abcdefghijklmnopqrstuvwxyz';

const alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function decrypt(mensagem, key = 0) {

    if (!mensagem || !key) {
        console.log('')
    }

    let cryptographAux = ''
    let posicao = 0

    for (let i = 0; i < mensagem.length; i++) {
        //transformar em valor
        
        if (mensagem[i] === ' ') { //adiciona espaço

            cryptographAux += ' '

        } else if (mensagem[i] === '.') { //adiciona ponto
            cryptographAux += '.'
        }
        else if (!isUp(mensagem[i], alphabetUp)) { //Verifica se é minuscula

            if (((alphabetDown.indexOf(mensagem[i])) - key) < 0) {
                posicao = ((alphabetDown.indexOf(mensagem[i])) - key) % alphabetDown.length

            } else {

                posicao = ((alphabetDown.indexOf(mensagem[i])) - key)

            }
            cryptographAux += (alphabetDown.substr(posicao, 1))
        }else {
            if (((alphabetUp.indexOf(mensagem[i])) + key) < 0) {
                posicao = ((alphabetUp.indexOf(mensagem[i])) + key) % alphabetUp.length

            } else {

                posicao = ((alphabetUp.indexOf(mensagem[i])) - key)

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
    console.log('Mensagem : '+ mensagem)
    console.log('Mensagem encriptada: '+ cryptographAux)

    return cryptographAux

  
};

console.log(decrypt('efghijklmnopqrstuvwxyzabcd EFGHIJKLMNOPQRSTUVWXYZABCD .' , 30))



