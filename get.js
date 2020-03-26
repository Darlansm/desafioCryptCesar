const url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=8be231971ded7f1454ad485fcd1f259b162dd1e6'
const axios = require('axios')
const fs = require('fs')

const resposta = {
    data : {},
    status : 0
}

async function answer(resposta) {
    let res = await axios.get(url);
 
    resposta.data = res.data;
    console.log(res.status)
    console.log(resposta.data)
   if(res.status === 200){

    fs.writeFile(__dirname + '/answer.json', JSON.stringify(resposta.data), err => {
        console.log(err || 'Arquivo salvo!')
    })

   }
}

// axios.get(url).then(response => {

//     pergunta = response.data

//     console.log(pergunta)
//     console.log(typeof pergunta)



// })

console.log(answer(resposta))

