export const companyInfo = {
  name: "KONCAVE",
  legalName: "KONCAVE ANCHOR FASTNERS PVT LTD.",
  tagline: "HIGH-PERFORMANCE ANCHORING & FASTENING SOLUTIONS",
  certifications: "ISO 9001:2015 CERTIFIED",
  address: "Village Ismaila, 11B Ismaila, Near Rana Batta, Tehsil Sampla, Rohtak, Haryana-124501, India",
  phones: ["+91 9175075896", "+91 98103 95559"],
  email: "Koncave11@outlook.com", 
  website: "www.koncave.co.in",
  approvals: ["NBCC", "CPWD", "PWD", "RLDA", "DMRC"],
  initiative: "MAKE IN INDIA"
};

export const aboutUsData = {
  hero: {
    title: "Engineering Integrity.",
    subtitle: "Precision engineering, uncompromising safety, and a proud contributor to the Make in India initiative."
  },
  intro: "KONCAVE ANCHOR FASTNERS PVT LTD. is an ISO 9001:2015 certified manufacturer and a dedicated participant in the 'Make in India' initiative, specializing in high-performance anchoring and fastening solutions. We are committed to delivering precision, structural safety, and long-term reliability across architectural and industrial applications.",
  vision: "To be the leading global provider of high-tensile structural fastening solutions, recognized universally for uncompromising safety, innovative engineering, and absolute reliability.",
  mission: "To engineer and manufacture top-tier anchoring systems through advanced technology, stringent quality control, and a commitment to the 'Make in India' initiative, ensuring the structural integrity of the world's most demanding projects.",
  values: [
    { icon: "shield", title: "Uncompromising Safety", desc: "Every anchor is rigorously tested for tensile and pull-out strength (under IS1608, P1:2022) to ensure maximum safety in the field." },
    { icon: "factory", title: "Specialized Manufacturing", desc: "Our facility is equipped with specialized machinery including advanced threading and dedicated manufacturing lines for consistent high-accuracy components." },
    { icon: "award", title: "Proven Quality", desc: "Trusted partner approved by major authorities including NBCC, CPWD, PWD, RLDA, and DMRC." }
  ],
  sections: [
    {
      title: "Specialized Manufacturing",
      text: "Our facility is equipped with specialized machinery dedicated to the production of high-quality anchors, including advanced threading and dedicated manufacturing lines for wedge, nylon, and drop-in anchors. This focused infrastructure allows us to deliver high-accuracy components with consistency."
    },
    {
      title: "High-Performance Product Range",
      text: "We design and manufacture an expanding portfolio of anchors tailored for diverse structural needs, ensuring we have the exact specification required for heavy-duty structural steel, facade framing, and industrial machinery mounting."
    }
  ]
};

export const products = [
  {
    id: "wedge-anchors",
    name: "1. Wedge Anchors",
    category: "Heavy Duty Anchors",
    image: "/images/product-wedge.jpg",
    appReferenceImage: "/images/app-wedge.jpg", 
    description: "High-performance anchoring solutions tailored for diverse structural needs. Undergoes extensive testing for tensile and pull-out strength (under IS1608, P1:2022).",
    applications: ["Steel constructions", "Cable trays", "Façades", "Guard rails", "Consoles", "Ladders", "Machines", "Staircases", "Gates"],
    materials: ["Stainless Steel A2 (304 grade)", "Stainless Steel A4 (316 grade)", "Carbon Steel Galvanized (4.8, 5.8 grade)"],
    sections: [
      {
        title: "1.1. Variants / Size Range S.S. A2",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH", "EMBEDDED LENGTH"],
        rows: [
          { article: "KWA0875SA2", drill: "8 (mm)", length: "75 (mm)", embed: "70 (mm)" },
          { article: "KWA0890SA2", drill: "8 (mm)", length: "90 (mm)", embed: "85 (mm)" },
          { article: "KWA1075SA2", drill: "10 (mm)", length: "75 (mm)", embed: "67 (mm)" },
          { article: "KWA10100SA2", drill: "10 (mm)", length: "100 (mm)", embed: "92 (mm)" },
          { article: "KWA10120SA2", drill: "10 (mm)", length: "120 (mm)", embed: "112 (mm)" },
          { article: "KWA10150SA2", drill: "10 (mm)", length: "150 (mm)", embed: "142 (mm)" },
          { article: "KWA12100SA2", drill: "12 (mm)", length: "100 (mm)", embed: "89 (mm)" },
          { article: "KWA12120SA2", drill: "12 (mm)", length: "120 (mm)", embed: "109 (mm)" },
          { article: "KWA12150SA2", drill: "12 (mm)", length: "150 (mm)", embed: "139 (mm)" }
        ]
      },
      {
        title: "1.2. Variants / Size Range S.S. A4",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH", "EMBEDDED LENGTH"],
        rows: [
          { article: "KWA0875SA4", drill: "8 (mm)", length: "75 (mm)", embed: "70 (mm)" },
          { article: "KWA0890SA4", drill: "8 (mm)", length: "90 (mm)", embed: "85 (mm)" },
          { article: "KWA1075SA4", drill: "10 (mm)", length: "75 (mm)", embed: "67 (mm)" },
          { article: "KWA10100SA4", drill: "10 (mm)", length: "100 (mm)", embed: "92 (mm)" },
          { article: "KWA10120SA4", drill: "10 (mm)", length: "120 (mm)", embed: "112 (mm)" },
          { article: "KWA10150SA4", drill: "10 (mm)", length: "150 (mm)", embed: "142 (mm)" },
          { article: "KWA12100SA4", drill: "12 (mm)", length: "100 (mm)", embed: "89 (mm)" },
          { article: "KWA12120SA4", drill: "12 (mm)", length: "120 (mm)", embed: "109 (mm)" },
          { article: "KWA12150SA4", drill: "12 (mm)", length: "150 (mm)", embed: "139 (mm)" }
        ]
      },
      {
        title: "1.3. Technical Data (Stainless Steel)",
        type: "tech",
        rows: [
          { label: "Grade (A2)", value: "A2-304 Grade (8% Nickel, 18% Chromium)" },
          { label: "Finish (A2)", value: "S.S. Finish" },
          { label: "Grade (A4)", value: "A4-316 Grade (10% Nickel, 18-20% Chromium)" },
          { label: "Finish (A4)", value: "S.S. Finish" }
        ]
      },
      {
        title: "1.4. Test Reports - S.S. A2 (304 GRADE)",
        subtitle: "TEST NAME: PULL OUT / TENSILE | TEST METHOD: IS1608, P1:2022",
        type: "report",
        headers: ["SIZE", "PULL OUT LOAD (KG)", "TENSILE STRENGTH (N/mm²)"],
        rows: [
          ["M8", "38560", "680"],
          ["M10", "42866", "732"],
          ["M12", "72084", "815"]
        ]
      },
      {
        title: "1.5. Test Reports - S.S. A4 (316 GRADE)",
        subtitle: "TEST NAME: PULL OUT / TENSILE | TEST METHOD: IS1608, P1:2022",
        type: "report",
        headers: ["SIZE", "PULL OUT LOAD (KG)", "TENSILE STRENGTH (N/mm²)"],
        rows: [
          ["M8", "38570", "695"],
          ["M10", "42879", "760"],
          ["M12", "72095", "845"]
        ]
      },
      {
        title: "1.6. Variants / Size Range G.I.",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH", "EMBEDDED LENGTH"],
        rows: [
          { article: "KWA0875GI", drill: "8 (mm)", length: "75 (mm)", embed: "70 (mm)" },
          { article: "KWA0890GI", drill: "8 (mm)", length: "90 (mm)", embed: "85 (mm)" },
          { article: "KWA1075GI", drill: "10 (mm)", length: "75 (mm)", embed: "67 (mm)" },
          { article: "KWA10100GI", drill: "10 (mm)", length: "100 (mm)", embed: "92 (mm)" },
          { article: "KWA10120GI", drill: "10 (mm)", length: "120 (mm)", embed: "112 (mm)" },
          { article: "KWA10150GI", drill: "10 (mm)", length: "150 (mm)", embed: "142 (mm)" },
          { article: "KWA12100GI", drill: "12 (mm)", length: "100 (mm)", embed: "89 (mm)" },
          { article: "KWA12120GI", drill: "12 (mm)", length: "120 (mm)", embed: "109 (mm)" },
          { article: "KWA12150GI", drill: "12 (mm)", length: "150 (mm)", embed: "139 (mm)" },
          { article: "KWA16100GI", drill: "16 (mm)", length: "100 (mm)", embed: "85 (mm)" },
          { article: "KWA16125GI", drill: "16 (mm)", length: "125 (mm)", embed: "110 (mm)" },
          { article: "KWA16150GI", drill: "16 (mm)", length: "150 (mm)", embed: "135 (mm)" },
          { article: "KWA16200GI", drill: "16 (mm)", length: "200 (mm)", embed: "185 (mm)" },
          { article: "KWA16250GI", drill: "16 (mm)", length: "250 (mm)", embed: "235 (mm)" }
        ]
      },
      {
        title: "1.7. Technical Data (Galvanized Iron)",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre-setting installation, standoff installation." },
          { label: "Grade", value: "4.8, 5.8 grade" },
          { label: "Finish", value: "Alkaline Plating (European Standard)" }
        ]
      },
      {
        title: "1.8. Test Reports - GALVANIZED IRON",
        subtitle: "TEST NAME: PULL OUT / TENSILE | TEST METHOD: IS1608, P1:2022",
        type: "report",
        headers: ["SIZE", "TENSILE STRENGTH (N/mm²)", "SHEAR STRENGTH (N/mm²)", "DOUBLE SHEAR (KN)"],
        rows: [
          ["M8", "545.08", "299.75", "23.54"],
          ["M10", "570.24", "303.79", "23.86"],
          ["M12", "597.11", "346.26", "27.60"],
          ["M16", "632.63", "564.81", "84.48"]
        ]
      }
    ]
  },
  {
    id: "nylon-csk",
    name: "2. Red Sleeve Nylon Anchor (Counter Sunk)",
    category: "Facade Anchors",
    image: "/images/product-nylon-csk.jpg",
    appReferenceImage: "/images/app-nylon-csk.jpg", 
    description: "Perfectly designed for installing rainscreen and ventilated façades, metal work like handrails and balustrades, and fastening door and window frames. Designed for speed and ease of use in structural and non-structural applications.",
    applications: ["Rainscreen facades", "Ventilated facades", "Handrails", "Balustrades", "Door frames", "Window frames"],
    materials: ["Stainless Steel A2 (304 grade)", "Carbon steel Galvanized (4.8, 5.8 grade)"],
    sections: [
      {
        title: "2.1. Variants / Size Range [ S.S. A2 ]",
        subtitle: "*Embedded length depends on length of fixture",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH"],
        rows: [
          { article: "KNA80CSKSA2", drill: "10 (MM)", length: "80 (MM)" },
          { article: "KNA100CSKSA2", drill: "10 (MM)", length: "100 (MM)" },
          { article: "KNA120CSKSA2", drill: "10 (MM)", length: "120 (MM)" },
          { article: "KNA140CSKSA2", drill: "10 (MM)", length: "140 (MM)" }
        ]
      },
      {
        title: "2.2. Technical Data (S.S. A2)",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre- setting installation, standoff installation." },
          { label: "Grade", value: "304 grade" },
          { label: "Finish", value: "S.S. FINISH" }
        ]
      },
      {
        title: "2.3. Test Reports (S.S. A2)",
        type: "report",
        headers: ["SIZE", "TENSION RESISTANCE (KN)", "SHEER RESISTANCE (KN)"],
        rows: [
          ["M10", "18.4", "11.1"]
        ]
      },
      {
        title: "2.4. Variants / Size Range [ G.I. ]",
        subtitle: "*Embedded length depends on length of fixture",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH"],
        rows: [
          { article: "KNA80CSKGI", drill: "10 (MM)", length: "80 (MM)" },
          { article: "KNA100CSKGI", drill: "10 (MM)", length: "100 (MM)" },
          { article: "KNA120CSKGI", drill: "10 (MM)", length: "120 (MM)" },
          { article: "KNA140CSKGI", drill: "10 (MM)", length: "140 (MM)" }
        ]
      },
      {
        title: "2.5. Technical Data (G.I.)",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre- setting installation, standoff installation." },
          { label: "Grade", value: "4.8, 5.8 grade" },
          { label: "Finish", value: "Alkaline Plating (European Standard)" }
        ]
      },
      {
        title: "2.6. Test Reports (G.I.)",
        type: "report",
        headers: ["SIZE", "TENSION RESISTANCE (KN)", "SHEAR RESISTANCE (KN)"],
        rows: [
          ["M10", "17.5", "10.6"]
        ]
      }
    ]
  },
  {
    id: "nylon-hex",
    name: "3. Red Sleeve Nylon Anchor (Hex Flange)",
    category: "Facade Anchors",
    image: "/images/product-nylon-hex.jpg",
    appReferenceImage: "/images/app-nylon-hex.jpg", 
    description: "Designed for speed and ease of use in structural and non-structural applications. Key uses include installing rainscreen, metal work, and fastening frames.",
    applications: ["Rainscreen facades", "Ventilated facades", "Handrails", "Balustrades", "Door frames", "Window frames"],
    materials: ["Stainless Steel A2 (304 grade)", "Carbon steel Galvanized (4.8, 5.8 grade)"],
    sections: [
      {
        title: "3.1. Variants / Size Range [ S.S. A2 ]",
        subtitle: "*Embedded length depends on length of fixture",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH"],
        rows: [
          { article: "KNA80FSA2", drill: "10 (MM)", length: "80 (MM)" },
          { article: "KNA100FSA2", drill: "10 (MM)", length: "100 (MM)" },
          { article: "KNA120FSA2", drill: "10 (MM)", length: "120 (MM)" }
        ]
      },
      {
        title: "3.2. Technical Data (S.S. A2)",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre-setting installation, standoff installation." },
          { label: "Grade", value: "304 grade" },
          { label: "Finish", value: "S.S. FINISH" }
        ]
      },
      {
        title: "3.3. Test Reports (S.S. A2)",
        type: "report",
        headers: ["SIZE", "TENSION RESISTANCE (KN)", "SHEAR RESISTANCE (KN)"],
        rows: [
          ["M10", "18.4", "11.1"]
        ]
      },
      {
        title: "3.4. Variants / Size Range [ G.I. ]",
        subtitle: "*Embedded length depends on length of fixture",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH"],
        rows: [
          { article: "KNA80FGI", drill: "10 (MM)", length: "80 (MM)" },
          { article: "KNA100FGI", drill: "10 (MM)", length: "100 (MM)" },
          { article: "KNA120FGI", drill: "10 (MM)", length: "120 (MM)" }
        ]
      },
      {
        title: "3.5. Technical Data (G.I.)",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre-setting installation, standoff installation." },
          { label: "Grade", value: "4.8, 5.8 grade" },
          { label: "Finish", value: "Alkaline Plating (European Standard)" }
        ]
      },
      {
        title: "3.6. Test Reports (G.I.)",
        type: "report",
        headers: ["SIZE", "TENSION RESISTANCE (KN)", "SHEAR RESISTANCE (KN)"],
        rows: [
          ["M10", "17.5", "10.6"]
        ]
      }
    ]
  },
  {
    id: "drop-in",
    name: "4. Drop - In Anchor",
    category: "Flush Anchors",
    image: "/images/product-drop-in.jpg",
    appReferenceImage: "/images/app-drop-in.jpg", 
    description: "Used to create strong, flush-mounted fastening points in solid concrete. They are commonly applied for fixing threaded rods, bolts, or machinery where a clean surface finish is required. Especially suitable for applications requiring high load capacity and precise alignment.",
    applications: ["Suspending pipes", "HVAC systems", "Electrical trays", "Mounting heavy equipment"],
    materials: ["Carbon steel Galvanized (4.8, 5.8 grade)"],
    sections: [
      {
        title: "4.1. Variants / Size Range [ GI ]",
        type: "variant",
        headers: ["ARTICLE NO.", "DRILL DIAMETER", "ANCHOR LENGTH", "EMBEDDED LENGTH"],
        rows: [
          { article: "KDIA0625", drill: "6 (MM)", length: "25 (MM)", embed: "25 (MM)" },
          { article: "KDIA0830", drill: "8 (MM)", length: "30 (MM)", embed: "30 (MM)" },
          { article: "KDIA0840", drill: "8 (MM)", length: "40 (MM)", embed: "40 (MM)" },
          { article: "KDIA1025", drill: "10 (MM)", length: "25 (MM)", embed: "25 (MM)" },
          { article: "KDIA1030", drill: "10 (MM)", length: "30 (MM)", embed: "30 (MM)" },
          { article: "KDIA1040", drill: "10 (MM)", length: "40 (MM)", embed: "40 (MM)" },
          { article: "KDIA1225", drill: "12 (MM)", length: "25 (MM)", embed: "25 (MM)" },
          { article: "KDIA1250", drill: "12 (MM)", length: "50 (MM)", embed: "50 (MM)" },
          { article: "KDIA1665", drill: "16 (MM)", length: "65 (MM)", embed: "65 (MM)" }
        ]
      },
      {
        title: "4.2. Technical Data",
        type: "tech",
        rows: [
          { label: "Type of Assembly", value: "Through - setting, Pre- setting installation, standoff installation." },
          { label: "Grade", value: "4.8, 5.8 grade" },
          { label: "Finish", value: "Alkaline Plating (European Standard)" }
        ]
      }
    ]
  }
];