let html = document.querySelector("[data-bitcoin]");

capturarBitcoin();
setInterval(() => {
  capturarBitcoin();
}, 1000);

function capturarBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((r) => {
      return r.json();
    })
    .then((r) => {
      atualizaBitcoin(r.BRL.last);
    });
}

function atualizaBitcoin(bitcoin) {
  console.log("teste");
  bitcoin = bitcoin.toLocaleString("pt-BR");
  const h3 = document.createElement("h3");
  h3.innerText = `R$ ${bitcoin}`;
  html.innerHTML = `<div> </div>`;
  html.appendChild(h3);
}
