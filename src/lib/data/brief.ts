export type NoticeTone = 'info' | 'good' | 'warn' | 'alert';
export type TableTone = 'good' | 'warn' | 'alert' | 'muted';

export type TableCell = {
	text: string;
	tone?: TableTone;
};

export type BriefTable = {
	caption?: string;
	headers: string[];
	rows: TableCell[][];
};

export const toc = [
	{ id: 'summary', label: 'Current conclusion' },
	{ id: 'eligibility', label: 'Eligibility and selection' },
	{ id: 'language', label: 'Language requirement' },
	{ id: 'profile', label: 'Academic profile' },
	{ id: 'choices', label: 'Destination choices' },
	{ id: 'equivalencies', label: 'Hof course equivalencies' },
	{ id: 'english', label: 'English-level assessment' },
	{ id: 'actions', label: 'Priority actions' },
	{ id: 'sources', label: 'Source documents' }
] as const;

export const eligibilityTable: BriefTable = {
	caption: 'Working checklist based on the referenced ProMAI discussion; confirm against the 2026 call and UPIICSA’s process.',
	headers: ['Condition', 'Max’s current position', 'Working status'],
	rows: [
		[
			{ text: 'Regular, in-person undergraduate student' },
			{ text: 'Reported as a regular student.' },
			{ text: 'Appears met', tone: 'good' }
		],
		[
			{ text: 'Minimum overall average for Engineering: 8.0' },
			{ text: '8.49 current average.' },
			{ text: 'Appears met', tone: 'good' }
		],
		[
			{ text: 'Completed credits between 50% and 80%' },
			{ text: '70.44% completed.' },
			{ text: 'Appears met', tone: 'good' }
		],
		[
			{ text: 'All enrolled subjects passed / no unresolved academic issue' },
			{ text: 'Reported as regular; exact record should be verified by Gestión Escolar.' },
			{ text: 'Verify', tone: 'warn' }
		],
		[
			{ text: 'No previous ProMAI, ProMAN, or PILA participation' },
			{ text: 'Not documented in this brief.' },
			{ text: 'Verify', tone: 'alert' }
		],
		[
			{ text: 'Maintain eligibility until mobility' },
			{ text: 'Must remain in good academic standing through the process.' },
			{ text: 'Ongoing', tone: 'warn' }
		]
	]
};

export const certificateTable: BriefTable = {
	caption: 'Certificates and scores mentioned for the English-taught Hof route.',
	headers: ['Certificate', 'Threshold mentioned', 'Action'],
	rows: [
		[
			{ text: 'TOEFL ITP' },
			{ text: '543' },
			{ text: 'Confirm current acceptance and test availability.' }
		],
		[
			{ text: 'TOEFL iBT' },
			{ text: '72–94' },
			{ text: 'Confirm the score range and deadline for results.' }
		],
		[
			{ text: 'IELTS' },
			{ text: '5.5–6.0' },
			{ text: 'Confirm the exact accepted version and results timeline.' }
		],
		[
			{ text: 'Cambridge FCE' },
			{ text: 'B2' },
			{ text: 'Confirm whether an existing valid result is acceptable.' }
		]
	]
};

export const timelineTable: BriefTable = {
	headers: ['Stage', 'Dates stated in the conversation', 'What to verify'],
	rows: [
		[
			{ text: 'Online registration' },
			{ text: '17 July–21 August 2026' },
			{ text: 'Whether the form is open and the exact submission method.' }
		],
		[
			{ text: 'Complete file delivered to Academic Unit' },
			{ text: '10–28 August 2026' },
			{ text: 'UPIICSA’s internal deadline, which may be earlier.' }
		],
		[
			{ text: 'Academic Unit nominates to DRI' },
			{ text: '10 August–3 September 2026' },
			{ text: 'Which documents Max must deliver before the UA review.' }
		],
		[
			{ text: 'Results' },
			{ text: '17 September 2026' },
			{ text: 'Official publication date and any later host-university application.' }
		]
	]
};

export const choicesTable: BriefTable = {
	headers: ['Priority', 'University', 'Country', 'Why it fits', 'Important caveat'],
	rows: [
		[
			{ text: '1' },
			{ text: 'Hof University of Applied Sciences' },
			{ text: 'Germany' },
			{ text: 'Direct fit for Informatics/Engineering; English-taught options; reported allocation of 8 places.' },
			{ text: 'Confirm English certificate, current course catalogue, and revalidation.' }
		],
		[
			{ text: '2' },
			{ text: 'Hamm-Lippstadt University of Applied Sciences' },
			{ text: 'Germany' },
			{ text: 'Suggested as a practical second German option for Engineering/Technology and English-taught study.' },
			{ text: 'Reportedly only 2 places; subject fit and accepted certificate need checking.' }
		],
		[
			{ text: '3' },
			{ text: 'Universidad Politécnica de Madrid' },
			{ text: 'Spain' },
			{ text: 'Strong technical profile, broad Engineering compatibility, and reported allocation of 20 places.' },
			{ text: 'Confirm that the current annex lists Informatics-compatible courses and accepted language proof.' }
		]
	]
};

export const equivalenciesTable: BriefTable = {
	headers: ['Pending UPIICSA subject', 'Possible Hof module', 'ECTS mentioned', 'Preliminary fit', 'What must be checked'],
	rows: [
		[
			{ text: 'Computación en la nube' },
			{ text: 'Cloud Computing' },
			{ text: '5' },
			{ text: 'Very strong', tone: 'good' },
			{ text: '2027 availability; syllabus, workload, Linux and networking prerequisites.' }
		],
		[
			{ text: 'Seguridad en redes' },
			{ text: 'CCNA Network Security or CCNA Cybersecurity Operations' },
			{ text: '5' },
			{ text: 'Strong', tone: 'good' },
			{ text: 'Whether prior UPIICSA networking/security courses satisfy the CCNA sequence.' }
		],
		[
			{ text: 'Fundamentos de analítica de datos' },
			{ text: 'Process Mining' },
			{ text: '5' },
			{ text: 'Medium–strong', tone: 'warn' },
			{ text: 'Depth of analytics, programming, data methods, and learning outcomes.' }
		],
		[
			{ text: 'Gestión de proyectos' },
			{ text: 'Project Management' },
			{ text: '3' },
			{ text: 'Content strong', tone: 'warn' },
			{ text: 'Potential workload/credit shortfall; whether another course must be combined.' }
		],
		[
			{ text: 'Habilidades directivas' },
			{ text: 'International Negotiating Skills or Human Resources Development' },
			{ text: '5' },
			{ text: 'Medium–strong', tone: 'warn' },
			{ text: 'Leadership, communication, negotiation, and decision-making outcomes.' }
		],
		[
			{ text: 'Informática empresarial' },
			{ text: 'Process Management' },
			{ text: '5' },
			{ text: 'Medium', tone: 'warn' },
			{ text: 'Alignment with enterprise systems, organizational processes, and IT use.' }
		],
		[
			{ text: 'Administración de tecnologías' },
			{ text: 'Process Management or Interdisciplinary Practical Course' },
			{ text: '5' },
			{ text: 'Possible', tone: 'warn' },
			{ text: 'Detailed content and assessment method.' }
		],
		[
			{ text: 'Ingeniería del conocimiento' },
			{ text: 'Domain Specific Languages' },
			{ text: 'Not recorded' },
			{ text: 'Possible', tone: 'warn' },
			{ text: 'Strong syllabus comparison needed before proposing it.' }
		]
	]
};

export const workloadTable: BriefTable = {
	caption: 'Illustrative package only; target workload cited as around 30 ECTS, without exceeding 30–35 ECTS.',
	headers: ['Hof module', 'ECTS', 'Potential UPIICSA correspondence'],
	rows: [
		[{ text: 'Cloud Computing' }, { text: '5' }, { text: 'Computación en la nube' }],
		[{ text: 'CCNA Network Security' }, { text: '5' }, { text: 'Seguridad en redes' }],
		[{ text: 'Process Mining' }, { text: '5' }, { text: 'Fundamentos de analítica de datos' }],
		[{ text: 'International Negotiating Skills' }, { text: '5' }, { text: 'Habilidades directivas' }],
		[{ text: 'Process Management' }, { text: '5' }, { text: 'Informática empresarial' }],
		[{ text: 'Project Management' }, { text: '3' }, { text: 'Gestión de proyectos' }],
		[{ text: 'Total' }, { text: '28' }, { text: 'Six potential subjects' }]
	]
};

export const englishTable: BriefTable = {
	headers: ['Skill', 'Working estimate', 'Basis observed in conversation'],
	rows: [
		[
			{ text: 'Reading and comprehension' },
			{ text: 'B2+ / C1', tone: 'good' },
			{ text: 'Follows detailed technical, administrative, and nuanced explanations in English.' }
		],
		[
			{ text: 'Technical vocabulary' },
			{ text: 'C1', tone: 'good' },
			{ text: 'Comfortably discusses software, requirements, architecture, compatibility, and validation.' }
		],
		[
			{ text: 'General written interaction' },
			{ text: 'B2+', tone: 'good' },
			{ text: 'Expresses complex needs, emotions, constraints, and follow-up questions clearly.' }
		],
		[
			{ text: 'Grammar accuracy' },
			{ text: 'B2', tone: 'warn' },
			{ text: 'Meaning is clear; naturalness occasionally slips in prepositions, collocations, or sentence construction.' }
		],
		[
			{ text: 'Overall functional level' },
			{ text: 'Strong B2', tone: 'good' },
			{ text: 'Likely sufficient for English-taught study, subject to formal certification.' }
		]
	]
};

export const profile = [
	['Programme', 'Informatics Engineering, UPIICSA–IPN'],
	['Academic status', 'Regular student (reported)'],
	['Overall average', '8.49'],
	['Completed credits', '70.44%'],
	['Completed subjects', '45, as calculated in the conversation'],
	['Current registered load', 'One subject (reported)']
] as const;

export const actionItems = [
	['Confirm Hof’s language route in writing.', 'Ask whether English-only coursework means German A2 is unnecessary, exactly which B2 certificates are accepted, and whether the scores listed above are still current.'],
	['Confirm the internal UPIICSA deadline.', 'Ask whether the “first week of August” is a local review date and what proof is required by then.'],
	['Choose the destination order.', 'Working recommendation: Hof #1, Hamm-Lippstadt #2, Universidad Politécnica de Madrid #3; decide whether Stuttgart should replace Hamm-Lippstadt.'],
	['Select the certificate route immediately.', 'Compare test availability, result dates, cost, and the university’s written confirmation before registering.'],
	['Prepare the initial application record.', 'Complete the DRI02_S form, retain a completion screenshot, and coordinate the nomination letter, enrolment certificate, and boleta global with the Academic Unit.'],
	['Request preliminary compatibility review.', 'Provide the six proposed Hof/UPIICSA pairs and ask which syllabi, workload evidence, or forms are needed.'],
	['Collect official syllabi.', 'Obtain current programas sintéticos for the UPIICSA courses and, when released, Hof’s Summer Semester 2027 module descriptions.'],
	['Keep a written record.', 'Save emails confirming certificates, deadlines, course level, prerequisites, and equivalency decisions.']
] as const;
