import mongoose, { Schema } from "mongoose";

const FormulaireSchema = new Schema({
  fulltitle: {
    type: String,
    required: [true, "title is required."],
    trim: true,
    minLength: [2, "title must be larger than 2 characters"],
    maxLength: [50, "title must be lesser than 50 characters"],
  },

  description: {
    type: String,
    required: [true, "description is required."],
  },

});

const Formulaire =
  mongoose.models.Formulaire || mongoose.model("Formulaire", FormulaireSchema);

export default Formulaire;