export const me = {
  name: 'Renzo Sebastián Hinojosa Yaranga',
  short: 'Renzo Hinojosa',
  uni: 'Universidad Nacional del Centro del Perú (UNCP)',
  course: 'Desarrollo de Aplicaciones Web · IS093A',
  teacher: 'Dr. Jaime Suasnabar Terrel',
  github: 'https://github.com/RenzoHinojosa',
  roles: ['Frontend Developer', 'React Enthusiast', 'Estudiante de Ing. de Sistemas', 'UI Tinkerer'],
}
export const skills = [
  ['HTML5', 92, 'SiHtml5'], ['CSS3', 88, 'SiCss3'], ['JavaScript', 82, 'SiJavascript'],
  ['TypeScript', 60, 'SiTypescript'], ['React', 78, 'SiReact'], ['Tailwind CSS', 80, 'SiTailwindcss'],
  ['Bootstrap', 85, 'SiBootstrap'], ['Git / GitHub', 80, 'SiGit'],
]
const gh = (r) => `https://github.com/RenzoHinojosa/${r}`
export const projects = [
  { id: 'portafolio-web-uncp', name: 'Portafolio Web UNCP', cat: 'css', icon: 'FaGlobe', color: 'c4', tech: ['HTML5', 'CSS3', 'JavaScript'], desc: 'Portafolio web del curso con diseño responsivo y secciones organizadas.' },
  { id: 'practica-web', name: 'Práctica Web', cat: 'css', icon: 'FaLaptopCode', color: 'c2', tech: ['HTML5', 'CSS3', 'Flexbox', 'Grid'], desc: 'Primera práctica: estructura semántica, SEO básico y maquetación con Flexbox y Grid.' },
  { id: 'practica-calificada-2', name: 'Práctica Calificada 2', cat: 'css', icon: 'FaClipboardCheck', color: 'c3', tech: ['HTML5', 'CSS3', 'Responsive'], desc: 'Evaluación práctica aplicando maquetación responsiva y buenas prácticas.' },
  { id: 'laboratorio-web-3', name: 'Laboratorio Web 3', cat: 'css', icon: 'FaFlask', color: 'c5', tech: ['Bootstrap', 'Tailwind CSS'], desc: 'Laboratorio con librerías CSS: componentes, grid system y clases utilitarias.' },
  { id: 'proyecto-semana04', name: 'Proyecto Semana 04', cat: 'js', icon: 'FaBolt', color: 'c3', tech: ['JavaScript', 'TypeScript', 'DOM'], desc: 'Interactividad con JavaScript: manipulación del DOM, funciones y tipado con TypeScript.' },
  { id: 'Bruma-cafe-dashboard', name: 'Bruma Café Dashboard', cat: 'react', icon: 'FaCoffee', color: 'c1', tech: ['React', 'Dashboard', 'CSS'], desc: 'Dashboard interactivo para una cafetería con componentes reutilizables en React.' },
  { id: 'Kuntur-Bar', name: 'Kuntur Bar', cat: 'react', icon: 'FaGlassMartiniAlt', color: 'c5', tech: ['Frontend', 'UI', 'Responsive'], desc: 'Sitio web para un bar con identidad visual propia y diseño atractivo.' },
  { id: 'web-react-semana6', name: 'Web React · Semana 6', cat: 'react', icon: 'FaReact', color: 'c4', tech: ['React', 'Eventos', 'Fetch / Axios'], desc: 'Manejo de eventos, renderizado condicional e iterativo y consumo de APIs.' },
].map((p) => ({ ...p, url: gh(p.id) }))

export const weeks = [
  { n: 1, topic: 'Fundamentos Web', theory: true, tags: ['DNS', 'HTTP', 'VS Code'], repos: [], desc: 'Funcionamiento de la web: DNS, HTTP y roles (Frontend, Backend, Fullstack). Configuración del entorno con VS Code.', ref: 'Entendí cómo viaja una petición por internet y preparé mi entorno de trabajo para todo el curso.' },
  { n: 2, topic: 'HTML y CSS', tags: ['HTML5', 'DOM', 'Flexbox', 'Grid'], repos: ['practica-web', 'portafolio-web-uncp'], desc: 'Estructura HTML5, árbol DOM, SEO, CSS3, Flexbox, Grid y diseño responsivo.', ref: 'Mi primer acercamiento real a la maquetación: pasar de un diseño a código que se adapta a cualquier pantalla.' },
  { n: 3, topic: 'Bootstrap y Tailwind', tags: ['Bootstrap', 'Tailwind'], repos: ['practica-calificada-2', 'laboratorio-web-3'], desc: 'Interfaces con librerías CSS: componentes, grid system y utilidades.', ref: 'Descubrí cuánto aceleran el desarrollo las librerías CSS y cuándo conviene usar cada una.' },
  { n: 4, topic: 'JavaScript y TypeScript', tags: ['JS', 'TS', 'DOM', 'Canvas'], repos: ['proyecto-semana04'], desc: 'Variables, operadores, estructuras de control, funciones, manejo del DOM, TypeScript y Canvas.', ref: 'Las páginas cobraron vida al manipular el DOM; TypeScript me mostró el valor del tipado.' },
  { n: 5, topic: 'Framework JS (React)', theory: true, tags: ['JSX', 'Props', 'CSR'], repos: ['Bruma-cafe-dashboard'], desc: 'Estructura de React, Client Side Rendering, componentes, JSX, Props y Children, estilos en React.', ref: 'Pensar en componentes cambió mi forma de estructurar interfaces.' },
  { n: 6, topic: 'Eventos y APIs', tags: ['Eventos', 'Fetch', 'Axios'], repos: ['web-react-semana6', 'Kuntur-Bar'], desc: 'Eventos, renderizado condicional e iterativo, consumo de APIs con Fetch y Axios.', ref: 'Conectar mi app a datos reales fue el momento en que todo hizo clic.' },
]
export const reflexion = [
  ['¿Qué aprendí?', 'Desarrollé aplicaciones frontend completas: desde la estructura con HTML y CSS hasta la lógica con JavaScript y React. Comprendí la importancia del diseño responsivo, el SEO y el consumo de APIs.'],
  ['¿Cómo aprendí?', 'Practicando de forma constante. Cada laboratorio me enfrentó a problemas reales: investigar, equivocarme, corregir y subir el resultado a GitHub. La retroalimentación del docente fue clave.'],
  ['Reflexión metacognitiva', 'Aún tengo mucho por aprender, sobre todo en manejo avanzado de estado en React y optimización de rendimiento, pero hoy me siento más seguro como desarrollador frontend y con ganas de profundizar.'],
]
export const books = [
  'Media Active (2014). Aprende a Programar APPS con HTML5, CSS y JavaScript. Alfaomega.',
  'Zickert, F. (2020). React Architect: Full Stack React App Development and Serverless Deployment.',
  'Barklund, M. (2024). React in Depth. Manning Publications.',
  'Rappin, N. (2022). Modern CSS with Tailwind (2nd ed.). Pragmatic Bookshelf.',
  'Khan, Y. (2024). Advanced JavaScript Unleashed.',
]
export const links = [
  ['Bootstrap', 'https://getbootstrap.esdocu.com/docs/5.1/getting-started/introduction/'],
  ['Tailwind CSS', 'https://v2.tailwindcss.com/docs'],
  ['MDN · JavaScript', 'https://developer.mozilla.org/es/docs/Web/JavaScript'],
  ['React', 'https://es.react.dev/learn'],
  ['Vite', 'https://vite.dev/guide/'],
]
