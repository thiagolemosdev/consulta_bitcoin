let html = document.querySelector("[data-bitcoin]");

capturarBitcoin();
setInterval(() => {
  capturarBitcoin();
}, 30000);

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
  bitcoin = bitcoin.toLocaleString("pt-BR");
  const span = document.createElement("h3");
  span.innerText = `R$ ${bitcoin}`;
  html.appendChild(span);
}