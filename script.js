function sendWhatsApp(event){
event.preventDefault();
const phone="5551999999999";
const nome=document.getElementById("nome").value.trim();
const email=document.getElementById("email").value.trim();
const empresa=document.getElementById("empresa").value.trim();
const servico=document.getElementById("servico").value;
const mensagem=document.getElementById("mensagem").value.trim();
const texto=`Olá, Legacy Hub! Meu nome é ${nome}. Empresa: ${empresa||"não informada"}. E-mail: ${email||"não informado"}. Serviço: ${servico||"não selecionado"}. Necessidade: ${mensagem||"não informada"}`;
window.open(`https://wa.me/${phone}?text=${encodeURIComponent(texto)}`,"_blank");
}