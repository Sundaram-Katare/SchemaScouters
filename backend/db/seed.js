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
  },
  {
    name: "PM Garib Kalyan Anna Yojana",
    description: "Food security welfare scheme providing free food grains to the poor.",
    category: "Food",
    images: [
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1488459711615-de64ef5993f7?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "5kg free food grains per person per month to all beneficiaries.",
    minAge: 0,
    maxAge: 100,
    maxIncome: 100000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://nfsa.gov.in/",
  },
  {
    name: "PM Jan Dhan Yojana",
    description: "National Mission for Financial Inclusion to ensure access to financial services.",
    category: "Finance",
    images: [
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Zero balance savings account, accident insurance cover of Rs. 2 lakh.",
    minAge: 10,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://pmjdy.gov.in/",
  },
  {
    name: "PM Ujjwala Yojana",
    description: "Scheme to provide clean cooking fuel (LPG) to women from BPL households.",
    category: "Social Welfare",
    images: [
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Financial support of Rs. 1600 for each LPG connection, free first refill and stove.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 200000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.pmuy.gov.in/",
  },
  {
    name: "PM Fasal Bima Yojana",
    description: "Crop insurance scheme for farmers against natural calamities.",
    category: "Agriculture",
    images: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://pmfby.gov.in/",
  },
  {
    name: "Beti Bachao Beti Padhao",
    description: "Campaign to generate awareness and improve the efficiency of welfare services intended for girls.",
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Support for girls' education and survival, prevents gender-biased sex-selective elimination.",
    minAge: 0,
    maxAge: 18,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://wcd.nic.in/bbbp-schemes",
  },
  {
    name: "PM Matru Vandana Yojana",
    description: "Maternity benefit program for pregnant and lactating mothers.",
    category: "Health",
    images: [
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Cash incentive of Rs. 5,000 in three installments for the first live birth.",
    minAge: 19,
    maxAge: 50,
    maxIncome: 800000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana",
  },
  {
    name: "Digital India Internship Scheme",
    description: "Internship opportunity for students to work with the Ministry of Electronics and IT.",
    category: "Education",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Stipend of Rs. 10,000 per month and exposure to e-governance projects.",
    minAge: 18,
    maxAge: 25,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Student",
    applyLink: "https://meity.gov.in/schemes",
  },
  {
    name: "Startup India",
    description: "Initiative to build a strong ecosystem for nurturing innovation and Startups.",
    category: "Business",
    images: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Tax exemptions for 3 years, easier compliance, and patent application fast-tracking.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 100000000,
    state: "All India",
    occupation: "Entrepreneur",
    applyLink: "https://www.startupindia.gov.in/",
  },
  {
    name: "PM Shram Yogi Maan-dhan",
    description: "Pension scheme for unorganized workers like street vendors, rickshaw pullers, etc.",
    category: "Pension",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Assured monthly pension of Rs. 3,000 after attaining the age of 60 years.",
    minAge: 18,
    maxAge: 40,
    maxIncome: 180000,
    state: "All India",
    occupation: "Unorganized Worker",
    applyLink: "https://maandhan.in/",
  },
  {
    name: "Samagra Shiksha",
    description: "Integrated scheme for school education from pre-school to class 12.",
    category: "Education",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Free textbooks, uniforms, and support for digital education and vocational training.",
    minAge: 3,
    maxAge: 18,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Student",
    applyLink: "https://samagra.education.gov.in/",
  },
  {
    name: "Rashtriya Swasthya Bima Yojana",
    description: "Health insurance scheme for Below Poverty Line (BPL) families.",
    category: "Health",
    images: [
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Coverage up to Rs. 30,000 for most diseases that require hospitalization.",
    minAge: 0,
    maxAge: 100,
    maxIncome: 120000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.india.gov.in/rashtriya-swasthya-bima-yojana",
  },
  {
    name: "Saubhagya Scheme",
    description: "Pradhan Mantri Sahaj Bijli Har Ghar Yojana to provide electricity connections to all households.",
    category: "Infrastructure",
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1451187530230-b23b9942d2a1?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Free electricity connections to all un-electrified households in rural and urban areas.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://saubhagya.gov.in/",
  },
  {
    name: "PM National Dialysis Programme",
    description: "Support for dialysis services in public hospitals for renal patients.",
    category: "Health",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2ad49?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Free dialysis services for BPL patients and subsidized rates for others.",
    minAge: 0,
    maxAge: 100,
    maxIncome: 250000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=830&lid=547",
  },
  {
    name: "Soil Health Card Scheme",
    description: "Scheme to assist State Governments to issue Soil Health Cards to all farmers in the country.",
    category: "Agriculture",
    images: [
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Provides information to farmers on nutrient status of their soil and recommendations on dosage of nutrients.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://soilhealth.dac.gov.in/",
  },
  {
    name: "e-NAM",
    description: "National Agriculture Market is a pan-India electronic trading portal for agricultural commodities.",
    category: "Agriculture",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1506484334402-40ff22e07363?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Better price discovery for farmers and smoother marketing of their produce.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://www.enam.gov.in/",
  },
  {
    name: "PM Krishi Sinchai Yojana",
    description: "Scheme focused on improving water use efficiency and ensuring 'Per Drop More Crop'.",
    category: "Agriculture",
    images: [
      "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Subsidy for drip and sprinkler irrigation systems and better water management.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://pmksy.gov.in/",
  },
  {
    name: "PM Poshan Shakti Nirman",
    description: "National scheme for providing hot cooked meals in schools.",
    category: "Food",
    images: [
      "https://images.unsplash.com/photo-1488459711615-de64ef5993f7?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Free nutritious meals to students from class 1 to 8 in government schools.",
    minAge: 6,
    maxAge: 14,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Student",
    applyLink: "https://pmposhan.education.gov.in/",
  },
  {
    name: "National Social Assistance Programme",
    description: "Welfare program that provides financial assistance to the elderly, widows and persons with disabilities.",
    category: "Pension",
    images: [
      "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Monthly pension for eligible beneficiaries living below the poverty line.",
    minAge: 60,
    maxAge: 100,
    maxIncome: 100000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://nsap.nic.in/",
  },
  {
    name: "Deen Dayal Upadhyaya Antyodaya Yojana",
    description: "Mission to reduce poverty by mobilizing poor households into self-help groups.",
    category: "Livelihood",
    images: [
      "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Skills training, financial support for self-employment, and livelihood enhancement.",
    minAge: 18,
    maxAge: 60,
    maxIncome: 120000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://daynrlm.gov.in/",
  },
  {
    name: "PM Van Dhan Yojana",
    description: "Initiative targeting livelihood generation for tribal population by harnessing forest wealth.",
    category: "Livelihood",
    images: [
      "https://images.unsplash.com/photo-1501333198107-b37119853974?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1628102422204-74cf8f83060c?auto=format&fit=crop&q=80&w=1000"
    ],
    benefits: "Setting up Van Dhan Vikas Kendras for value addition to tribal products.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Tribal Resident",
    applyLink: "https://trifed.tribal.gov.in/vandan",
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
