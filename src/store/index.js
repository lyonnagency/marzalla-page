import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const socialEvents = [
    {
        code_name: "noviazgo",
        name: "Noviazgo",
        tagline: "El amor la mayor expresión de entrega y compromiso.",
        description: "Sabemos lo bonito que es estar enamorado, sentirte amado, cuidado y respetado, con la seguridad de saber que es el o la indicada,  y con el o la que deseas pasar el resto de tu vida.",
        inclusions: ["¿Quieres ser mi novia(o)?","Día del amor y la amistad","Pedidas de mano","Cenas de compromiso."],
        image: "image_engagement.jpg",
        keywords: ["noviazgo,novia,novio,amor,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,14 de febrero,día del amor y la amistad,organizador de eventos,San Valentín,pedida de mano,cena de compromiso,marzalla,marzalla eventos,evento para pedir la mano,¿Quieres ser mi novia?,¿Quieres ser mi novio?"]
    },
    {
        code_name: "despedida_de_soltero",
        name: "Despedida de soltero",
        tagline: "Como los buenos vinos.",
        description: "Date la oportunidad de seguir… nada ha terminado, sólo es el comienzo de una nueva etapa.",
        inclusions: ["Tour de tacos","Tour de mezcales","Tour de cervezas"],
        image: "image_bachelor_party.jpg",
        keywords: ["despedida de soltero,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,fiesta para hombres,amigos,soltero,organizador de eventos,tacos,mezcal,cerveza,marzalla,marzalla eventos"]
    },
    {
        code_name: "boda",
        name: "Boda",
        tagline: "Al igual que tú, queremos que el “gran día” sea perfecto.",
        description: "Entendemos que ese día será uno de los más importantes de tu vida, por eso cuidamos hasta el más mínimo detalle. Al igual que tú, queremos que el \"Gran Día\" sea perfecto. Sabemos que lo más cercano a la perfección es la excelencia.",
        inclusions: ["Save the date", "Ceremonia civil", "Ceremonia religiosa", "Primer aniversario"],
        image: "image_wedding.jpg",
        keywords: ["boda,boda civil,boda religiosa,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,save the date,fiesta de compromiso,aniversario,organizador de eventos,marzalla,marzalla eventos,bodas marzalla"]
    },
    {
        code_name: "babies",
        name: "Babies",
        tagline: "Queremos celebrar contigo cada etapa.",
        description: "Celebrar a tus pequeños, es una forma hermosa de compartir con la familia y amigos la alegría de ser los orgullosos papis.",
        inclusions: ["Baby shower", "Bautizo", "Primer Cumpleaños", "Confirmación", "Primera comunión"],
        image: "image_babies.jpg",
        keywords: ["bebé,baby shower,cumpleaños,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,bautizo,confirmación,primera comunión,organizador de eventos,marzalla,marzalla eventos"]
    },
    {
        code_name: "quinces",
        name: "XV años",
        tagline: "Única, original y divertida, así imaginamos tu fiesta.",
        description: "Al igual que tú, deseamos que tu fiesta sea la mejor. Única, original, divertida y memorable serán las palabras con las que tus amigos recordarán cada momento del evento. Si buscas disfrutar y sorprender a cada invitado, cuenta con nuestra creatividad e innovación.<br><br>Fiestas Temáticas",
        inclusions: ["Princesas","Mascaradas","Unicorn/Sweet Dreams","Pool Party o Neon Party","Y muchos más"],
        image: "image_xv.jpg",
        keywords: ["xv años,quince años,quinceañera,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,fiestas temáticas,fiesta de princesas,organizador de eventos,mascaradas,unicorn party,sweet dreams party,pool party,neon party,marzalla,marzalla eventos"]
    },
    {
        code_name: "fiesta_tematica",
        name: "Fiesta temática",
        tagline: "Eres divertido, extrovertido y original. Esta sección es para ti.",
        description: "Si estás en esta sección, es porque te gusta experimentar cosas nuevas, te encanta divertirte y pasarla genial en compañía de tus amigos. El motivo, no importa, puede ser tu próximo cumpleaños o la celebración de un nuevo logro profesional. Sea cual sea la razón, estamos emocionados de planear la mejor fiesta del año.",
        inclusions: ["Cumpleaños","Fechas especiales"],
        image: "image_theme_party.jpg",
        keywords: ["fiesta temática,cumpleaños,fechas especiales,celebración temática,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,cumpleaños tematicos,marzalla,marzalla eventos"]
    },
    {
        code_name: "comida_familiar",
        name: "Comida familiar",
        tagline: "Porque sabemos que la familia es lo más importante.",
        description: "Cuando pasan los años, te das cuenta que nada vale tanto como el tiempo en familia. Aprovecha cada oportunidad para mostrarles amor y cuidado a tus seres amados.",
        inclusions: ["Desayunos", "Comidas", "Cenas"],
        image: "image_family_food.jpg",
        keywords: ["familia,desayuno familiar,comida familiar,cena familiar,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,marzalla,marzalla eventos"]
    },
    {
        code_name: "bienvenida_solteria",
        name: "Bienvenida a la soltería",
        tagline: "Celebra la vida, cada etapa es una nueva oportunidad.",
        description: "Date la oportunidad de seguir… nada ha terminado, sólo es el comienzo de una nueva etapa. En este punto de la vida, eres más segura, sabes lo que quieres y lo que te gusta, eso es algo digno de celebrar.",
        inclusions: ["Desayunos","Comidas","Cenas","Tour de ensaladas","Tour de postres","Tour de cocteles"],
        image: "image_welcome_to_single.jpg",
        keywords: ["bienvenida a la soltería,soltera,fiesta para solteras,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,marzalla,marzalla eventos"]
    },
    {
        code_name: "graduaciones",
        name: "Graduaciones",
        tagline: "Tus logros también son nuestros.",
        description: "El esfuerzo tiene su recompensa, y después de varios años de sacrificio estás por cosechar uno de los primeros éxitos personales. FELICIDADES Y ENHORABUENA, futuro licenciado, ingeniero o doctor.",
        inclusions: ["Desayunos","Comidas","Cenas"],
        image: "image_graduation.jpg",
        keywords: ["graduaciones,fiesta de graduación,organizador de eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,marzalla,marzalla eventos"]
    }
]

const corporateEvents = [
    {
        code_name: "eventos",
        name: "Eventos",
        tagline: "Trabajamos justo en el objetivo para dar en el blanco.",
        description: "Los eventos empresariales requieren de una serie de formalidades que son indispensables conocer para lograr el objetivo específico de cada evento. Estos pueden ser pequeños o masivos, para público interno o público externos, pueden ser por uno o varios días, etc. Sabemos que eres especialista en tu área, nosotros somos profesionales especialistas en eventos, no tienes nada de qué preocuparte.",
        inclusions: ["Conferencias","Exposiciones","Convenciones","Congresos","Muestras","Ferias"],
        image: "image_exhibitions.jpg",
        keywords: ["eventos,eventos corporativos,conferencias,exposiciones,convenciones,congresos,muestras,ferias,organizador de eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,marzalla,marzalla eventos"]
    },
    {
        code_name: "brindis",
        name: "Brindis",
        tagline: "El comienzo o cierre de un buen evento se hace con un brindis.",
        description: "Concluir un evento con una copa de vino, permite que los invitados puedan relajarse y dejar un poco de lado tanta formalidad.",
        inclusions: ["Vino tinto","Vino blanco","Coctelería regional","Coctelería nacional e internacional","Coctelería molecular"],
        image: "image_toast.jpg",
        keywords: ["brindis,brindis de negocios,brindis corporativo,brindis para empresas,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,marzalla,marzalla eventos"]
    },
    {
        code_name: "coffee_break",
        name: "Coffee break",
        tagline: "Take a break",
        description: "Los eventos empresariales pueden llegar a ser pesados o cansados por el manejo de mucha información o bien por la cantidad de tiempo que permaneces sentado en el mismo lugar. Por eso, los espacios de esparcimientos son ideales para recuperar energía y concentración.",
        inclusions: ["Café orgánico","Tés fríos o calientes","Agua y/o refrescos","Snacks (dulces y salados)"],
        image: "image_coffee_break.jpg",
        keywords: ["coffee break,coffee break para empresas,receso en eventos,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,marzalla,marzalla eventos"]
    },
    {
        code_name: "cursos_y_talleres",
        name: "Cursos y Talleres",
        tagline: "Capacítate y Actualízate",
        description: "Sabemos lo importante que es mantener actualizado y motivado al equipo de trabajo, por eso contamos con una amplia agenda de profesionales en materia de Team Building, así como de todas las herramientas necesarias para llevar a cabo tus cursos y/o talleres.",
        inclusions: ["Salones de conferencias", "Equipo Técnico", "Montaje de Coffee Break", "Box Lunch"],
        image: "image_course_and_workshop.jpg",
        keywords: ["capacítate, capacitación, talleres, cursos, ¿cómo dar un curso?, ¿cómo dar un taller?, marzalla, marzalla eventos, organizadora de eventos, agencia de eventos, Morelia, organizadora de eventos en Morelia"]
    },
    {
        code_name: "lanzamiento_de_producto",
        name: "Lanzamiento de producto",
        tagline: "Da a conocer tu Marca",
        description: "Una empresa sin clientes, no es negocio. Por eso ponemos a tu alcance las mejores herramientas para que tu producto entre con el pie derecho al mercado competitivo.",
        inclusions: ["Manejo de prensa", "Montaje o Producción de locaciones", "Brindis", "Bocadillos"],
        image: "image_product_launch.jpg",
        keywords: ["lanzamiento de producto, lanzamiento de productos nuevos, lanzamiento de productos al mercado, ¿cómo lanzar un producto al mercado?, producto, ¿Cómo mostrar tus productos en el mercado?, marzalla, marzalla eventos, organizadora de eventos, agencia de eventos, Morelia, organizadora de eventos en Morelia"]
    },
    {
        code_name: "ruedas_de_prensa",
        name: "Ruedas de prensa",
        tagline: "El mundo debe saber",
        description: "Las ruedas de prensa son excelentes elementos para lograr que se hable favorablemente sobre tu marca, empresa o institución. No obstante, se debe hacer un buen uso de las relaciones públicas para obtener los mejores resultados.",
        inclusions: ["Relaciones Públicas", "Coffee Break"],
        image: "image_press_conference.jpg",
        keywords: ["rueda de prensa, conferencia de prensa, prensa, ¿Cómo organizar una rueda de prensa?, marzalla, marzalla eventos, organizadora de eventos, agencia de eventos, Morelia, organizadora de eventos en Morelia"]
    },
    {
        code_name: "xmas",
        name: "Fin de año",
        tagline: "¡Un nuevo año!",
        description: "La mayoría de las empresas celebra de una u otra forma esta importante fecha, y no es para menos, es aquí cuando tienes la oportunidad de agradecer a tus colaboradores todo su esfuerzo, compromiso y lealtad; por otra parte, puedes aprovechar para estrechar las relaciones con tus socios, y por qué no, recompensar la preferencia de tus clientes.",
        inclusions: ["Posadas","Cenas","Eventos Especiales"],
        image: "image_xmas.jpg",
        keywords: ["cena navideña,posadas empresariales,eventos navideños para empresas,Marzalla Eventos Blvd. García de León 777 Chapultepec Sur,organizador de eventos,marzalla,marzalla eventos"]
    }
]

export default new Vuex.Store({
    state: {
        event: {
            code_name: "",
            name: "",
            tagline: "",
            description: "",
            inclusions: [],
            image: "",
            keywords: []
        },
        social_events: socialEvents,
        corporate_events: corporateEvents
    },
    getters: {
        event: state => {
            return state.event
        },
        allEvents: state => area => {
            switch (area) {
                case "social":
                    return state.social_events
                case "corporate":
                    return state.corporate_events
            }
        }
    },
    mutations: {
        getEvent(state, payload) {
            switch (payload.area) {
                case "social":
                    state.event = state.social_events.find(event => event.code_name === payload.code_name)
                    break
                case "corporate":
                    state.event = state.corporate_events.find(event => event.code_name === payload.code_name)
                    break
            }
        }
    },
    actions: {
        getEvent({ commit }, payload) {
            commit('getEvent', payload)
        }
    }
})
