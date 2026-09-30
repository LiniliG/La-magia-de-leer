const botonComenzar = document.getElementById("comenzar");

botonComenzar.addEventListener("click", comenzarQuiz);

const preguntas = [

    {
        pregunta: "Encuentras una puerta en un lugar donde sabes que ayer no existía. No tiene cerradura ni manija. ¿Qué haces?",

        opciones: [
            {
                texto: "La toco y trato de descubrir cómo abrirla.",
                decision: "abrir_puerta",
                efectos: {
                    aventura: 2,
                    curiosidad: 2,
                    valentia: 1
                }
            },

            {
                texto: "Investigo primero de dónde pudo haber salido.",
                decision: "investigar_puerta",
                efectos: {
                    curiosidad: 2,
                    razon: 2,
                    prudencia: 1
                }
            },

            {
                texto: "Busco una forma de observar qué hay detrás sin abrirla.",
                decision: "observar_puerta",
                efectos: {
                    curiosidad: 2,
                    razon: 1,
                    prudencia: 2
                }
            },

            {
                texto: "Me alejo. Si apareció de la nada, probablemente hay una razón.",
                decision: "alejarse_puerta",
                efectos: {
                    prudencia: 3,
                    independencia: 1
                }
            }
        ]
    },


    {
        pregunta: "La puerta finalmente se abre. Del otro lado hay un lugar completamente desconocido. ¿Qué es lo primero que buscas?",

        opciones: [
            {
                texto: "Un camino para seguir explorándolo.",
                decision: "explorar_lugar",
                efectos: {
                    aventura: 3,
                    independencia: 1
                }
            },

            {
                texto: "Algo que me permita entender dónde estoy.",
                decision: "comprender_lugar",
                efectos: {
                    razon: 2,
                    curiosidad: 2
                }
            },

            {
                texto: "Una persona o criatura que pueda necesitar ayuda.",
                decision: "buscar_alguien",
                efectos: {
                    vinculo: 3,
                    valentia: 1
                }
            },

            {
                texto: "Un lugar seguro desde donde observar.",
                decision: "buscar_seguridad",
                efectos: {
                    prudencia: 2,
                    curiosidad: 1,
                    razon: 1
                }
            }
        ]
    },


    {
        pregunta: "Encuentras un objeto que parece pertenecer a alguien que vivió allí. ¿Qué te llama más la atención?",

        opciones: [
            {
                texto: "Que parece tener poderes extraños.",
                decision: "interes_poderes",
                efectos: {
                    imaginacion: 3,
                    curiosidad: 1
                }
            },

            {
                texto: "Que contiene información sobre ese lugar.",
                decision: "interes_informacion",
                efectos: {
                    razon: 2,
                    curiosidad: 2
                }
            },

            {
                texto: "Que parece estar relacionado con alguien desaparecido.",
                decision: "interes_desaparecido",
                efectos: {
                    vinculo: 2,
                    curiosidad: 2,
                    intensidad: 1
                }
            },

            {
                texto: "Que no debería existir según las leyes de nuestro mundo.",
                decision: "interes_imposible",
                efectos: {
                    imaginacion: 2,
                    razon: 1,
                    curiosidad: 2
                }
            }
        ]
    },


    {
        pregunta: "Una persona desconocida te advierte que sigas adelante y que no hagas preguntas. ¿Cómo reaccionas?",

        opciones: [
            {
                texto: "Le pregunto directamente qué está ocultando.",
                decision: "confrontar",
                efectos: {
                    valentia: 2,
                    curiosidad: 2,
                    independencia: 1
                }
            },

            {
                texto: "Continúo, pero intento descubrir la verdad por mi cuenta.",
                decision: "investigar_a_escondidas",
                efectos: {
                    curiosidad: 2,
                    independencia: 2,
                    razon: 1
                }
            },

            {
                texto: "Confío en su advertencia y busco otra manera de avanzar.",
                decision: "confiar_advertencia",
                efectos: {
                    prudencia: 2,
                    vinculo: 1,
                    independencia: 1
                }
            },

            {
                texto: "Le pregunto por qué debería confiar en ella.",
                decision: "cuestionar_confianza",
                efectos: {
                    razon: 2,
                    prudencia: 1,
                    curiosidad: 1
                }
            }
        ]
    },


    {
        pregunta: "Para descubrir la verdad, tendrías que revelar un secreto que podría perjudicar a alguien cercano. ¿Qué haces?",

        opciones: [
            {
                texto: "Revelo la verdad. Necesito saber qué está pasando.",
                decision: "revelar_secreto",
                efectos: {
                    curiosidad: 2,
                    valentia: 2,
                    intensidad: 1
                }
            },

            {
                texto: "Busco otra forma de descubrirla sin perjudicar a nadie.",
                decision:"proteger_sin_mentir",
                efectos: {
                    vinculo: 2,
                    razon: 2,
                    prudencia: 1
                }
            },

            {
                texto: "Protejo a esa persona, aunque nunca llegue a conocer toda la verdad.",
                decision:"proteger_secreto",
                efectos: {
                    vinculo: 3,
                    prudencia: 1,
                    intensidad: 1
                }
            },

            {
                texto: "Le cuento lo que ocurre y dejo que decida qué hacer.",
                decision:"dejar_decidir",
                efectos: {
                    vinculo: 2,
                    independencia: 2,
                    valentia: 1
                }
            }
        ]
        },
    {
        pregunta: "Cuando eliges un libro, ¿qué tipo de historia te llama más la atención?",
        opciones: [
            {
                texto: "Un mundo fantástico lleno de magia y posibilidades",
                efectos: {
                    imaginacion: 2,
                    aventura: 1
                },
                decision: "preferencia_fantasia"
            },
            {
                texto: "Un misterio que me obligue a descubrir qué está pasando",
                efectos: {
                    curiosidad: 2,
                    razon: 1
                },
                decision: "preferencia_misterio"
            },
            {
                texto: "Una historia intensa que me haga sentir muchísimo",
                efectos: {
                    intensidad: 2,
                    vinculo: 1
                },
                decision: "preferencia_drama"
            },
            {
                texto: "Algo extraño, futurista o completamente diferente a nuestra realidad",
                efectos: {
                    imaginacion: 1,
                    curiosidad: 1,
                    razon: 1
                },
                decision: "preferencia_ciencia_ficcion"
            }
        ]
    },

    {
    pregunta: "Encuentras una puerta que no debería existir. Sabes que cruzarla podría cambiarlo todo. ¿Qué haces?",
    opciones: [
        {
            texto: "La cruzo. Si apareció frente a mí, debe haber una razón.",
            efectos: {
                aventura: 2,
                valentia: 1,
                curiosidad: 1
            },
            decision: "cruzar_puerta"
        },
        {
            texto: "Primero intento descubrir qué hay detrás y por qué apareció.",
            efectos: {
                curiosidad: 2,
                razon: 1,
                prudencia: 1
            },
            decision: "investigar_puerta"
        },
        {
            texto: "Busco a alguien de confianza antes de tomar una decisión.",
            efectos: {
                vinculo: 2,
                prudencia: 1
            },
            decision: "buscar_ayuda"
        },
        {
            texto: "No la cruzo todavía. Hay cosas que es mejor no despertar.",
            efectos: {
                prudencia: 2,
                independencia: 1
            },
            decision: "evitar_puerta"
        }
    ]
},

{
    pregunta: "En tu viaje aparece alguien que podría convertirse en una persona fundamental para ti. ¿Qué tipo de vínculo surge entre ustedes?",
    opciones: [
        {
            texto: "Una alianza inesperada: juntos funcionan mejor que por separado.",
            efectos: {
                vinculo: 2,
                aventura: 1
            },
            decision: "alianza"
        },
        {
            texto: "Una amistad profunda basada en confianza y comprensión.",
            efectos: {
                vinculo: 2,
                intensidad: 1
            },
            decision: "amistad_profunda"
        },
        {
            texto: "Una relación complicada, llena de secretos y contradicciones.",
            efectos: {
                intensidad: 2,
                curiosidad: 1
            },
            decision: "vinculo_complejo"
        },
        {
            texto: "Una conexión extraña con alguien que parece saber más de ti que tú mismo/a.",
            efectos: {
                curiosidad: 2,
                imaginacion: 1,
                vinculo: 1
            },
            decision: "conexion_misteriosa"
        }
    ]
},

{
    pregunta: "Para alcanzar aquello que buscas, tendrás que renunciar a algo importante. ¿Qué sacrificio tendría más sentido para ti?",
    opciones: [
        {
            texto: "Dejar atrás un lugar al que le tengo cariño.",
            efectos: {
                aventura: 1,
                independencia: 2
            },
            decision: "sacrificar_lugar"
        },
        {
            texto: "Aceptar una verdad dolorosa sobre alguien que quiero.",
            efectos: {
                intensidad: 2,
                vinculo: 1,
                valentia: 1
            },
            decision: "sacrificar_verdad"
        },
        {
            texto: "Abandonar la seguridad y entrar en lo desconocido.",
            efectos: {
                valentia: 2,
                aventura: 1,
                independencia: 1
            },
            decision: "sacrificar_seguridad"
        },
        {
            texto: "Renunciar a una parte de mí para proteger a otras personas.",
            efectos: {
                vinculo: 2,
                valentia: 1,
                intensidad: 1
            },
            decision: "sacrificar_identidad"
        }
    ]
},

{
    pregunta: "Si pudieras vivir dentro de una historia, ¿qué clase de mundo elegirías?",
    opciones: [
        {
            texto: "Un reino mágico lleno de lugares que nadie ha explorado.",
            efectos: {
                imaginacion: 2,
                aventura: 2
            },
            decision: "mundo_magico"
        },
        {
            texto: "Una ciudad aparentemente normal donde algo extraño se esconde bajo la superficie.",
            efectos: {
                curiosidad: 2,
                razon: 1,
                imaginacion: 1
            },
            decision: "mundo_oculto"
        },
        {
            texto: "Un futuro extraño donde la humanidad tuvo que reinventarse.",
            efectos: {
                imaginacion: 2,
                razon: 1,
                curiosidad: 1
            },
            decision: "mundo_futuro"
        },
        {
            texto: "Un mundo muy parecido al nuestro, pero lleno de historias humanas complejas.",
            efectos: {
                vinculo: 2,
                intensidad: 1
            },
            decision: "mundo_realista"
        }
    ]
},

{
    pregunta: "Cuando todo comienza a salir mal, ¿cómo reaccionaría tu protagonista?",
    opciones: [
        {
            texto: "Actúa rápidamente y se lanza a resolver el problema.",
            efectos: {
                valentia: 2,
                aventura: 1
            },
            decision: "actuar"
        },
        {
            texto: "Se detiene, analiza lo que está pasando y busca una solución.",
            efectos: {
                razon: 2,
                prudencia: 1
            },
            decision: "analizar"
        },
        {
            texto: "Busca proteger primero a las personas que considera importantes.",
            efectos: {
                vinculo: 2,
                valentia: 1
            },
            decision: "proteger"
        },
        {
            texto: "Confía en su intuición y toma un camino que nadie más consideraría.",
            efectos: {
                independencia: 2,
                imaginacion: 1,
                valentia: 1
            },
            decision: "intuicion"
        }
    ]
},

{
    pregunta: "Al final del viaje, ¿qué tipo de pérdida tendría mayor impacto en la historia?",
    opciones: [
        {
            texto: "Perder a alguien que se convirtió en mi hogar.",
            efectos: {
                vinculo: 2,
                intensidad: 2
            },
            decision: "perdida_persona"
        },
        {
            texto: "Perder los recuerdos de todo lo que viví.",
            efectos: {
                curiosidad: 1,
                intensidad: 2,
                imaginacion: 1
            },
            decision: "perdida_recuerdos"
        },
        {
            texto: "Perder la vida que creía que iba a tener.",
            efectos: {
                independencia: 1,
                intensidad: 2,
                valentia: 1
            },
            decision: "perdida_futuro"
        },
        {
            texto: "Descubrir que aquello que buscaba nunca fue lo que realmente necesitaba.",
            efectos: {
                razon: 1,
                curiosidad: 2,
                intensidad: 1
            },
            decision: "perdida_objetivo"
        }
    ]
}

    
];

let preguntaActual = 0;

let puntuaciones = {
    aventura: 0,
    curiosidad: 0,
    razon: 0,
    vinculo: 0,
    valentia: 0,
    independencia: 0,
    intensidad: 0,
    imaginacion: 0,
    prudencia: 0
};

let decisiones = {};

const pantallaInicio = document.getElementById("inicio");

function comenzarQuiz() {
    mostrarPregunta();
}

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    pantallaInicio.innerHTML = `
        <h2>${pregunta.pregunta}</h2>

        <div id="opciones">
            ${pregunta.opciones.map((opcion, indice) => `
                <button class="opcion" data-indice="${indice}">
                    ${opcion.texto}
                </button>
            `).join("")}
        </div>
    `;

    const botones = document.querySelectorAll(".opcion");

    botones.forEach(boton => {
        boton.addEventListener("click", seleccionarRespuesta);
    });
}


function seleccionarRespuesta(evento) {

    const indice = evento.target.dataset.indice;

    const opcionElegida = preguntas[preguntaActual].opciones[indice];

    decisiones[preguntaActual] = opcionElegida.decision;

    console.log("Decisión narrativa:", opcionElegida.decision);

    for (const caracteristica in opcionElegida.efectos) {
        puntuaciones[caracteristica] += opcionElegida.efectos[caracteristica];
    }

    console.log("Elegiste:", opcionElegida.texto);
console.log("Puntuaciones:", puntuaciones);

preguntaActual++;

if (preguntaActual < preguntas.length) {
    mostrarPregunta();
} else {
    mostrarResultado();
}
}

function crearPerfilNarrativo() {

    let perfil = [];

    if (puntuaciones.aventura >= 5) {
        perfil.push("explorador/a");
    }

    if (puntuaciones.curiosidad >= 5) {
        perfil.push("investigador/a");
    }

    if (puntuaciones.razon >= 5) {
        perfil.push("analítico/a");
    }

    if (puntuaciones.vinculo >= 5) {
        perfil.push("protector/a");
    }

    if (puntuaciones.valentia >= 5) {
        perfil.push("valiente");
    }

    if (puntuaciones.independencia >= 5) {
        perfil.push("independiente");
    }

    if (puntuaciones.intensidad >= 3) {
        perfil.push("intenso/a");
    }

    if (puntuaciones.imaginacion >= 5) {
        perfil.push("imaginativo/a");
    }

    if (perfil.length === 0) {
        perfil.push("difícil de encasillar");
    }

    return perfil;
}


function crearGenero() {

    let principal;
    let secundario;

    if (
        puntuaciones.aventura >= 6 &&
        puntuaciones.imaginacion >= 5
    ) {
        principal = "Fantasía y aventura";

    } else if (
        puntuaciones.curiosidad >= 6 &&
        puntuaciones.razon >= 5
    ) {
        principal = "Misterio";

    } else if (
        puntuaciones.intensidad >= 4 &&
        puntuaciones.curiosidad >= 5
    ) {
        principal = "Suspenso";

    } else if (
        puntuaciones.imaginacion >= 6 &&
        puntuaciones.curiosidad >= 5
    ) {
        principal = "Ciencia ficción";

    } else if (
        puntuaciones.vinculo >= 6 &&
        puntuaciones.intensidad >= 3
    ) {
        principal = "Drama";

    } else if (
        puntuaciones.vinculo >= 6
    ) {
        principal = "Romance y relaciones";

    } else if (
        puntuaciones.aventura >= 5
    ) {
        principal = "Aventura";

    } else if (
        puntuaciones.intensidad >= 4
    ) {
        principal = "Drama";

    } else {
        principal = "Ficción contemporánea";
    }

    if (
        puntuaciones.imaginacion >= 5 &&
        principal !== "Fantasía y aventura"
    ) {
        secundario = "Fantasía";

    } else if (
        puntuaciones.curiosidad >= 5 &&
        principal !== "Misterio"
    ) {
        secundario = "Misterio";

    } else if (
        puntuaciones.aventura >= 5 &&
        principal !== "Aventura"
    ) {
        secundario = "Aventura";

    } else if (
        puntuaciones.intensidad >= 3 &&
        principal !== "Drama"
    ) {
        secundario = "Drama";

    } else if (
        puntuaciones.razon >= 5
    ) {
        secundario = "Ciencia ficción";

    } else {
        secundario = "Ficción especulativa";
    }

    return {
        principal: principal,
        secundario: secundario
    };
}


function crearTitulo(genero, ambientacion, tema) {

    const titulos = {

        "Fantasía y aventura": [
            "El reino que esperaba por ti",
            "Más allá de la última puerta",
            "Donde comienzan los imposibles"
        ],

        "Misterio": [
            "La verdad detrás de la puerta",
            "Lo que nadie quiso recordar",
            "El secreto de las páginas perdidas"
        ],

        "Suspenso": [
            "Cuando la verdad despierta",
            "La sombra detrás de todo",
            "Antes de que sea demasiado tarde"
        ],

        "Ciencia ficción": [
            "La última versión de nosotros",
            "Más allá de la realidad",
            "El lugar donde termina el mundo"
        ],

        "Drama": [
            "Las cosas que dejamos atrás",
            "Después de todo lo perdido",
            "Lo que elegimos conservar"
        ],

        "Romance y relaciones": [
            "Entre nosotros y el destino",
            "La persona que cambió la historia",
            "Donde nuestros caminos se encuentran"
        ],

        "Aventura": [
            "El camino que nadie conocía",
            "Al otro lado del horizonte",
            "Donde comienza el viaje"
        ],

        "Ficción contemporánea": [
            "Una historia que todavía no termina",
            "El día en que todo cambió",
            "Las páginas que faltaban"
        ]
    };

    const opciones = titulos[genero.principal];

    return elegirElemento(opciones);
}


function elegirElemento(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function crearRecomendacion(
    genero,
    ambientacion,
    rolProtagonista,
    conflicto,
    antagonismo,
    relacion,
    tema,
    tono
) {

    const libros = [

        {
            titulo: "Coraline",
            autor: "Neil Gaiman",
            generos: ["Fantasía y aventura", "Suspenso", "Misterio"],
            palabras: [
                "puerta", "realidad", "mundo", "desconocido",
                "secreto", "amenaza", "familia", "protector",
                "valiente", "imposible", "oscuro"
            ],
            descripcion:
                "Comparte la idea de atravesar una puerta hacia una realidad extraña y enfrentarse a una amenaza que parece conocer demasiado bien a la protagonista."
        },

        {
            titulo: "La casa de los espíritus",
            autor: "Isabel Allende",
            generos: ["Drama", "Ficción contemporánea"],
            palabras: [
                "familia", "secreto", "generaciones", "pasado",
                "relacion", "vinculo", "perdida", "emocional",
                "pueblo"
            ],
            descripcion:
                "Comparte el peso de los vínculos familiares, los secretos del pasado y las consecuencias que atraviesan la vida de varias personas."
        },

        {
            titulo: "El nombre del viento",
            autor: "Patrick Rothfuss",
            generos: ["Fantasía y aventura", "Drama"],
            palabras: [
                "secreto", "misterio", "viaje", "poder",
                "conocimiento", "aventura", "reino",
                "pasado", "busca", "investigar"
            ],
            descripcion:
                "Comparte una búsqueda de conocimiento y respuestas dentro de un mundo fantástico lleno de secretos, peligros y decisiones personales."
        },

        {
            titulo: "Piranesi",
            autor: "Susanna Clarke",
            generos: ["Fantasía y aventura", "Misterio"],
            palabras: [
                "lugar", "desconocido", "realidad", "secretos",
                "investigar", "descubrir", "memoria",
                "imposible", "misterio", "aislado"
            ],
            descripcion:
                "Comparte la sensación de encontrarse en un lugar imposible y tratar de comprender sus reglas mientras aparecen secretos sobre la propia realidad."
        },

        {
            titulo: "La sombra del viento",
            autor: "Carlos Ruiz Zafón",
            generos: ["Misterio", "Drama"],
            palabras: [
                "libro", "secreto", "pasado", "investigar",
                "desaparición", "misterio", "verdad",
                "ciudad", "oscuro", "relacion"
            ],
            descripcion:
                "Comparte una investigación marcada por secretos del pasado, desapariciones y una verdad que poco a poco cambia la forma de entender la historia."
        },

        {
            titulo: "Materia oscura",
            autor: "Blake Crouch",
            generos: ["Ciencia ficción", "Suspenso"],
            palabras: [
                "realidad", "realidades", "version", "mundo",
                "decisión", "decisiones", "identidad",
                "imposible", "futuro", "poder"
            ],
            descripcion:
                "Comparte la exploración de realidades alternativas y las consecuencias que pueden surgir cuando una decisión cambia por completo el camino de una vida."
        },

        {
            titulo: "La biblioteca de la medianoche",
            autor: "Matt Haig",
            generos: ["Drama", "Fantasía"],
            palabras: [
                "decisión", "decisiones", "vida", "vidas",
                "posibilidades", "eleccion", "elegir",
                "pasado", "futuro", "cambio"
            ],
            descripcion:
                "Comparte la exploración de diferentes posibilidades de una vida y las preguntas sobre las decisiones que nos convierten en quienes somos."
        },

        {
            titulo: "Los diez mil portales de January",
            autor: "Alix E. Harrow",
            generos: ["Fantasía y aventura", "Misterio"],
            palabras: [
                "puerta", "puertas", "portal", "mundo",
                "mundos", "viaje", "libro", "secreto",
                "descubrir", "realidad"
            ],
            descripcion:
                "Comparte la idea de descubrir puertas hacia otros mundos y seguir una búsqueda relacionada con secretos, identidad y libertad."
        },

        {
            titulo: "El circo de la noche",
            autor: "Erin Morgenstern",
            generos: ["Fantasía", "Romance y relaciones"],
            palabras: [
                "magia", "misterio", "competencia", "relacion",
                "vinculo", "destino", "mundo", "secreto",
                "emocional", "imaginacion"
            ],
            descripcion:
                "Comparte una atmósfera mágica y misteriosa donde los vínculos entre personajes están conectados con fuerzas que escapan de su control."
        },

        {
            titulo: "El océano al final del camino",
            autor: "Neil Gaiman",
            generos: ["Fantasía", "Drama"],
            palabras: [
                "memoria", "infancia", "pasado", "familia",
                "misterio", "mundo", "amenaza", "realidad",
                "recuerdo", "oscuro"
            ],
            descripcion:
                "Comparte una historia donde recuerdos, vínculos personales y elementos sobrenaturales se mezclan hasta hacer difícil distinguir el pasado de lo imposible."
        },

        {
            titulo: "La quinta estación",
            autor: "N. K. Jemisin",
            generos: ["Ciencia ficción", "Fantasía"],
            palabras: [
                "mundo", "poder", "supervivencia", "destruccion",
                "sociedad", "futuro", "familia", "perdida",
                "viaje", "conflicto"
            ],
            descripcion:
                "Comparte un mundo transformado por fuerzas extraordinarias, donde sobrevivir implica enfrentarse tanto a un peligro externo como a conflictos personales."
        },

        {
            titulo: "El curioso incidente del perro a medianoche",
            autor: "Mark Haddon",
            generos: ["Misterio", "Ficción contemporánea"],
            palabras: [
                "investigar", "investigacion", "misterio",
                "razon", "descubrir", "verdad", "secreto",
                "familia", "pueblo"
            ],
            descripcion:
                "Comparte una investigación que comienza con un misterio aparentemente pequeño y termina revelando verdades mucho más importantes."
        },

        {
            titulo: "El dador",
            autor: "Lois Lowry",
            generos: ["Ciencia ficción", "Drama"],
            palabras: [
                "sociedad", "reglas", "secreto", "verdad",
                "libertad", "decisión", "poder", "control",
                "futuro", "descubrir"
            ],
            descripcion:
                "Comparte el descubrimiento de que una sociedad aparentemente segura oculta verdades que obligan al protagonista a cuestionar todo lo que conoce."
        },

        {
            titulo: "Antes de que se enfríe el café",
            autor: "Toshikazu Kawaguchi",
            generos: ["Drama", "Fantasía"],
            palabras: [
                "pasado", "tiempo", "decisión", "decisiones",
                "relacion", "familia", "perdida", "cambio",
                "recuerdo", "despedida"
            ],
            descripcion:
                "Comparte la posibilidad de enfrentarse al pasado y a las relaciones importantes para comprender qué decisiones todavía pueden cambiar la forma de vivir el presente."
        }

    ];


    const textoHistoria = (
        ambientacion + " " +
        rolProtagonista + " " +
        conflicto + " " +
        antagonismo + " " +
        relacion + " " +
        tema + " " +
        tono
    ).toLowerCase();

    let mejorPuntuacion = -1;
    let mejoresLibros = [];


    libros.forEach(libro => {

        let puntuacion = 0;

        // Coincidencia con los géneros
        if (libro.generos.includes(genero.principal)) {
            puntuacion += 6;
        }

        if (libro.generos.includes(genero.secundario)) {
            puntuacion += 3;
        }


        // Coincidencia con elementos de la historia
        libro.palabras.forEach(palabra => {

            if (textoHistoria.includes(palabra)) {
                puntuacion += 2;
            }

        });


        if (puntuacion > mejorPuntuacion) {

            mejorPuntuacion = puntuacion;
            mejoresLibros = [libro];

        } else if (puntuacion === mejorPuntuacion) {

            mejoresLibros.push(libro);

        }

    });


    return elegirElemento(mejoresLibros);
}

function crearAmbientacion() {

    if (puntuaciones.imaginacion >= 6 && puntuaciones.intensidad >= 3) {
        return elegirElemento([
            "un mundo entre realidades donde las leyes de la existencia cambian constantemente",
            "una ciudad que solo existe mientras alguien sueña",
            "un lugar donde cada puerta conduce a una versión diferente de la realidad"
        ]);
    }

    if (puntuaciones.aventura >= 6) {
        return elegirElemento([
            "un mundo completamente desconocido, lejos de todo lo que conoces",
            "un reino oculto al otro lado de una frontera que nadie puede cruzar",
            "una región inexplorada donde antiguos secretos permanecen enterrados"
        ]);
    }

    if (puntuaciones.razon >= 6 && puntuaciones.curiosidad >= 6) {
        return elegirElemento([
            "una ciudad aparentemente normal donde algo no encaja",
            "una institución que oculta información sobre un extraño fenómeno",
            "una ciudad futurista sometida a un sistema que nadie parece cuestionar"
        ]);
    }

    if (puntuaciones.vinculo >= 6) {
        return elegirElemento([
            "un pequeño pueblo donde todos parecen conocerse, pero nadie cuenta toda la verdad",
            "una ciudad aparentemente tranquila marcada por una antigua desaparición",
            "un lugar aislado donde la llegada de una persona cambia la vida de todos"
        ]);
    }

    return elegirElemento([
        "una ciudad contemporánea donde lo imposible comienza a aparecer poco a poco",
        "un pueblo aislado rodeado por un bosque que nadie se atreve a atravesar",
        "un lugar aparentemente normal que esconde algo mucho más antiguo de lo que parece"
    ]);
}


function crearRolProtagonista() {

    if (
        puntuaciones.curiosidad >= 6 &&
        puntuaciones.razon >= 6
    ) {
        return elegirElemento([
            "una persona que descubre secretos que nadie más quiere investigar",
            "un/a investigador/a que intenta reconstruir una verdad perdida",
            "el/la protagonista de su propio misterio"
        ]);
    }

    if (
        puntuaciones.aventura >= 6 &&
        puntuaciones.independencia >= 5
    ) {
        return elegirElemento([
            "un/a explorador/a que se adentra donde nadie más se atreve",
            "un/a viajero/a que busca un lugar que quizá no debería existir",
            "un/a rebelde que decide abandonar el camino que otros habían elegido para él/ella"
        ]);
    }

    if (
        puntuaciones.vinculo >= 6 &&
        puntuaciones.valentia >= 4
    ) {
        return elegirElemento([
            "un/a protector/a dispuesto/a a arriesgarse por alguien importante",
            "una persona que termina involucrada en un conflicto para salvar a alguien cercano",
            "un/a mediador/a atrapado/a entre dos personas o mundos enfrentados"
        ]);
    }

    if (puntuaciones.imaginacion >= 6) {
        return elegirElemento([
            "una persona que descubre que puede percibir cosas que los demás no pueden",
            "un/a viajero/a que accidentalmente atraviesa una frontera entre mundos",
            "alguien común que termina involucrado en un fenómeno imposible"
        ]);
    }

    return elegirElemento([
        "una persona común que descubre accidentalmente un secreto extraordinario",
        "un/a testigo de un acontecimiento que no debería haber ocurrido",
        "alguien que se ve obligado/a a abandonar su vida normal para descubrir la verdad"
    ]);
}

function crearConflicto() {

    const decisionesTomadas = Object.values(decisiones);

    if (
        decisionesTomadas.includes("interes_desaparecido") ||
        decisionesTomadas.includes("investigar_a_escondidas")
    ) {
        return elegirElemento([
            "descubrir qué ocurrió realmente con una persona que desapareció sin dejar rastro",
            "reconstruir una historia que alguien se ha esforzado por borrar",
            "descubrir por qué varias personas relacionadas con ese lugar han desaparecido"
        ]);
    }

    if (
        decisionesTomadas.includes("revelar_secreto") ||
        decisionesTomadas.includes("confrontar")
    ) {
        return elegirElemento([
            "descubrir una verdad que podría cambiar para siempre la vida de varias personas",
            "exponer un secreto que una organización poderosa intenta mantener oculto",
            "decidir cuánto estás dispuesto/a a perder para descubrir la verdad"
        ]);
    }

    if (
        decisionesTomadas.includes("proteger_secreto") ||
        decisionesTomadas.includes("proteger_sin_mentir")
    ) {
        return elegirElemento([
            "proteger a alguien mientras intentas descubrir qué está ocurriendo realmente",
            "encontrar una manera de detener el peligro sin destruir la vida de alguien que confía en ti",
            "decidir si proteger a una persona justifica mantener un secreto"
        ]);
    }

    if (puntuaciones.aventura >= 6) {
        return elegirElemento([
            "encontrar la razón por la que nadie ha conseguido regresar de ese lugar",
            "descubrir qué se encuentra al final de un territorio que no aparece en ningún mapa",
            "sobrevivir a un viaje que poco a poco comienza a cambiarte"
        ]);
    }

    if (puntuaciones.curiosidad >= 6) {
        return elegirElemento([
            "descubrir quién está detrás de los acontecimientos extraños que están ocurriendo",
            "resolver un misterio que parece no tener una explicación lógica",
            "descubrir por qué ciertas cosas parecen estar ocurriendo únicamente a tu alrededor"
        ]);
    }

    return elegirElemento([
        "descubrir por qué tu vida comenzó a cambiar después de aquel acontecimiento",
        "encontrar la verdad detrás de algo que inicialmente parecía insignificante",
        "decidir qué hacer cuando descubres que tu mundo no es exactamente lo que creías"
    ]);
}


function crearAntagonismo() {

    const decisionesTomadas = Object.values(decisiones);

    if (
        decisionesTomadas.includes("confrontar") ||
        decisionesTomadas.includes("revelar_secreto")
    ) {
        return elegirElemento([
            "una organización que hará todo lo posible por mantener la verdad oculta",
            "una persona que considera que conocer la verdad es más peligroso que ocultarla",
            "un sistema construido para impedir que ciertas personas descubran lo que ocurrió"
        ]);
    }

    if (
        decisionesTomadas.includes("proteger_secreto") ||
        decisionesTomadas.includes("proteger_sin_mentir")
    ) {
        return elegirElemento([
            "una amenaza que obliga a elegir entre la verdad y la seguridad de alguien cercano",
            "una persona que conoce el secreto y está dispuesta a hacer cualquier cosa para protegerlo",
            "una fuerza que convierte los vínculos entre las personas en su principal arma"
        ]);
    }

    if (
        puntuaciones.intensidad >= 4 &&
        puntuaciones.curiosidad >= 5
    ) {
        return elegirElemento([
            "una presencia cuya verdadera naturaleza nadie comprende",
            "una verdad que parece volverse más peligrosa cuanto más cerca estás de descubrirla",
            "una amenaza que conoce cosas sobre ti que tú mismo/a no recuerdas"
        ]);
    }

    if (puntuaciones.aventura >= 6) {
        return elegirElemento([
            "una fuerza que intenta impedir que llegues al corazón de ese territorio",
            "una criatura o entidad que protege aquello que estás buscando",
            "un peligro que parece formar parte del propio mundo que estás explorando"
        ]);
    }

    return elegirElemento([
        "alguien que quiere impedir que descubras la verdad",
        "una fuerza desconocida que parece observar cada uno de tus movimientos",
        "un conflicto que comienza siendo pequeño y termina revelando algo mucho mayor"
    ]);
}


function crearRelacion() {

    const decisionesTomadas = Object.values(decisiones);

    if (
        decisionesTomadas.includes("buscar_alguien") ||
        decisionesTomadas.includes("proteger_secreto") ||
        decisionesTomadas.includes("proteger_sin_mentir")
    ) {
        return elegirElemento([
            "una persona que depende de ti y cuya seguridad se vuelve parte del conflicto",
            "alguien que conoce una parte de la verdad que tú todavía desconoces",
            "una persona que comienza como alguien a quien proteger, pero termina convirtiéndose en tu principal aliado"
        ]);
    }

    if (
        decisionesTomadas.includes("confrontar") ||
        decisionesTomadas.includes("cuestionar_confianza")
    ) {
        return elegirElemento([
            "una persona misteriosa cuya confianza tendrás que ganarte",
            "alguien que parece saber mucho más de lo que está dispuesto/a a admitir",
            "una figura que comienza como una posible amenaza y termina cuestionando tus propias decisiones"
        ]);
    }

    if (puntuaciones.vinculo >= 6) {
        return elegirElemento([
            "un aliado cuya vida queda profundamente conectada con la tuya",
            "una persona que te recuerda qué estás intentando proteger",
            "alguien con quien desarrollas un vínculo que cambia la manera en que enfrentas el conflicto"
        ]);
    }

    if (puntuaciones.independencia >= 6) {
        return elegirElemento([
            "un compañero inesperado que no intenta decidir tu camino por ti",
            "una persona que desafía constantemente tus ideas sobre lo que significa estar solo/a",
            "alguien que sigue un camino completamente diferente al tuyo, pero termina cruzándose contigo"
        ]);
    }

    return elegirElemento([
        "un aliado inesperado que aparece cuando más lo necesitas",
        "una persona que guarda información esencial para resolver el misterio",
        "alguien que termina involucrándose en tu historia aunque nunca lo hubiera planeado"
    ]);
}

function crearTema() {

    if (puntuaciones.independencia >= 6) {
        return elegirElemento([
            "la libertad de elegir nuestro propio camino",
            "la identidad y la necesidad de descubrir quién queremos ser",
            "las consecuencias de vivir según nuestras propias decisiones"
        ]);
    }

    if (puntuaciones.vinculo >= 6) {
        return elegirElemento([
            "hasta dónde llegaríamos para proteger a quienes queremos",
            "la confianza y el miedo a perder a alguien importante",
            "cómo las personas pueden cambiarse mutuamente"
        ]);
    }

    if (puntuaciones.curiosidad >= 6) {
        return elegirElemento([
            "el precio de conocer una verdad que quizá era mejor no descubrir",
            "la búsqueda de respuestas frente al miedo a encontrarlas",
            "qué ocurre cuando cuestionamos todo aquello que creíamos conocer"
        ]);
    }

    if (puntuaciones.valentia >= 6) {
        return elegirElemento([
            "enfrentar aquello que más miedo nos provoca",
            "el valor de actuar incluso cuando no existe una garantía de éxito",
            "qué estamos dispuestos a sacrificar por aquello que consideramos correcto"
        ]);
    }

    if (puntuaciones.intensidad >= 4) {
        return elegirElemento([
            "las consecuencias de nuestras decisiones",
            "la culpa, la pérdida y la posibilidad de seguir adelante",
            "la frontera entre hacer lo correcto y hacer lo necesario"
        ]);
    }

    return elegirElemento([
        "descubrir que el mundo es mucho más complejo de lo que parecía",
        "cómo una sola decisión puede cambiar el rumbo de una vida",
        "encontrar un propósito cuando todo lo conocido deja de tener sentido"
    ]);
}

function crearTono() {

    if (
        puntuaciones.intensidad >= 5 &&
        puntuaciones.imaginacion >= 5
    ) {
        return elegirElemento([
            "oscuro y misterioso, con momentos de belleza extraña",
            "melancólico y fantástico, con una atmósfera inquietante",
            "surrealista y emocional, con una sensación constante de incertidumbre"
        ]);
    }

    if (puntuaciones.aventura >= 6) {
        return elegirElemento([
            "aventurero y emocionante",
            "épico y lleno de descubrimientos",
            "dinámico, con peligro y momentos de asombro"
        ]);
    }

    if (puntuaciones.curiosidad >= 6) {
        return elegirElemento([
            "misterioso y lleno de tensión",
            "intrigante y reflexivo",
            "enigmático, con respuestas que aparecen poco a poco"
        ]);
    }

    if (puntuaciones.vinculo >= 6) {
        return elegirElemento([
            "emocional y cercano",
            "cálido, pero con momentos de tensión",
            "íntimo y profundamente humano"
        ]);
    }

    return elegirElemento([
        "misterioso y reflexivo",
        "emocional y lleno de descubrimientos",
        "fantástico y ligeramente inquietante"
    ]);
}

function crearFinal() {

    if (puntuaciones.independencia >= 6) {
        return elegirElemento([
            "un final abierto en el que el protagonista decide finalmente qué camino seguir",
            "un final en el que debe abandonar aquello que conocía para comenzar una nueva vida",
            "un final ambiguo que deja algunas preguntas sin responder"
        ]);
    }

    if (puntuaciones.vinculo >= 6) {
        return elegirElemento([
            "un final esperanzador en el que el protagonista consigue proteger aquello que considera importante",
            "un final agridulce en el que salvar a alguien tiene un precio",
            "un final centrado en el vínculo que sobrevivió a todo lo ocurrido"
        ]);
    }

    if (puntuaciones.intensidad >= 5) {
        return elegirElemento([
            "un final agridulce que cambia para siempre al protagonista",
            "un final inquietante que revela que la historia todavía no ha terminado",
            "un final ambiguo que obliga a cuestionar qué ocurrió realmente"
        ]);
    }

    if (puntuaciones.aventura >= 6) {
        return elegirElemento([
            "un final triunfante que abre las puertas hacia una nueva aventura",
            "un final de descubrimiento en el que todavía quedan lugares por explorar",
            "un final que cierra el viaje, pero deja una nueva ruta frente al protagonista"
        ]);
    }

    return elegirElemento([
        "un final esperanzador en el que el protagonista comienza una nueva etapa",
        "un final abierto que deja espacio para imaginar qué ocurre después",
        "un final agridulce que demuestra que algunas decisiones dejan huella"
    ]);
}

function generarTrama(
    ambientacion,
    rolProtagonista,
    conflicto,
    antagonismo,
    relacion,
    tema,
    tono,
    finalHistoria
) {
    return `
        En ${ambientacion}, ${rolProtagonista} descubre que su vida está a punto
        de cambiar cuando se ve involucrado/a en una situación que lo/la obliga a
        ${conflicto}.

        Sin embargo, descubrir la verdad no será sencillo. Para avanzar, tendrá
        que enfrentarse a ${antagonismo}, mientras cuenta con ${relacion},
        una conexión que podría cambiar el rumbo de sus decisiones.

        A medida que la historia avanza, lo que comenzó como una búsqueda,
        un descubrimiento o un desafío se convierte en algo mucho más profundo.
        El verdadero conflicto llevará al protagonista a preguntarse:
        ${tema}.

        Con un tono ${tono}, la historia explora no solo lo que ocurre a su
        alrededor, sino también la manera en que sus decisiones lo transforman.

        Finalmente, ${finalHistoria}.
    `;
}



function mostrarResultado() {

    pantallaInicio.classList.add("pantalla-resultado");

    const perfil = crearPerfilNarrativo();

    const ambientacion = crearAmbientacion();
    const rolProtagonista = crearRolProtagonista();
    const conflicto = crearConflicto();
    const antagonismo = crearAntagonismo();

    const relacion = crearRelacion();
    const tema = crearTema();
    const tono = crearTono();
    const finalHistoria = crearFinal();

const genero = crearGenero();

const recomendacion = crearRecomendacion(
    genero,
    ambientacion,
    rolProtagonista,
    conflicto,
    antagonismo,
    relacion,
    tema,
    tono
);

    const titulo = crearTitulo(
    genero,
    ambientacion,
    tema
);

    const trama = generarTrama(
    ambientacion,
    rolProtagonista,
    conflicto,
    antagonismo,
    relacion,
    tema,
    tono,
    finalHistoria
);

    pantallaInicio.innerHTML = `
        <h2>Tu historia comienza...</h2>

        <h1>${titulo}</h1>

        <p>
        <strong>Género principal:</strong>
        ${genero.principal}
        </p>

        <p>
        <strong>Género secundario:</strong>
        ${genero.secundario}
</p>

<hr>

        <p><strong>Tu perfil narrativo:</strong></p>
        <p>${perfil.join(", ")}</p>

        <p><strong>Conflicto principal</strong></p>
        <p>${conflicto}</p>

        <p><strong>Antagonismo</strong></p>
        <p>${antagonismo}</p>

        <p><strong>Relación importante</strong></p>
        <p>${relacion}</p>

        <p><strong>Tema central</strong></p>
        <p>${tema}</p>

        <p><strong>Tono</strong></p>
        <p>${tono}</p>

        <p><strong>Final</strong></p>
        <p>${finalHistoria}</p>

        <hr>

        <p><strong>Ambientación</strong></p>
        <p>${ambientacion}</p>

        <p><strong>Tu papel en la historia</strong></p>
        <p>${rolProtagonista}</p>

        <button onclick="location.reload()">
            Volver a empezar
        </button>

        <hr>

        <h3>✨ Una posible trama para tu historia</h3>

        <p>${trama}</p>

        <hr>

        <h3>📖 Una historia que comparte algunas de tus páginas</h3>

        <p>
        <em>
        Tu historia es única. No existe un libro exactamente igual a ella...
        pero encontramos una historia que comparte algunas de sus páginas.
        </em>
        </p>

        <h2>${recomendacion.titulo}</h2>

        <p>
        <strong>${recomendacion.autor}</strong>
        </p>

        <p>
        ${recomendacion.descripcion}
        </p>

    `;

    console.log("Resultado final:", puntuaciones);
    console.log("Decisiones finales:", decisiones);
    console.log("Perfil narrativo:", perfil);
    console.log("Ambientación:", ambientacion);
    console.log("Rol del protagonista:", rolProtagonista);
    console.log("Conflicto:", conflicto);
    console.log("Antagonismo:", antagonismo);
    console.log("Relación:", relacion);
    console.log("Tema:", tema);
    console.log("Tono:", tono);
    console.log("Final:", finalHistoria);

    
}


