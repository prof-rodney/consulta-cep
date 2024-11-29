document.getElementById('cep').addEventListener('blur', function() {
    let cep = this.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.json())
        .then(data => {
            if (!('erro' in data)) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.estado;
                console.log(data);
            } else {
                alert('CEP não foi encontrado.');
            }
            
        })
        .catch(error => console.error('Erro ao localizar o CEP: ', error));
    } else {
        alert('CEP digitado é inválido.');
    }

});