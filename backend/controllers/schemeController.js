import Scheme from "../models/Scheme.js";

export const getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find({});
    res.status(200).json(schemes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getFilteredSchemes = async (req, res) => {
  try {
    const { age, income, state, occupation } = req.body;
    
    const query = {
      minAge: { $lte: age },
      maxAge: { $gte: age },
      maxIncome: { $gte: income },
    };

    if (state && state !== "Any") {
      query.state = { $in: [state, "All India", "Any"] };
    }

    if (occupation && occupation !== "Any") {
      query.occupation = { $in: [occupation, "All", "Any"] };
    }

    const schemes = await Scheme.find(query);
    res.status(200).json(schemes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
