/* ==========================================================================
   DT-U-Bordeaux — site content
   Everything shown on the site comes from this file. To add a project,
   member or publication, add an entry to the matching list below.
   ========================================================================== */

const SITE = {
  name: "DT-U-Bordeaux",
  fullName: "Digital Twin Research Group",
  university: "University of Bordeaux",
  tagline: "Engineering digital twins of cities, systems and people — from modeling & simulation foundations to deployed platforms.",
  lab: "IMS Laboratory (UMR 5218 CNRS)",
  address: ["IMS Laboratory — UMR 5218 CNRS", "University of Bordeaux, Bordeaux INP", "351 Cours de la Libération", "33405 Talence Cedex, France"],
  email: "",            // group contact email — to be provided
  github: "https://github.com/dt-u-bordeaux",
};

/* Research axes: the themes projects belong to. */
const AXES = [
  {
    id: "urban",
    title: "Urban Digital Twins",
    icon: "city",
    summary: "Multi-scale, multi-perspective digital twins of cities and territories — mobility, campus infrastructure, resilience and crisis management.",
  },
  {
    id: "foundations",
    title: "Digital Twin Foundations",
    icon: "layers",
    summary: "Generic architectures, data management frameworks and the systems-engineering methodology that turns modeling & simulation into operational digital twins.",
  },
  {
    id: "human",
    title: "Human-Centred Digital Twins",
    icon: "people",
    summary: "Immersive, cognitive and citizen-facing digital twins that put people in the loop of design and decision making.",
  },
];

/* Projects. `axis` must match an AXES id; `members` and publication `projects`
   use the ids below. */
const PROJECTS = [
  {
    id: "ubudt",
    title: "UBUDT — University of Bordeaux Urban Digital Twin",
    short: "UBUDT",
    axis: "urban",
    status: "Ongoing",
    summary: "An urban digital twin of the University of Bordeaux campus, built with a holistic, multi-scale and multi-perspective systems-engineering approach, with mobility as the first use case.",
    description: [
      "UBUDT develops an urban digital twin of the University of Bordeaux campus as a living testbed for urban digital twin engineering. The project applies a holistic, multi-scale and multi-perspective development approach and a platform-centric methodology aimed at scalable urban digital twins.",
      "Mobility is the first operational use case, combining data-driven and model-driven techniques to represent and simulate how people and vehicles move across the territory.",
    ],
    members: ["zali", "mktraore"],
    funding: [],
    links: [],
  },
  {
    id: "enlight-disrupt",
    title: "ENLIGHT-DISRUPT",
    short: "ENLIGHT-DISRUPT",
    axis: "human",
    status: "Ongoing",
    summary: "European university-alliance project in which the group contributes on data management for urban digital twins and citizen-science activities on city resilience.",
    description: [
      "Within the ENLIGHT-DISRUPT project, the group contributes expertise on data management for urban digital twins and takes part in citizen-science activities that explore how residents can help shape the \"digital brain\" of a resilient city.",
    ],
    members: ["zali"],
    funding: [],
    links: [],
  },
  {
    id: "ditrisc",
    title: "DITRISC — Digital Twins for Risk and Crisis Management",
    short: "DITRISC",
    axis: "urban",
    status: "Ongoing",
    summary: "Digital twins for the management of risks and crises (Jumeaux Numériques pour la gestion des risques et des crises), within PEPR Risques and MITI-CNRS.",
    description: [
      "DITRISC (Jumeaux Numériques pour la gestion des risques et des crises) brings together researchers working on digital twins for risk and crisis management, within the PEPR Risques programme and MITI-CNRS. The group contributes its work on urban digital twin engineering.",
    ],
    members: ["zali", "mktraore"],
    funding: ["PEPR Risques", "MITI-CNRS"],
    links: [],
  },
  {
    id: "dt-architecture",
    title: "Generic Digital Twin Architecture & Data Management",
    short: "DT Architecture",
    axis: "foundations",
    status: "Ongoing",
    summary: "A generic, object-oriented architecture for digital twins and DMFDT, a data management framework for digital twins.",
    description: [
      "This line of work defines a generic architecture for digital twins together with its object-oriented implementation, and DMFDT, a data management framework that structures how digital twins acquire, store and exploit data.",
      "It builds on the group's analysis of how digital twins evolve from classical modeling and simulation.",
    ],
    members: ["zali", "mktraore"],
    funding: [],
    links: [],
  },
];

/* Team members. Roles and links to be completed. */
const TEAM = [
  {
    id: "mktraore",
    name: "Mamadou Kaba Traoré",
    role: "",
    photo: "",
    bio: "",
    links: {},
  },
  {
    id: "zali",
    name: "Zeeshan Ali",
    role: "Researcher — PhD, PMP",
    photo: "",
    bio: "Digital twin & systems engineering researcher working on urban digital twins: modeling & simulation, complex systems engineering and enterprise interoperability.",
    links: {
      website: "https://zeeshanali0001.github.io",
      linkedin: "https://www.linkedin.com/in/zeeshanali0001",
      github: "https://github.com/zeeshanali0001",
    },
  },
];

/* Publications. type: journal | conference | chapter | national | thesis */
const PUBLICATIONS = [
  { year: 2026, type: "journal", status: "Published", title: "A holistic approach to multi-scale and multi-perspective urban digital twin development", authors: "Ali, Z. & Traoré, M.K.", venue: "Computers, Environment and Urban Systems, 127, 102432 — Elsevier", doi: "10.1016/j.compenvurbsys.2026.102432", projects: ["ubudt"] },
  { year: 2026, type: "chapter", status: "Published", title: "Human-Centred Digital Twin: Concepts, Methods, and Technologies", authors: "Traoré, M.K., Poursoltan, M., Zahediyami, M. & Ali, Z.", venue: "Advanced Architectures and Techniques for Smart Industry, pp. 41–61 — Springer Nature Singapore", doi: "10.1007/978-981-95-5271-9_3", projects: [] },
  { year: 2026, type: "chapter", status: "Published", title: "Immersive and cognitive urban digital twins for sustainable and resilient smart territories", authors: "Traoré, M.K., Diakité, M. & Ali, Z.", venue: "Resilient Complex Adaptive Systems, pp. 425–440 — Wiley", doi: "10.1002/9781394326303.ch15", projects: [] },
  { year: 2026, type: "national", status: "Presented", title: "Engineering Towards Scalable Urban Digital Twins: A Platform-Centric Methodology and Insights", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Bordeaux, France", doi: "", projects: ["ubudt"] },
  { year: 2026, type: "journal", status: "Major revision", title: "A Generic Architecture and its Object-Oriented Implementation for Digital Twins", authors: "Ali, Z., Zahediyami, M., Delos, V. & Traoré, M.K.", venue: "Software and Systems Modeling — Springer", doi: "", projects: ["dt-architecture"] },
  { year: 2026, type: "journal", status: "Under review", title: "A Hybrid Data and Model-Driven Approach to Mobility Urban Digital Twin", authors: "Ali, Z. & Traoré, M.K.", venue: "Elsevier (submitted)", doi: "", projects: ["ubudt"] },
  { year: 2025, type: "conference", status: "Published", title: "Developing Urban Digital Twin for Mobility", authors: "Ali, Z., Diakité, M. & Traoré, M.K.", venue: "Annual Modeling and Simulation Conference (ANNSIM 2025), pp. 1–13 — IEEE", doi: "10.22360/ANNSIM.2025.CPS+DT.63", projects: ["ubudt"] },
  { year: 2025, type: "conference", status: "Published", title: "Urban Digital Twin Engineering: A Multi-Perspective and Holistic Approach", authors: "Ali, Z. & Traoré, M.K.", venue: "International Conference on Computers and Industrial Engineering (CIE), pp. 102–111", doi: "", projects: ["ubudt"] },
  { year: 2025, type: "national", status: "Presented", title: "University of Bordeaux Urban Digital Twin: UBUDT", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Mulhouse, France", doi: "", projects: ["ubudt"] },
  { year: 2025, type: "thesis", status: "PhD thesis", title: "Systems Engineering Approach to the Development of Urban Digital Twin", authors: "Ali, Z.", venue: "Doctoral dissertation, Université de Bordeaux", doi: "10.70675/4f2b1d56zf662z4b41za04bz698dbd255c8f", projects: ["ubudt"] },
  { year: 2024, type: "journal", status: "Published", title: "From modeling and simulation to digital twin: evolution or revolution?", authors: "Ali, Z., Biglari, R., Denil, J., Mertens, J., Poursoltan, M. & Traoré, M.K.", venue: "Simulation, 100(7), pp. 751–769 — SAGE", doi: "10.1177/00375497241234680", projects: ["dt-architecture"] },
  { year: 2024, type: "conference", status: "Published", title: "DMFDT: Data Management Framework for Digital Twin", authors: "Ali, Z., Poursoltan, M. & Traoré, M.K.", venue: "Working Conference on Virtual Enterprises (PRO-VE), pp. 130–144 — Springer", doi: "10.1007/978-3-031-71743-7_9", projects: ["dt-architecture"] },
  { year: 2024, type: "national", status: "Presented", title: "Building Urban Digital Twin: An Overview", authors: "Ali, Z. & Traoré, M.K.", venue: "SAGIP — Lyon, France", doi: "", projects: ["ubudt"] },
];

/* News & talks (newest first). */
const NEWS = [
  { date: "2026-09-25", title: "\"Mission Resilience: Become the Digital Brain of Your City\"", text: "LEGO Serious Play citizen-science activity, ENLIGHT-DISRUPT — Eureka Science Event, Groningen, Netherlands.", project: "enlight-disrupt" },
  { date: "2026-01-27", title: "\"Data Management for Urban Digital Twins\"", text: "1st Annual School of the ENLIGHT-DISRUPT project — University of the Basque Country, Bilbao, Spain.", project: "enlight-disrupt" },
  { date: "2026-01-12", title: "\"Urban Digital Twin Engineering\"", text: "DITRISC workshop, PEPR Risques & MITI-CNRS — Paris, France.", project: "ditrisc" },
  { date: "2025-11-20", title: "\"Digital Twin and Systems Engineering\"", text: "SAGIP Technical Committee meeting — Paris, France.", project: "" },
];
