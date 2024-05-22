import mongoose, { Schema } from "mongoose";

const FormulaireSchema = new Schema({
  fulltitle: {
    type: String,
    required: [true, "Le titre est requis."],
    trim: true,
    minLength: [2, "Le titre doit comporter plus de 2 caractères."],
    maxLength: [50, "Le titre doit comporter moins de 50 caractères."],
  },
  description: {
    type: String,
    required: [true, "La description est requise."],
  },
  slug: {
    type: String,
    required: [true, "Le slug est requis."],
    trim: true,
    unique: true,
  },
});

const Formulaire = mongoose.models.Formulaire || mongoose.model("Formulaire", FormulaireSchema);

export default Formulaire;
