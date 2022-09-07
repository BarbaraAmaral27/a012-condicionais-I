let nacionalidade = prompt("Escreva aqui sua nacionalidade:")
nacionalidade = nacionalidade.toLocaleLowerCase()

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana"){
    console.log(nacionalidade)
}
else
    console.log("Nacionalidade não encontrada")