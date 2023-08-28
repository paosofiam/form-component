function calculadora() {
  var variable1 = parseInt(document.getElementById("input1").value);
  var variable2 = parseInt(document.getElementById("input2").value);

  var variable3 = variable1 + variable2;
  console.log(variable3);
  const resultado = document.getElementById("resultado");
  //console.log(resultado);
  resultado.innerHTML = variable3;
}
