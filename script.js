function sendWhatsApp(event){
  event.preventDefault();
  const phone = "5551999999999"; // TROQUE pelo número do WhatsApp, com DDI+DDD
  const nome = document.getElementById("nome").value;
  const empresa = document.getElementById("empresa").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const text = `Olá, Legacy Hub! Meu nome é ${nome}. Empresa: ${empresa || "não informado"}. E-mail: ${email || "não informado"}. ${mensagem}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}
