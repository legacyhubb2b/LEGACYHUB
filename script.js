```javascript
/* =========================================================
   LEGACY HUB 4.0
   Intelligent Commercial Lead
========================================================= */

function sendWhatsApp(event) {

    event.preventDefault();

    /* =====================================================
       CONFIGURAÇÃO
    ===================================================== */

    const phone = "5551920067748";


    /* =====================================================
       CAPTURA DOS DADOS
    ===================================================== */

    const nome = document
        .getElementById("nome")
        .value
        .trim();

    const empresa = document
        .getElementById("empresa")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const perfil = document
        .getElementById("perfil")
        .value
        .trim();

    const servico = document
        .getElementById("servico")
        .value
        .trim();

    const mensagem = document
        .getElementById("mensagem")
        .value
        .trim();


    /* =====================================================
       VALIDAÇÃO
    ===================================================== */

    if (!nome) {

        alert("Por favor, informe seu nome.");

        document.getElementById("nome").focus();

        return;
    }


    if (!perfil) {

        alert("Selecione o que você procura.");

        document.getElementById("perfil").focus();

        return;
    }


    /* =====================================================
       DEFINIÇÃO DA ABERTURA
    ===================================================== */

    let abertura = "";

    switch (perfil) {

        case "Quero vender":

            abertura =
                "Tenho um produto ou serviço e gostaria de desenvolver novos mercados, clientes ou canais comerciais.";

            break;


        case "Quero comprar":

            abertura =
                "Estou procurando fornecedores, produtos ou soluções para uma necessidade comercial.";

            break;


        case "Quero representar":

            abertura =
                "Tenho interesse em representar produtos ou serviços e gostaria de avaliar uma parceria comercial.";

            break;


        case "Quero expandir":

            abertura =
                "Quero expandir minha empresa para novos mercados, regiões ou oportunidades comerciais.";

            break;


        case "Quero uma parceria":

            abertura =
                "Tenho interesse em construir uma parceria comercial com o Legacy Hub.";

            break;


        default:

            abertura =
                "Gostaria de conversar sobre uma oportunidade comercial.";

    }


    /* =====================================================
       MONTAGEM DA MENSAGEM
    ===================================================== */

    const texto = `Olá, Legacy Hub!

Meu nome é *${nome}*.

${abertura}

━━━━━━━━━━━━━━━━━━
*DADOS DO CONTATO*
━━━━━━━━━━━━━━━━━━

*Empresa:* ${empresa || "Não informada"}

*E-mail:* ${email || "Não informado"}

*Perfil:* ${perfil}

*Área de interesse:* ${servico || "Não selecionada"}

━━━━━━━━━━━━━━━━━━
*NECESSIDADE / OPORTUNIDADE*
━━━━━━━━━━━━━━━━━━

${mensagem || "Gostaria de apresentar minha necessidade diretamente à equipe Legacy Hub."}

━━━━━━━━━━━━━━━━━━

Mensagem enviada através do site
*Legacy Hub — Inteligência Comercial*
`;


    /* =====================================================
       URL DO WHATSAPP
    ===================================================== */

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;


    /* =====================================================
       ABERTURA DO WHATSAPP
    ===================================================== */

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}
```
