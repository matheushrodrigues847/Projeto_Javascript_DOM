var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");//chamo todos os blocos que possuem esse seletor css e monta um array

for(var i=0;i < pacientes.length;i++){
	var paciente = pacientes[i];

	var nome = paciente.querySelector(".info-nome").textContent;

	var altura = paciente.querySelector(".info-altura").textContent;
	
	var peso = paciente.querySelector(".info-peso").textContent;
	
	var gordura = paciente.querySelector(".info-gordura").textContent;
	
	var tdimc = paciente.querySelector(".info-imc");

	
	var alturaehValida = validaAltura(altura);
	var pesoehValido = validaPeso(peso);

	if(!alturaehValida){
		tdimc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
	}
	if(!pesoehValido){
		tdimc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaehValida&&pesoehValido){
		var imc = calculaImc(peso,altura);

		tdimc.textContent = imc;
	}

}

function validaAltura(altura){
	var alturaehValida = true;
	if(altura<=0||altura>2.5){
		alturaehValida = false;
	}
	return alturaehValida;
}
function validaPeso(peso){
	var pesoehValido = true;
	if(peso<=0||peso>280){
		pesoehValido = false;
	}
	return pesoehValido;
}

function calculaImc(peso,altura){
	var imc = peso/(altura*altura);

	return imc.toFixed(2);
}