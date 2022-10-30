var nodemailer = require('nodemailer');

let 

var configuracoesSMTP = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "emailautomaticometodologia@gmail.com",
        pass: "vmwzhaoesbvkeisn"
    }
};

var transportador = nodemailer.createTransport(configuracoesSMTP);

var configuracoesEmail = {
    from: 'emailautomaticometodologia@gmail.com',
    to: 'wekisleysouza015@gmail.com, gabrielfvp32015@gmail.com',
    subject: 'E-mail de teste...',
    text: 'Se funcionar, deu bom. Isso é o corpo do e-mail.',
    html: '<h1>Aqui é o código html...<\h1>'
}

transportador.sendMail(configuracoesEmail);