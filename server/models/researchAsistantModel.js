import mongoose from "mongoose";

const ReearchAssistantSchema = mongoose.Schema({
    
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
    },
    registration_number:{
        type: Number,
        required: true
    },
    current_status:{
        type: String,
        required:true
    },
    academic_title:{
        type: String,
        required:true
    },
    staff_title:{
        type: String,
        required:true
    },
    date_of_start:{
        type: String,
        required:true
    },
    actual_place_of_duty:{
        type: String,
        required:true
    },
    faculty:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    main_department:{
        type: String,
        required:true
    },
    staff_location:{
        type: String,
        required:true
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
    i_q1q2_essay_count:{
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
        type: Number,
        required: true
    },
    i_patent:{
        type: Number,
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
    pos_project_thesis_co_consultant_count:{
        type: Number,
        required: true
    },
    phd_project_thesis_co_consultant_count:{
        type: Number,
        required: true
    },
    
    student_and_thesis_assignment_result:{
        type: Number,
        required: true
    },

    student_club_consultant:{
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
    },
    vice_central_directorate:{
        type: Boolean,
        required: true
    },
    coordinatorship:{
        type: Boolean,
        required: true
    },
    dean:{
        type: Boolean,
        required: true
    },
    vice_dean:{
        type: Boolean,
        required: true
    },
    president_of_department:{
        type: Boolean,
        required: true
    },
    vice_president_of_department:{
        type: Boolean,
        required: true
    },
    head_of_department:{ // anabilim dalı başkanlığı
        type: Boolean,
        required: true
    },
    vice_head_of_department:{ // anabilim dalı başkan yardımcılığı
        type: Boolean,
        required: true
    },
    university_senate_membership:{
        type: Boolean,
        required: true
    },
    university_board_membership:{
        type: Boolean,
        required: true
    },
    official_university_study_group_membership:{
        type: Boolean,
        required: true
    },
    other_university_study_group_membership:{
        type: Boolean,
        required: true
    },
    faculty_board_membership:{
        type: Boolean,
        required: true
    },
    official_faculty_study_group_membership:{
        type: Boolean,
        required: true
    },
    other_faculty_study_group_membership:{
        type: Boolean,
        required: true
    },
    official_jury_membership:{
        type: Boolean,
        required: true
    },
    official_referee:{
        type: Boolean,
        required: true
    },
    presidentship_of_conferance:{
        type: Boolean,
        required: true
    },
    workshop_presidentship:{
        type: Boolean,
        required: true
    },
    scientific_meeting_presidentship:{
        type: Boolean,
        required: true
    },
    SEM_activities:{
        type: Boolean,
        required: true
    },
    professional_consultant_activities:{
        type: Boolean,
        required: true
    },

    // RESEARCH ASSISTANT ACTIVITIES
    assistance_activities_provided_to_the_instructor_of_the_course_for_undergraduate_courses:{
        type: Boolean,
        required: true
    },
    supervising_activities_for_quizzes_midterms_and_final_exams:{
        type: Boolean,
        required: true
    },
    counseling_activities_for_undergraduate_students:{
        type: Boolean,
        required: true
    },



    // SUCCESS POINT
    success_coefficient:{
        type: Number,
        required:true,
        default:0
    }
})
export default mongoose.model('ResearchAssistant',ReearchAssistantSchema)
