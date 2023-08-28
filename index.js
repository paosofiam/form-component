function calculadora() {
  var variable1 = document.getElementById("input1").value;
  var variable2 = document.getElementById("input2").value;

  var variable3 = parseInt(variable1) + parseInt(variable2);
  console.log(variable3);
  const resultado = document.getElementById("resultado");
  console.log(resultado);
  //resultado.innerHTML = variable3;
}
