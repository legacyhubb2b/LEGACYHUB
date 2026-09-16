```javascript
function sendWhatsApp(event) {
    event.preventDefault();

    const phone = "5551920067748";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
`Olá, Legacy Hub!

Meu nome é ${nome}.

Gostaria de conversar sobre uma possível oportunidade comercial.

*Empresa:* ${empresa || "Não informada"}
*E-mail:* ${email || "Não informado"}
*Serviço de interesse:* ${servico || "Não selecionado"}

*Minha necessidade:*
${mensagem || "Não informada"}

Aguardo o contato da equipe Legacy Hub.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}
```
