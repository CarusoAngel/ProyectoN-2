// estructura de datos para las preguntas y las respuestas.
const preguntasPredefinidas = [
    {
    pregunta: "¿De qué color es el cielo durante un día soleado?",
    opciones: ["Rojo", "Azul", "Amarillo"],
    respuestaCorrecta: "Azul"
    },
    {
    pregunta: "¿Cuántas patas tiene un perro?",
    opciones: ["Dos", "Cuatro", "Ocho"],
    respuestaCorrecta: "4"
    },
    {
    pregunta: "¿Qué fruta es roja y crece en los árboles?",
    opciones: ["Manzana", "Plátano", "Uva"],
    respuestaCorrecta: "Manzana"
    },
    {
    pregunta: "¿Qué usamos para beber agua?",
    opciones: ["Cuchara", "Vaso", "Tenedor"],
    respuestaCorrecta: "Vaso"
    },
    {
    pregunta: "¿Qué animal dice 'miau'?",
    opciones: ["Perro", "Gato", "Vaca"],
    respuestaCorrecta: "Gato"
    },
    {
    pregunta: "¿Cuántos dedos tienes en una mano?",
    opciones: ["Cinco", "Cuatro", "Diez"],
    respuestaCorrecta: "Cinco"
    },
    {
    pregunta: "¿Qué vehículo tiene dos ruedas y se usa para pedalear?",
    opciones: ["Auto", "Bicicleta", "Avión"],
    respuestaCorrecta: "Bicicleta"
    },
    {
    pregunta: "¿De qué color son las hojas de los árboles?",
    opciones: ["Verde", "Rosa", "Negro"],
    respuestaCorrecta: "Verde"
    }
  ];
  // Fución para poder crear una pregunta. 
  const crearPregunta = (textoPregunta, opciones, respuestaCorrecta) => {
    return {
      textoPregunta: textoPregunta,
      opciones: opciones,
      respuestaCorrecta: respuestaCorrecta,
      resultados:{},
    }
  };

  // función para guardar las preguntas de la encuesta
const crearEncuesta = (preguntas) => {
  return {
    preguntas: preguntas,
  }
};

  // Agregar votos la encuesta
function agregarVoto(pregunta, opcionSeleccionada) {
  if (pregunta.opciones.includes(opcionSeleccionada)) {
    if (pregunta.resultados[opcionSeleccionada]) {
        pregunta.resultados[opcionSeleccionada]++;
    } else {
      pregunta.resultados[opcionSeleccionada] = 1;
    }
    mostrarResultados(pregunta);
  } else {
        console.log("La opción seleccionada no es valida");
  }
};

// función para mostrar resultados de una pregunta. 
function mostrarResultados(pregunta) {
  console.log(`Resultados de la pregunta: "${pregunta.textoPregunta}":`);
  for (let opcion of pregunta.opciones) {
    console.log(
      `Opcion "${opcion}": ${pregunta.resultados[opcion] || 0} votos`
    );
  }
}

// función para que el usuario pueda votar.
function votar(pregunta) {
  const opcionSeleccionada = prompt(
    `Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
  )
  if (opcionSeleccionada !== null) {
    agregarVoto(pregunta, opcionSeleccionada.trim());
  } else { 
    console.log("voatación cancelada");
  }
}
  
// Ejecución de la encuesta. 
function ejecutarPrograma() {
  const numeroDePreguntas = parseInt(
    prompt("¿Cuántas preguntas desea realizar?")
  );
  const preguntas = [];

  for (let i = 0; i < numeroDePreguntas; i++) {
    const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
    const opciones = prompt(
      `Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`
    )
      .split(",")
      .map((opcion) => opcion.trim());
    const respuestaCorrecta = prompt (`Ingrese la respuesta correcta para la pregunta ${i + 1}:`);
    const pregunta = crearPregunta(textoPregunta, opciones, respuestaCorrecta);
    preguntas.push(pregunta);
  }

  // Preguntqa predefinidas
  preguntasPredefinidas.forEach(p => {
    const pregunta = crearPregunta(p.pregunta, p.opciones, p.respuestaCorrecta);
    preguntas.push(pregunta);
  });

  const encuesta = crearEncuesta(preguntas);

  let seguirVotando = true;
  while (seguirVotando) {
    for (let i = 0; i < preguntas.length; i++) {
      votar(encuesta.preguntas[i]);
    }
    seguirVotando = confirm("¿Desea seguir votando?");
  }

// Resultados
  console.log("Resultados finales de la encuesta:");
  encuesta.preguntas.forEach(mostrarResultados);
}

// ejecutar
ejecutarPrograma();

  


