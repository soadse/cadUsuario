/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        $('.error-message').remove();
        $('.form-control').removeClass('is-invalid');

        if ($('#nome').val().trim() === '') {
            isValid = false;
            $('#nome').addClass('is-invalid');
            $('#nome').after('<div class="error-message text-danger">O campo Nome é obrigatório.</div>');
        }

        if ($('#sobrenome').val().trim() === '') {
            isValid = false;
            $('#sobrenome').addClass('is-invalid');
            $('#sobrenome').after('<div class="error-message text-danger">O campo Sobrenome é obrigatório.</div>');
        }

        const email = $('#email').val().trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (email === '') {
            isValid = false;
            $('#email').addClass('is-invalid');
            $('#email').after('<div class="error-message text-danger">O campo E-mail é obrigatório.</div>');
        } else if (!emailPattern.test(email)) {
            isValid = false;
            $('#email').addClass('is-invalid');
            $('#email').after('<div class="error-message text-danger">Por favor, insira um e-mail válido (exemplo@dominio.com).</div>');
        }

        const senha = $('#senha').val().trim();
        const senhaPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;

        if (senha === '') {
            isValid = false;
            $('#senha').addClass('is-invalid');
            $('#senha').after('<div class="error-message text-danger">O campo Senha é obrigatório.</div>');
        } else if (!senhaPattern.test(senha)) {
            isValid = false;
            $('#senha').addClass('is-invalid');
            $('#senha').after('<div class="error-message text-danger">A senha deve ter pelo menos 8 caracteres, incluindo um número e um caractere especial.</div>');
        }

        const numero = $('#numero').val().trim();
        if (numero === '') {
            isValid = false;
            $('#numero').addClass('is-invalid');
            $('#numero').after('<div class="error-message text-danger">O campo Número é obrigatório.</div>');
        } else if (!/^\d+$/.test(numero)) {
            isValid = false;
            $('#numero').addClass('is-invalid');
            $('#numero').after('<div class="error-message text-danger">O campo Número deve conter apenas números.</div>');
        }

        const cep = $('#cep').val().trim();
        if (cep === '') {
            isValid = false;
            $('#cep').addClass('is-invalid');
            $('#cep').after('<div class="error-message text-danger">O campo CEP é obrigatório.</div>');
        } else if (!/^\d{8}$/.test(cep)) {
            isValid = false;
            $('#cep').addClass('is-invalid');
            $('#cep').after('<div class="error-message text-danger">O CEP deve conter 8 números.</div>');
        }

        const complemento = $('#complemento').val().trim();
        if (complemento === '') {
            isValid = false;
            $('#complemento').addClass('is-invalid');
            $('#complemento').after('<div class="error-message text-danger">O campo Complemento é obrigatório.</div>');
        }

        if (isValid) {
            $('#successModal').modal('show');
            $('#registrationForm')[0].reset();
        } else {
            alert('Por favor, corrija os erros abaixo antes de enviar.');
        }
    });

    $('#cep').on('input', function() {
        var value = $(this).val().replace(/\D/g, '');
        if (value.length <= 8) {
            $(this).val(value);
        }
    });

    $('#numero').on('input', function() {
        var value = $(this).val().replace(/\D/g, '');
        $(this).val(value);
    });
});
