/**
 * Source data for the brief, transcribed from the two spreadsheets this
 * document replaces: `materias_disponibles_7mo_8vo.xlsx` (UPIICSA) and
 * `materias_propuestas_EHU.xlsx` (UPV/EHU). Kept as plain data so the page
 * components stay presentational.
 */

export type Semestre = 7 | 8;

export type MateriaUpiicsa = {
	semestre: Semestre;
	nombre: string;
	academia: string;
	creditos: number;
};

export type MateriaEhu = {
	codigo: string;
	asignatura: string;
	centro: string;
	campus: string;
	ects: number;
	idioma: string;
	equivaleA: string;
	link: string;
};

const ESCUELA = 'Escuela de Ingeniería de Bilbao';
// La hoja de cálculo decía «Español»; la ficha oficial de la EHU lo etiqueta
// «Castellano», que es el término que usa la solicitud.
const CAMPUS = 'Bizkaia';

/** Asignaturas de UPIICSA disponibles en 7.º y 8.º semestre. */
export const materiasDisponibles: MateriaUpiicsa[] = [
	{
		semestre: 7,
		nombre: 'Redes y Modelos de Simulación',
		academia: 'Inv. de Operaciones',
		creditos: 7
	},
	{ semestre: 7, nombre: 'Administración Estratégica', academia: 'Administración', creditos: 6 },
	{ semestre: 7, nombre: 'Legislación Informática', academia: 'Derecho', creditos: 7 },
	{
		semestre: 7,
		nombre: 'Formulación y Evaluación de Proyectos',
		academia: 'Inv. de Operaciones',
		creditos: 5
	},
	{ semestre: 7, nombre: 'Ingeniería del Conocimiento', academia: 'Informática', creditos: 6 },
	{ semestre: 7, nombre: 'Internet de las Cosas', academia: 'Computación', creditos: 6 },
	{ semestre: 7, nombre: 'Seguridad en Redes', academia: 'Computación', creditos: 7 },
	{ semestre: 8, nombre: 'Habilidades Directivas', academia: 'Administración', creditos: 4 },
	{ semestre: 8, nombre: 'Informática Empresarial', academia: 'Informática', creditos: 5 },
	{ semestre: 8, nombre: 'Proyecto de Titulación', academia: 'Computación', creditos: 3 },
	{ semestre: 8, nombre: 'Gestión de Proyectos', academia: 'Inv. de Operaciones', creditos: 5 },
	{
		semestre: 8,
		nombre: 'Calidad y Normalización de Software',
		academia: 'Producción',
		creditos: 6
	},
	{ semestre: 8, nombre: 'Administración de Tecnologías', academia: 'Informática', creditos: 6 },
	{
		semestre: 8,
		nombre: 'Fundamentos de Analítica de Datos',
		academia: 'Informática',
		creditos: 6
	},
	{ semestre: 8, nombre: 'Computación en la Nube', academia: 'Computación', creditos: 6 }
];

const ehuLink = (grado: string, curso: number, asignatura: string) =>
	`https://www.ehu.eus/es/web/graduak/${grado}/creditos-y-asignaturas?redirect=consultaAsignatura&anyo-academico=20260&ciclo=X&curso=${curso}&asignatura=${asignatura}`;

const INFORMATICA_GESTION =
	'grado-ingenieria-informatica-de-gestion-y-sistemas-de-informacion-bizkaia';
const TELECOMUNICACION = 'grado-ingenieria-tecnologia-de-telecomunicacion-plan-nuevo';
const ORGANIZACION_INDUSTRIAL = 'grado-ingenieria-organizacion-industrial';

/**
 * Propuesta principal: las 5 asignaturas cuya equivalencia confirmó UPIICSA por
 * correo de la coordinación (24/09/2026). 30 ECTS.
 */
export const materiasPropuestas: MateriaEhu[] = [
	{
		codigo: '27704',
		asignatura: 'Sistemas de Apoyo a la Decisión',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Fundamentos de Analítica de Datos',
		link: ehuLink(INFORMATICA_GESTION, 3, '27704')
	},
	{
		codigo: '28627',
		asignatura: 'Seguridad y Administración de Sistemas',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Seguridad en Redes',
		link: ehuLink(TELECOMUNICACION, 3, '28627')
	},
	{
		codigo: '27409',
		asignatura: 'Dirección de Sistemas de Información',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Habilidades Directivas',
		link: ehuLink(ORGANIZACION_INDUSTRIAL, 4, '27409')
	},
	{
		codigo: '27705',
		asignatura: 'Software de Gestión de Empresa',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Administración de Tecnologías',
		link: ehuLink(INFORMATICA_GESTION, 3, '27705')
	},
	{
		codigo: '27406',
		asignatura: 'Estrategia y Política de Empresas',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Informática Empresarial',
		link: ehuLink(ORGANIZACION_INDUSTRIAL, 4, '27406')
	}
];

/**
 * Alternativas por si se exige una sexta asignatura o se cae alguna de la
 * propuesta. Sus equivalencias son las estudiadas antes de la confirmación de
 * UPIICSA y tendrían que validarse igual que las cinco principales.
 */
export const materiasAlternativas: MateriaEhu[] = [
	{
		codigo: '27684',
		asignatura: 'Gestión de Proyectos',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Gestión de Proyectos',
		link: ehuLink(INFORMATICA_GESTION, 3, '27684')
	},
	{
		codigo: '26023',
		asignatura: 'Investigación Operativa',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Redes y Modelos de Simulación',
		link: ehuLink(INFORMATICA_GESTION, 2, '26023')
	},
	{
		codigo: '27401',
		asignatura: 'Organización del Trabajo y Factor Humano',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Habilidades Directivas',
		link: ehuLink(ORGANIZACION_INDUSTRIAL, 3, '27401')
	},
	{
		codigo: '27702',
		asignatura: 'Sistemas Web',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Computación en la Nube',
		link: ehuLink(INFORMATICA_GESTION, 3, '27702')
	},
	{
		codigo: '27691',
		asignatura: 'Modelado y Simulación de Sistemas',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Redes y Modelos de Simulación',
		link: ehuLink(INFORMATICA_GESTION, 4, '27691')
	},
	{
		codigo: '27402',
		asignatura: 'Métodos Cuantitativos en Organización II',
		centro: ESCUELA,
		campus: CAMPUS,
		ects: 6,
		idioma: 'Castellano',
		equivaleA: 'Redes y Modelos de Simulación',
		link: ehuLink(ORGANIZACION_INDUSTRIAL, 3, '27402')
	}
];

/** Nombres UPIICSA cubiertos por la propuesta principal. */
export const equivalenciasPropuestas = new Set(materiasPropuestas.map((m) => m.equivaleA));
