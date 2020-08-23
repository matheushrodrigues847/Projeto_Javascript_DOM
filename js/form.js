
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click",function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adicionar");

	var paciente = objeto(form);

	var erros = verifica(paciente);

	if(erros.length>0){
		exibeMensagem(erros);

		return;
	}

	var pacienteTr = adicionarPaciente(paciente);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

	form.reset();//limpa os input's
	var span = document.querySelector("#mensagem-erro");
	span.innerHTML="";


})

function adicionarPaciente(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

	return pacienteTr;
}
function montaTd(valor,classe){
	var td = document.createElement("td");
	td.textContent = valor;
	td.classList.add(classe);

	return td;
}

function exibeMensagem(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){//esse parametro é cada erro do array erros
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function objeto(form){
	var paciente ={
		nome:form.nome.value,
		peso:form.peso.value,
		altura:form.altura.value,
		gordura:form.gordura.value,
		imc:calculaImc(form.peso.value,form.altura.value)
	}
	return paciente;
}
function verifica(paciente){
	var erros=[];
	if(paciente.nome.length==0) erros.push("Nome em branco");
	
	if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
	
	if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

	if(!validaGordura(paciente.gordura)) erros.push("Gordura inválida");

	if(paciente.peso.length ==0) erros.push("Peso em branco");

	if(paciente.altura.length == 0) erros.push("Altura em branco");

	if(paciente.gordura.length == 0) erros.push("Gordura em branco");

	return erros;
}
function validaGordura(gordura){
	var gordura = true;
	if(gordura<0||gordura>80){
		gordura = false;
	}
	return gordura;
}