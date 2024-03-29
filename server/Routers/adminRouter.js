import express from "express";
import bcrypt from 'bcryptjs'
import Admin from '../models/adminModel.js';
import Academician from '../models/academicianModel.js'



const router = express.Router();

// http://localhost:5000/admin/signup 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const {username, password } = req.body;
        
        
        const AdminExist = await Admin.findOne({ username })
        if(AdminExist)
            return res.status(400).json({ message: 'Admin already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdAdmin = await Admin.create({
            username,
            password: hashedPassword,
        })
        return res.status(201).json(createdAdmin);
    } catch (error) {
        console.log(error)
        return res.json({message: "create admin failed."})
    }
})

// http://localhost:5000/admin/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {username, password} = req.body;
        const admin = await Admin.findOne({username})
        if(!admin)
            return res.status(400).json({message: "Admin does not exist"})

        const isPasswordCorrect = await Admin.findOne({password})
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ admin, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})


// http://localhost:5000/admin/add_academician POST isteği
router.post("/add_academician", async(req,res)=>{
    try {
        const {fullname,
               email,
               password,
               academician_no,
               registration_number,
               current_status,
               academic_title,
               staff_title,
               date_of_start,
               actual_place_of_duty,
               faculty,
               department,
               main_department,
               staff_location,
               
               i_q1q2_essay_count,
               n_essay_count,
               i_essay_count,
               n_book_count,
               i_book_count,
               n_book_chapter_count,
               i_book_chapter_count,
               n_statement_count,
               i_statement_count,
               n_editorship_count,
               i_editorship_count,
               n_judgement_count,
               i_judgement_count,
               n_patent,
               i_patent,

               u_course_count,
               pos_course_count,
               phd_course_count,
               u_student_count,
               pos_student_count,
               phd_student_count,
               u_project_thesis_consultant_count,
               pos_project_thesis_consultant_count,
               phd_project_thesis_consultant_count,
               u_project_thesis_co_consultant_count,
               pos_project_thesis_co_consultant_count,
               phd_project_thesis_co_consultant_count,
               student_and_thesis_assignment_result,
               student_club_consultant,

               rector,
               vice_rector,
               consultant_rector,
               institute_directorate,
               vice_institute_directorate,
               central_directorate,
               vice_central_directorate,
               coordinatorship,
               dean,
               vice_dean,
               president_of_department,
               vice_president_of_department,
               head_of_department,
               vice_head_of_department,
               university_senate_membership,
               university_board_membership,
               official_university_study_group_membership,
               other_university_study_group_membership,
               faculty_board_membership,
               official_faculty_study_group_membership,
               other_faculty_study_group_membership,
               official_jury_membership,
               official_referee,
               presidentship_of_conferance,
               workshop_presidentship,
               scientific_meeting_presidentship,
               SEM_activities,
               professional_consultant_activities,

               success_coefficient} = req.body;
        const academicianExists = await Academician.findOne({ academician_no })
        if(academicianExists)
            return res.status(400).json({ message: 'This academician already exists.'})


        const hashedPassword = await bcrypt.hash(password, 10)
        const createdAcademician = await Academician.create({
            fullname,
            email,
            password : hashedPassword,
            academician_no,
            registration_number,
            current_status,
            academic_title,
            staff_title,
            date_of_start,
            actual_place_of_duty,
            faculty,
            department,
            main_department,
            staff_location,
            
            i_q1q2_essay_count,
            n_essay_count,
            i_essay_count,
            n_book_count,
            i_book_count,
            n_book_chapter_count,
            i_book_chapter_count,
            n_statement_count,
            i_statement_count,
            n_editorship_count,
            i_editorship_count,
            n_judgement_count,
            i_judgement_count,
            n_patent,
            i_patent,

            u_course_count,
            pos_course_count,
            phd_course_count,
            u_student_count,
            pos_student_count,
            phd_student_count,
            u_project_thesis_consultant_count,
            pos_project_thesis_consultant_count,
            phd_project_thesis_consultant_count,
            u_project_thesis_co_consultant_count,
            pos_project_thesis_co_consultant_count,
            phd_project_thesis_co_consultant_count,
            student_and_thesis_assignment_result,
            student_club_consultant,

            rector,
            vice_rector,
            consultant_rector,
            institute_directorate,
            vice_institute_directorate,
            central_directorate,
            vice_central_directorate,
            coordinatorship,
            dean,
            vice_dean,
            president_of_department,
            vice_president_of_department,
            head_of_department,
            vice_head_of_department,
            university_senate_membership,
            university_board_membership,
            official_university_study_group_membership,
            other_university_study_group_membership,
            faculty_board_membership,
            official_faculty_study_group_membership,
            other_faculty_study_group_membership,
            official_jury_membership,
            official_referee,
            presidentship_of_conferance,
            workshop_presidentship,
            scientific_meeting_presidentship,
            SEM_activities,
            professional_consultant_activities,

            success_coefficient
        })
        return res.status(201).json(createdAcademician);    

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
})

// http://localhost:5000/admin/delete_academician DELETE request
router.delete("/delete_academician", async(req,res) => {
    try {
        const {academician_no} = req.body;
        const teacher = await Academician.findOne({academician_no})
        if(!teacher)
            return res.status(400).json({message: "academician does not exist"})
        const deletedTeacher = await Academician.deleteOne({
            academician_no,
        })
        return res.status(200).json(deletedTeacher)

    } catch (error) {
        console.log(error)
        return res.json({message:"delete academician is failed."})
    }
})

// http://localhost:5000/admin/list_all_academicians ' a yapılan GET isteği
router.get('/list_all_academicians', async(req, res)=>{
    const teachers = await Academician.find()
    res.send(teachers)
});

// http://localhost:5000/admin/:academician_no ' a yapılan GET isteği
// router.get('/:academician_no', async(req,res)=>{
//     const academician_no = parseInt(req.body.academician_no);
//     if (isNaN(academician_no)) {
//         return res.status(400).send('Invalid academician no.');
//         }
//     Academician.findOne({ academician_no }, (error, teacher) => {
//         if (error) {
//             res.status(500).send(error);
//         } else if (teacher) {
//             res.send(teacher);
//         } else {
//             res.status(404).send('Academician not found.');
//         }
//         });
// })

// http://localhost:5000/admin/sort_by_success_coefficent ' a yapılan GET isteği
router.get('/sort_by_success_coefficent', async(req,res)=>{
    
    Academician.find().sort({success_coefficient: -1}).exec((error, teachers) => {
        if (error) {
            res.status(500).send(error);
        } else if (teachers) {
            res.send(teachers);
        } else {
            res.status(404).send('Academician not found.');
        }
    });
})

// http://localhost:5000/admin/get-less-than-1
router.get('/get-less-than-1', (req, res) => {
    Academician.find({ success_coefficient: { $lt: 1 } }).sort({ success_coefficient: 1 }).exec((err, staff) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
        res.json(staff);
      });
    });


// http://localhost:5000/admin/get-greater-than-1
router.get('/get-greater-than-1', (req, res) => {
Academician.find({ $or: [{ success_coefficient: 1 }, { success_coefficient: { $gt: 1 } }] }).sort({ success_coefficient: -1 }).exec((err, staff) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(staff);
  });
});

  

export default router;