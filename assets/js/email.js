(function() {
  emailjs.init('t4UjQeHIbEBzXOPxE'); // Substitua 'YOUR_USER_ID' pelo seu ID de usuário do EmailJS

  function sendEmail(name, email, message) {
    var params = {
      from_name: name,
      to_name: 'einsteinforcomputer@gmail.com', // Substitua 'Seu Nome' pelo nome do destinatário do e-mail
      message: message,
      reply_to: email
    };

    emailjs.send('service_th6rjtf', 'template_o6uc8op', params)
      .then(function() {
        alert('E-mail enviado com sucesso!');
        clearForm();
      }, function(error) {
        console.error('Ocorreu um erro ao enviar o e-mail:', error);
      });
  }

  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

  window.sendEmail = sendEmail;
})();