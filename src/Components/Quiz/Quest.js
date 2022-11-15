const preguntas = [
    {
      titulo: "¿Cuál es el río más largo de la Península Ibérica?",
      opciones: [
        { textoRespuesta: "Rio Tajo", isCorrect: true },
        { textoRespuesta: "Rio small", isCorrect: false },
        { textoRespuesta: "Rio de la plata", isCorrect: false },
        { textoRespuesta: "Rio Amur", isCorrect: false },
      ],
      num:1
    },
    {
      titulo: "¿Cuál es el país más pequeño del mundo?",
      opciones: [
        { textoRespuesta: "Brazil", isCorrect: false },
        { textoRespuesta: "Vaticano", isCorrect: true },
        { textoRespuesta: "Portugal", isCorrect: false },
        { textoRespuesta: "Marruecos", isCorrect: false },
      ],
      num:2
    },
    {
      titulo: "¿Cuántos océanos hay en la Tierra?",
      opciones: [
        { textoRespuesta: "5", isCorrect: true },
        { textoRespuesta: "4", isCorrect: false },
        { textoRespuesta: "6", isCorrect: false },
        { textoRespuesta: "2", isCorrect: false },
      ],
      num:3
    },
    {
      titulo: " ¿Qué país tiene más habitantes?",
      opciones: [
        { textoRespuesta: "Estados Unidos", isCorrect: false },
        { textoRespuesta: "La india", isCorrect: false },
        { textoRespuesta: "Brazil", isCorrect: false },
        { textoRespuesta: "China", isCorrect: true },
      ],
      num:4
    },
    {
        titulo: "¿Qué país es el más grande del mundo?",
        opciones: [
          { textoRespuesta: "Rusia", isCorrect: true },
          { textoRespuesta: "Brazil", isCorrect: false },
          { textoRespuesta: "Estados Unidos", isCorrect: false },
          { textoRespuesta: "China", isCorrect: false },
        ]
,
num:5
      },{
        titulo: "¿Cuál es la montaña más alta del mundo?",
        opciones: [
          { textoRespuesta: "Monte Everest", isCorrect: true },
          { textoRespuesta: "K2", isCorrect: false },
          { textoRespuesta: "Monte Makalu", isCorrect: false },
          { textoRespuesta: "Monte Lhotse I", isCorrect: false },
        ]
,
num:6
      },{
        titulo: "¿Cuál es el río más largo del mundo?",
        opciones: [
          { textoRespuesta: "Rio Nilo", isCorrect: true },
          { textoRespuesta: "Rio Amazonas", isCorrect: false },
          { textoRespuesta: "Rio Misisipi", isCorrect: false },
          { textoRespuesta: "Rio de la plata", isCorrect: false },
        ]
,
num:7
      },{
        titulo: "¿Cuántos mares existen en la Tierra?",
        opciones: [
          { textoRespuesta: "<60", isCorrect: true },
          { textoRespuesta: ">60", isCorrect: false },
          { textoRespuesta: "<10 >50", isCorrect: false },
          { textoRespuesta: "<100", isCorrect: false },
        ]
,
num:8
      },{
        titulo: "¿Qué río pasa por más países?",
        opciones: [
          { textoRespuesta: "Rio Amazonas", isCorrect: false },
          { textoRespuesta: "Ninguno", isCorrect: false },
          { textoRespuesta: "Rio Danubio", isCorrect: true },
          { textoRespuesta: "Rio de la plata", isCorrect: false },
        ]
,
num:1
      },{
        titulo: "¿Dónde se encuentra el arrecife de coral más grande?",
        opciones: [
          { textoRespuesta: "Brazil", isCorrect: false },
          { textoRespuesta: "Noruega", isCorrect: false },
          { textoRespuesta: "Madagazcar", isCorrect: false },
          { textoRespuesta: "Australia", isCorrect: true },
        ]
,
num:9
      },{
        titulo: "¿Cuál es la ciudad más poblada del mundo?",
        opciones: [
          { textoRespuesta: "New York", isCorrect: false },
          { textoRespuesta: "Tokio", isCorrect: true },
          { textoRespuesta: "Roma", isCorrect: false },
          { textoRespuesta: "Ninguna de las Anteriores", isCorrect: false },
        ]
,
num:10
      },{
        titulo: "¿Cuál es la ciudad con menos habitantes del mundo?",
        opciones: [
          { textoRespuesta: "Berazategui(Agentina)", isCorrect: false },
          { textoRespuesta: "Paris(Francia)", isCorrect: false },
          { textoRespuesta: "Hum(Croacia)", isCorrect: true },
          { textoRespuesta: "Andorra(Andorra)", isCorrect: false },
        ]
,
num:11
      },{
        titulo: "¿El desierto más grande del mundo?",
        opciones: [
          { textoRespuesta: "Sahara", isCorrect: true },
          { textoRespuesta: "Arabia", isCorrect: false },
          { textoRespuesta: "Kalahari", isCorrect: false },
          { textoRespuesta: "Chihuahua", isCorrect: false },
        ]
,
num:12
      },{
        titulo: "¿Cuántos estados forman parte de Estados Unidos?",
        opciones: [
          { textoRespuesta: "50", isCorrect: true },
          { textoRespuesta: "49", isCorrect: false },
          { textoRespuesta: "51", isCorrect: false },
          { textoRespuesta: "52", isCorrect: false },
        ]
,
num:13
      },{
        titulo: "¿Cuántos continentes existen?",
        opciones: [
          { textoRespuesta: "4", isCorrect: false },
          { textoRespuesta: "6", isCorrect: false },
          { textoRespuesta: "5", isCorrect: true },
          { textoRespuesta: "Ninguna de las anteriores", isCorrect: false }
        ]
,
num:14
      },{
      titulo: "¿Qué continente es el más grande?",
      opciones: [
        { textoRespuesta: "Africa", isCorrect: true },
        { textoRespuesta: "Asia", isCorrect: false },
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
      ],
      num:15
    },{
        titulo: "¿El mar muerto es realmente un mar?",
        opciones: [
          { textoRespuesta: "Es un mar", isCorrect: false},
          { textoRespuesta: "Es un rio", isCorrect: false },
          { textoRespuesta: "Es un lago", isCorrect: true },
          { textoRespuesta: "Es un oceano", isCorrect: false },
        ]
,
num:16
      },{
      titulo: "¿Qué río pasa por París?",
      opciones: [
        { textoRespuesta: "Le fraque", isCorrect: false },
        { textoRespuesta: "Rio Parisino", isCorrect: false },
        { textoRespuesta: "Rio Sena", isCorrect: true },
        { textoRespuesta: "Rio Paris", isCorrect: false },
      ],
      num:17
    },{
        titulo: "¿En qué país hay un mayor número de pirámides?",
        opciones: [
          { textoRespuesta: "Sudan", isCorrect: true },
          { textoRespuesta: "Egipto", isCorrect: false },
          { textoRespuesta: "Nigeria", isCorrect: false },
          { textoRespuesta: "Francia", isCorrect: false },
        ]
,
num:18
      },{
        titulo: "¿Qué país se encuentra entre dos continentes?",
        opciones: [
          { textoRespuesta: "Canada", isCorrect: false },
          { textoRespuesta: "Andorra", isCorrect: false },
          { textoRespuesta: "Marruecos", isCorrect: false },
          { textoRespuesta: "Estambul", isCorrect: true },
        ]
,
num:19
      },{
        titulo: "¿Cuál es la cordillera de montañas más larga del mundo?",
        opciones: [
          { textoRespuesta: "Cordillera de Los Andes", isCorrect: true },
          { textoRespuesta: "Montañas Transantárticas", isCorrect: false },
          { textoRespuesta: "Gran Cordillera Divisoria", isCorrect: false },
          { textoRespuesta: "Kunlun", isCorrect: false },
        ]
,
num:20
      },{
        titulo: "¿Qué país cuenta con un mayor número de volcanes?",
        opciones: [
          { textoRespuesta: "Argentina", isCorrect: false },
          { textoRespuesta: "España", isCorrect: false },
          { textoRespuesta: "Chile", isCorrect: false },
          { textoRespuesta: "Estados Unidos", isCorrect: true },
        ]
,
num:21
      },{
        titulo: "¿Qué ciudad se considera la más antigua?",
        opciones: [
          { textoRespuesta: "Egipto", isCorrect: false },
          { textoRespuesta: "Damasco", isCorrect: true },
          { textoRespuesta: "Roma", isCorrect: false },
          { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
        ]
,
num:22
      },{
        titulo: "¿Qué isla es la más grande del mundo?",
        opciones: [
          { textoRespuesta: "China", isCorrect: false },
          { textoRespuesta: "Asia", isCorrect: false },
          { textoRespuesta: "Madagascar", isCorrect: false },
          { textoRespuesta: "Groenlandia", isCorrect: true },
        ]
,
num:23
      },{
      titulo: "¿Cuántos países forman parte de la Unión Europea?",
      opciones: [
        { textoRespuesta: "27", isCorrect: true },
        { textoRespuesta: "28", isCorrect: false },
        { textoRespuesta: "31", isCorrect: false },
        { textoRespuesta: "26", isCorrect: false },
      ],
      num:24
    },{
      titulo: "¿Qué es Madagascar?",
      opciones: [
        { textoRespuesta: "Ciudad", isCorrect: false },
        { textoRespuesta: "Isla", isCorrect: false },
        { textoRespuesta: "Pais", isCorrect: true },
        { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
      ],
      num:25
    },{
      titulo: "¿Dónde se encuentra el Taj Mahal?",
      opciones: [
        { textoRespuesta: "La india", isCorrect: true },
        { textoRespuesta: "Egipto", isCorrect: false },
        { textoRespuesta: "Qatar", isCorrect: false },
        { textoRespuesta: "Arabia Saudita", isCorrect: false },
      ],
      num:26
    },{
      titulo: "¿Dónde encontramos el Machu Pichu?",
      opciones: [
        { textoRespuesta: "Bolivia", isCorrect: false },
        { textoRespuesta: "Peru", isCorrect: true },
        { textoRespuesta: "Mexico", isCorrect: false},
        { textoRespuesta: "Ecuador", isCorrect: false },
      ],
      num:27
    },{
      titulo: "¿Cuál es el lago más grande del mundo?",
      opciones: [
        { textoRespuesta: "Lago Huron", isCorrect: false },
        { textoRespuesta: "Lago Michigan", isCorrect: false },
        { textoRespuesta: "Lago Vicotria", isCorrect: false },
        { textoRespuesta: "Mar Caspio", isCorrect: true },
      ],
      num:28
    },{
      titulo: "¿Qué montaña es la más alta de Europa?",
      opciones: [
        { textoRespuesta: "Monte Elbrus", isCorrect: true },
        { textoRespuesta: "Monte Dij-Tau", isCorrect: false },
        { textoRespuesta: "Tetnuldi", isCorrect: false },
        { textoRespuesta: "Mont Blanc", isCorrect: false },
      ],
      num:29
    },{
      titulo: "¿En qué ciudad de Italia se encuentra la escultura de David de Miguel Ángel?",
      opciones: [
        { textoRespuesta: "Paris, Francia", isCorrect: false },
        { textoRespuesta: "Florencia, Italia", isCorrect: true },
        { textoRespuesta: "Roma, Italia", isCorrect: false },
        { textoRespuesta: "Madrid, España", isCorrect: false },
      ],
      num:30
    },{
      titulo: " ¿Cuál es la ciudad más calurosa de la Tierra?",
      opciones: [
        { textoRespuesta: "Ciudad de Phalodi", isCorrect: false },
        { textoRespuesta: "Sahara", isCorrect: false },
        { textoRespuesta: "Valle de la muerte", isCorrect: true },
        { textoRespuesta: "Localidad de Sibi", isCorrect: false },
      ],
      num:31
    },{
      titulo: "¿En que pais vive el creador de Countries App?",
      opciones: [
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Mexico", isCorrect: false },
        { textoRespuesta: "Uruguay", isCorrect: false },
        { textoRespuesta: "Ninguna de las anteriores", isCorrect: true },
      ],
      num:32
    },{
      titulo: "¿¿Qué continente se encuentra en los 4 hemisferios??",
      opciones: [
        { textoRespuesta: "Africa", isCorrect: true },
        { textoRespuesta: "Oceania", isCorrect: false },
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "America central", isCorrect: false },
      ],
      num:33
    },{
      titulo: "¿¿Qué continente es el más poblado??",
      opciones: [
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "Asia", isCorrect: true },
        { textoRespuesta: "America del sur", isCorrect: false },
        { textoRespuesta: "America del norte", isCorrect: false },
      ],
      num:34
    },{
      titulo: "¿Cuál es el país más pequeño de América?",
      opciones: [
        { textoRespuesta: "Granada", isCorrect: false },
        { textoRespuesta: "Antigua y Barbuda", isCorrect: false },
        { textoRespuesta: "San Cristóbal y Nieves", isCorrect: true },
        { textoRespuesta: "Barbados", isCorrect: false },
      ],
      num:35
    },{
      titulo: "¿Cuál es el lugar más seco del planeta?",
      opciones: [
        { textoRespuesta: "Antartida", isCorrect: true },
        { textoRespuesta: "Antartica", isCorrect: false },
        { textoRespuesta: "Egipto", isCorrect: false },
        { textoRespuesta: "Madagazcar", isCorrect: false },
      ],
      num:36
    },{
      titulo: "¿Cuál es el país más poblado de África?",
      opciones: [
        { textoRespuesta: "Qatar", isCorrect: false },
        { textoRespuesta: "Nigeria", isCorrect: true },
        { textoRespuesta: "Egipto", isCorrect: false },
        { textoRespuesta: "Camerun", isCorrect: false },
      ],
      num:37
    },{
      titulo: "¿Cuál es la capital de Egipto?",
      opciones: [
        { textoRespuesta: "Otpige", isCorrect: false },
        { textoRespuesta: "Egipto", isCorrect: false },
        { textoRespuesta: "El Cairo", isCorrect: true },
        { textoRespuesta: "El Salar", isCorrect: false },
      ],
      num:38
    },{
      titulo: "¿Cuál es la lengua más hablada del mundo?",
      opciones: [
        { textoRespuesta: "Japones", isCorrect: false },
        { textoRespuesta: "Chino", isCorrect: false },
        { textoRespuesta: "Español", isCorrect: false },
        { textoRespuesta: "Ingles", isCorrect: true },
      ],
      num:39
    },{
      titulo: "¿Cuál es el idioma oficial de Andorra?",
      opciones: [
        { textoRespuesta: "Catalan", isCorrect: true },
        { textoRespuesta: "Andorrano", isCorrect: false },
        { textoRespuesta: "Español", isCorrect: false },
        { textoRespuesta: "Ninguna de las Anteriores", isCorrect: false },
      ],
      num:40
    },{
      titulo: "¿Cuál es el Estado más grande de Estados Unidos?",
      opciones: [
        { textoRespuesta: "Arizona", isCorrect: false },
        { textoRespuesta: "Alaska", isCorrect: true },
        { textoRespuesta: "New York", isCorrect: false },
        { textoRespuesta: "California", isCorrect: false },
      ],
      num:41
    },{
      titulo: "¿Dónde se encuentra el estrecho de Magallanes?",
      opciones: [
        { textoRespuesta: "Chile", isCorrect: false },
        { textoRespuesta: "Norte America", isCorrect: false },
        { textoRespuesta: "Sur America", isCorrect: true },
        { textoRespuesta: "America Central", isCorrect: false },
      ],
      num:42
    },{
      titulo: "¿Cual es el pais que fue nombado el mas feliz del mundo?",
      opciones: [
        { textoRespuesta: "Suiza", isCorrect: false },
        { textoRespuesta: "Noruega", isCorrect: false },
        { textoRespuesta: "Nutan", isCorrect: false },
        { textoRespuesta: "Costa Rica", isCorrect: true },
      ],
      num:43
    },{
      titulo: "¿Cual es el pais mas grande de Africa?",
      opciones: [
        { textoRespuesta: "Argelia", isCorrect: true },
        { textoRespuesta: "Nigeria", isCorrect: false },
        { textoRespuesta: "Chad", isCorrect: false },
        { textoRespuesta: "AMali", isCorrect: false },
      ],
      num:44
    },{
      titulo: "¿Que pais latinoamerica es la madre del tango?",
      opciones: [
        { textoRespuesta: "Chile", isCorrect: false },
        { textoRespuesta: "Argentina", isCorrect: true },
        { textoRespuesta: "Brazil", isCorrect: false },
        { textoRespuesta: "Uruguay", isCorrect: false },
      ],
      num:45
    },{
      titulo: "¿Cuál es la capital de Turquía?",
      opciones: [
        { textoRespuesta: "Arcakna", isCorrect: false },
        { textoRespuesta: "Arakna", isCorrect: false },
        { textoRespuesta: "Ankara", isCorrect: true },
        { textoRespuesta: "Ankare", isCorrect: false },
      ],
      num:46
    },{
      titulo: "¿Cuál es el nombre del desierto de México?",
      opciones: [
        { textoRespuesta: "Desierto de patagonia Oriental", isCorrect: false },
        { textoRespuesta: "Desierto de Atacama", isCorrect: false },
        { textoRespuesta: "Desierto de Mexico", isCorrect: false },
        { textoRespuesta: "Desierto de Sonora", isCorrect: true },
      ],
      num:47
    },{
      titulo: "¿En qué isla italiana está Palermo?",
      opciones: [
        { textoRespuesta: "Sicilia", isCorrect: true },
        { textoRespuesta: "Isla de Capri", isCorrect: false },
        { textoRespuesta: "Isquia", isCorrect: false },
        { textoRespuesta: "Burano", isCorrect: false },
      ],
      num:48
    },{
      titulo: "¿Qué río discurre por Roma?",
      opciones: [
        { textoRespuesta: "Rio Rubicon", isCorrect: false },
        { textoRespuesta: "Rio Tiber", isCorrect: true },
        { textoRespuesta: "Rio Aniene", isCorrect: false },
        { textoRespuesta: "Ninguno de los anteriores", isCorrect: false },
      ],
      num:49
    },{
      titulo: " ¿Qué ciudad tuvo una vez el nombre de Leningrado?",
      opciones: [
        { textoRespuesta: "Paris", isCorrect: false },
        { textoRespuesta: "Roma", isCorrect: false },
        { textoRespuesta: "San Petersburgo", isCorrect: true },
        { textoRespuesta: "Palermo", isCorrect: false },
      ],
      num:50
    },{
      titulo: "¿Cuál es el río más largo de Europa?",
      opciones: [
        { textoRespuesta: "Rio Don", isCorrect: false },
        { textoRespuesta: "Rio Ural", isCorrect: false },
        { textoRespuesta: "Rio Danubio", isCorrect: false },
        { textoRespuesta: "Rio Volga", isCorrect: true },
      ],
      num:51
    },{
      titulo: "¿Cuál es el segundo país más grande de Europa después de Rusia?",
      opciones: [
        { textoRespuesta: "Francia", isCorrect: true },
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Alemania", isCorrect: false },
        { textoRespuesta: "Inglaterra", isCorrect: false },
      ],
      num:52
    },{
      titulo: "¿En qué país se encuentra Cracovia?",
      opciones: [
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Polonia", isCorrect: true },
        { textoRespuesta: "Rusia", isCorrect: false },
        { textoRespuesta: "Noruega", isCorrect: false },
      ],
      num:53
    },{
      titulo: "¿Cuál es la capital de Australia?",
      opciones: [
        { textoRespuesta: "Adelaida", isCorrect: false },
        { textoRespuesta: "Sidney", isCorrect: false },
        { textoRespuesta: "Camberra", isCorrect: true },
        { textoRespuesta: "Melbourne", isCorrect: false },
      ],
      num:54
    },{
      titulo: "¿De qué país es capital Bratislava?",
      opciones: [
        { textoRespuesta: "Dinamarca", isCorrect: false },
        { textoRespuesta: "Suecia", isCorrect: false },
        { textoRespuesta: "Escandinavia", isCorrect: false },
        { textoRespuesta: "Eslovaquia", isCorrect: true },
      ],
      num:55
    },{
      titulo: "Además de España, ¿en qué otros países hay ciudades que se llaman Barcelona?",
      opciones: [
        { textoRespuesta: "Inglaterra", isCorrect: false },
        { textoRespuesta: "Sicilia", isCorrect: false },
        { textoRespuesta: "Francia", isCorrect: false },
        { textoRespuesta: "Todas son correctas", isCorrect: true },
      ],
      num:56
    },{
      titulo: "¿En qué país se habla neerlandés?",
      opciones: [
        { textoRespuesta: "Paises Bajos", isCorrect: true },
        { textoRespuesta: "Nueva Zelanda", isCorrect: true },
        { textoRespuesta: "Irlanda", isCorrect: false },
        { textoRespuesta: "Ninguna de las anteriores", isCorrect: false },
      ],
      num:57
    },{
      titulo: "¿Cuál es la capital de Paraguay?",
      opciones: [
        { textoRespuesta: "Encarnacion", isCorrect: false },
        { textoRespuesta: "Asuncion", isCorrect: true },
        { textoRespuesta: "San Bernardino", isCorrect: false },
        { textoRespuesta: "Villarica", isCorrect: false },
      ],
      num:58
    },{
      titulo: "¿Qué dos países de América del sur no tienen litoral?",
      opciones: [
        { textoRespuesta: "Chile y Paraguay", isCorrect: false },
        { textoRespuesta: "Argentina y Uruguay", isCorrect: false },
        { textoRespuesta: "Bolivia y Paraguay", isCorrect: true },
        { textoRespuesta: "Uruguay", isCorrect: false },
      ],
      num:59
    },{
      titulo: "¿Cuál es la capital de los Estados Unidos?",
      opciones: [
        { textoRespuesta: "Miami", isCorrect: false },
        { textoRespuesta: "Alaska", isCorrect: false },
        { textoRespuesta: "New York", isCorrect: false },
        { textoRespuesta: "Washington D.C", isCorrect: true },
      ],
      num:60
    },{
      titulo: "¿Cuál es la capital de Nicaragua?",
      opciones: [
        { textoRespuesta: "Leon", isCorrect: false },
        { textoRespuesta: "Managua", isCorrect: true },
        { textoRespuesta: "Granada", isCorrect: false },
        { textoRespuesta: "Masaya", isCorrect: false },
      ],
      num:61
    },{
      titulo: "¿Cuál es la capital de China?",
      opciones: [
        { textoRespuesta: "Pekin", isCorrect: true },
        { textoRespuesta: "Shanghai", isCorrect: false },
        { textoRespuesta: "Wuhan", isCorrect: false },
        { textoRespuesta: "Tianjin", isCorrect: false },
      ],
      num:62
    },{
      titulo: "Si quieres ver las ruinas de Petra, ¿a qué país tienes que viajar?",
      opciones: [
        { textoRespuesta: "Suiza", isCorrect: false },
        { textoRespuesta: "Alemania", isCorrect: false },
        { textoRespuesta: "Jordania", isCorrect: true },
        { textoRespuesta: "España", isCorrect: false },
      ],
      num:63
    },{
      titulo: "¿En qué país se encuentra la Torre de Belém?",
      opciones: [
        { textoRespuesta: "Francia", isCorrect: false },
        { textoRespuesta: "Alemania", isCorrect: false },
        { textoRespuesta: "Suiza", isCorrect: false },
        { textoRespuesta: "Portugal", isCorrect: true },
      ],
      num:64
    },{
      titulo: "¿Cuál es la ciudad más al sur del mundo?",
      opciones: [
        { textoRespuesta: "Puerto Williams", isCorrect: true },
        { textoRespuesta: "Ushuaia", isCorrect: false },
        { textoRespuesta: "Puerto Almanza", isCorrect: false },
        { textoRespuesta: "Puerto Toro", isCorrect: false },
      ],
      num:65
    },{
      titulo: "¿Qué país tiene el mayor número de lagos naturales del planeta?",
      opciones: [
        { textoRespuesta: "Australia", isCorrect: false },
        { textoRespuesta: "Canada", isCorrect: true },
        { textoRespuesta: "Brazil", isCorrect: false },
        { textoRespuesta: "Uruguay", isCorrect: false },
      ],
      num:66
    },{
      titulo: "¿En qué ciudad se encuentra el Monte Vesubio?",
      opciones: [
        { textoRespuesta: "Palermo", isCorrect: false },
        { textoRespuesta: "Roma", isCorrect: false },
        { textoRespuesta: "Napoles", isCorrect: true },
        { textoRespuesta: "Paris", isCorrect: false },
      ],
      num:67
    },{
      titulo: "¿Cuál es el país más grande de América del Sur?",
      opciones: [
        { textoRespuesta: "Chile", isCorrect: false },
        { textoRespuesta: "Argentina", isCorrect: false },
        { textoRespuesta: "Uruguay", isCorrect: false },
        { textoRespuesta: "Brasil", isCorrect: true },
      ],
      num:68
    },{
      titulo: "¿Cuál es el único continente que tiene tierra en cada uno de los 4 hemisferios?",
      opciones: [
        { textoRespuesta: "Asia", isCorrect: true},
        { textoRespuesta: "Africa", isCorrect: false },
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "America", isCorrect: false },
      ],
      num:69
    },{
      titulo: "¿Cuál es la capital de Venezuela?",
      opciones: [
        { textoRespuesta: "Valencia", isCorrect: false },
        { textoRespuesta: "Caracas", isCorrect: true },
        { textoRespuesta: "Maracaibo", isCorrect: false },
        { textoRespuesta: "Coro", isCorrect: false },
      ],
      num:70
    },{
      titulo: "¿Cuántos países tiene África? ",
      opciones: [
        { textoRespuesta: "72", isCorrect: false },
        { textoRespuesta: "61", isCorrect: false },
        { textoRespuesta: "54", isCorrect:true },
        { textoRespuesta: "35", isCorrect: false },
      ],
      num:71
    },{
      titulo: "¿Dónde desemboca el río Amazonas?",
      opciones: [
        { textoRespuesta: "Océano Antártico", isCorrect: false },
        { textoRespuesta: "Océano Índico", isCorrect:false },
        { textoRespuesta: "Océano Pacífico", isCorrect: false },
        { textoRespuesta: "Océano Atlántico", isCorrect: true },
      ],
      num:72
    },{
      titulo: "¿Cuál es la isla más grande del mar Caribe?",
      opciones: [
        { textoRespuesta: "Cuba", isCorrect: true },
        { textoRespuesta: "La Española", isCorrect: false },
        { textoRespuesta: "Jamaica", isCorrect: false },
        { textoRespuesta: "Puerto Rico", isCorrect: false },
      ],
      num:73
    },{
      titulo: "¿Cuál es el principal río que recorre el Gran Cañón de Estados Unidos?",
      opciones: [
        { textoRespuesta: "Rio Misisipi", isCorrect: false },
        { textoRespuesta: "Rio colorado", isCorrect: true },
        { textoRespuesta: "Rio Grande", isCorrect: false },
        { textoRespuesta: "Rio Yucon", isCorrect: false },
      ],
      num:74
    },{
      titulo: "¿Qué nombre se la da a la parte norte de China?",
      opciones: [
        { textoRespuesta: "Airruchnam", isCorrect: false },
        { textoRespuesta: "Manchurrio", isCorrect: false },
        { textoRespuesta: "Manchurria", isCorrect: true },
        { textoRespuesta: "Man-Chun-Rria", isCorrect: false },
      ],
      num:75
    },{
      titulo: "¿Dónde se encuentra el río Támesis?",
      opciones: [
        { textoRespuesta: "Inglaterra", isCorrect: false },
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Marruecos", isCorrect: false },
        { textoRespuesta: "Reino Unido", isCorrect: true},
      ],
      num:76
    },{
      titulo: "¿Qué volcán se encuentra cerca de la antigua ciudad de Pompeya?",
      opciones: [
        { textoRespuesta: "Volcan Vesuvio", isCorrect: false },
        { textoRespuesta: "Pompei", isCorrect: false },
        { textoRespuesta: "Herculano", isCorrect: true },
        { textoRespuesta: "Ninguno de los anteriores", isCorrect: false },
      ],
      num:77
    },{
      titulo: "¿Qué ciudad se conocía antes como Nueva Ámsterdam?",
      opciones: [
        { textoRespuesta: "New York", isCorrect: true },
        { textoRespuesta: "California", isCorrect: false },
        { textoRespuesta: "Miami", isCorrect: false },
        { textoRespuesta: "Asmterdam", isCorrect: false },
      ],
      num:78
    },{
      titulo: "¿Qué estrecho separa Marruecos de España?",
      opciones: [
        { textoRespuesta: "Estrecho de Kerch", isCorrect: false },
        { textoRespuesta: "Estrecho de Gibraltar", isCorrect: true },
        { textoRespuesta: "Estrechos Daneses", isCorrect: false },
        { textoRespuesta: "Paso de Calais", isCorrect: false },
      ],
      num:79
    },{
      titulo: "¿Qué país se parece a una bota?",
      opciones: [
        { textoRespuesta: "Moldavia", isCorrect: false },
        { textoRespuesta: "Francia", isCorrect: false },
        { textoRespuesta: "Italia", isCorrect: true },
        { textoRespuesta: "Rumania", isCorrect: false },
      ],
      num:80
    },{
      titulo: "¿Qué continente se conocía como Alkebulan?",
      opciones: [
        { textoRespuesta: "Oceania", isCorrect: false },
        { textoRespuesta: "America", isCorrect: false },
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "Africa", isCorrect: true},
      ],
      num:81
    },{
      titulo: "¿Qué montaña es apodada la “Montaña Salvaje”?",
      opciones: [
        { textoRespuesta: "K2", isCorrect: true },
        { textoRespuesta: "Monte Everest", isCorrect: false },
        { textoRespuesta: "Chao Oyu", isCorrect: false },
        { textoRespuesta: "Makalu", isCorrect: false },
      ],
      num:82
    },{
      titulo: "¿Cuál es el lago más profundo del mundo?",
      opciones: [
        { textoRespuesta: "Lago Malawi", isCorrect: false },
        { textoRespuesta: "Lago Baikal", isCorrect: true },
        { textoRespuesta: "Lago Tanganica", isCorrect: false },
        { textoRespuesta: "Mar Caspio", isCorrect: false },
      ],
      num:83
    },{
      titulo: "¿Qué vía artificial conecta el océano Pacífico con el océano Atlántico?",
      opciones: [
        { textoRespuesta: "Estrecho de Ormuz", isCorrect: false },
        { textoRespuesta: "Canal de Suez", isCorrect: false },
        { textoRespuesta: "Canal de Panama", isCorrect: true },
        { textoRespuesta: "Estrecho de Malaca", isCorrect: false },
      ],
      num:84
    },{
      titulo: "¿Qué mar rodea a la isla mexicana de Cozumel?",
      opciones: [
        { textoRespuesta: "Mar Rojo", isCorrect: false },
        { textoRespuesta: "Mar caspio", isCorrect: false },
        { textoRespuesta: "Mar Negro", isCorrect: false },
        { textoRespuesta: "Mar Caribe", isCorrect: true },
      ],
      num:85
    },{
      titulo: "¿Cuál es el país más grande de la Península Arábiga?",
      opciones: [
        { textoRespuesta: "Arabia Saudita", isCorrect: true },
        { textoRespuesta: "Qatar", isCorrect: false },
        { textoRespuesta: "Emiratos Arabes Unidos", isCorrect: false },
        { textoRespuesta: "Yemen", isCorrect: false },
      ],
      num:86
    },{
      titulo: "¿Qué continente contiene la mayor cantidad de agua dulce?",
      opciones: [
        { textoRespuesta: "Europa", isCorrect: false },
        { textoRespuesta: "Antartida", isCorrect: true },
        { textoRespuesta: "America", isCorrect: false },
        { textoRespuesta: "Antartica", isCorrect: false },
      ],
      num:87
    },{
      titulo: "¿En qué país se encuentra la Selva Negra?",
      opciones: [
        { textoRespuesta: "Brasil", isCorrect: false },
        { textoRespuesta: "Egipto", isCorrect: false },
        { textoRespuesta: "Alemania", isCorrect: true },
        { textoRespuesta: "Australia", isCorrect: false },
      ],
      num:88
    },{
      titulo: "¿Qué término se usa para describir la masa de tierra única e ininterrumpida que formaba la Tierra hace 200 millones de años?",
      opciones: [
        { textoRespuesta: "Rodinia", isCorrect: false },
        { textoRespuesta: "Vaalbara", isCorrect: false },
        { textoRespuesta: "Aegnap", isCorrect: false },
        { textoRespuesta: "Pangea", isCorrect:true },
      ],
      num:89
    },{
      titulo: "¿Qué país europeo se encuentra más al oeste?",
      opciones: [
        { textoRespuesta: "Islandia", isCorrect: true },
        { textoRespuesta: "Alemania", isCorrect: false },
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Francia", isCorrect: false },
      ],
      num:90
    },{
      titulo: "¿Qué océano alberga el 75% de los volcanes de la Tierra?",
      opciones: [
        { textoRespuesta: "Océano Ártico", isCorrect: false },
        { textoRespuesta: "Oceano Pacifico", isCorrect: true },
        { textoRespuesta: "Océano Atlántico", isCorrect: false },
        { textoRespuesta: "Océano Índico", isCorrect: false },
      ],
      num:91
    },{
      titulo: "¿Cuál es el idioma oficial de Brasil?",
      opciones: [
        { textoRespuesta: "Ingles", isCorrect: false },
        { textoRespuesta: "Brazilero", isCorrect: false },
        { textoRespuesta: "Portugues", isCorrect: true },
        { textoRespuesta: "Español", isCorrect: false },
      ],
      num:92
    },{
      titulo: "¿Cuál es el punto más alto en Argentina?",
      opciones: [
        { textoRespuesta: "Cerro Mercedario", isCorrect: false },
        { textoRespuesta: "Monte Pissis", isCorrect: false },
        { textoRespuesta: "Cerro Ojos del Salado", isCorrect: false },
        { textoRespuesta: "Aconcagua", isCorrect: true },
      ],
      num:93
    },{
      titulo: "¿Cuál es el punto más profundo en los océanos de la Tierra?",
      opciones: [
        { textoRespuesta: "Fosa de las Marianas", isCorrect: true },
        { textoRespuesta: "Fosa de las Kurileso", isCorrect: false },
        { textoRespuesta: "Fosa de Tonga", isCorrect: false },
        { textoRespuesta: "Fosa de Kermadec", isCorrect: false },
      ],
      num:94
    },
    {
      titulo: "¿En qué país se encuentra Transilvania?",
      opciones: [
        { textoRespuesta: "Bulgaria", isCorrect: false },
        { textoRespuesta: "Rumania", isCorrect: true },
        { textoRespuesta: "Suecia", isCorrect: false },
        { textoRespuesta: "Noruega", isCorrect: false },
      ],
      num:95
    },{
      titulo: "¿Qué canal conecta el mar Mediterráneo y el mar Rojo?",
      opciones: [
        { textoRespuesta: "El canal de Sueze", isCorrect: false },
        { textoRespuesta: "El canal de Suek", isCorrect: false },
        { textoRespuesta: "El canal de Suez", isCorrect: true },
        { textoRespuesta: "El canal de Suezi", isCorrect: false },
      ],
      num:96
    },{
      titulo: "¿Qué país ocupa más de la mitad de la costa occidental de América del Sur?",
      opciones: [
        { textoRespuesta: "Peru", isCorrect: false },
        { textoRespuesta: "Paraguay", isCorrect: false },
        { textoRespuesta: "Argentina", isCorrect: false },
        { textoRespuesta: "Chile", isCorrect: true },
      ],
      num:97
    },{
      titulo: "¿De qué país son los maoríes?",
      opciones: [
        { textoRespuesta: "Nueva Zelanda", isCorrect: true },
        { textoRespuesta: "Australia", isCorrect: false },
        { textoRespuesta: "Irlanda", isCorrect: false },
        { textoRespuesta: "Groenlandia", isCorrect: false },
      ],
      num:98
    },{
      titulo: "¿Cuál es el mar más frío de la Tierra?",
      opciones: [
        { textoRespuesta: "Mar Rojo", isCorrect: false },
        { textoRespuesta: "Mar Blanco", isCorrect: true },
        { textoRespuesta: "Mar Negro", isCorrect: false },
        { textoRespuesta: "Mar Azul", isCorrect: false },
      ],
      num:99
    },{
      titulo: "¿Qué país tiene más costa?",
      opciones: [
        { textoRespuesta: "España", isCorrect: false },
        { textoRespuesta: "Bolivia", isCorrect: false },
        { textoRespuesta: "Canada", isCorrect: true },
        { textoRespuesta: "Australia", isCorrect: false },
      ],
      num:100
    },{
      titulo: "¿Cuál es la montaña más alta de América del Norte?",
      opciones: [
        { textoRespuesta: "Monte Foraker", isCorrect: false },
        { textoRespuesta: "Monte San Elias", isCorrect: false },
        { textoRespuesta: "Monte Logan", isCorrect: false },
        { textoRespuesta: "El Denali", isCorrect: true },
      ],
      num:101
    },{
      titulo: "¿En qué regiones del mundo están el 99% de los glaciares del mundo?",
      opciones: [
        { textoRespuesta: "En la Antártida y en el Ártico", isCorrect: true },
        { textoRespuesta: "Europa y America", isCorrect: false },
        { textoRespuesta: "Europa Y africa", isCorrect: false },
        { textoRespuesta: "En la Antártida y Europa", isCorrect: false },
      ],
      num:102
    },{
      titulo: "¿Cataluña es una región de qué país?",
      opciones: [
        { textoRespuesta: "Francia", isCorrect: false },
        { textoRespuesta: "España", isCorrect: true },
        { textoRespuesta: "Italia", isCorrect: false },
        { textoRespuesta: "Alemania", isCorrect: false },
      ],
      num:103
    },{
      titulo: "¿Qué nombre de país se origina a partir de una línea de latitud?",
      opciones: [
        { textoRespuesta: "Peru", isCorrect: false },
        { textoRespuesta: "Paraguay", isCorrect: false },
        { textoRespuesta: "Ecuador", isCorrect: true },
        { textoRespuesta: "Chile", isCorrect: false },
      ],
      num:104
    },{
      titulo: "¿Dónde se encuentra el lago Texcoco?",
      opciones: [
        { textoRespuesta: "Argentina", isCorrect: false },
        { textoRespuesta: "Paraguay", isCorrect: false },
        { textoRespuesta: "Chile", isCorrect: false },
        { textoRespuesta: "Mexico", isCorrect: true },
      ],
      num:105
    },{
      titulo: "¿Qué océano rodea Hawai?",
      opciones: [
        { textoRespuesta: "Océano Pacífico", isCorrect: true },
        { textoRespuesta: "Océano Atlántico", isCorrect: false },
        { textoRespuesta: "Océano Índico", isCorrect: false },
        { textoRespuesta: "Océano Antártico", isCorrect: false },
      ],
      num:106
    },{
      titulo: "¿Dónde se encuentra el estrecho de Magallanes?",
      opciones: [
        { textoRespuesta: "Peru", isCorrect: false },
        { textoRespuesta: "Paraguay", isCorrect: false },
        { textoRespuesta: "Argentina", isCorrect: false },
        { textoRespuesta: "Chile", isCorrect: true },
      ],
      num:107
    },{
      titulo: "¿Qué país se encuentra en los Pirineos entre España y Francia?",
      opciones: [
        { textoRespuesta: "Peru", isCorrect: false },
        { textoRespuesta: "Moldavia", isCorrect: false },
        { textoRespuesta: "Andorra", isCorrect: true},
        { textoRespuesta: "Marruecos", isCorrect: false },
      ],
      num:108
    },{
      titulo: "¿Cuáles son las cataratas más altas del mundo?",
      opciones: [
        { textoRespuesta: "Cataratas del Niágara", isCorrect: false },
        { textoRespuesta: "Cataratas de Iguazú", isCorrect: false },
        { textoRespuesta: "Cataratas de Tugela", isCorrect: false },
        { textoRespuesta: "El salto del ángel", isCorrect: true },
      ],
      num:109
    },{
      titulo: "¿En qué país se encuentra el Monte Thor?",
      opciones: [
        { textoRespuesta: "Canada", isCorrect: true },
        { textoRespuesta: "Noruega", isCorrect: false },
        { textoRespuesta: "Finlandia", isCorrect: false },
        { textoRespuesta: "Dinamarca", isCorrect: false },
      ],
      num:110
    },{
      titulo: "¿Qué países comparten la frontera más larga del mundo?",
      opciones: [
        { textoRespuesta: "Argentina y Brasil", isCorrect: false },
        { textoRespuesta: "Estados Unidos y Canadá", isCorrect: true },
        { textoRespuesta: "Rusia y España", isCorrect: false },
        { textoRespuesta: "Ninguna de las anteriores", isCorrect:false },
      ],
      num:111
    },{
      titulo: "¿Cuál es el desierto más pequeño del mundo?",
      opciones: [
        { textoRespuesta: "Desiertos de Australia", isCorrect: false },
        { textoRespuesta: "Desierto de Kalahari", isCorrect: false },
        { textoRespuesta: "Desierto de Arabia", isCorrect: false },
        { textoRespuesta: "Desierto de Carcross", isCorrect: true },
      ],
      num:112
    },
  ];
  
  export default preguntas;