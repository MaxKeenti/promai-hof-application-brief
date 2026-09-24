/**
 * Guías docentes de la UPV/EHU transcritas de las fichas oficiales del curso
 * 2026/27 (una por asignatura de `materias.ts`), para que el documento se lea
 * completo sin abrir ningún enlace.
 *
 * Contenido literal de la universidad: si hay que actualizarlo, se vuelve a
 * copiar de la ficha oficial, no se reescribe.
 */

export type BloqueContenido = { titulo: string; texto: string[] };

export type GuiaDocente = {
	codigo: string;
	titulacion: string;
	cursoAcademico: string;
	curso: string;
	horas: { tipo: string; presencial: string; noPresencial: string }[];
	descripcion: string[];
	competencias: string[];
	resultados: string[];
	contenidos: BloqueContenido[];
	metodologia: string[];
	evaluacion: { sistemas: string[]; pesos: { concepto: string; porcentaje: string }[] };
	bibliografiaBasica: string[];
	profesorado: string[];
};

/** Indexadas por código de asignatura. */
export const guiasDocentes: Record<string, GuiaDocente> = {
	// Gestión de Proyectos
	27684: {
		codigo: '27684',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '45', noPresencial: '67.5' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '22.5' }
		],
		descripcion: [
			'La asignatura Gestión de Proyectos permite al estudiantado comprender y aplicar los principios y herramientas fundamentales para planificar, organizar y dirigir proyectos tecnológicos en entornos profesionales.',
			'Está estrechamente vinculada con asignaturas previas como Programación Básica, Programación Modular y Orientada a Objetos, e Ingeniería del Software, ya que se apoya en los conocimientos técnicos adquiridos en ellas para abordar la coordinación y gestión de equipos, recursos, plazos y presupuestos en el desarrollo de proyectos software.',
			'Además, Gestión de Proyectos proporciona al estudiantado conocimientos y recursos valiosos que serán especialmente útiles en la etapa final de la titulación y durante la realización del Trabajo Fin de Grado.',
			'Esta asignatura contribuye a la formación de profesionales capaces de liderar proyectos informáticos, gestionar equipos multidisciplinares y garantizar la calidad y viabilidad de las soluciones tecnológicas. Entre las salidas profesionales donde más se valoran las competencias adquiridas destacan la dirección de proyectos informáticos (Project Manager), la consultoría tecnológica y los puestos de responsabilidad en el sector tecnológico.'
		],
		competencias: [
			'M02CM01: Capacidad para diseñar, desarrollar, seleccionar y evaluar aplicaciones y sistemas informáticos, asegurando su fiabilidad, seguridad y calidad, conforme a principios éticos y a la legislación y normativa vigente.',
			'M02CM02: Capacidad para planificar, concebir, desplegar y dirigir proyectos, servicios y sistemas informáticos en todos los ámbitos, liderando su puesta en marcha y su mejora continua y valorando su impacto económico y social.',
			'M02CM03: Capacidad para comprender la importancia de la negociación, los hábitos de trabajo efectivos, el liderazgo y las habilidades de comunicación en todos los entornos de desarrollo de software.',
			'M02CM04: Capacidad para elaborar el pliego de condiciones técnicas de una instalación informática que cumpla los estándares y normativas vigentes.',
			'M02CM18: Conocimiento de la normativa y la regulación de la informática en los ámbitos nacional, europeo e internacional.'
		],
		resultados: [
			'1. Comprender y explicar los fundamentos, metodologías y fases de la gestión de proyectos informáticos, identificando las principales normas, estándares y buenas prácticas del sector.',
			'2. Planificar un proyecto software, definiendo objetivos, alcance, recursos, cronograma y presupuesto, y seleccionando las herramientas y técnicas más adecuadas para cada fase.',
			'3. Aplicar técnicas de gestión de equipos y liderazgo, promoviendo la colaboración, la comunicación efectiva y la resolución de conflictos en entornos multidisciplinares.',
			'4. Utilizar herramientas profesionales de gestión de proyectos (como diagramas de Gantt, software de planificación y seguimiento, etc.) para monitorizar el avance y controlar los riesgos asociados al desarrollo de proyectos informáticos.',
			'5. Analizar y evaluar la viabilidad, calidad y resultados de un proyecto, proponiendo medidas correctivas y de mejora continua cuando sea necesario.',
			'6. Integrar los conocimientos técnicos adquiridos en otras asignaturas para abordar de manera global la gestión de proyectos en el ámbito de la ingeniería informática.',
			'7. Elaborar y presentar documentación técnica y de gestión relacionada con un proyecto, adaptando el nivel de detalle y el lenguaje al público destinatario.'
		],
		contenidos: [
			{
				titulo: 'FUNDAMENTOS, COMPETENCIAS PROFESIONALES Y NORMATIVA DE LA GESTIÓN DE PROYECTOS',
				texto: [
					'Introducción a los conceptos básicos, ciclo de vida, metodologías y estándares de la gestión de proyectos, así como a la normativa y regulación aplicable a nivel autonómico, nacional y europeo. Incluye el desarrollo de competencias profesionales individuales, como la calidad personal, la productividad y las habilidades de comunicación y presentación.'
				]
			},
			{
				titulo: 'INICIO Y DEFINICIÓN DEL PROYECTO, TRABAJO EN EQUIPO Y HERRAMIENTAS',
				texto: [
					'Procesos para la puesta en marcha de un proyecto: definición de objetivos, alcance, identificación de participantes clave y elaboración de la documentación inicial, considerando los requisitos legales y normativos pertinentes. Se abordan también el trabajo en equipo, la comunicación, la organización y gestión de reuniones y las dinámicas de grupo. Así mismo, también se presentan las principales herramientas tecnológicas en el campo de la gestión de proyectos.'
				]
			},
			{
				titulo:
					'PLANIFICACIÓN, PARTICULARIDADES DE LOS PROYECTOS INFORMÁTICOS Y PLIEGOS DE CONDICIONES TÉCNICAS',
				texto: [
					'Técnicas y herramientas para la planificación eficaz de proyectos, incluyendo la organización de tareas, asignación de recursos, estimación de tiempos y costes, definición de estándares de calidad y elaboración de pliegos de condiciones técnicas conforme a la normativa vigente. Se tratan las particularidades de los proyectos informáticos y la elaboración del Documento de Objetivos de Proyecto.'
				]
			},
			{
				titulo: 'EJECUCIÓN, TRABAJO EN EQUIPO, SEGUIMIENTO, RIESGOS Y CONTROL',
				texto: [
					'Gestión de la ejecución del proyecto, seguimiento del avance, control de desviaciones y cambios, identificación y gestión de riesgos, así como cumplimiento de los estándares y obligaciones legales y contractuales. Se profundiza en la gestión y dinamización del equipo de trabajo a lo largo de todo el proyecto.'
				]
			},
			{
				titulo: 'CIERRE Y DOCUMENTACIÓN FINAL',
				texto: [
					'Procesos de cierre y evaluación del proyecto, elaboración de la documentación final y análisis de lecciones aprendidas.'
				]
			},
			{
				titulo: 'TENDENCIAS E INNOVACIÓN EN LA GESTIÓN DE PROYECTOS',
				texto: [
					'Se abordan las principales tendencias actuales en la gestión de proyectos, con especial atención a las metodologías ágiles (Scrum, Kanban, Lean, etc.), la inteligencia artificial aplicada a la gestión de proyectos y otras innovaciones relevantes en el sector.'
				]
			}
		],
		metodologia: [
			'La asignatura integra metodologías activas orientadas al desarrollo de competencias profesionales y transversales en gestión de proyectos, combinando el Aprendizaje Basado en Proyectos (ABP), marcos de trabajo ágiles y el uso crítico de herramientas de Inteligencia Artificial Generativa.',
			'Las clases magistrales se centran en introducir y contextualizar los conceptos fundamentales de gestión de proyectos, gestión de riesgos y metodologías ágiles. En estas sesiones se estructura el marco teórico necesario para comprender las actividades prácticas, fomentando la participación activa mediante preguntas, breves análisis de casos y discusión guiada.',
			'Las clases de grupo de aula se orientan al trabajo activo y experiencial mediante dos proyectos interrelacionados: un proyecto individual de gestión de riesgos aplicados al propio desempeño académico del estudiantado y un proyecto grupal de planificación y gestión ágil de un desarrollo de software apoyado en IA Generativa. En ellas se trabaja con metodologías ágiles (principalmente Scrum), herramientas profesionales de gestión de proyectos y actividades de reflexión estructurada, promoviendo la planificación, el trabajo en equipo, la comunicación efectiva, el pensamiento crítico y la toma de decisiones bajo incertidumbre.',
			'El trabajo autónomo del estudiantado se destina a la identificación, análisis y seguimiento de riesgos individuales, la preparación de entregables parciales de los proyectos, y la elaboración de informes de reflexión sobre las decisiones tomadas y las lecciones aprendidas. Este trabajo refuerza la autonomía, la autorregulación y la capacidad de conectar la teoría con situaciones reales de la ingeniería informática.',
			'A lo largo de la asignatura, el profesorado actúa como guía y facilitador del aprendizaje, diseñando y coordinando las actividades, proporcionando retroalimentación frecuente y ayudando al estudiantado a interpretar los datos de su propio desempeño para mejorar de forma continua su manera de planificar, gestionar y evaluar proyectos.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '45' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '45'
				},
				{ concepto: 'Portfolio', porcentaje: '10' }
			]
		},
		bibliografiaBasica: [
			'[1] P. M. I. Project Management Institute, Guía de los fundamentos para la dirección de proyectos: guía del PMBOK® y el estándar para la dirección de proyectos. en PMBOK® Guide. Chicago: Project Management Institute, 2021.',
			"[2] G. M. Horine, Project Management: absolute beginner's guide, Fifth edition. en Absolute beginner's guide. Indianapolis, IN: Que, 2022."
		],
		profesorado: [
			'ARMENDARIZ LEUNDA, ANA JESUS',
			'IRADIER GIL, ENEKO',
			'LARRUCEA URIARTE, XABIER',
			'VILLAMAÑE GIRONES, MIKEL'
		]
	},
	// Software de Gestión de Empresa
	27705: {
		codigo: '27705',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '45' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '22.5' },
			{ tipo: 'P. Ordenador', presencial: '15', noPresencial: '22.5' }
		],
		descripcion: [
			'En el entorno empresarial actual, caracterizado por una creciente digitalización y competitividad, las organizaciones demandan profesionales capaces de entender tanto las necesidades del negocio como las posibilidades tecnológicas que pueden dar respuesta a dichas necesidades. Esta asignatura nace precisamente para formar profesionales con esta visión integral, capaces de trasladar requerimientos organizacionales a soluciones software efectivas y alineadas con los objetivos estratégicos de la empresa.',
			'La asignatura "Software de Gestión de Empresa" representa un punto de convergencia fundamental entre dos áreas de conocimiento complementarias: la organización de empresas y la ingeniería del software. Esta materia se ha diseñado como un puente que permite a las y los estudiantes integrar y aplicar los conocimientos teóricos y prácticos adquiridos previamente en ambos campos, con el objetivo de comprender, analizar y desarrollar soluciones software que respondan efectivamente a las necesidades reales de gestión empresarial.',
			'Esta asignatura resulta especialmente valiosa para aquellos y aquellas estudiantes que aspiran a desempeñar roles como analistas de negocio, consultores/as tecnológicos, arquitectas/os de soluciones empresariales, gestores de proyectos de transformación digital o desarrolladoras/es de software de gestión empresarial.',
			'A través de este enfoque integrador, las y los estudiantes no solo adquirirán conocimientos técnicos, sino también una comprensión profunda de cómo el software puede transformar y optimizar la gestión empresarial, preparándolos y preparándolas así para los desafíos del mercado laboral contemporáneo.'
		],
		competencias: [
			'Las competencias de módulo correspondientes a la asignatura son las siguientes:',
			'- M03SI1: Capacidad para integrar soluciones de tecnologías de la información y comunicaciones y procesos empresariales para satisfacer las necesidades de información de las organizaciones, permitiéndoles alcanzar sus objetivos de forma efectiva y eficiente, dándoles así ventajas competitivas.',
			'- M03SI2: Capacidad para determinar los requisitos de los sistemas de información y comunicación de una organización atendiendo a aspectos de seguridad y cumplimiento de la normativa y la legislación vigente.',
			'- M03SI3: Capacidad para participar activamente en la especificación, diseño, implementación y mantenimiento de los sistemas de información y comunicación.',
			'- M03SI5: Capacidad para comprender y aplicar los principios de la evaluación de riesgos y aplicarlos correctamente en la elaboración y ejecución de planes de actuación.',
			'Estas competencias de módulo se despliegan en las competencias de la asignatura que se indican a continuación:',
			'- C1 Conocer los aspectos fundamentales que constituyen los sistemas de información en organizaciones empresariales típicas y sus interrelaciones.',
			'- C2 Conocer el papel que juegan las soluciones software integradas en el soporte de los procesos de la organización, así como su incidencia en la apertura de nuevos modelos de negocio (e business).',
			'- C3 Analizar las características básicas de las soluciones ERP (planificación y gestión de recursos).',
			'- C4 Analizar las características básicas de las soluciones CRM (relaciones con el cliente).',
			'- C5 Analizar los aspectos básicos de los módulos financiero, contable, compras, ventas y recursos humanos.',
			'- C6 Analizar las características básicas de los sistemas de información y apoyo a la toma de decisiones.',
			'- C7 Analizar los pasos fundamentales para la implantación y mantenimiento de soluciones ERP y CRM.',
			'- C8 Conocer las principales soluciones que ofrece el mercado, así como sus principales características de funcionalidad y coste.'
		],
		resultados: [],
		contenidos: [
			{
				titulo: '',
				texto: [
					'Tema 1.- Los sistemas de información en las organizaciones. Se profundiza sobre el papel estratégico que tienen las tecnologías de la información y de las comunicaciones en el desarrollo de ventajas competitivas para las empresas. Se analizan los distintos tipos de organización, los flujos de información que se producen, la pirámide informacional y las estrategias para que la implantación de un SI permita a la organización alcanzar sus objetivos.',
					'Tema 2.- Soluciones Integradas para la Gestión de Recursos. Se presentan sistemas integrados que relacionan las informaciones generadas por las diversas aplicaciones funcionales de la empresa y que permiten mejorar la gestión de recursos así como los procesos de toma de decisiones.  Se presentan herramientas enfocadas a la automatización de los procesos financieros, comerciales y de operaciones de la empresa así como otras enfocadas a la optimización de la cadena de suministro.  (ERP,MIS,DSS, EIS,SCM).',
					'Tema 3.- Soluciones para la Gestión de las Relaciones con el Cliente. Se presentan herramientas para el  soporte a los procesos relacionados con el cliente de principio a fin, así como obtener conocimiento acerca de los y las clientes, marketing y ventas.',
					'Tema 4.- Gestión de la cadena de suministro. Se define el concepto y etapas de la cadena de suministro de la empresa extendida. Se analizan los objetivos y beneficios de la gestión de la cadena de suministro mediante un sistema de información, qué componentes y funcionalidades la componen y cómo se integra con el ERP general de una empresa.',
					'Tema 5.- Gestión de los recursos humanos. Se analizan las funcionalidades y objetivos que integran habitualmente los módulos de gestión de talento humano y su capacidad para contribuir a la consecución y mantenimiento de ventajas competitivas en la empresa.',
					'Tema 6.- Comercio electrónico & e-business:El m-business y los negocios asociados que utilizan las tecnologías de movilidad como palanca para su desarrollo, así como el acceso a las nuevas tecnologías de movilidad son ya una realidad tecnológica adoptada por la sociedad, generando nuevos modelos de negocio y nuevas oportunidades para aquellasorganizaciones que sepan explotarlos. Se presentan plataformas de desarrollo de comercio móvil y electrónico así como los aspectos intrínsecos del negocio de movilidad.',
					'Tema 7.- Business Intelligence. Se presentan herramientas enfocadas a tener una perspectiva completa de su empresa gracias a las vistas globales de la información y métricas clave y que permiten a las usuarias y los usuarios interactuar con representaciones visuales sofisticadas de los procesos y el rendimiento así como realizar análisis hipotéticos con sus cuadros de mando para obtener nuevas perspectivas y tomar decisiones fundamentadas.'
				]
			}
		],
		metodologia: [
			'Los contenidos de la asignatura se desarrollan a través de clases magistrales, práctica de aula y prácticas de ordenador.',
			'Los contenidos teóricos se trabajan en las sesiones de clase magistral, en las que se retoman contenidos anteriores relacionados con la gestión de empresa y para aplicarlos en el área más técnica del diseño de sistemas de información empresarial.',
			'Los contenidos teóricos se complementan en las sesiones de práctica de aula con el estudio de casos reales de diseño e implantación de sistemas de información, analizando tanto casos de éxito como de fracaso. También se realizarán ejercicios cortos de análisis de requisitos y diseño de sistemas de información sencillos.',
			'Todos los contenidos teóricos son posteriormente aplicados en las sesiones de prácticas de laboratorio con el objetivo de diseñar e implementar un sistema de información completo para un caso empresarial completo. Se trata de un proyecto en grupo realizado sobre una herramienta de gestión de empresa comercial de código abierto (Odoo). Cada grupo recibirá la asignación de un sector industrial y deberá diseñar una organización empresarial ficticia para la cual deberá crear e implementar un sistema de información completo que abarque todos los contenidos teóricos y prácticos. Este trabajo requerirá la investigación por parte del equipo de trabajo del sector empresarial concreto asignado, así como sus principales áreas de negocio que desarrolla para poder definir el sistema de información que mejor se adapte a sus necesidades. Los y las integrantes del grupo asumirán distintos roles en el sistema de información creado para generar los flujos de información necesarios para el desarrollo de la actividad económica de su organización.',
			'El conjunto de estas actividades permite la correcta adquisición de las competencias de la asignatura.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '40' },
				{ concepto: 'Defensa oral', porcentaje: '10' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '50'
				}
			]
		},
		bibliografiaBasica: [
			'"Management information systems, global edition 16th edition". Kenneth C. Laudon, Jane P. Laudon., Pearson Education (2019)',
			'"Sistema de gestión de información empresarial (EIMS)", Asou Aminnezhad, Pooya Khanmohamadi Hezaveh, Ediciones Conocimiento (2025)',
			'"Introduction to information systems: enabling and transforming business¿, R. Kelly Rainer, Casey G. Cegielski., John Wiley & Sons, Hoboken (2012)',
			'" E-commerce 2023-2024: business. technology. society., Global Edition, 18th Edition". Ken Laudon; Carol Traver. Pearson Education(2023)'
		],
		profesorado: ['BLANCO JAUREGUI, BEGOÑA']
	},
	// Sistemas de Apoyo a la Decisión
	27704: {
		codigo: '27704',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '45', noPresencial: '67.5' },
			{ tipo: 'P. Ordenador', presencial: '15', noPresencial: '22.5' }
		],
		descripcion: [
			'Esta asignatura se enmarca dentro del ámbito de Sistemas de Información en el submódulo Organización y Sistemas de Gestión. Aborda técnicas de manejo de datos para inferir de ellos cómo se han tomado decisiones y extenderlo a nuevas situaciones, modelado de incertidumbre y riesgos en la toma de decisiones, el ámbito de aplicación denominado como Business Intelligence y sus aplicaciones en el desarrollo de profesional. La asignatura tiene una fuerte componente matemática y requiere de destreza en implementación.',
			'La asignatura tiene una fuerte componente matemática y requiere de destreza en implementación. Se recomienda haber superado los cursos:',
			'- Análisis Matemático',
			'- Cálculo',
			'- Programación Modular y Orientación a Objetos',
			'- Estructuras de Datos y Algoritmos',
			'- Métodos Estadísticos de la Ingeniería',
			'- Investigación Operativa',
			'Temas afines:',
			'- computación',
			'- estadística e investigación operativa',
			'- minería de datos',
			'- inteligencia artificial',
			'- aprendizaje automático'
		],
		competencias: [
			'Las competencias específicas incluyen ser capaz de los siguientes aspectos:',
			'C1: Comprender los fundamentos de la ayuda a la decisión.',
			'C2: Aplicar diferentes estrategias en la toma de decisiones',
			'C3: Discutir la naturaleza de las distintas formas de aproximarse al problema de la toma de decisiones en contextos y aplicaciones diversas.',
			'M03CM01',
			'Capacidad para integrar soluciones de tecnologías de la información y comunicaciones y procesos empresariales para satisfacer las necesidades de información de las organizaciones, permitiéndoles alcanzar sus objetivos de forma efectiva y eficiente, dándoles así ventajas competitivas.',
			'M03CM02',
			'Capacidad para determinar los requisitos de los sistemas de información y comunicación de una organización atendiendo a aspectos de seguridad y cumplimiento de la normativa y la legislación vigente.',
			'M03CM03',
			'Capacidad para participar activamente en la especificación, diseño, implementación y mantenimiento de los sistemas de información y comunicación',
			'M03CM04',
			'Capacidad para comprender y aplicar los principios y prácticas de las organizaciones, de forma que puedan ejercer como enlace entre las comunidades técnica y de gestión de una organización y participar activamente en la formación de los usuarios.',
			'M03CM05',
			'Capacidad para comprender y aplicar los principios de la evaluación de riesgos y aplicarlos correctamente en la elaboración y ejecución de planes de actuación.',
			'M03CM06',
			'Capacidad para comprender y aplicar los principios y las técnicas de gestión de la calidad y de la innovación tecnológica en las organizaciones.'
		],
		resultados: [],
		contenidos: [
			{
				titulo: '',
				texto: [
					'1. Introducción a los sistemas de apoyo a la decisión',
					'2. Clasificación supervisada',
					'3. Algoritmos de inferencia',
					'4. Aplicaciones y casos de uso: e.g. "Business Intelligence". Decisión clínica. Retos abiertos en investigación. etc'
				]
			}
		],
		metodologia: [
			'La asignatura tiene caracter presencial.',
			'Clases MAGISTRALES (M): se trabajarán fundamentos teóricos y ejercicios a modo de ejemplo que posteriormente se emplearán en los ejercicios prácticos. Se fomenta la actitud pro-activa, discusión y pensamiento crítico.',
			'Grupos de ORDENADOR (GO) se analizará cómo se implementan en sistemas reales las técnicas estudiadas durante las clases magistrales (M) con herramienta actuales. Se fomenta el trabajo autónomo para resolver los distintos objetivos propuestos.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '50' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '50' }
			]
		},
		bibliografiaBasica: [
			'- Ian Witten, Eibe Frank, Mark. Hall Data Mining: Practical Machine Learning Tools and Techniques. Morgan Kaufmann, 2011 (4th Ed. 2017)',
			'- E. Alpaydin. Introduction to Machine Learning. MIT Press, 2009 ó 2012',
			'- Business Intelligence, Analytics, And Data Science: A Managerial Perspective, 4/E Editor: PEARSON INDIA (2019) ISBN-10: 9353067022'
		],
		profesorado: ['ATUTXA SALAZAR, AITZIBER', 'PEREZ RAMIREZ, ALICIA']
	},
	// Investigación Operativa
	26023: {
		codigo: '26023',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '2',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '30' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '30' },
			{ tipo: 'P. Ordenador', presencial: '15', noPresencial: '30' }
		],
		descripcion: [
			'Investigación Operativa (IO) es una asignatura que pertenece al módulo de Formación Básica de segundo curso del Grado en Ingeniería Informática de Gestión y Sistemas de Información. Es una de las seis asignaturas de la titulación relacionadas con el estudio de conceptos matemáticos. Se imparte en el segundo cuatrimestre y es de carácter obligatorio.',
			'La Investigación Operativa abarca un conjunto de técnicas de tipo cuantitativo que sirven para ayudar a las organizaciones en la toma de decisiones. El componente central de la Investigación Operativa es la construcción de modelos de los sistemas reales.',
			'Entre los modelos deterministas que se abordan en la asignatura, destacan los modelos lineales generales, para los que existen algoritmos que buscan la solución óptima (algoritmo del Simplex). Otros modelos lineales particulares son los de programación entera (algoritmo de ramificación y acotamiento), el modelo de transporte (algoritmo del transporte), problema de asignación, etc.',
			'Se estudian, así mismo, otros tópicos de la Investigación Operativa como son la Teoría de Pronósticos, Teoría de Colas y Simulación de Montecarlo.',
			'Teniendo en cuenta el papel que juegan distintos software informáticos en la empresa de cara al análisis de datos y la toma de decisiones, se adopta también en la asignatura un punto de vista práctico mediante la utilización de programas de resolución de problemas de IO.',
			'Para desarrollar la asignatura se debe dominar las operaciones matemáticas básicas, el cálculo matricial, saber resolver ecuaciones e inecuaciones lineales utilizando los métodos adecuados, tener un conocimiento básico de cálculo diferencial y nociones básicas de programación.'
		],
		competencias: [
			'M01CM01: Capacidad para la resolución de los problemas matemáticos que puedan plantarse en la ingeniería. Aptitud para aplicar los conocimientos sobre: algebra, cálculo diferencial e integral, métodos numéricos; estadística y optimización',
			'M01CM03: Capacidad para comprender y dominar los conceptos básicos de matemática discreta, lógica, algorítmica y complejidad computacional, y su aplicación para la resolución de problemas propios de la ingeniería.',
			'M01CM04: Conocimiento de los fundamentos del uso y programación de los computadores, los sistemas operativos, las bases de datos y, en general, los programas informáticos con aplicación en ingeniería'
		],
		resultados: [
			'RA1-Identificar los problemas prácticos donde aplicar la metodología de la Investigación Operativa.',
			'RA2-Dominar la terminología propia de la Investigación Operativa.',
			'RA3-Saber plantear un problema de IO partiendo de un enunciado en términos generales.',
			'RA4-Conocer los métodos de resolución de los problemas de IO más usados.',
			'RA5-Identificar el método o algoritmo más adecuado para la resolución de los problemas, sabiendo solventar las dificultades que se presenten.',
			'RA6-Emplear coherentemente el conocimiento procedimental en la resolución de problemas.',
			'RA7-Realizar análisis cualitativo y cuantitativo, emitir hipótesis, elaborar estrategias alternativas y analizar resultados.',
			'RA8-Utilizar herramientas informáticas para la resolución de problemas de IO.',
			'RA9-Interpretar la optimalidad de la solución, frente a variaciones continuas de los datos, mediante el análisis de sensibilidad con programas informáticos.',
			'RA10-Participar de forma constructiva y comprometida en la dinámica del equipo.',
			'RA11- Comunicar correctamente las ideas y conocimientos de IO usando el lenguaje oral, escrito, gráfico y matemático.',
			'RA12-Realizar una búsqueda eficiente de información con la correspondiente referencia bibliográfica.'
		],
		contenidos: [
			{
				titulo: 'TEMA 1: INTRODUCCIÓN A LA INVESTIGACIÓN OPERATIVA. MODELOS',
				texto: [
					'Se presenta la Investigación Operativa como un conjunto amplio de técnicas que sirven para ayudar a una organización en la toma de decisiones; para ello se introduce el concepto de modelo simbólico. Se introducen el modelo lineal y no lineal, ya que las funciones que intervienen en muchos problemas sobre toma de decisiones son no lineales.'
				]
			},
			{
				titulo: 'TEMA 2: PROGRAMACIÓN LINEAL Y EL MÉTODO SIMPLEX',
				texto: [
					'Se presenta la programación matemática como un procedimiento analítico para determinar la asignación óptima de recursos limitados cuando existen múltiples alternativas para utilizarlos y se da a conocer el método de resolución de problemas de PL más usado, el algoritmo del Simplex y otros derivados del mismo.'
				]
			},
			{
				titulo: 'TEMA 3: DUALIDAD',
				texto: [
					'Se introduce la dualidad en la programación lineal y se establecen los problemas duales en forma canónica, estándar y mixta. Se presenta el algoritmo Simplex Dual, cuyas aplicaciones principales vendrán dadas en los temas posteriores.'
				]
			},
			{
				titulo: 'TEMA 4: ANÁLISIS DE SENSIBILIDAD',
				texto: [
					'La adición de restricciones a un problema o la variación de parámetros es de gran utilidad en el análisis post-óptimo de los problemas de IO. En este tema se mostrará la influencia de los cambios realizados en la formulación de un problema en la solución óptima del mismo.'
				]
			},
			{
				titulo: 'TEMA 5: INTRODUCCIÓN A LA PROGRAMACIÓN LINEAL ENTERA',
				texto: [
					'La relajación de las condiciones de integralidad no conduce a la obtención de resultados satisfactorios, lo que remarca la trascendencia de la programación lineal entera y de los distintos métodos de resolución. Además, se hará una introducción al planteamiento y resolución de problemas en variables binarias'
				]
			},
			{
				titulo: 'TEMA 6: PROBLEMAS DE TRANSPORTE Y ASIGNACIÓN',
				texto: [
					'Debido a la gran importancia de los problemas de transporte y asignación en la industria, se estudian estos problemas en detalle junto con sus respectivos algoritmos de resolución usuales (algoritmo de transporte y algoritmo húngaro).'
				]
			},
			{
				titulo: 'TEMA 7: PROBLEMAS DE OPTIMIZACIÓN EN REDES',
				texto: [
					'Los problemas de optimización en grafos constituyen una de las aplicaciones más importantes de problemas de optimización lineal. Tras un breve repaso de los conceptos más importantes sobre grafos, en este tema se tratarán los problemas más fundamentales de optimización en redes: la obtención del recorrido de mínima distancia en un grafo, el árbol recubridor mínimo, el problema del flujo máximo etc. Por último, se dará una breve introducción a la aplicación del método simplex en grafos.'
				]
			},
			{
				titulo: 'TEMA 8: ASPECTOS DE SIMULACIÓN Y PRONÓSTICO EN INVESTIGACIÓN OPERATIVA',
				texto: [
					'Se tratarán tres aspectos fundamentales de simulación y predicción en IO: la teoría de colas, la aplicación de métodos de Montecarlo y las cadenas de Markov.',
					'En el apartado de teoría de colas se estudian las principales colas de Poisson, para luego ser utilizadas en el contexto de la optimización desde el punto de vista económico de los sistemas de espera.',
					'Respecto a la simulación de Montecarlo, se estudiará cómo las simulaciones pueden modelar posibles resultados y ayudar a la toma de decisiones. Se estudiará el tema de forma introductoria, empezando por el estudio de los métodos de generación de números aleatorios y finalizando con su aplicación en diversos problemas concretos.',
					'Por último, se mostrará la teoría fundamental sobre cadenas de Markov, junto con casos de uso prácticos. Además, mostrará su aplicabilidad para la simulación de colas u otros ejemplos didácticos',
					'como el algoritmo PageRank.'
				]
			}
		],
		metodologia: [
			'La asignatura Investigación Operativa se corresponde con 6 créditos ECTS, de los cuales 1,5 son teóricos y se desarrollan en las clases magistrales. El resto son prácticos y se reparten equitativamente entre las clases magistrales, las prácticas de aula y las prácticas de ordenador.',
			'En las sesiones magistrales se desarrollarán los conceptos teóricos clave a partir de sencillos ejemplos de referencia haciendo uso del aprendizaje cooperativo para implicar la participación del estudiante. La planificación y la resolución de situaciones más elaboradas se trabajarán en las Prácticas de Aula y en las Prácticas de Ordenador mediante el Aprendizaje Basado en Problemas. Además se realizarán Trabajos Cooperativos en Equipo (TCE), formándose para ello pequeños grupos de trabajo, en los que el alumnado deberá trabajar conjuntamente de forma coordinada.',
			'En el aula de ordenadores se utilizarán programas informáticos para la resolución de los principales problemas que se presentan en la Investigación Operativa de una forma rápida y cómoda.',
			'Como apoyo a la docencia presencial se utiliza la plataforma eGela. En ella el alumnado dispondrá de los recursos necesarios para el correcto seguimiento de la asignatura.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '60' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '15' },
				{ concepto: 'Portfolio', porcentaje: '10' },
				{ concepto: 'Prueba de ordenador', porcentaje: '15' }
			]
		},
		bibliografiaBasica: [
			'Hillier F.S., Lieberman G.J. (2021): "Introduction to Operations Research". 11th ed. McGraw-Hill.',
			'Winston W.L. (2004): "Opeartions Research. Applications and Algorithms". 4th ed. Thomson Learning.',
			'Bazaraa M.S., Jarvis J.J., Sherali, H.D. (2010): "Linear Programming and Network Flows". 4th ed. Wiley',
			'García M.B, Lecubarri, I., Martín L., Soto J.C., Unzueta A. (2017): "Ikerkuntza Operatiboari begirada praktikoa ematen". Bilbo: Ed. Udako Euskal Unibertsitatea'
		],
		profesorado: ['ALVAREZ ARAMBERRI, JULEN', 'ALVAREZ URQUIOLA, MIKEL', 'FERNANDEZ URIA, SARA']
	},
	// Seguridad y Administración de Sistemas
	28627: {
		codigo: '28627',
		titulacion: 'Grado en Ingeniería en Tecnología de Telecomunicación (Plan nuevo)',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '45' },
			{ tipo: 'P. Laboratorio', presencial: '30', noPresencial: '45' }
		],
		descripcion: [
			'La asignatura "Seguridad y Administración de Sistemas" es una de las asignaturas obligatorias del 3º curso del Grado en Ingeniería en Tecnología de Telecomunicación. Se sitúa dentro del módulo denominado "Tecnología Específica en Telemática" y es una de las asignaturas que da acceso a la Mención Telemática.',
			'El objetivo de esta asignatura es abordar de forma amplia los aspectos relacionados con la seguridad y la administración de sistemas en organizaciones que utilizan redes de datos e información digital. La asignatura aborda desde conceptos básicos de criptografía hasta aspectos relacionados con la gestión de la seguridad en las organizaciones. De este modo la/el estudiante adquirirá las competencias necesarias para gestionar la seguridad de una organización y los aspectos de administración de sistemas más relacionados con ésta.',
			'Por lo tanto, esta asignatura tiene una relación directa con aquellas otras asignaturas de la titulación en las que se profundiza en aspectos concretos asociados con las redes de datos y el procesamiento de la información digital. Concretamente, esta asignatura se apoya en los conocimientos adquiridos sobre el funcionamiento de las redes de telecomunicación en las asignaturas de "Redes y Servicios de Telecomunicación I" de 1º de grado y en su continuación, "Redes y Servicios de Telecomunicación II" de 2º de grado. Asimismo, esta asignatura también requiere un conocimiento avanzado del funcionamiento de los sistemas operativos de los sistemas de información que procesan y transmiten la información digital, conocimiento adquirido en la asignatura de "Sistemas Operativos", del primer cuatrimestre del 3º curso del grado. Además, esta asignatura complementa los conocimientos adquiridos en la asignatura "Infraestructura de redes de comunicación" que se imparte al mismo tiempo. La asignatura de "Infraestructura de redes de comunicación" proporciona una visión general del diseño, implementación y gestión de redes de telecomunicación, mientras que la asignatura de "Seguridad y Administración de Sistemas" complementa esta formación centrándose en los aspectos de diseño, implementación y gestión relacionados con la protección de las infraestructuras y la información digital.',
			'Por otra parte, dado el carácter transversal de la seguridad, esta asignatura sirve de apoyo para una mejor comprensión de las asignaturas vinculadas a la Mención en Telemática que se imparten en 4º curso, como son: "Desarrollo de Aplicaciones Multimedia", en la que se tratan aspectos relacionados con la transmisión y recepción de contenidos audiovisuales; "Redes Móviles/Inalámbricas", en la que se estudian las particularidades del entorno móvil inalámbrico para la provisión de servicios de telecomunicaciones; "Rendimiento en Redes de Nueva Generación", en la que se estudia cómo llevar a cabo el análisis del rendimiento de protocolos y sistemas de telecomunicaciones; "Desarrollo de Servicios Telemáticos Avanzados", la cual abarca el desarrollo de sistemas web back-end, para los cuales los aspectos de seguridad son clave;  y "Diseño, despliegue, y gestión de Redes y Servicios", cuyo objetivo es estudiar el despliegue de redes extremo a extremo.',
			'Para poder cursar la asignatura "Seguridad y Administración de Sistemas" sin excesiva dificultad, deben dominarse todos los conceptos relacionados con el funcionamiento de las redes de comunicaciones de datos y con el funcionamiento de los sistemas operativos que sustentan los sistemas de información actuales.',
			'En el caso de que las condiciones sanitarias impidan la realización de una actividad docente y/o evaluación presencial, se activará una modalidad no presencial de la que el alumnado será informado puntualmente.'
		],
		competencias: [
			'RC3-El/la estudiante será capaz de usar los conocimientos y técnicas aprendidos para proponer soluciones técnicas que respeten los principios de accesibilidad universal con iniciativa, creatividad y mediante los mecanismos adecuados de toma de decisiones.',
			'RC4-El/la estudiante será capaz de aplicar los conocimientos para la realización de mediciones, cálculos, valoraciones, tasaciones, peritaciones, estudios, informes, planificación de tareas y otros trabajos análogos en su ámbito específico de la telecomunicación.',
			'Competencia Orden CIN:',
			'TETE2-Capacidad para aplicar las técnicas en que se basan las redes, servicios y aplicaciones telemáticas, tales como sistemas de gestión, señalización y conmutación, encaminamiento y enrutamiento, seguridad (protocolos criptográficos, tunelado, cortafuegos, mecanismos de cobro, de autenticación y de protección de contenidos), ingeniería de tráfico (teoría de grafos, teoría de colas y teletráfico) tarificación y fiabilidad y calidad de servicio, tanto en entornos fijos, móviles, personales, locales o a gran distancia, con diferentes anchos de banda, incluyendo telefonía y datos.',
			'C4-Capacidad de resolver problemas con iniciativa, toma de decisiones, creatividad, y de comunicar y transmitir conocimientos, habilidades y destrezas, comprendiendo la responsabilidad ética y profesional de la actividad del Ingeniero Técnico de Telecomunicaciones.',
			'C5-Conocimientos para la realización de mediciones, cálculos, valoraciones, tasaciones, peritaciones, estudios, informes, planificación de tareas y otros trabajos análogos en su ámbito específico de la telecomunicación.',
			'Resultado de Aprendizaje:',
			'HT14-El/la estudiante adquirirá la habilidad de analizar y diseñar arquitecturas de redes, servicios o aplicaciones telemáticas.'
		],
		resultados: [],
		contenidos: [
			{
				titulo: '',
				texto: [
					'Tema 1. Introducción a la ciberseguridad',
					'Tema 2. Herramientas criptográficas',
					'Tema 3. Autenticación',
					'Tema 4. Control de acceso',
					'Tema 5. Firewalls y sistemas de prevención de intrusiones',
					'Tema 6. Gestión de la seguridad'
				]
			}
		],
		metodologia: [
			'La asignatura consta de clases Magistrales (M), y Prácticas de Laboratorio (PL).',
			'La mayor parte de las clases de teoría serán en formato magistral, aunque se introducirán puntualmente actividades basadas en metodologías de aprendizaje activo cooperativo.',
			'En el caso de que las condiciones sanitarias impidan la realización de una actividad docente y/o evaluación presencial, se',
			'activará una modalidad no presencial de la que el alumnado será informado puntualmente.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '60' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '30' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '10'
				}
			]
		},
		bibliografiaBasica: [
			'Stallings, W., Brown, L., "Computer Security: Principles and Practice", 5th edition, Pearson Global Edition, 2024',
			'Stallings, W., Case, T., "Business Data Communications. Infrastructure, Networking and Security", Prentice Hall, 2013',
			'Aumasson, J.P., "Serious Cryptography: A Practical Introduction to Modern Encryption", No Starch Press, 2017',
			'Duplys, P., Schmitz, R., "TLS Cryptography In-Depth: Explore the intricacies of modern cryptography and the inner workings of TLS", Packt Publishing, 2024',
			'Westwood, E., "Post-Quantum Cryptography: Securing the Future of Digital Communications", Smart Books, 2024'
		],
		profesorado: ['ASTORGA BURGO, JASONE', 'ATUTXA IMATZ, ASIER', 'FRANCO VEIGA, DAVID']
	},
	// Dirección de Sistemas de Información
	27409: {
		codigo: '27409',
		titulacion: 'Grado en Ingeniería en Organización Industrial',
		cursoAcademico: '2026/27',
		curso: '4',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '45' },
			{ tipo: 'Seminario', presencial: '7.5', noPresencial: '11.25' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '22.5' },
			{ tipo: 'P. de Campo', presencial: '7.5', noPresencial: '11.25' }
		],
		descripcion: [
			'La materia ¿Dirección de Sistemas de Información¿ es una de las materias de especialización de 4º del Grado en Organización Industrial. Se sitúa dentro del módulo M05 de Optatividad y puede ser complementado con alguna asignatura del máster que profundice la asignatura.',
			'Es importante hacer notar que los sistemas de información están presentes en todas las organizaciones y lo que varía es la intensidad en el uso de tecnologías de la información y la complejidad del mismo. El sistema de información es un subsistema más de la empresa que requiere ser gestionado pero que, además, en muchas ocasiones, puede ser utilizado como fuente de ventaja competitiva. Incluso, en algunos sectores, por ejemplo, la moda low cost, gestionar de forma óptima el sistema de información de la empresa se ha convertido en una necesidad estratégica para sobrevivir. A pesar de que esto es así, la oferta formativa en dirección empresarial disponible en el mercado incide más en otras áreas funcionales de la empresa como, por ejemplo, en recursos humanos, en finanzas y contabilidad, producción y calidad, y en otros subsistemas. Pero dicha oferta es muy reducida en posgrados sobre dirección estratégica del sistema de información y suele estar, por lo general, mal orientada hacia visiones demasiado técnicas y escasamente preocupadas por la gestión y dirección empresarial.',
			'El objetivo es que el alumno sepa cómo planificar, implantar y controlar tecnologías de la información estratégicas para el futuro de la empresa. Para ello, se analizarán las etapas de planificación del sistema de información de una empresa, se ilustrarán los principales impactos que tiene la implantación de este plan sobre la estructura organizativa de la empresa y sobre los miembros de la empresa, y se darán directrices básicas para la posterior auditoría del sistema de información implantado.',
			'Para poder desarrollar ¿Dirección de Sistemas de Información¿ sin excesiva dificultad, el alumno debe entender conceptos ligados a la gestión empresarial, que con anterioridad los ha desarrollado en diferentes asignaturas (Economía, Dirección Comercial, Diseño, Planificación y Gestión de sistemas Productivos y Logísticos, etc.).'
		],
		competencias: [
			'Las competencias de la asignatura:',
			'-Gestionar la experiencia y el conocimiento de los miembros de las organizaciones para la consecución de mejoras de',
			'funcionamiento.',
			'-Manejar el vocabulario empresarial y tecnológico de gestión (incluso palabras en inglés).',
			'-Relacionar rasgos del sistema de información con la capacidad de generar valor.',
			'Los resultados de aprendizaje:',
			'- Establecimiento de las bases para implantar los diferentes sistemas de gestión (personal, calidad, información).',
			'-Gestionar la experiencia y el conocimiento de los miembros de las organizaciones para la consecución de mejoras de funcionamiento.',
			'-Relacionar rasgos del sistema de información con la capacidad de generar valor.',
			'-Conocimiento en materias básicas y tecnológicas, que les capacite para el aprendizaje de nuevos métodos y teorías, y les dote de versatilidad para adaptarse a nuevas situaciones.',
			'-Capacidad para aplicar los principios y métodos de la calidad.',
			'-Capacidad de organización y planificación en el ámbito de la empresa, y otras instituciones y organizaciones.',
			'-Capacidad de trabajar en un entorno multilingüe y multidisciplinar.',
			'-Adoptar una actitud responsable, ordenada en el trabajo y dispuesta al aprendizaje considerando el reto que planteará la necesaria formación continua.',
			'-Aplicar las estrategias propias de la metodología científica: analizar la situación problemática cualitativa y cuantitativamente, plantear hipótesis y soluciones utilizando los modelos propios de la ingeniería.',
			'-Trabajar eficazmente en grupo integrando capacidades y conocimientos para adoptar decisiones en el ámbito de la ingeniería industrial y su correspondiente especialidad.'
		],
		resultados: [],
		contenidos: [
			{
				titulo: '',
				texto: [
					'Los contenidos para la formación en los aspectos estratégicos, operativos y técnicos de los sistemas de información, se estructuran del siguiente modo:',
					'1.EL SISTEMA DE INFORMACIÓN DE LA EMPRESA (importancia de la información, papel de las tecnologías de la información en el sistema de información, paradoja tecnológica, niveles de decisión, funciones organizativas y Estructura conceptual)',
					'2. COMPONENTES DEL SISTEMA DE INFORMACIÓN (hardware, comunicaciones, software, datos, personas y procedimientos)',
					'3. EL SISTEMA DE INFORMACIÓN COMO SOPORTE A LA PLANIFICACIÓN, A LAS ACTIVIDADES Y AL CONTROL (planificación, soporte a la planificación, soporte a las actividades, control y soporte al control)',
					'4. EL SISTEMA DE INFORMACIÓN COMO SOPORTE A LAS DECISIONES (Sistemas de soporte orientados al procesamiento de datos, al análisis de información y al conocimiento)',
					'5. SISTEMAS DE INFORMACIÓN INTERORGANIZATIVOS (Aplicaciones de soporte al procesamiento transaccional interorganizativo, infraestructura de soporte a los sistemas de información interorganizativos, sistemas de gestión de relaciones con clientes y suministradores y comercio electrónico)'
				]
			}
		],
		metodologia: [
			'En la modalidad magistral se impartirán dos horas semanales de teoría y se propondrán casos prácticos a desarrollar.',
			'Los alumnos deberán exponer trabajos en grupo en clase sobre los temas que se irán desarrollando en la asignatura.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '40' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '55' },
				{ concepto: 'Exposición de trabajos, lecturas…', porcentaje: '5' }
			]
		},
		bibliografiaBasica: [
			'La gestión de los sistemas de información en la empresa. Sixto Jesús Arjonilla',
			'Sistemas de informacion para la direccion: Un enfoque guiado por un caso de estudio.Simona Bernardi, Lacramioara Dranca.',
			'Ilustraciones de la aplicación de las tecnologías de información en la empresa española. Carmen de Pablos',
			'Informática y comunicaciones en la empresa. Santiago Martín Romo, José Joaquín López Hermoso',
			'Information Technology for management. Turban, Mc Lean, Wetherbe.',
			'Information Orientation Donald Marchand y otros.',
			'Fundación Escuela de Ingenieros de Bilbao, Socintec: "GUÍA PRÁCTICA DE E-BUSINESS".'
		],
		profesorado: ['SANCHEZ FUENTE, FRANCISCO']
	},
	// Estrategia y Política de Empresas
	27406: {
		codigo: '27406',
		titulacion: 'Grado en Ingeniería en Organización Industrial',
		cursoAcademico: '2026/27',
		curso: '4',
		horas: [
			{ tipo: 'Magistral', presencial: '45', noPresencial: '67.5' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '22.5' }
		],
		descripcion: [
			'Esta asignatura se sitúa dentro del módulo 3 denominado Organización de Empresas. Se imparte en el 2º cuatrimestre del  4º y último curso del Grado en Ingeniería en Organización Industrial y está relacionada con otras asignaturas que se han cursado previamente, como D. Comercial y Competitividad e Innovación Empresarial.',
			'Esta asignatura puede cursarse en modo presencial o Dual'
		],
		competencias: [
			'Esta asignatura desarrolla las siguientes competencias específicas:',
			'OE2: Identificar nuevas técnicas y herramientas para la organización y la gestión de empresas.',
			'OE3: Emprender y fomentar iniciativas empresariales.',
			'OE7: Diseñar, implantar, evaluar y gestionar sistemas de calidad.',
			'Cada vez se hace más necesario para los empresarios y altos directivos de las empresas dedicar un mayor esfuerzo y análisis a la elaboración y elección de la estrategia más adecuada para responder a los retos del entorno y hacer así a la empresa más competitiva en un entorno enormemente cambiante y turbulento. Todas las empresas tienen o siguen una determinada estrategia, aunque en muchos casos de forma implícita. El esfuerzo por hacerla explícita  puede ser muy valioso para conseguir mejorar la posición competitiva de la empresa y sus resultados.'
		],
		resultados: [],
		contenidos: [
			{ titulo: '1-COOPERACION EMPRESARIAL.', texto: [] },
			{ titulo: '2-EL MERCADO DE VALORES.', texto: [] },
			{ titulo: '3-INVERSIONES Y FINANCIACION.', texto: [] },
			{ titulo: '4-INVERSIONES AUTÓNOMAS.', texto: [] },
			{ titulo: '5-PLANIFICACION ESTRATEGICA.', texto: [] },
			{ titulo: '6-ESTRATEGIA EMPRESARIAL DE GESTION.', texto: [] },
			{ titulo: '7-INFORMACION PARA LA GESTION.', texto: [] },
			{ titulo: '8-PLAN DE GESTION ANUAL Y SU GESTION.', texto: [] }
		],
		metodologia: [
			'MODALIDAD PRESENCIAL',
			'Supone la exposición magistral de contenidos teóricos y doctrinales en las sesiones presenciales, que también albergarán trabajo individual y en grupo en forma de debate e interpretación de casos empresariales, realización de ejercicios y otras tareas. El trabajo fuera del aula consistirá en el estudio de los materiales propuestos, la lectura de casos y la preparación de otros materiales, en general, orientada a la dinámica de las clases.',
			'MODALIDAD DUAL',
			'Los estudiantes que cursen la asignatura en esta modalidad seguirán la metodología formativa basada en el modelo de Formación Dual ehuDUALA (https://www.ehu.eus/es/web/ikasi/ehuduala)'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '60' },
				{ concepto: 'Trabajos individuales', porcentaje: '30' },
				{ concepto: 'Exposición de trabajos, lecturas…', porcentaje: '10' }
			]
		},
		bibliografiaBasica: [
			'Cullen, J. B. y Parboteeah, K. P. (2017). Multinational Management. Editorial Cengage. 7ª edición.',
			'Daniels, J. D., Radebaugh, L. H., Sullivan, D. P. y Click, R. W. (2026). International Business: Environments and Operations. Editorial Pearson. 18ª edición.',
			'Dess, G. G., Lumpkin, G. T. y Eisner, A. B. (2011). Administración estratégica: textos y casos. Editorial McGraw-Hill Interamericana. 5ª edición.',
			'Freedman, L. (2021). Estrategia: Una historia. Editorial La Esfera de los Libros. Edición de 2021.',
			'Grant, R. M. (2024). Contemporary Strategy Analysis. Editorial Wiley. 12ª edición.',
			'Hill, C. W. L. y Schilling, M. A. (2024). Strategic Management: Theory & Cases: An Integrated Approach. Editorial Cengage. 14ª edición.',
			'Olaskoaga-Larrauri, J.; Ranilla-Arija, J. (2025). Casos de gestión y estrategia empresarial. Lulu. Raleigh. Estados Unidos.'
		],
		profesorado: ['OLASCOAGA LARRAURI, JON']
	},
	// Organización del Trabajo y Factor Humano
	27401: {
		codigo: '27401',
		titulacion: 'Grado en Ingeniería en Organización Industrial',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '45', noPresencial: '67.5' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '22.5' }
		],
		descripcion: [
			'Dentro del entorno competitivo en el que la empresa debe desenvolverse y desarrollar su actividad es necesario conocer metodologías que nos ayuden aumentar la productividad de forma que la empresa pueda competir con las mayores garantías.',
			'Por otro lado, el factor conocimiento cada vez es más importante en nuestras empresas y en él, la correcta gestión del factor humano constituye un elemento esencial para la buena gestión de las empresas.',
			'Esta asignatura puede cursarse en modo presencial o Dual.'
		],
		competencias: [
			'Adquirir los conocimientos teóricos básicos necesarios para una correcta Organización y Gestión del trabajo, tanto en la Empresa Industrial como en la Empresa de Servicios y en las Empresas de la Administración.',
			'Así mismo trata de desarrollar los métodos necesarios para analizar con éxito la investigación y análisis de las causas que originan baja productividad en el trabajo.',
			'- MO3OE1: Capacidad para modelar problemas de organización industrial, técnicas de resolución y ayuda a la toma de decisiones: análisis de riesgos, modelado de sistemas, técnicas de optimización y simulación.',
			'- MO3OE2: Identificar nuevas técnicas y herramientas para la organización y la gestión de empresas.',
			'- MO3OE4: Gestionar la experiencia y el conocimiento de los miembros de las organizaciones para la consecución de mejoras de funcionamiento.'
		],
		resultados: [
			'RA1. Conocer los conceptos de productividad y eficiencia, y ser conscientes de su importancia.',
			'RA2. Comprender, explicar y aplicar la técnica SMED.',
			'RA3. Conocer la metodología 5S.',
			'RA4. Saber utilizar distintos métodos de medición del trabajo.',
			'RA5. Saber, definir y aplicar los tiempos por defecto.',
			'RA6. Diferenciar las interferencias determinísticas y aleatorias entre máquinas y operarios.',
			'RA7. Saber determinar el número de máquinas a asignar a cada operario para evitar interferencias entre máquinas.',
			'RA8. Conocer las características y las diferentes fases del Diseño Industrial.',
			'RA9. Conocer y poner en práctica el despliegue de la función de calidad QFD.',
			'RA10. Saber aplicar el Análisis de Valor.',
			'RA11. Conocer y poner en práctica la Gestión Ágil.',
			'RA12. Aprender métodos de valoración de puestos de trabajo.',
			'RA13. Conocer la importancia del factor humano en la productividad y diferenciar los diferentes tipos de factores de motivación del personal.',
			'RA14. Saber, identificar y analizar nuevas técnicas y herramientas relacionadas con la materia.'
		],
		contenidos: [
			{
				titulo: '',
				texto: [
					'TEMA 1. Empresa, productividad y costes.',
					'TEMA 2. Estudio del trabajo, mejora de métodos y tiempos.',
					'TEMA 3. Técnica SMED.',
					"TEMA 4. Técnica 5S's.",
					'TEMA 5. Medida del trabajo.',
					'TEMA 6. Tiempos por cronómetro.',
					'TEMA 7. Observaciones instantáneas.',
					'TEMA 8. Tiempos predeterminados.',
					'TEMA 9. Datos normalizados.',
					'TEMA 10. Mejora continua. Análisis de variabilidad.',
					'TEMA 11. Interferencias de máquinas.',
					'TEMA 12. Diseño industrial.',
					'TEMA 13. Técnica QFD.',
					'TEMA 14. Técnica análisis de valor.',
					'TEMA 15. Valoración de puestos de trabajo.',
					'TEMA 16. Remuneración.',
					'TEMA 17. Motivación.'
				]
			}
		],
		metodologia: [
			'La asignatura consta de 6 créditos ECTS, lo que supone 150 horas de trabajo del alumnado.',
			'Estos 6 créditos se dividen en:',
			'-Clases magistrales (45 horas) donde se expondrán los conceptos teóricos y se realizarán ejercicios en los temas que proceda.',
			'-Prácticas de aula (15 horas), en las que se llevarán a cabo una serie de prácticas de obligatorio cumplimiento. Estas prácticas serán ejecutadas en grupo y/o de forma individual según las indicaciones del profesorado.',
			'Además, durante el curso se deberá realizar un trabajo en grupo relacionado con la temática propia de la asignatura. La realización del trabajo es obligatoria. El trabajo será propuesto por el grupo de alumnos y deberá ser aprobado por el profesor de la asignatura previo a su realización. La entrega del trabajo será establecida durante el curso.',
			'La asignatura forma parte de un Proyecto de Innovación Educativa (PIE) cuya finalidad es la adquisición de los resultados de aprendizaje a través de metodologías activas como es la modalidad Aprendizaje Basado en Problemas (ABP).  Ello permitirá adquirir destrezas en el ámbito de la organización industrial en el entorno industrial y habilidades para trabajar en equipo. El problema o los problemas planteados se resolverán en equipo, recibiendo el feed-back necesario para optimizar el aprendizaje durante su desarrollo. La guía del estudiante estará disponible en la aplicación de e-gela, en el cual se describirá el objetivo, tareas, planificación y su sistema de evaluación.',
			'Modalidad Dual:',
			'Los estudiantes que cursen la asignatura en esta modalidad seguirán la metodología formativa basada en el modelo de Formación Dual EHUduala (https://www.ehu.eus/es/web/ikasi/ehuduala).',
			'En el caso de que las condiciones sanitarias impidan la realización de una actividad docente y/o evaluación presencial, se activará una modalidad no presencial de la que los/las estudiantes serán informados puntualmente.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '55' },
				{ concepto: 'Prueba tipo test', porcentaje: '10' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '20' },
				{ concepto: 'Trabajo en Grupo', porcentaje: '15' }
			]
		},
		bibliografiaBasica: [
			'* Arenas Reina, J. M. (2000). Control de tiempos y productividad. La ventaja.',
			'* Barnes, R. M. (1972). Estudios de Movimientos y Tiempos. Aguilar.',
			'* Castanyer Figueras, F. (1988). Control de métodos y tiempos (Vol. 7). Marcombo.',
			'* Oficina Internacional del Trabajo. OIT. Ginebra. (1996). Introducción al estudio del trabajo. Cuarta Edición.',
			'* Zubillaga J. (2005). Apuntes de Organización del Trabajo y Factor Humano.'
		],
		profesorado: ['BORREGAN ALVARADO, JON', 'CHARRAY GONZALEZ, CARLOS']
	},
	// Sistemas Web
	27702: {
		codigo: '27702',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '45' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '30' },
			{ tipo: 'P. Laboratorio', presencial: '15', noPresencial: '15' }
		],
		descripcion: [
			'La asignatura Sistemas Web aborda, desde un enfoque eminentemente práctico, los fundamentos que sustentan el desarrollo y funcionamiento de los sistemas de información en entornos web. En particular, se analizan los mecanismos mediante los cuales los servicios web se estructuran, integran e intercambian datos, prestando especial atención a los principios y tecnologías que permiten la interoperabilidad entre sistemas distribuidos. Asimismo, se abordan aspectos avanzados como la implementación y despliegue de aplicaciones web, y se estudian tecnologías clave relacionadas con los flujos de autenticación y autorización, esenciales para la delegación segura del acceso a APIs web.',
			'La asignatura "Sistemas Web" es una asignatura obligatoria del Grado en Ingeniería Informática de Gestión y Sistemas de Información. Se sitúa dentro del módulo M03-Sistemas de Información. La asignatura "Sistemas Web" está relacionada con:',
			'- La asignatura de 2º curso "Ingeniería del Software", en la cual los estudiantes adquieren competencias relacionadas con el diseño y desarrollo de aplicaciones software.',
			'- La asignatura de 4º curso "Diseño de Aplicaciones Web Enriquecidas", en la cual los estudiantes adquieren competencias relacionadas con el diseño y desarrollo de aplicaciones web, pero desde el punto de vista del cliente (el navegador).'
		],
		competencias: [
			'[C1] Conocer los modelos de arquitectura de servicios web.',
			'[C2] Conocer las tecnologías básicas que dan soporte a la web, en particular las que facilitan la integración e intercambio de información entre servicios web.',
			'[C3] Adoptar un planteamiento estructurado y ordenado para diseñar, desarrollar y desplegar aplicaciones web.',
			'[C4] Identificar y evaluar los requerimientos de seguridad necesarios en servicios web.',
			'- Capacidad de integrar soluciones TIC y procesos empresariales para satisfacer las necesidades de información de las organizaciones, permitiéndoles alcanzar sus objetivos de forma efectiva y eficiente, dándoles así ventajas competitivas.',
			'- Capacidad para determinar los requisitos de los sistemas de información y comunicación de una organización atendiendo a aspectos de seguridad y cumplimiento de la normativa y la legislación vigente.',
			'- Capacidad para participar activamente en la especificación, diseño, implementación y mantenimiento de los sistemas de información y comunicación.'
		],
		resultados: [],
		contenidos: [
			{ titulo: 'CLASES MAGISTRALES Y PRÁCTICAS DE AULA', texto: [] },
			{
				titulo: 'SEMANA 1',
				texto: [
					'- Presentación de la asignatura.',
					'- Instalación de Burp Suite, Python, PyCharm, Wireshark, Geckodriver y View Source Chart.',
					'- Prueba del entorno de desarrollo. Ejemplos sencillos para familiarizarse con Python y PyCharm.'
				]
			},
			{
				titulo: 'SEMANA 2',
				texto: [
					'- HTTP. Petición y respuesta. Ejemplo con Burp (pestaña Repeater) y Python (librería requests)',
					'- HTTP. Tráfico HTTP generado en la carga de una página web.',
					'- HTTP. Códigos de error: 400 y 404. Forzarlos en el ejemplo anterior.'
				]
			},
			{
				titulo: 'SEMANA 3',
				texto: [
					'- HTTP. Envío de datos. Ejemplo con Python: Letra DNI.',
					'- HTTP. Codificación de la respuesta. Ejemplo con Wireshark.',
					'- HTTP. Redirección y compresión. Ejemplos con Burp y Python.'
				]
			},
			{
				titulo: 'SEMANA 4',
				texto: [
					'- HTTP. Caché.',
					'- HTTP. Cookies. Ejemplo: Secuencia de peticiones para entrar en eGela.',
					'- HTTP. Petición y respuesta. Ejemplo con sockets.',
					'- HTTP. Content Length vs Transfer Encoding. Ejemplo con Wireshark.'
				]
			},
			{
				titulo: 'SEMANA 5',
				texto: [
					'- Web Scraping. Estructura de una página HTML.',
					'- Web Scraping. Página descargada vs. Página renderizada.',
					'- Web Scraping. Renderizar páginas web: Geckodriver + Selenium. Ejemplo.',
					'- Web Scraping. Parsear HTML: librería BeautifulSoup. Ejemplo.'
				]
			},
			{
				titulo: 'SEMANA 6',
				texto: [
					'- Instalación de MySQL, Java, Tomcat e IntelliJ. Prueba del entorno de desarrollo.',
					'- Tomcat: Estructura de directorios.',
					'- Tomcat: Mecanismo de gestión de peticiones (web.xml)',
					'- Tomcat: Servlet. Ejemplos.',
					'- Tomcat: Recogida de parámetros de la petición. Ejemplo: Letra DNI.'
				]
			},
			{
				titulo: 'SEMANA 7',
				texto: [
					'- Tomcat: Páginas web dinámicas del lado del servidor (JSPs)',
					'- Tomcat: Redirecciones: sendRedirect vs RequestDispatcher.',
					'- Tomcat: Gestión de la sesión de usuario.'
				]
			},
			{
				titulo: 'SEMANA 8',
				texto: [
					'- Tablón de mensajes: Presentación.',
					'- Tablón de mensajes: Pasos previos (wrapper de bbdd, servlet de test y JSP para listar mensajes).'
				]
			},
			{
				titulo: 'SEMANA 9',
				texto: [
					'- Tablón de mensajes: Usuarios activos.',
					'- Tablón de mensajes: Añadir mensaje.',
					'- Tablón de mensajes: Actualizar mensajes con AJAX.'
				]
			},
			{
				titulo: 'SEMANA 10',
				texto: [
					'- Concepto de API web.',
					'- OAuth. Fundamentos.',
					'- OAuth para aplicaciones móviles y de escritorio. Flujo de mensajes.',
					'- OAuth para aplicaciones móviles y de escritorio. Ejemplo: Listado de documentos en Google Drive.'
				]
			},
			{
				titulo: 'SEMANA 11',
				texto: [
					'- OAuth para aplicaciones móviles y de escritorio. Ejemplo: Listado de documentos en Dropbox.'
				]
			},
			{
				titulo: 'SEMANA 12',
				texto: [
					'- Presentación de la tarea evaluable 4: Cliente web para la transferencia de archivos de eGela a Dropbox.',
					'- Tarea evaluable 4: Análisis del esqueleto de la aplicación.'
				]
			},
			{ titulo: 'SEMANA 13', texto: ['- Tarea evaluable 4: Integración con eGela.'] },
			{ titulo: 'SEMANA 14', texto: ['- Tarea evaluable 4: Integración con Dropbox.'] },
			{
				titulo: 'PRÁCTICAS DE LABORATORIO',
				texto: [
					'Hay tres prácticas de laboratorio. Cada una tiene una duración de 2 sesiones.',
					'Práctica 1: Cliente IoT',
					'Subida automática de %CPU y %RAM a la plataforma ThingSpeak. Borrado de datos al salir del programa con Ctrl+C.',
					'Práctica 2: Web Scraping de eGela',
					'Conectarse a eGela, descargar los ficheros PDF de diferentes asignaturas y organizarlos por carpetas.',
					'Práctica 3: Gestor de imágenes SVG',
					'Desarrollar una aplicación web basada en Tomcat para la gestión de imágenes SVG almacenadas en la bbdd eXist.'
				]
			}
		],
		metodologia: [
			'CLASES MAGISTRALES: Desarrollo del temario a través de exposiciones y ejercicios prácticos realizados por el/la profesor/a.',
			'PRÁCTICAS DE AULA: Desarrollo del temario mediante tareas dirigidas realizadas por los estudiantes de forma individual o grupal con la ayuda del profesor/a.',
			'PRÁCTICAS DE LABORATORIO: Desarrollo del temario mediante tareas dirigidas realizadas por los estudiantes de forma individual o grupal sin la ayuda del profesor.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '60' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '30' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '10'
				}
			]
		},
		bibliografiaBasica: [
			'Information Architecture for the World Wide Web, Morville P. & Rosenfeld L., Ed. OReilly'
		],
		profesorado: [
			'ALVAREZ GUTIERREZ, MARIA LUZ',
			'CASQUERO OYARZABAL, OSCAR',
			'PEREZ MANZANO, LOURDES'
		]
	},
	// Modelado y Simulación de Sistemas
	27691: {
		codigo: '27691',
		titulacion: 'Grado en Ingeniería Informática de Gestión y Sistemas de Información',
		cursoAcademico: '2026/27',
		curso: '4',
		horas: [
			{ tipo: 'Magistral', presencial: '30', noPresencial: '45' },
			{ tipo: 'P. de Aula', presencial: '15', noPresencial: '30' },
			{ tipo: 'P. Laboratorio', presencial: '15', noPresencial: '15' }
		],
		descripcion: [
			'La Asignatura "Modelado y Simulación de Sistemas" es una asignatura optativa para el Grado en Ingeniería Informática de Gestión y Sistemas de Información.',
			'En esta asignatura se aprende a modelar y simular sistemas dinámicos básicos utilizando herramientas informáticas de aplicación en ingeniería.',
			'Si bien no es imprescindible haber cursado la asignatura de "Regulación Automática", tener conocimientos previos en este campo puede facilitar el estudio de "Modelado y Simulación de Sistemas".'
		],
		competencias: [
			'[C1] Comprender los conceptos de modelado y simulación como herramienta de análisis del comportamiento de un sistema físico.',
			'[C2] Modelar sistemas dinámicos básicos utilizando representaciones matemáticas y gráficas de los mismos.',
			'[C3] Aprender a manejar herramientas de software para el modelado y simulación de sistemas.',
			'[C4] Simular y analizar los sistemas dinámicos modelados utilizando herramientas de software'
		],
		resultados: [],
		contenidos: [
			{ titulo: 'CONTENIDO TEÓRICO', texto: [] },
			{
				titulo: '1 INTRODUCCIÓN',
				texto: [
					'Introducción a los conceptos de Simulación y Modelado de Sistemas. Clasificación de sistemas, importancia de los sistemas dinámicos, sistemas lineales y no lineales.'
				]
			},
			{
				titulo: '2 MODELADO DE SISTEMAS LINEALES',
				texto: [
					'Estudio y modelado de diferentes sistemas dinámicos: Sistemas mecánicos de traslación y rotación, sistemas eléctricos, sistemas térmicos, sistemas electromecánicos, sistemas hidráulicos, ...'
				]
			},
			{
				titulo: '3 REPRESENTACIÓN DE MODELOS MATEMÁTICOS LINEALES',
				texto: [
					'Estudio de las diferentes representaciones de los sistemas y características de los modelos en cada una de las representaciones: ecuación diferencial entrada-salida, variables de estado y función de transferencia.'
				]
			},
			{
				titulo: '4 REPRESENTACIÓN GRÁFICA DE MODELOS',
				texto: [
					'Estudio de las diferentes representaciones gráficas de los modelos y las transformaciones de unas a otras.'
				]
			},
			{ titulo: 'CONTENIDO PRÁCTICO', texto: [] },
			{
				titulo: 'PRACTICAS DE AULA',
				texto: [
					'- Practica Aula 01 - CÁLCULO SIMBÓLICO',
					'- Practica Aula 02 - SISTEMA DE MASA_MUELLE_AMORTIGUADOR',
					'- Practica Aula 03 - INTRODUCCIÓN SIMULINK: Deposito.',
					'- Practica Aula 04 - LINEALIZACIÓN: CALENTADOR (Simulink)',
					'- Practica Aula 05 - MATLAB-ThingSpeak-Nube',
					'- Practica Aula 06 - RESOLUCIÓN DE ECUACIONES DIFERENCIALES'
				]
			},
			{
				titulo: 'PRACTICAS DE LABORATORIO',
				texto: [
					'- Practica Laboratorio 01 - INTRODUCCIÓN A MATLAB',
					'- Practica Laboratorio 02 - MATRICES Y VECTORES',
					'- Practica Laboratorio 03 - TIPOS DE DATOS Y OPERADORES',
					'- Practica Laboratorio 04 - TIPOS DE DATOS COMPLEJOS',
					'- Practica Laboratorio 05 - GRÁFICOS EN MATLAB',
					'- Practica Laboratorio 06 - PROGRAMACION MATLAB',
					'- Practica Laboratorio 07 - LECTURA-ESCRITURA DE DATOS',
					'- Practica Laboratorio 08 - INTEGRACIÓN MATLAB-SIMULINK',
					'- Practica Laboratorio 09 - BALL-BEAM',
					'Se utiliza como software para las prácticas Matlab y Simulink'
				]
			}
		],
		metodologia: [
			'Clases magistrales: Se explicarán los conceptos necesarios para alcanzar los objetivos de conocimiento, además de servir como herramienta para facilitar el debate y generar la curiosidad del alumnado.',
			'Prácticas de aula: Se utilizarán para la realización de ejercicios, problemas y exposición de trabajos, fomentando en todo momento la participación activa del alumnado.',
			'Prácticas de laboratorio: Las sesiones de prácticas permitirán la comprobación práctica de los conocimientos adquiridos mediante el uso de herramientas de software para el modelado y la simulación.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '60' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '20' },
				{ concepto: 'Trabajos individuales', porcentaje: '10' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '10'
				}
			]
		},
		bibliografiaBasica: [
			'"Ingeniería de Control Moderna", 4ª Edición, Katsuhiko Ogata, Pearson. Prentice Hall (2003)',
			'"Problemas de Regulación Automática" Arancil, R. y Albertos, P. Universidad Politécnica de Madrid.',
			'"Control de Sistemas Continuos. Problemas Resultos" Barrientos, A., Sanz, R., Matía, F., y Gambao, E. Ed. McGraw-Hill.'
		],
		profesorado: ['ALVAREZ GUTIERREZ, MARIA LUZ', 'MARTINEZ RODRIGUEZ, RAQUEL']
	},
	// Métodos Cuantitativos en Organización II
	27402: {
		codigo: '27402',
		titulacion: 'Grado en Ingeniería en Organización Industrial',
		cursoAcademico: '2026/27',
		curso: '3',
		horas: [
			{ tipo: 'Magistral', presencial: '37.5', noPresencial: '56.25' },
			{ tipo: 'P. de Aula', presencial: '22.5', noPresencial: '33.75' }
		],
		descripcion: [
			'La materia Métodos Cuantitativos de Organización II es una de las materias de 3º del Grado en Ingeniería en Organización. Se sitúa dentro del módulo Organización de Empresas.',
			'Para poder desarrollar esta asignatura debe tenerse un dominio básico de resolución de ecuaciones y operativa matemática, aspectos todos que se estudian tanto en el bachillerato como en el módulo de formación básica.',
			'En esta asignatura, la función Operaciones es la protagonista en su vertiente más cuantitativa. Se dotará a los alumnos de la capacidad para enfocar desde un punto de vista riguroso situaciones habituales en la gestión del área Operativa de la empresa a través de métodos matemáticos. Esta capacitación se despliega en los dos objetivos clave:',
			'Aprender a enfocar los problemas operacionales de forma cuantitativa, con la necesaria comprensión e identificación de información disponible, estructura de las restricciones así como de la solución.',
			'Conocimiento de los métodos y algoritmos matemáticos incluidos en el programa, práctica en su utilización y adquisición del criterio necesario para la elección adecuada en cada momento.',
			'Los conocimiento que se imparten en este curso están orientados a optimizar operaciones y la planificación de las mismas, tanto a nivel de producción como de toda la empresa, tanto industrial, de servicios como de la administración, por medio de Técnicas cuantitativas apoyadas en modelos matemáticos.',
			'La asignatura Métodos Cuantitativos de Organización I sirve para  desarrollar la base de  conocimientos que permitirán a los alumnos y alumnas la resolución de problemas operacionales.'
		],
		competencias: [
			'Capacidad de resolver problemas con iniciativa, toma de decisiones, creatividad, razonamiento crítico y de comunicar y transmitir conocimientos, habilidades y destrezas en el campo de la Ingeniería en Organización Industrial.',
			'Capacidad de organización y planificación en el ámbito de la empresa, y otras instituciones y organizaciones.',
			'Capacidad de trabajar en un entorno multilingüe y multidisciplinar',
			'Capacidad para modelar problemas de organización industrial, técnicas de resolución y ayuda a la toma de decisiones: análisis de riesgos, modelado de sistemas, técnicas de organización y simulación.',
			'Identificar nuevas técnicas y herramientas para la organización y la gestión de empresas',
			'Proyectar y gestionar sistemas productivos, logísticos y administrativos'
		],
		resultados: [],
		contenidos: [
			{
				titulo: '',
				texto: [
					'Tema 1. Juegos de estrategia.',
					'Tema 2. Teoría de juegos discretos, continuos y con coalición.',
					'Tema 3. Teoría de la decisión. Bajo incertidumbre, sin información y discusión de los criterios.',
					'Tema 4. Árboles abiertos de decisión. Tipología de la decisión.',
					'Tema 5. Sistema de colas: abiertos y cerrados.'
				]
			}
		],
		metodologia: [
			'En esta asignatura se utilizan diversas metodologías de enseñanza; en la modalidad magistral se impartirán breves exposiciones por parte del docente, dedicando la mayoría del tiempo presencial a la resolución de problemas.',
			'La resolución de los problemas en el aula se realizará de forma participativa. Se proporcionarán problemas y ejercicios que se desarrollarán individualmente o en grupo. De este modo, se fomentará la formulación de cuestiones y la discusión abierta, de forma que el alumnado adquiera destrezas relacionadas con la comunicación oral y trabajo en equipo.',
			'Además, parte de los resultados de aprendizaje serán adquiridos a través del desarrollo de problemas siguiendo metodologías activas como puede ser la modalidad de Aprendizaje Basado en Problemas (ABP). Ello permitirá adquirir destrezas en el ámbito de la investigación operativa en el entorno industrial y habilidades para trabajar en equipo. Una vez planteado el problema a resolver en equipo, se guiará su desarrollo a través de la definición de tareas por parte del docente y recibiendo el feed-back necesario para optimizar el aprendizaje durante su desarrollo. La guía del estudiante estará disponible en la aplicación de e-gela.',
			'El desarrollo en el aula de este tipo de metodologías requiere que el alumnado trabaje de manera presencial las principales tareas que se propondrán en el Problema a resolver.',
			'En el caso de que las condiciones sanitarias impidan la realización   de  una  actividad docente y/o evaluación presencial, se  activará  una  modalidad  no presencial de la que los/las estudiantes serán informados puntualmente.'
		],
		evaluacion: {
			sistemas: ['Sistema de Evaluación Continua', 'Sistema de Evaluación Final'],
			pesos: [
				{ concepto: 'Prueba escrita a desarrollar', porcentaje: '70' },
				{ concepto: 'Realización de prácticas (ejercicios, casos o problemas)', porcentaje: '10' },
				{
					concepto: 'Trabajos en equipo (resolución de problemas, diseño de proyectos)',
					porcentaje: '20'
				}
			]
		},
		bibliografiaBasica: [
			'Texto Base del curso: FCO. JAVIER ZUBILLAGA. Investigación Operativa II.',
			'Lecciones impartidas. Edit. Centro de Publicaciones de la ETSI.'
		],
		profesorado: ['ALVAREZ MEAZA, IZASKUN', 'BERNABE FERNANDEZ, MONICA']
	}
};
