import mongoose from "mongoose";
import dotenv from "dotenv";
import Scheme from "../models/Scheme.js";
import connectDB from "./db.js";

dotenv.config();

const schemes = [
  {
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Housing for all in urban and rural areas. Provides interest subsidy on home loans.",
    category: "Housing",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Interest subsidy of 3% to 6.5% on home loans for LIG/MIG categories.",
    minAge: 18,
    maxAge: 70,
    maxIncome: 1800000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://pmay-urban.gov.in/",
  },
  {
    name: "Ayushman Bharat (PM-JAY)",
    description: "World's largest health insurance scheme providing free secondary and tertiary care.",
    category: "Health",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization.",
    minAge: 0,
    maxAge: 100,
    maxIncome: 250000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://pmjay.gov.in/",
  },
  {
    name: "PM Kisan Samman Nidhi",
    description: "Income support scheme for all landholding farmer families across the country.",
    category: "Agriculture",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Minimum income support of Rs. 6,000 per year paid in three equal installments.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://pmkisan.gov.in/",
  },
  {
    name: "Atal Pension Yojana (APY)",
    description: "Social security scheme aimed at providing a steady income to workers in unorganized sectors.",
    category: "Pension",
    images: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1533074748154-1866380c5780?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Guaranteed fixed monthly pension from Rs. 1,000 to Rs. 5,000 based on contributions.",
    minAge: 18,
    maxAge: 40,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Unorganized Worker",
    applyLink: "https://enps.nsdl.com/eNPS/LandingPage.html",
  },
  {
    name: "PM Mudra Yojana",
    description: "Financial assistance for small businesses and entrepreneurs for business growth and startup.",
    category: "Business",
    images: [
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Collateral-free loans up to Rs. 10 lakh under three categories: Shishu, Kishore, and Tarun.",
    minAge: 18,
    maxAge: 65,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Entrepreneur",
    applyLink: "https://www.mudra.org.in/",
  },
  {
    name: "Sukanya Samriddhi Yojana",
    description: "A small savings scheme focused on the girl child to encourage parents for education and marriage expenses.",
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "High interest rates (currently 8.2%) and tax benefits under Section 80C.",
    minAge: 0,
    maxAge: 10,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.indiapost.gov.in/",
  },
  {
    name: "MGNREGA",
    description: "Guarantee of 100 days of wage employment in a financial year to every rural household whose adult members volunteer for unskilled manual work.",
    category: "Labor",
    images: [
      "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Legal right to work, unemployment allowance if work is not provided within 15 days.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Laborer",
    applyLink: "https://nrega.nic.in/",
  },
  {
    name: "PM SVANidhi",
    description: "Special Micro-Credit Facility Scheme for providing affordable loans to street vendors to resume their livelihoods.",
    category: "Business",
    images: [
      "https://images.unsplash.com/photo-1501333198107-b37119853974?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1628102422204-74cf8f83060c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1444690623164-35805567b4f5?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Initial working capital loan up to Rs. 10,000, followed by enhanced loans upon timely repayment.",
    minAge: 18,
    maxAge: 65,
    maxIncome: 500000,
    state: "All India",
    occupation: "Street Vendor",
    applyLink: "https://pmsvanidhi.mohua.gov.in/",
  },
  {
    name: "National Education Policy - Scholarships",
    description: "Various scholarships for students to pursue higher education regardless of financial background.",
    category: "Education",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Tuition fee reimbursement and monthly stipends for meritorious students.",
    minAge: 5,
    maxAge: 35,
    maxIncome: 800000,
    state: "All India",
    occupation: "Student",
    applyLink: "https://scholarships.gov.in/",
  },
  {
    name: "PM Kaushal Vikas Yojana (PMKVY)",
    description: "Skill development initiative for youth to make them employable and promote entrepreneurship.",
    category: "Education",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Free industry-relevant skill training and certification, placement assistance.",
    minAge: 15,
    maxAge: 45,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.pmkvyofficial.org/",
  },
  {
    name: "Stand-Up India Scheme",
    description: "Facilitates bank loans between 10 lakh and 1 crore to at least one SC/ST and one woman borrower per bank branch for setting up a greenfield enterprise.",
    category: "Business",
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Focuses on supporting minority and women entrepreneurs in manufacturing, services, or trading sectors.",
    minAge: 18,
    maxAge: 65,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Entrepreneur",
    applyLink: "https://www.standupmitra.in/",
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    await Scheme.deleteMany({});
    await Scheme.insertMany(schemes);
    console.log("Database Seeded successfully with richer data!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
