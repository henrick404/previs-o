const envia = document.querySelector("button");
const pesquisa = document.querySelector("input");
const pegaDiv = document.querySelector("#result");

envia.addEventListener("click", () => {
    if (pesquisa.value == "") {
        alert("faça a gentileza de escrever.");
    }
    else {
        const chamaApi = async () => {
            const cidade = pesquisa.value;
            const apiKey = "d9c935851526901c299580bb54d6ac97";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            pegaDiv.innerHTML ""
        }

        chamaApi();
    }
})