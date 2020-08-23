var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i < pacientes.length;i++){
	var paciente = pacientes[i];

	var nome = paciente.querySelector(".info-nome").textContent;

	var altura = paciente.querySelector(".info-altura").textContent;
	
	var peso = paciente.querySelector(".info-peso").textContent;
	
	var gordura = paciente.querySelector(".info-gordura").textContent;
	
	var tdimc = paciente.querySelector(".info-imc");

	
	var alturaehValida = validaAltura(altura);

	if(!alturaehValida){
		altura.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}

}

validaAltura(altura){
	var alturaok = true;
	if(altura<=0||altura>2.5){
		alturaok = false;
	}
	return alturaok;

}