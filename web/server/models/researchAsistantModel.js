import mongoose from "mongoose";

const ResearchAssistantSchema = mongoose.Schema({
    
    // CUSTOM INFORMATIONS


    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    academician_no:{
        type: Number,
        required: true
    }
    
})
export default mongoose.model('ResearchAssistant',ResearchAssistantSchema)
