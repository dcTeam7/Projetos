import { getProperty, showElement, hideElement } from "code.org.js";

export function escolherTipo() {
  // Escolher tipo de pizza
  //Se as duas checkbox estiverem marcadas vai aparecer o "vegano-e-Nvegano"
  var verduraComCarne =
    getProperty("checkboxNon-veg", "checked") &&
    getProperty("checkboxVeg", "checked");
  var temRecheio =
    getProperty("checkboxNon-veg", "checked") ||
    getProperty("checkboxVeg", "checked");
  var recheioNVegano =
    getProperty("checkboxNon-veg", "checked") &&
    !getProperty("checkboxVeg", "checked");
  var recheioVegano =
    getProperty("checkboxVeg", "checked") &&
    !getProperty("checkboxNon-veg", "checked");
  if (verduraComCarne) {
    showElement("imageVegNon-veg");
    //senao
  } else {
    //vai esconder o "n vegano, o vegano e o vegano-e-Nvegano"
    hideElement("imageVegNon-veg");
    hideElement("imageVeg");
    hideElement("imageNon-veg");
  }
  // Se uma das checkbox estiver marcada vai entrar na condição
  if (temRecheio) {
    // Se a "n vegana" estiver marcada e a "vegana" estiver desmarcada
    //mostra a "n vegana"
    //senao
    //esconde a "n vegana"
    if (recheioNVegano) {
      showElement("imageNon-veg");
    } else {
      hideElement("imageNon-veg");
    }
    //Se a "vegana" estiver marcada e a "n vegana" estiver desmarcada
    //mostra vegana
    //senao
    //esconde vegana
    if (recheioVegano) {
      showElement("imageVeg");
    } else {
      hideElement("imageVeg");
    }
  }
}
