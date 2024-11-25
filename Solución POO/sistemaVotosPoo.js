class Pregunta {
    constructor(pregunta, opciones){
        this.pregunta = pregunta;
        this.opciones = opciones.map((opcion) => opcion.trim());
        this.resultados = {};
    }

// Cómo Agregar Votos a la alternativa. 

    agregarVoto(elegirOpcion) {
        if (this.opciones.includes(elegirOpcion)) {
        this.resultados[elegirOpcion] =
            (this.resultados[elegirOpcion] || 0) + 1;
        } else {
            console.log("Lo siento la opción que elegiste no es válida.");
        }
    }

// Cómo mostrar los resultados.

    mostrarResultado() {
        console.log(`Resultado para la pregunta : "${this.pregunta}":`);
        this.opciones.forEach((opcion => {
            console.log(`Opción "${opcion}": ${this.resultados[opcion] || 0} votos`);
        }));
    }
};

// Contruir la Encuesta

class Encuesta {
    constructor() {
        this.pregunta = [];
    }

    ejecutar (){
        let continuarVotando = true;
        while (continuarVotando) {
            this.preguntas.forEach((pregunta) =>this.votar(pregunta));
            continuarVotando = confirm("Te gustaría continuar votando?");
        }
        console.log("Resultado final de la encuesta:")
        this.preguntas.forEach((pregunta) => pregunta.mostrarResultado());
    }

    votar(pregunta){
        const opcionSeleccionada = prompt(
            `Pregunta: ${pregunta.pregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`
        );
        if (opcionSeleccionada !== null) {
            pregunta.agregarVoto(opcionSeleccionada.trim());
        } else {
        console.log("Votación Cancelada");
        }
    }
};

const encuesta = new Encuesta();

encuesta.preguntas = [
    new Pregunta ("¿Con qué frecuencia lavas tu auto?", ["nunca", "semanal", "Mensual"]),
    new Pregunta ("¿Qué tan importante es para ti mantener tu auto en óptimas condiciones estéticas?", ["importante", "moderadamente", "nada importante"]),
    new Pregunta ("¿Has utilizado servicios de detailing (detallado de autos) antes?", ["si", "no"]),
    new Pregunta ("Si la respuesta es sí, ¿Qué aspectos del servicio de detailing valoras más?", ["limpieza exterior", "limpieza interior", "pulido"]),
    new Pregunta ("¿Estarías dispuesto a pagar por un servicio de detailing profesional en tu área?", ["si", "no", "tal vez"]),
    new Pregunta ("¿Cuánto estarías dispuesto a pagar por un servicio completo de detailing?", ["30000", "50000", "80000"]),
    new Pregunta ("¿Qué método de pago prefieres?", ["efectivo", "tarjeta", "transferencia"]),
    new Pregunta ("¿Estarías dispuesto a viajar más o menos de 5 Km por un servicio de detailing?", ["mas", "menos"]),
    new Pregunta ("¿Cuáles son los días y horarios más convenientes para ti para recibir este servicio?", ["mañana", "tarde", "noche"]),
];

encuesta.ejecutar();