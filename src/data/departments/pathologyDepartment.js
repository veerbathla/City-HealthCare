import pathology from "../../assets/departments/pathology.jpg";

export const pathologyDepartment = {
  id: 2,

  slug: "pathology",

  name: "Pathology",
   shortDescription:"Comprehensive laboratory diagnostic services delivering accurate, reliable, and timely test results to support early diagnosis, effective treatment, and better patient outcomes.",
  hero: {
    title: "Department of Pathology",
    subtitle:
      "Comprehensive laboratory diagnostics delivering accurate, reliable, and timely reports for better clinical decision-making.",
    image:pathology,
  },

  overview: {
    title: "About the Department",
    description: [
      "The Department of Pathology at City HealthCare serves as the scientific backbone of patient diagnosis and treatment.",
      "Our laboratory combines advanced automated diagnostic technology with strict quality control protocols to deliver accurate, reliable, and timely results.",
      "From routine health checkups to specialized tissue analysis, hormonal profiling, microbiology, and cancer screening, our pathology department supports every major clinical specialty under one roof.",
    ],
  },

  doctors: [],

  whyChooseUs: {
    title: "Why Choose City HealthCare Pathology?",
    points: [
      {
        title: "Integrated Clinical Support",
        description:
          "Our pathology laboratory works closely with Neurosurgery, Orthopaedics, General Surgery, Emergency Medicine, Gynaecology, and Infertility departments for faster diagnosis and treatment.",
      },
      {
        title: "Rapid Emergency Reporting",
        description:
          "Critical investigations including blood tests, coagulation profiles, and emergency laboratory parameters are processed with minimal turnaround time.",
      },
      {
        title: "Advanced Automation",
        description:
          "Modern laboratory automation and barcode-based sample tracking ensure maximum accuracy while minimizing manual errors.",
      },
      {
        title: "Strict Quality Assurance",
        description:
          "Every investigation follows internal and external quality control standards for dependable diagnostic results.",
      },
    ],
  },

  services: [
    {
      title: "Routine Blood Tests",
      description: "",
      icon: "",
    },
    {
      title: "Complete Health Checkup Profiles",
      description: "",
      icon: "",
    },
    {
      title: "Hormonal Testing",
      description: "",
      icon: "",
    },
    {
      title: "Diabetes Monitoring",
      description: "",
      icon: "",
    },
    {
      title: "Kidney Function Tests",
      description: "",
      icon: "",
    },
    {
      title: "Liver Function Tests",
      description: "",
      icon: "",
    },
    {
      title: "Lipid Profile",
      description: "",
      icon: "",
    },
    {
      title: "Microbiology Testing",
      description: "",
      icon: "",
    },
    {
      title: "Culture & Sensitivity",
      description: "",
      icon: "",
    },
    {
      title: "Histopathology",
      description: "",
      icon: "",
    },
    {
      title: "Biopsy Examination",
      description: "",
      icon: "",
    },
    {
      title: "FNAC",
      description: "",
      icon: "",
    },
    {
      title: "Pap Smear",
      description: "",
      icon: "",
    },
    {
      title: "Cancer Screening",
      description: "",
      icon: "",
    },
    {
      title: "Urine Analysis",
      description: "",
      icon: "",
    },
    {
      title: "Stool Analysis",
      description: "",
      icon: "",
    },
    {
      title: "Body Fluid Analysis",
      description: "",
      icon: "",
    },
  ],

  treatments: [
    {
      category: "Hematology & Coagulation",
      conditions: [
        "Complete Blood Count (CBC)",
        "Hemoglobin",
        "ESR",
        "Peripheral Smear",
        "PT/INR",
        "APTT",
        "Coagulation Profile",
      ],
    },
    {
      category: "Clinical Biochemistry",
      conditions: [
        "Kidney Function Test (KFT)",
        "Liver Function Test (LFT)",
        "Blood Sugar",
        "HbA1c",
        "Lipid Profile",
        "Electrolytes",
        "Comprehensive Metabolic Panel",
      ],
    },
    {
      category: "Hormonal & Immunoassay",
      conditions: [
        "Thyroid Profile",
        "Reproductive Hormones",
        "Fertility Profile",
        "Hormonal Assays",
      ],
    },
    {
      category: "Microbiology",
      conditions: [
        "Dengue Test",
        "Typhoid Test",
        "Malaria Test",
        "Chikungunya Test",
        "Influenza Testing",
        "Culture & Sensitivity",
        "Antibiotic Sensitivity Testing (AST)",
      ],
    },
    {
      category: "Histopathology & Cytopathology",
      conditions: [
        "Biopsy Analysis",
        "Histopathology",
        "FNAC",
        "Pap Smear",
        "Cancer Screening",
      ],
    },
    {
      category: "Clinical Pathology",
      conditions: [
        "Urine Examination",
        "Stool Examination",
        "CSF Analysis",
        "Synovial Fluid Analysis",
        "Body Fluid Examination",
      ],
    },
  ],

  conditionsWeTreat: [
    "Emergency Medicine",
    "Trauma Care",
    "Neurology",
    "Neurosurgery",
    "Orthopaedics",
    "General Surgery",
    "Gynaecology",
    "Infertility",
    "Endocrinology",
    "Internal Medicine",
  ],

  diagnostics: {
    title: "Laboratory Sections",
    tests: [
      {
        name: "Hematology & Coagulation",
        description:
          "Advanced blood analysis for diagnosis of anemia, infections, blood disorders, leukemia, and coagulation abnormalities. Investigations: Complete Blood Count (CBC), Hemoglobin, ESR, Peripheral Smear, PT/INR, APTT, Coagulation Profile.",
      },
      {
        name: "Clinical Biochemistry",
        description:
          "Comprehensive biochemical investigations for organ function assessment and metabolic disorders. Investigations: Kidney Function Test (KFT), Liver Function Test (LFT), Blood Sugar, HbA1c, Lipid Profile, Electrolytes, Comprehensive Metabolic Panel.",
      },
      {
        name: "Hormonal & Immunoassay",
        description:
          "Specialized hormonal evaluation supporting endocrinology, infertility, and women's health. Investigations: Thyroid Profile, Reproductive Hormones, Fertility Profile, Hormonal Assays.",
      },
      {
        name: "Microbiology",
        description:
          "Detection of infectious diseases using microbiological testing and culture techniques. Investigations: Dengue Test, Typhoid Test, Malaria Test, Chikungunya Test, Influenza Testing, Culture & Sensitivity, Antibiotic Sensitivity Testing (AST).",
      },
      {
        name: "Histopathology & Cytopathology",
        description:
          "Microscopic examination of tissues and cells for diagnosis of inflammatory diseases, tumors, and cancers. Investigations: Biopsy Analysis, Histopathology, FNAC, Pap Smear, Cancer Screening.",
      },
      {
        name: "Clinical Pathology",
        description:
          "Routine laboratory examination of body fluids for diagnosis of infections and metabolic disorders. Investigations: Urine Examination, Stool Examination, CSF Analysis, Synovial Fluid Analysis, Body Fluid Examination.",
      },
    ],
  },

  facilities: [
    {
      title: "Fully Automated Laboratory",
      description: "",
    },
    {
      title: "Barcode Sample Tracking",
      description: "",
    },
    {
      title: "Digital Report Generation",
      description: "",
    },
    {
      title: "Quality Controlled Testing",
      description: "",
    },
    {
      title: "Modern Phlebotomy Collection Center",
      description: "",
    },
    {
      title: "Sterile Sample Collection",
      description: "",
    },
    {
      title: "Rapid Emergency Reporting",
      description: "",
    },
    {
      title: "Advanced Laboratory Equipment",
      description: "",
    },
    {
      title: "Daily Instrument Calibration",
      description: "",
    },
    {
      title: "Internal Quality Control",
      description: "",
    },
    {
      title: "External Quality Control",
      description: "",
    },
    {
      title: "Automated Sample Processing",
      description: "",
    },
    {
      title: "Barcode-Based Sample Identification",
      description: "",
    },
    {
      title: "Reduced Manual Handling",
      description: "",
    },
    {
      title: "High Accuracy Reporting",
      description: "",
    },
  ],

  faqs: [
    {
      question: "Do I need an appointment for laboratory tests?",
      answer:
        "Most routine laboratory investigations can be performed without prior appointment. However, some specialized tests may require scheduling or preparation.",
    },
    {
      question: "Are fasting blood tests available?",
      answer:
        "Yes. Fasting blood sugar, lipid profile, and several other investigations are available with appropriate patient preparation.",
    },
    {
      question: "How long does it take to receive reports?",
      answer:
        "Routine reports are generally available on the same day, while specialized investigations such as biopsy and histopathology may require additional processing time.",
    },
    {
      question: "Is cancer screening available?",
      answer:
        "Yes. Our department performs Pap Smears, FNAC, biopsy examinations, and histopathological analysis for early cancer detection and diagnosis.",
    },
  ],

  contact: {
    hospital: "City HealthCare Neuro Research and Infertility Centre",
    address: "Near ICICI Bank, Deep Tower, Dabwali Road, Sirsa, Haryana",
    opdTimings: "",
    emergency: "",
    phone: "+91 97283 75033",
    email: "cityhealthcaresirsa@gmail.com",
  },

  seo: {
    title:
      "Pathology Department | City HealthCare Neuro Research and Infertility Centre",
    description:
      "Advanced pathology laboratory in Sirsa offering blood tests, microbiology, histopathology, FNAC, biopsy analysis, hormonal testing, cancer screening, and comprehensive diagnostic services.",
  },
};