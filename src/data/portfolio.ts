export type Project = {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  problem: string;
  solution: string;
  contribution: string[];
  stack: string[];
  outcome: string;
  technicalDetails: string[];
  featuredMetric?: string;
};

export type Experience = {
  role: string;
  company: string;
  client?: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Automated SAP Data Extraction & Reporting Engine",
    subtitle: "Python automation for SAP extraction and daily operational reporting.",
    category: "SAP AUTOMATION / ETL",
    problem:
      "The project description estimates that manual SAP report extraction took more than 10 hours per week and created a risk of errors during Excel merges; the estimate's measurement basis is not specified.",
    solution:
      "Built a Python bot that detects daily input files using dynamic dates, logs into SAP, extracts report data, and performs the required transformations.",
    contribution: [
      "Built the end-to-end extraction and processing workflow.",
      "Implemented Gatekeeper error handling and dynamic file-path detection with glob.",
      "Automated Excel formatting with status-based color coding.",
    ],
    stack: ["Python", "SAP GUI", "Pandas", "ETL", "openpyxl"],
    outcome:
      "Project materials report 100% data accuracy; the evaluation scope and measurement method are not specified.",
    technicalDetails: [
      "Dynamic-date input discovery",
      "SAP report extraction",
      "Gatekeeper error handling",
      "Status-based Excel formatting",
    ],
    featuredMetric: "Reported 100% accuracy · evaluation basis unspecified",
  },
  {
    number: "02",
    title: "Dedicated Truck Utilization Tracker (DTUT)",
    subtitle: "An operations analytics platform built for reporting across multiple plants.",
    category: "OPERATIONS ANALYTICS / DATA APP",
    problem:
      "Truck-utilization tracking across multiple plants relied on manual Excel-based workflows.",
    solution:
      "Designed and developed an end-to-end platform combining a Streamlit application, PostgreSQL, Python ETL, interactive analytics, and formatted Excel reporting.",
    contribution: [
      "Designed a normalized PostgreSQL database with relational constraints and concurrent multi-user support.",
      "Implemented ETL workflows for validation, transformation, duplicate detection, and database loading.",
      "Built analytics dashboards and automated formatted Excel reports.",
      "Implemented bcrypt password hashing and role-based access.",
    ],
    stack: ["Python", "Streamlit", "PostgreSQL", "SQL", "Pandas", "OpenPyXL", "Altair", "DBeaver"],
    outcome:
      "Built a Streamlit and PostgreSQL platform for ETL validation, analytics, and formatted reporting. Adoption and measured operational impact were not provided.",
    technicalDetails: [
      "Normalized relational data model",
      "ETL validation and duplicate detection",
      "Concurrent multi-user support",
      "Role-based access and bcrypt hashing",
    ],
  },
  {
    number: "03",
    title: "Exploratory Retinal Image Analysis for Cardiovascular Risk",
    subtitle: "A CNN and MobileNet study; no clinical validation is stated.",
    category: "DEEP LEARNING / COMPUTER VISION",
    problem:
      "The project explored whether retinal-image features could support cardiovascular-risk prediction.",
    solution:
      "Developed a deep-learning model using CNN and MobileNet architectures and prepared retinal images through resizing and normalization.",
    contribution: [
      "Built and preprocessed a dataset of 2,722 retinal images.",
      "Applied image resizing and normalization techniques.",
      "Optimized the model for mobile and edge devices using depthwise separable convolutions.",
    ],
    stack: ["Python", "CNN", "MobileNet"],
    outcome:
      "Project materials report higher accuracy than standard CNN models, but provide no scores, evaluation setup, or named baseline. No clinical validation is stated.",
    technicalDetails: [
      "Retinal-image dataset",
      "Image resizing and normalization",
      "Depthwise separable convolutions",
      "Mobile and edge-device optimization",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Senior MIS Analyst",
    company: "Chhabra Infosolutions Pvt. Ltd.",
    client: "Reliance Consumer Products Limited (RCPL)",
    dates: "11/2025 – Present",
    location: "Yelahanka, Bangalore",
    summary:
      "Supporting supply-chain and logistics operations through SAP automation, operational reporting, and data reconciliation.",
    highlights: [
      "Built dashboards for Sales Orders, unbilled orders, order status, and operational KPIs to improve team visibility.",
      "Engineered a Python pipeline for SAP Sales Order data; the portfolio reports a 90% reduction in manual reporting time, with no baseline or measurement period specified.",
      "Processed 10,000+ rows from SAP dumps and daily planning files with Pandas, validation, duplicate removal, and traffic-light error detection.",
      "Automated SAP GUI exports with win32com (T-Code ZSOREP) and supported Sales Order, Delivery Note, and Purchase Order workflows.",
      "Reconciled PO-GRN and invoice data to track pending receipts and outstanding quantities and identify mismatches and inconsistencies.",
    ],
  },
  {
    role: "Graduate Apprentice Trainee",
    company: "Hindustan Petroleum Corporation Limited (HPCL)",
    dates: "04/2025 – 11/2025",
    location: "Andhra Pradesh",
    summary:
      "Worked with SAP MM and PM workflows, operational reporting, and outlet performance analysis.",
    highlights: [
      "Used SAP MM and PM to manage work permits, complaints, and technician assignments.",
      "Analyzed data in Excel and Power BI to prepare IRR reports for outlet modernization projects and identify cost-versus-sales improvement opportunities.",
      "Automated routine report preparation and data validation to reduce manual effort and improve decision-making accuracy.",
      "Monitored complaint trends and outlet performance data to highlight recurring issues and recommend corrective actions.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & Programming",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Java (Basic)"],
  },
  {
    title: "Data Engineering & Automation",
    skills: [
      "ETL",
      "Data Extraction",
      "Data Transformation",
      "Data Mapping",
      "Data Reconciliation",
      "Data Validation",
      "SAP Automation",
    ],
  },
  {
    title: "BI & Analytics",
    skills: ["Power BI", "DAX", "Power Query", "Data Modelling", "Dashboard Development", "KPI Reporting"],
  },
  {
    title: "SAP & Business Operations",
    skills: [
      "SAP",
      "SAP GUI",
      "Sales Order Management",
      "SO Creation",
      "DN Creation",
      "PO Creation",
      "PO-GRN Reconciliation",
      "Procurement & P2P (Basic)",
    ],
  },
  {
    title: "Tools",
    skills: ["VS Code", "DBeaver", "Git/GitHub", "Excel", "GenAI Tools"],
  },
];

export const education = {
  degree: "B.Tech. Computer Science and Engineering",
  specialization: "Specialization in Artificial Intelligence",
  institution: "Vellore Institute of Technology - AP",
  dates: "2020–2024",
  earlier: [
    { institution: "Narayana Junior College", qualification: "Intermediate", dates: "2018–2020" },
    { institution: "Bhashyam High School", qualification: "SSC", dates: "2017–2018" },
  ],
};

export const awards = [
  "Java Full Stack: Training Program at CVCORP",
  "Gold Medalist: Kabaddi and Shotput (School Level)",
  "Winner: Inter-College Kabaddi Tournament",
  "Participated in Inter-College Football Tournaments",
];

export const profile = {
  name: "Nafees Shaik",
  positioning: "Data Analytics & Automation Professional",
  statement: "I build Python automation and reporting workflows that turn SAP and supply-chain data into clearer operational decisions.",
  email: "nafeesshaik100@gmail.com",
  phone: "7989122675",
  linkedin: "https://linkedin.com/in/nafees-shaik-9b244924b",
  location: "Bangalore, India",
  resumePath: "/Nafees_Resume_2026-09-23.pdf",
};
