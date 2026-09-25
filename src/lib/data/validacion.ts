/**
 * Datos de verificación para la postulación: nivel, cuatrimestre, idioma,
 * restricciones formales de matrícula y compatibilidad horaria.
 *
 * Todo lo de aquí está comprobado contra las fichas oficiales de la UPV/EHU del
 * curso académico 2026/27 enlazadas en `materias.ts`. Los horarios provienen de
 * los grupos en castellano publicados en esas mismas fichas. Nada de esto se
 * infiere: si la ficha no lo dice, no se afirma.
 */

export type Estado = 'ok' | 'aviso';

export type Validacion = {
	/** Nivel de estudios de la asignatura. Todas son de Grado. */
	nivel: string;
	/** Titulación a la que pertenece, en corto. No todas comparten titulación. */
	titulacionCorta: string;
	cuatrimestre: string;
	/** Semanas lectivas publicadas en el calendario del grupo en castellano. */
	semanas: string;
	idioma: string;
	/** Restricción formal de matrícula, literal de la ficha oficial. */
	restriccion?: string;
	/** Matiz administrativo que la restricción abre para una persona de intercambio. */
	restriccionNota?: string;
	/** Conocimientos previos que la ficha recomienda, sin ser restricción. */
	previos?: { texto: string; items?: string[] };
	/** Nota sobre la modalidad de impartición cuando la ficha ofrece varias. */
	modalidad?: string;
	/** Avisos de horario que afectan a esta asignatura. */
	horario: string[];
	/** Estado agregado que se muestra en la cabecera de la ficha. */
	estado: Estado;
};

const RESTRICCION_60 = (asignatura: string) =>
	`Para poder matricularse en asignaturas de tecnología específica "${asignatura}" hay que tener superados 60 créditos entre las materias básicas y comunes a la rama informática.`;

const NOTA_INCOMING =
	'Requiere confirmación con la coordinación incoming de la EHU sobre el reconocimiento de estudios previos cursados en UPIICSA para satisfacer el requisito de 60 créditos.';

const CUATRIMESTRE = '2.º cuatrimestre · primavera 2027';
const INFORMATICA_GESTION = 'Grado en Ing. Informática de Gestión y Sistemas de Información';

export const validaciones: Record<string, Validacion> = {
	27684: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		previos: {
			texto:
				'No aparece una restricción formal de matrícula en la ficha oficial; se indican conocimientos previos recomendados: la asignatura se apoya en Programación Básica, Programación Modular y Orientada a Objetos e Ingeniería del Software.'
		},
		horario: [],
		estado: 'ok'
	},
	27705: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		restriccion: RESTRICCION_60('Software de Gestión de Empresa'),
		restriccionNota: NOTA_INCOMING,
		horario: [
			'Solapamiento sin resolver con 28627: su grupo teórico en castellano es los jueves de 11:00 a 13:00 y el de 28627 de 12:30 a 14:00.'
		],
		estado: 'aviso'
	},
	27704: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		restriccion: RESTRICCION_60('Sistemas de Apoyo a la Decisión'),
		restriccionNota: NOTA_INCOMING,
		previos: {
			texto: 'Aparte de la restricción formal, la ficha recomienda —sin exigirlo— haber superado:',
			items: [
				'Análisis Matemático',
				'Cálculo',
				'Programación Modular y Orientación a Objetos',
				'Estructuras de Datos y Algoritmos',
				'Métodos Estadísticos de la Ingeniería',
				'Investigación Operativa'
			]
		},
		horario: [
			'Sus dos grupos de P. Ordenador en castellano (viernes 09:00–10:00 y 10:00–11:00) chocan con el Laboratorio-1 de 28627 (viernes 08:00–11:00). El Laboratorio-2 de 28627, los miércoles de 08:00 a 11:00, evita este choque.',
			'Solapamiento puntual en la semana 26: su grupo teórico (lunes 13:00–14:00) coincide con la sesión de 28627 de ese lunes (12:30–14:00).'
		],
		estado: 'aviso'
	},
	26023: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		previos: {
			texto:
				'No aparece una restricción formal de matrícula en la ficha oficial. Es una asignatura de formación básica de 2.º curso que se imparte en el segundo cuatrimestre.'
		},
		horario: [],
		estado: 'ok'
	},
	28627: {
		nivel: 'Grado',
		titulacionCorta: 'Grado en Ing. en Tecnología de Telecomunicación (plan nuevo)',
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–33',
		idioma: 'Castellano',
		previos: {
			texto:
				'No aparece una restricción formal de matrícula en la ficha oficial, pero sí una preparación esperada: «deben dominarse todos los conceptos relacionados con el funcionamiento de las redes de comunicaciones de datos y con el funcionamiento de los sistemas operativos». Es una asignatura obligatoria de 3.er curso de un Grado, no de máster.'
		},
		horario: [
			'Solapamiento sin resolver con 27705: su grupo teórico en castellano es los jueves de 12:30 a 14:00 y el de 27705 de 11:00 a 13:00.',
			'Su Laboratorio-1 (viernes 08:00–11:00) choca con las prácticas de ordenador de 27704; el Laboratorio-2 (miércoles 08:00–11:00) lo evita, aunque a su vez coincide con el grupo P. Ordenador-2 de 27705 (miércoles 09:30–11:00), no con el P. Ordenador-1 (martes 09:30–11:00).'
		],
		estado: 'aviso'
	},
	27409: {
		nivel: 'Grado',
		titulacionCorta: 'Grado en Ing. en Organización Industrial',
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		horario: [],
		estado: 'ok'
	},
	27406: {
		nivel: 'Grado',
		titulacionCorta: 'Grado en Ing. en Organización Industrial',
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		modalidad:
			'La ficha indica que la asignatura puede cursarse en modalidad presencial o Dual. Para esta propuesta de intercambio la opción aplicable es la PRESENCIAL; no se postula a la vía Dual (ehuDUALA).',
		horario: [],
		estado: 'ok'
	},
	27401: {
		nivel: 'Grado',
		titulacionCorta: 'Grado en Ing. en Organización Industrial',
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		horario: [],
		estado: 'ok'
	},
	27702: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		restriccion: RESTRICCION_60('Sistemas Web'),
		restriccionNota: NOTA_INCOMING,
		horario: [],
		estado: 'aviso'
	},
	27691: {
		nivel: 'Grado',
		titulacionCorta: INFORMATICA_GESTION,
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		horario: [],
		estado: 'ok'
	},
	27402: {
		nivel: 'Grado',
		titulacionCorta: 'Grado en Ing. en Organización Industrial',
		cuatrimestre: CUATRIMESTRE,
		semanas: 'semanas 20–35',
		idioma: 'Castellano',
		horario: [],
		estado: 'ok'
	}
};

export type Conflicto = {
	asignaturas: [string, string];
	dia: string;
	solape: string;
	/** Si puede evitarse eligiendo otro grupo publicado. */
	evitable: boolean;
	detalle: string;
};

/**
 * Solapamientos entre los grupos en castellano publicados para las cinco
 * asignaturas de la propuesta principal, calculados sobre los calendarios de
 * las fichas oficiales.
 */
export const conflictosHorarios: Conflicto[] = [
	{
		asignaturas: ['27705', '28627'],
		dia: 'Jueves',
		solape: '12:30–13:00',
		evitable: false,
		detalle:
			'Teórico de 27705 (11:00–13:00) contra teórico de 28627 (12:30–14:00), durante todas las semanas lectivas. Cada asignatura tiene un único grupo teórico en castellano, así que no se resuelve cambiando de grupo.'
	},
	{
		asignaturas: ['27704', '28627'],
		dia: 'Viernes',
		solape: '09:00–11:00',
		evitable: true,
		detalle:
			'Los dos grupos de P. Ordenador de 27704 (09:00–10:00 y 10:00–11:00) caen dentro del Laboratorio-1 de 28627 (08:00–11:00). Se evita eligiendo el Laboratorio-2 de 28627, los miércoles de 08:00 a 11:00.'
	},
	{
		asignaturas: ['27705', '28627'],
		dia: 'Miércoles',
		solape: '09:30–11:00',
		evitable: true,
		detalle:
			'Solo si se toma el Laboratorio-2 de 28627 (08:00–11:00): coincide con el grupo P. Ordenador-2 de 27705. Se evita con el P. Ordenador-1 de 27705, los martes de 09:30 a 11:00.'
	},
	{
		asignaturas: ['27704', '28627'],
		dia: 'Lunes (semana 26)',
		solape: '13:00–14:00',
		evitable: false,
		detalle:
			'Coincidencia puntual de una sola semana: el teórico de 27704 (lunes 13:00–14:00) contra la sesión de 28627 de esa semana (lunes 12:30–14:00).'
	}
];

export type ItemVerificacion = { etiqueta: string; estado: Estado; texto: string };

/** Resumen de preparación de la postulación que abre la sección 02. */
export const verificacionPostulacion: ItemVerificacion[] = [
	{ etiqueta: 'Semestre', estado: 'ok', texto: '2.º cuatrimestre · primavera 2027' },
	{
		etiqueta: 'Equivalencias',
		estado: 'ok',
		texto:
			'Las cinco equivalencias con el plan de UPIICSA están confirmadas por la coordinación de UPIICSA (correo del 24/09/2026).'
	},
	{ etiqueta: 'Nivel académico', estado: 'ok', texto: 'Grado en las cinco asignaturas' },
	{
		etiqueta: 'Titulaciones',
		estado: 'ok',
		texto:
			'Tres titulaciones de la misma escuela: Informática de Gestión y Sistemas de Información, Organización Industrial y Tecnología de Telecomunicación.'
	},
	{
		etiqueta: 'Centro',
		estado: 'ok',
		texto: 'Escuela de Ingeniería de Bilbao · campus de Bizkaia'
	},
	{ etiqueta: 'Carga', estado: 'ok', texto: '5 asignaturas · 30 ECTS' },
	{ etiqueta: 'Idioma', estado: 'ok', texto: 'Castellano en todos los grupos seleccionados' },
	{
		etiqueta: 'Prerrequisitos',
		estado: 'aviso',
		texto:
			'27704 y 27705 exigen 60 créditos superados en materias básicas y comunes de la rama informática; hay que confirmar con la coordinación incoming cómo se acredita con estudios de UPIICSA.'
	},
	{
		etiqueta: 'Compatibilidad horaria',
		estado: 'aviso',
		texto:
			'Solapamiento publicado entre 27705 y 28627 los jueves de 12:30 a 13:00, sin grupo alternativo en castellano.'
	},
	{
		etiqueta: 'Postulación',
		estado: 'aviso',
		texto:
			'Viable, pero requiere resolver el conflicto horario y confirmar el tratamiento de los prerrequisitos para estudiantes de intercambio.'
	}
];
