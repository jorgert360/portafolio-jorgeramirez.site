import type { Project } from "./types";

/**
 * Proyectos como casos de éxito.
 * TODO(jorge): añade capturas reales en /public/projects/<slug>/ y videos demo.
 */
export const projects: Project[] = [
  {
    slug: "emisoras-latinas",
    title: "Emisoras Latinas",
    category: "Plataforma de streaming",
    type: "web",
    featured: true,
    year: "2025",
    summary: "Plataforma de radios online en vivo con miles de visitas diarias.",
    description:
      "Directorio de emisoras latinas con reproducción en vivo, optimizado hasta el último detalle para SEO, AEO y GEO. Pensado para escalar a miles de estaciones sin sacrificar velocidad.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Next.js", "SEO", "AEO", "GEO"],
    problem:
      "El nicho de radios online estaba dominado por sitios lentos, saturados de anuncios y prácticamente invisibles para buscadores y asistentes de IA. Reproducir una emisora tomaba varios clics y el rendimiento móvil era pobre.",
    solution:
      "Diseñé una plataforma ultrarrápida en Next.js con reproducción instantánea, rutas estáticas por emisora y una capa de datos estructurados (Schema.org) que la vuelve legible para Google y para modelos de lenguaje. Cada página responde una intención de búsqueda concreta.",
    architecture:
      "App Router con generación estática incremental (ISR), streams de audio servidos vía CDN, sitemap dinámico y JSON-LD por emisora. Analítica en Vercel y Core Web Vitals monitoreados en cada despliegue.",
    results: [
      "Miles de visitas orgánicas diarias sin inversión en pauta.",
      "Core Web Vitals en verde en móvil y escritorio.",
      "Posicionamiento en primeras posiciones para decenas de emisoras.",
    ],
    lessons: [
      "La optimización para IA (AEO) empieza por datos estructurados impecables.",
      "ISR permite escalar a miles de páginas manteniendo tiempos de build sanos.",
    ],
    metrics: [
      { value: "1000s", label: "Visitas diarias" },
      { value: "98+", label: "Lighthouse SEO" },
      { value: "<1s", label: "LCP móvil" },
    ],
    links: { live: "https://www.emisoraslatinas.online" },
    cover: "/projects/emisoras-latinas/cover.webp",
    accent: "#3B82F6",
  },
  {
    slug: "tengoya",
    title: "TengoYa",
    category: "Marketplace Nacional de Servicios Locales",
    type: "web",
    featured: true,
    year: "2024",
    summary: "Marketplace nacional de servicios locales en Colombia que conecta profesionales verificados con clientes en más de 1.122 municipios mediante contacto directo por WhatsApp.",
    description:
      "TengoYa es una plataforma tecnológica desarrollada para digitalizar y fortalecer la economía de los servicios locales en Colombia. Conecta personas que necesitan soluciones inmediatas para el hogar, negocios o emergencias con profesionales independientes, técnicos especializados y pequeñas empresas verificadas de todo el país. Opera con cobertura en más de 1.122 municipios colombianos, permitiendo búsquedas geolocalizadas por ciudad, municipio y categoría de servicio. El contacto es directo por WhatsApp, eliminando intermediarios, costos de comisión y procesos complejos de contratación.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    tags: ["Next.js", "SEO", "AEO", "Marketplace"],
    problem:
      "El mercado colombiano de servicios locales presentaba una fuerte fragmentación. La mayoría de profesionales independientes dependían de recomendaciones informales, grupos de Facebook, WhatsApp o directorios desactualizados para conseguir clientes. Para los usuarios, encontrar un profesional de confianza era un proceso lento y frustrante, sin acceso a reseñas reales ni verificación. Las plataformas existentes cobraban altas comisiones o se limitaban a grandes ciudades.",
    solution:
      "Construí TengoYa como un marketplace nacional que democratiza el acceso al mercado digital para miles de trabajadores independientes. La plataforma ofrece búsqueda geolocalizada por municipio y categoría, perfiles profesionales optimizados con verificación, contacto directo por WhatsApp sin intermediarios y un modelo freemium que permite a cualquier profesional registrarse gratis y optar por planes de visibilidad desde $10.000 COP mensuales. La arquitectura SEO local escala a miles de combinaciones de búsqueda (electricista en Bogotá, plomero en Bucaramanga, etc.) captando tráfico orgánico altamente segmentado.",
    architecture:
      "Next.js con App Router, generación estática para páginas de categorías y municipios, búsqueda dinámica con filtros por ubicación y servicio, autenticación con Google OAuth, base de datos PostgreSQL con ORM tipado, despliegue en Vercel con ISR. La plataforma genera automáticamente miles de páginas optimizadas para SEO local, permitiendo captar tráfico orgánico altamente segmentado desde Google. Integración estratégica de WhatsApp para minimizar la pérdida de usuarios durante el proceso de contacto.",
    results: [
      "Cobertura nacional en más de 1.122 municipios de Colombia.",
      "Miles de profesionales registrados con perfiles verificados.",
      "Contacto directo por WhatsApp sin intermediarios ni comisiones.",
      "Planes de visibilidad desde $10.000 COP mensuales para profesionales.",
      "Posicionamiento en búsquedas locales altamente segmentadas.",
    ],
    lessons: [
      "El SEO local sigue siendo uno de los canales de adquisición más rentables para marketplaces de servicios.",
      "Reducir pasos entre búsqueda y contacto aumenta significativamente las conversiones.",
      "WhatsApp es el canal más efectivo para conectar oferta y demanda en mercados locales colombianos.",
      "Un modelo freemium bien diseñado acelera el crecimiento inicial de la plataforma.",
      "La confianza y la verificación son factores determinantes en plataformas de servicios.",
      "La combinación de contenido programático y SEO local puede escalar un marketplace nacional sin depender exclusivamente de pauta publicitaria.",
    ],
    metrics: [
      { value: "1.122+", label: "Municipios cubiertos" },
      { value: "20+", label: "Categorías de servicio" },
      { value: "24/7", label: "Emergencias" },
    ],
    links: { live: "https://www.tengoya.com.co/" },
    cover: "/projects/tengoya/cover.webp",
    accent: "#8B5CF6",
  },
  {
    slug: "carweb",
    title: "CarWeb",
    category: "Plataforma de comercialización de vehículos",
    type: "web",
    featured: true,
    year: "2024",
    summary: "Plataforma integral para la compra, venta y promoción digital de vehículos en Colombia, con catálogo administrable, filtros avanzados y SEO especializado para el sector automotor.",
    description:
      "CarWeb es una plataforma web desarrollada para digitalizar el proceso de compra, venta y promoción de vehículos en Colombia. El proyecto reúne en un solo ecosistema a concesionarios, compraventas, importadores y vendedores independientes, permitiéndoles publicar su inventario de forma profesional y ofrecer una experiencia moderna de búsqueda para los compradores. La plataforma fue diseñada bajo una arquitectura escalable y enfocada en rendimiento, permitiendo administrar grandes catálogos de vehículos con filtros avanzados, páginas optimizadas para SEO y una experiencia completamente responsive. Su objetivo principal es facilitar el encuentro entre compradores y vendedores mediante un proceso rápido, intuitivo y confiable, reduciendo la dependencia de redes sociales y clasificados tradicionales.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    tags: ["Next.js", "SEO", "Automotriz", "Marketplace"],
    problem:
      "El mercado automotriz colombiano migró progresivamente hacia los canales digitales; sin embargo, muchos negocios continuaban utilizando herramientas poco especializadas para promocionar su inventario, limitando su alcance y dificultando la gestión de la información. Los compradores enfrentaban catálogos desorganizados, información incompleta y procesos de búsqueda lentos. Las plataformas generalistas no ofrecían la estructura necesaria para el sector automotor.",
    solution:
      "Construí CarWeb como una plataforma especializada para el sector automotor con catálogo digital de vehículos, fichas detalladas con información técnica y comercial, filtros inteligentes de búsqueda por marca, modelo, precio, ciudad, año y tipo de vehículo. Incorporé un panel administrativo intuitivo para gestionar el inventario sin conocimientos técnicos, galerías de imágenes optimizadas y una estructura SEO que posiciona cada vehículo y categoría en búsquedas específicas como 'Toyota Corolla usado en Bogotá' o 'Camionetas 4x4 en Colombia'.",
    architecture:
      "Next.js con App Router y generación dinámica de páginas, base de datos PostgreSQL para la gestión centralizada del catálogo, panel administrativo para crear, editar y actualizar publicaciones en tiempo real, optimización de imágenes para carga rápida, diseño responsive para computadores, tablets y móviles, y estructura SEO modular que favorece la indexación de cada vehículo y categoría en motores de búsqueda.",
    results: [
      "Plataforma especializada para la comercialización digital de vehículos en Colombia.",
      "Administración centralizada del inventario automotriz sin conocimientos técnicos.",
      "Mejor organización de la información comercial con fichas técnicas detalladas.",
      "Mayor visibilidad digital para concesionarios, compraventas y vendedores independientes.",
      "Experiencia de navegación rápida, intuitiva y completamente responsive.",
      "Base tecnológica preparada para futuras ampliaciones del ecosistema.",
    ],
    lessons: [
      "La organización estructurada del inventario mejora significativamente la experiencia de búsqueda.",
      "El SEO especializado por marca, modelo y ciudad puede convertirse en uno de los principales canales de adquisición de tráfico.",
      "La velocidad de carga influye directamente en la permanencia del usuario y en la conversión.",
      "Un panel administrativo intuitivo reduce la curva de aprendizaje y facilita la actualización constante del inventario.",
      "La calidad de las imágenes y la información técnica generan mayor confianza durante el proceso de compra.",
    ],
    metrics: [
      { value: "Catálogo", label: "Inventario administrable" },
      { value: "SEO", label: "Posicionamiento automotor" },
      { value: "100%", label: "Responsive" },
    ],
    links: { live: "https://www.carweb.com.co/" },
    cover: "/projects/carweb/cover.webp",
    accent: "#06B6D4",
  },
  {
    slug: "histech",
    title: "Histech",
    category: "Soluciones tecnológicas empresariales",
    type: "web",
    featured: true,
    year: "2023",
    summary: "Plataforma corporativa para una empresa especializada en transformación tecnológica, con portafolio integral de servicios y proyección en LATAM y EE.UU.",
    description:
      "Histech es una plataforma web corporativa desarrollada para representar el ecosistema digital de una empresa especializada en transformación tecnológica. Presenta un amplio portafolio de servicios dirigidos al sector empresarial organizado mediante unidades de negocio especializadas (Labs): Code Lab (desarrollo de software), Support Lab (soporte tecnológico), Security Lab (ciberseguridad), Data Lab (analítica de datos), Integration Lab (integración de infraestructura), Odoo Lab (ERP Odoo) y Renta (alquiler de equipos). La plataforma comunica una visión de expansión internacional con presencia en Colombia, Perú, Panamá, Argentina y Estados Unidos, y cuenta con alianzas estratégicas con Microsoft, Adobe, Lenovo, Dell, HP y Odoo.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Next.js", "SEO", "B2B", "Corporativo"],
    problem:
      "En un entorno donde las empresas enfrentan procesos acelerados de transformación digital, muchas organizaciones requerían un proveedor capaz de ofrecer soluciones integrales en lugar de servicios aislados. Histech necesitaba una plataforma que centralizara todo su portafolio de soluciones, generara oportunidades comerciales calificadas, comunicara su capacidad técnica y proyectara su visión de expansión internacional en LATAM y Estados Unidos.",
    solution:
      "Construí una plataforma corporativa con arquitectura modular organizada por unidades de negocio (Labs), cada una con información detallada de su propuesta de valor y aplicaciones empresariales. Incorporé llamados a la acción orientados a la solicitud de reuniones y cotizaciones, páginas independientes por servicio para SEO, y una estructura escalable para incorporar nuevas soluciones, alianzas y mercados sin rediseños profundos. El diseño comunica confianza, experiencia y capacidad de ejecución desde la primera interacción.",
    architecture:
      "Next.js con App Router y organización modular por áreas de negocio, generación de páginas independientes para cada servicio con optimización SEO, diseño responsive para escritorio, tablet y móvil, llamados a la acción estratégicos para captación de oportunidades comerciales, y arquitectura escalable preparada para expansión regional e incorporación de nuevas líneas de negocio.",
    results: [
      "Plataforma corporativa que consolida todas las líneas de negocio de Histech en un solo ecosistema digital.",
      "Comunicación clara de un portafolio integral de soluciones tecnológicas empresariales.",
      "Mayor capacidad para generar oportunidades comerciales calificadas.",
      "Fortalecimiento de la presencia digital de la empresa con proyección internacional.",
      "Arquitectura preparada para expansión en LATAM y Estados Unidos.",
      "Base sólida para estrategias de marketing digital y posicionamiento orgánico.",
    ],
    lessons: [
      "Una arquitectura bien organizada mejora la comprensión de portafolios tecnológicos complejos.",
      "Dividir los servicios en unidades especializadas facilita la navegación y fortalece el posicionamiento SEO.",
      "La combinación de contenido técnico y enfoque comercial incrementa la generación de clientes potenciales.",
      "Un sitio corporativo debe transmitir confianza, experiencia y capacidad de ejecución desde la primera interacción.",
      "Diseñar pensando en escalabilidad permite incorporar nuevas líneas de negocio sin afectar la experiencia del usuario.",
    ],
    metrics: [
      { value: "7", label: "Labs especializados" },
      { value: "5", label: "Países con presencia" },
      { value: "B2B", label: "Enfoque empresarial" },
    ],
    links: { live: "https://histech.com.co/" },
    cover: "/projects/histech/cover.webp",
    accent: "#3B82F6",
  },
  {
    slug: "christmas-radio",
    title: "Christmas Radio Navidad",
    category: "Streaming de música navideña",
    type: "web",
    featured: true,
    year: "2024",
    summary: "Plataforma de streaming de música navideña 24/7 con acceso inmediato desde cualquier dispositivo, sin registro ni instalaciones.",
    description:
      "Christmas Radio Navidad es una plataforma digital de entretenimiento diseñada para ofrecer una experiencia inmersiva alrededor de la música navideña. El proyecto reúne una transmisión continua disponible las 24 horas del día, los 365 días del año, permitiendo a los usuarios disfrutar de una programación temática desde cualquier dispositivo con conexión a Internet. Más que una simple emisora online, la plataforma busca mantener vivo el espíritu de la Navidad durante todo el año mediante una interfaz moderna, acceso inmediato al reproductor y una experiencia optimizada tanto para dispositivos móviles como para escritorio.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tags: ["Next.js", "SEO", "Streaming", "Navidad"],
    problem:
      "La mayoría de emisoras tradicionales únicamente incluyen programación navideña durante los meses de noviembre y diciembre, dejando sin alternativas a los usuarios que disfrutan de este contenido el resto del año. Además, las plataformas existentes requerían registro, instalación de aplicaciones o tenían interfaces complejas que añadían fricción innecesaria para escuchar música.",
    solution:
      "Construí una plataforma ligera y altamente disponible con streaming continuo 24/7 los 365 días del año, acceso inmediato sin registro ni descargas, y una interfaz minimalista centrada en el reproductor. La experiencia funciona completamente desde el navegador en cualquier dispositivo, eliminando toda barrera entre el usuario y la música. El diseño temático transmite la esencia navideña sin comprometer la usabilidad ni el rendimiento.",
    architecture:
      "Next.js con reproductor de audio global y streaming vía CDN, diseño responsive para computadores, tablets y móviles, acceso inmediato sin autenticación ni registro, arquitectura ligera optimizada para tiempos de carga reducidos, y despliegue en Vercel preparado para escalar bajo demanda. Estructura SEO orientada a búsquedas de radio y música navideña.",
    results: [
      "Transmisión continua de música navideña 24/7 durante todo el año.",
      "Acceso multiplataforma desde cualquier navegador sin instalaciones ni registro.",
      "Experiencia de reproducción inmediata con interfaz minimalista y temática.",
      "Comunidad de usuarios activa durante todo el año, no solo en temporada.",
      "Base tecnológica preparada para futuras ampliaciones como programación en vivo o apps móviles.",
    ],
    lessons: [
      "En plataformas de streaming, la velocidad de acceso es tan importante como la calidad del contenido.",
      "Reducir la cantidad de pasos para iniciar la reproducción mejora significativamente la experiencia del usuario.",
      "Un diseño minimalista permite que el contenido principal tenga mayor protagonismo.",
      "Una temática claramente definida fortalece la identidad de marca y facilita el posicionamiento en nichos específicos.",
      "Una arquitectura ligera y optimizada favorece el rendimiento y la disponibilidad del servicio.",
    ],
    metrics: [
      { value: "24/7", label: "Streaming todo el año" },
      { value: "0", label: "Registro requerido" },
      { value: "100%", label: "Responsive" },
    ],
    links: { live: "https://www.christmasradionavidad.com/" },
    cover: "/projects/christmas-radio/cover.webp",
    accent: "#8B5CF6",
  },
  {
    slug: "robot-alejo",
    title: "Robot Alejo 2.0",
    category: "Automatización RPA",
    type: "rpa",
    featured: true,
    year: "2024",
    summary: "Robot desatendido en UiPath que automatizó el 100% del proceso PICI2, eliminando la digitación manual y reduciendo los tiempos de respuesta en un 45%.",
    description:
      "Robot desatendido desarrollado en UiPath que automatizó por completo el proceso PICI2, eliminando la digitación manual, reduciendo significativamente los tiempos de procesamiento y garantizando una ejecución confiable, trazable y libre de errores operativos.",
    tech: ["UiPath", "Python", "SQL", "UiPath Orchestrator", "Microsoft Excel"],
    tags: ["UiPath", "RPA", "Python"],
    problem:
      "El proceso PICI2 dependía totalmente de la digitación manual de información, lo que generaba tiempos elevados de procesamiento, alta carga operativa y un riesgo constante de errores humanos. El crecimiento del volumen de transacciones hacía cada vez más difícil cumplir con los acuerdos de nivel de servicio (SLA).",
    solution:
      "Diseñé e implementé Robot Alejo 2.0, una solución RPA basada en UiPath ReFramework, capaz de ejecutar de forma desatendida todo el proceso de captura, validación y registro de información. La automatización incorpora lectura automática de datos, validaciones de negocio, gestión de excepciones, reintentos automáticos, registro detallado de cada transacción y monitoreo centralizado mediante UiPath Orchestrator.",
    architecture:
      "UiPath ReFramework como motor de automatización, UiPath Orchestrator para la administración de colas, programación y monitoreo, scripts en Python para validaciones y procesamiento de datos, consultas SQL para integración con bases de datos, generación automática de reportes en Microsoft Excel y ejecución desatendida (Unattended Robot) con trazabilidad completa del proceso.",
    results: [
      "Automatización del 100% del proceso PICI2, eliminando la digitación manual.",
      "Reducción del 45% en los tiempos de respuesta (SLA).",
      "Cero errores asociados a la transcripción manual de información.",
      "Mayor estabilidad operativa y reducción de retrabajos.",
      "Ejecución continua del proceso sin intervención humana.",
    ],
    lessons: [
      "El uso de UiPath ReFramework incrementa la robustez, mantenibilidad y escalabilidad de las automatizaciones empresariales.",
      "Una adecuada estrategia de manejo de excepciones reduce significativamente las interrupciones operativas.",
      "La trazabilidad de cada transacción es tan importante como la automatización del proceso, ya que facilita auditorías, monitoreo y mejora continua.",
      "Diseñar automatizaciones pensando en su crecimiento futuro permite reutilizar componentes y acelerar nuevos desarrollos.",
    ],
    metrics: [
      { value: "100%", label: "Proceso automatizado" },
      { value: "-45%", label: "Reducción del SLA" },
      { value: "0", label: "Errores de digitación" },
    ],
    links: {},
    cover: "/projects/robot-alejo/cover.webp",
    accent: "#06B6D4",
  },
  {
    slug: "migracion-pega-uipath",
    title: "Migración Pega → UiPath",
    category: "Modernización RPA",
    type: "rpa",
    featured: false,
    year: "2026",
    summary: "Migración de procesos legados de Pega hacia UiPath en banca.",
    description:
      "Modernización de automatizaciones bancarias construidas en Pega, reimplementadas en UiPath con ReFramework sin interrumpir la operación.",
    tech: ["UiPath", "ReFramework", "Orchestrator", "C#", "REST APIs"],
    tags: ["UiPath", "RPA", "Banca"],
    problem:
      "Procesos críticos vivían en Pega, una plataforma costosa y difícil de mantener, con dependencia de un stack legado.",
    solution:
      "Reimplementé los procesos en UiPath sobre ReFramework, replicando reglas de negocio, integrando APIs y desplegando en Orchestrator con despliegue gradual y rollback seguro.",
    architecture:
      "UiPath ReFramework, integración con C# y APIs REST, colas y activos en Orchestrator, y una estrategia de migración por fases con validación paralela.",
    results: [
      "Procesos migrados sin interrumpir la operación bancaria.",
      "Reducción de dependencia del stack legado.",
      "Base estandarizada para nuevas automatizaciones.",
    ],
    lessons: [
      "Migrar no es traducir: es una oportunidad para rediseñar con mejores prácticas.",
      "La validación en paralelo reduce el riesgo a casi cero.",
    ],
    metrics: [
      { value: "Pega→Ui", label: "Migración" },
      { value: "0", label: "Downtime operativo" },
    ],
    links: {},
    cover: "/projects/migracion-pega-uipath/cover.webp",
    accent: "#3B82F6",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
