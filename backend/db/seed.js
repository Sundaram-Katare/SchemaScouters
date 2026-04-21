import mongoose from "mongoose";
import dotenv from "dotenv";
import Scheme from "../models/Scheme.js";
import connectDB from "./db.js";

dotenv.config();

const schemes = [
  {
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Housing for all in urban and rural areas.",
    benefits: "Interest subsidy on home loans for LIG/MIG categories.",
    minAge: 18,
    maxAge: 70,
    maxIncome: 1800000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://pmay-urban.gov.in/",
  },
  {
    name: "Ayushman Bharat (PM-JAY)",
    description: "World's largest health insurance scheme.",
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
    description: "Direct income support to farmers.",
    benefits: "Rs. 6000 per year in three equal installments.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Farmer",
    applyLink: "https://pmkisan.gov.in/",
  },
  {
    name: "Atal Pension Yojana (APY)",
    description: "Pension scheme for unorganized sector workers.",
    benefits: "Fixed monthly pension ranging from Rs. 1000 to Rs. 5000.",
    minAge: 18,
    maxAge: 40,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Unorganized Worker",
    applyLink: "https://enps.nsdl.com/eNPS/LandingPage.html",
  },
  {
    name: "PM Mudra Yojana",
    description: "Loans for small/micro business enterprises.",
    benefits: "Loans up to Rs. 10 lakh for non-corporate, non-farm small/micro enterprises.",
    minAge: 18,
    maxAge: 65,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Entrepreneur",
    applyLink: "https://www.mudra.org.in/",
  },
  {
    name: "PM Ujjwala Yojana",
    description: "LPG connections to BPL households.",
    benefits: "Clean cooking fuel (LPG) to women from 'Below Poverty Line' families.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 100000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.pmuy.gov.in/",
  },
  {
    name: "MGNREGA",
    description: "Guarantee of 100 days of wage employment in a financial year.",
    benefits: "Fixed wage for manual labor in rural areas.",
    minAge: 18,
    maxAge: 100,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Laborer",
    applyLink: "https://nrega.nic.in/",
  },
  {
    name: "Sukanya Samriddhi Yojana",
    description: "Savings scheme for girl child.",
    benefits: "High interest rate and tax benefits for savings in the name of girl child.",
    minAge: 0,
    maxAge: 10,
    maxIncome: 10000000,
    state: "All India",
    occupation: "Any",
    applyLink: "https://www.indiapost.gov.in/",
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    await Scheme.deleteMany({});
    await Scheme.insertMany(schemes);
    console.log("Database Seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
