/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.getElementById('cep').addEventListener('blur', function() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        alert('CEP inválido. O CEP deve conter 8 dígitos.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
                return;
            }

            document.getElementById('logradouro').value = data.logradouro || 'Não disponível';
            document.getElementById('bairro').value = data.bairro || 'Não disponível';
            document.getElementById('cidade').value = data.localidade || 'Não disponível';
            document.getElementById('estado').value = data.uf || 'Não disponível';
        })
        .catch(error => {
            alert('Erro ao buscar o CEP. Tente novamente.');
            console.error(error);
        });
});

document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Endereço cadastrado com sucesso!');
});
