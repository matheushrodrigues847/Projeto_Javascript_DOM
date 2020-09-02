var filtro = document.querySelector("#filtrar");

filtro.addEventListener("input",function(){

	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		for(var i=0;i<pacientes.length;i++){
			var paciente = pacientes[i];

			var nome = paciente.querySelector(".info-nome").textContent;

			var expressao = new RegExp(this.value,"i");//expressao regular para comparar strings, o "i" é para insensitive,ou seja, ignora se a pessoa digitou maisculo ou minusculo; o contrario é "s" sensitive;

			if(!expressao.test(nome)){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}
		}
	}else{
		for(var i=0;i<pacientes.length;i++){
			var paciente = pacientes[i];

			paciente.classList.remove("invisivel");
		}
	}
});