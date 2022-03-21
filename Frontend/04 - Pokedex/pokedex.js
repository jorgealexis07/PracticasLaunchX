const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            
            //Extraccion imagen
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            //Extraccion Nombre
            let nombre = data.forms[0].name.toUpperCase();
            console.log("Nombre: ",nombre);
            document.getElementById("nombre").innerHTML=nombre;
            //Extraccion tipo 
            let tipo = data.types[0].type.name;
            console.log("Tipo: ",tipo);
            document.getElementById("tipo").innerHTML=tipo;
            //peso
            let peso = data.weight + " KG";
            console.log("Peso: ",peso);
            document.getElementById("peso").innerHTML=peso;
            //altura
            let altura = data.height + " mts.";
            console.log("Altura: ", altura);
            document.getElementById("altura").innerHTML=altura;
            //Estadisticas
            let listastd = [];
            for (let i = 0; i < data.stats.length; i++) {
                var nombre_est = data.stats[i].stat.name;
                var base_est = data.stats[i].base_stat;
                var res_est = nombre_est + ": "+base_est;
                console.log( res_est);
                //document.write(res_est);
                listastd.push("<br>" + res_est  );
                document.getElementById("estadisticas").innerHTML=listastd;
            }
          
            //Movimientos
            let listamov = [];
            console.log( "Movimientos:" );
            for (let i = 0; i < data.moves.length; i++) {
                var mov = data.moves[i].move.name;
                console.log( mov );
                listamov.push( mov  );
                document.getElementById("movimientos").innerHTML = listamov;
            }
            
          
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

