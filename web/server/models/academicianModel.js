const mongoose = require('mongoose');

const AcademicianSchema = mongoose.Schema({
    
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

    //RESEARCHING ACTIVITES

    //i = international
    //n = national
    n_essay_count:{
        type: Number,
        required: true
    },
    i_essay_count:{
        type: Number,
        required: true
    },
    n_book_count:{
        type: Number,
        required: true
    },
    i_book_count:{
        type: Number,
        required: true
    },
    n_book_chapter_count:{
        type: Number,
        required: true
    },
    i_book_chapter_count:{
        type: Number,
        required: true
    },
    n_statement_count:{
        type: Number,
        required: true
    },
    i_statement_count:{
        type: Number,
        required: true
    },
    n_editorship_count:{
        type: Number,
        required: true
    },
    i_editorship_count:{
        type: Number,
        required: true
    },
    n_judgement_count:{
        type: Number,
        required: true
    },
    i_judgement_count:{
        type: Number,
        required: true
    },
    n_patent:{
        type: Boolean,
        required: true
    },
    i_patent:{
        type: Boolean,
        required: true
    },

    // EDUCATION ACTIVITIES

    // u = lisans
    // pos = yüksek lisans
    // phd = doktora

    u_course_count:{
        type: Number,
        required: true
    },
    pos_course_count:{
        type: Number,
        required: true
    },
    phd_course_count:{
        type: Number,
        required: true
    },
    u_student_count:{
        type: Number,
        required: true
    },
    pos_student_count:{
        type: Number,
        required: true
    },
    phd_student_count:{
        type: Number,
        required: true
    },
    u_project_thesis_consultant_count:{
        type: Number,
        required: true
    },
    pos_project_thesis_consultant_count:{
        type: Number,
        required: true
    },
    phd_project_thesis_consultant_count:{
        type: Number,
        required: true
    },
    u_project_thesis_co_consultant_count:{
        type: Number,
        required: true
    },
    pos_project_thesis_consultant_count:{
        type: Number,
        required: true
    },
    phd_project_thesis_consultant_count:{
        type: Number,
        required: true
    },
    research_assistant_course_assisting:{
        type: Number,
        required: true
    },
    u_student_and_thesis_assignment_result:{
        type: Number,
        required: true
    },

    pos_student_and_thesis_assignment_result:{
        type: Number,
        required: true
    },
    
    phd_student_and_thesis_assignment_result:{
        type: Number,
        required: true
    },
    u_student_club_consultant:{
        type: Number,
        required: true
    },
    pos_student_club_consultant:{
        type: Number,
        required: true
    },
    phd_student_club_consultant:{
        type: Number,
        required: true
    },

    // ADMINISTRAVITE ACTIVITIES
    rector:{
        type: Boolean,
        required: true
    },
    vice_rector:{
        type: Boolean,
        required: true
    },
    consultant_rector:{
        type: Boolean,
        required: true
    },
    institute_directorate:{
        type: Boolean,
        required: true
    },
    vice_institute_directorate:{
        type: Boolean,
        required: true
    },
    central_directorate:{
        type: Boolean,
        required: true
    }





})
module.exports = mongoose.model("Academician", AcademicianSchema)