import mongoose from "mongoose";

const MedicalAcademicianSchema = mongoose.Schema({
    
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

    // MEDICAL ACTIVITIES


    // Ortopedi ve Travmatoloji Ana Bilim Dalı için Tıp Fakültesi Mezuniyet Öncesi 
    // Öğrenciler ile Tıpta Uzmanlık Öğrencilerine Verilmesi Planlanan Teorik Eğitimi Dışındaki Eğitim Faaliyetleri 
    service_visit_and_study:{
        type: Number,
        required: true
    },
    radiological_evaluation_study:{
        type: Number,
        required: true
    },
    case_report_and_Summary_of_the_day:{
        type: Number,
        required: true
    },
    outpatient_study:{
        type: Number,
        required: true
    },
    general_examination_in_orthopedic_patient:{
        type: Number,
        required: true
    },
    bone_biomechanics:{
        type: Number,
        required: true
    },
    examination_methods_in_shoulder_and_elbow_ligament_lesions:{
        type: Number,
        required: true
    },
    examination_methods_in_wrist_and_hand_ligament_lesions:{
        type: Number,
        required: true
    },
    examination_methods_in_hip_and_knee_ligament_lesions:{
        type: Number,
        required: true
    },
    examination_methods_in_ankle_and_foot_ligament_lesions:{
        type: Number,
        required: true
    },


    //  Genel Cerrahi Stajı Pratik Uygulama Dersleri 
    bedside_training:{
        type: Number,
        required: true
    },
    practical_trainings:{
        type: Number,
        required: true
    },


    // Adli Tıp Anabilim Klinik / Laboratuvar Uygulamaları 
    forensic_examination:{
        type: Number,
        required: true
    },
    forensic_report_writing:{
        type: Boolean,
        required: true
    },
    bone_age_determination:{
        type: Number,
        required: true
    },
    sexual_offense_examination:{
        type: Number,
        required: true
    },
    disability_and_disability_assessment:{
        type: Number,
        required: true
    },
    dead_inspection:{
        type: Number,
        required: true
    },
    forensic_autopsy:{
        type: Number,
        required: true
    },


    //Çocuk Sağlığı ve Hastalıkları Anabilim Dalı mezuniyet öncesi öğrencileri ve mezuniyet 
    //sonrası tıpta uzmanlık öğrencilerine yönelik yürütülmekte olan teorik eğitim haricindeki eğitim faaliyetleri 
    inpatient_and_intensive_care_bedside_visits:{
        type: Number,
        required: true
    },
    practical_and_applied_training_in_major_and_minor_outpatient_clinics:{
        type: Number,
        required: true
    },
    invasive_interventions_hands_on_training:{
        type: Number,
        required: true
    },
    outpatient_case_reports:{
        type: Number,
        required: true
    },
    service_case_reports:{
        type: Number,
        required: true
    },
    file_discussions:{
        type: Number,
        required: true
    },
    article_discussions:{
        type: Number,
        required: true
    },
    certified_course_programs:{
        type: Number,
        required: true
    },
    interactive_trainings:{
        type: Number,
        required: true
    },
    radiology_meetings:{
        type: Number,
        required: true
    },
    interdisciplinary_councils:{
        type: Number,
        required: true
    },
    intensive_care_mortality_meetings:{
        type: Number,
        required: true
    },
    intensive_care_multidisciplinary_team_training_meetings:{
        type: Number,
        required: true
    },
    scientific_study_meetings:{
        type: Number,
        required: true
    },

    // Fiziksel Tıp ve Rehabilitasyon Anabilim dalında verilen teorik eğitim haricindeki klinik  eğitim faaliyetleri 
    patient_visit:{
        type: Number,
        required: true
    },
    major_patient_visit:{
        type: Number,
        required: true
    },
    council:{
        type: Number,
        required: true
    },
    introduction_of_physical_therapy_and_rehabilitation_devices_and_training_in_practical_use_for_specialty_students_in_the_FTR_treatment_unit:{
        type: Number,
        required: true
    },
    practical_demonstration_and_application_of_therapeutic_exercises_on_the_patient:{
        type: Number,
        required: true
    },
    teaching_the_application_of_functional_electrical_stimulation_therapy_to_residency_students_under_the_supervision_of_an_educator:{
        type: Number,
        required: true
    },
    local_injection_applications:{
        type: Number,
        required: true
    },
    kinesiotherapy_applications:{
        type: Number,
        required: true
    },


    //Ürolojii Anabilim Dalı Eğitim Faaliyetleri 
    patient_visit:{
        type: Number,
        required: true
    },
    patient_council_and_literature_hour:{
        type: Number,
        required: true
    },
    ESWL_training:{
        type: Number,
        required: true
    },
    cystoscopy_training:{
        type: Number,
        required: true
    },
    prostate_biopsy_education:{
        type: Number,
        required: true
    },
    urodynamics_education:{
        type: Number,
        required: true
    },


    // SUCCESS POINT
    success_coefficient:{
        type: Number,
        required:true,
        default:0
    }
})
export default mongoose.model('MedicalAcademician',MedicalAcademicianSchema)
