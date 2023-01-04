const soap  = require ('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl' 
soap.createClient(url, (err, client) => {
        if(err) {
            console.log(err)
        }else{
            console.log('CEP encontrado!')
            client.consultaCEP({
                cep:'48900070' //passagem do CEP para buscar o endereço
            }, (err, res) => {
                console.log(res)
            })
        }})

//Essa comunicação pela biblioteca SOAP demonstra como pode ser feita a integração de serviços de comunicação
// Nesse caso é possivel consultar o endereço através do CEP pela URL do arquilo XML dos correios.
