import pymongo
import pandas as pd

client = pymongo.MongoClient("mongodb+srv://izbu:izbu1463@clusterbakircayassesmen.pdz9niv.mongodb.net/BakircayAcademicianAssesmentProject?retryWrites=true&w=majority")
db= client["BakircayAcademicianAssesmentProject"]
collection=db["academicians"]

academician =list(collection.find())

puan = 0
i=0
for i in range(len(academician)):

    #ARAŞTIRMA FAALİYETLERİ

    ulusal_makale_sayisi = academician[i].get('n_essay_count')
    puan += ulusal_makale_sayisi * 1000

    uluslararasi_makale_sayisi = academician[i].get('i_essay_count')
    puan += uluslararasi_makale_sayisi * 2000

    uluslararasi_q1q2_makale_sayisi = academician[i].get('i_q1q2_essay_count')
    puan += uluslararasi_q1q2_makale_sayisi * 2200

    ulusal_kitap_sayisi = academician[i].get('n_book_count')
    puan += ulusal_kitap_sayisi * 2000

    uluslararasi_kitap_sayisi = academician[i].get('i_book_count')
    puan += uluslararasi_kitap_sayisi * 4000

    uluslararasi_kitap_bolum_sayisi = academician[i].get('i_book_chapter_count')
    puan += uluslararasi_kitap_bolum_sayisi * 1000

    ulusal_kitap_bolum_sayisi = academician[i].get('n_book_chapter_count')
    puan += ulusal_kitap_bolum_sayisi * 500

    uluslararasi_bildiri_sayisi = academician[i].get('i_statement_count')
    puan += uluslararasi_bildiri_sayisi * 400

    ulusal_bildiri_sayisi = academician[i].get('n_statement_count')
    puan += ulusal_bildiri_sayisi * 200

    uluslararasi_kitap_veya_dergi_editorlugu_sayisi = academician[i].get('i_editorship_count')
    puan += uluslararasi_kitap_veya_dergi_editorlugu_sayisi * 400

    ulusal_kitap_veya_dergi_editorlugu_sayisi = academician[i].get('n_editorship_count')
    puan += ulusal_kitap_veya_dergi_editorlugu_sayisi * 200

    uluslararasi_hakemlik_sayisi_akademik = academician[i].get('i_judgement_count')
    puan += uluslararasi_hakemlik_sayisi_akademik * 20

    ulusal_hakemlik_sayisi_akademik = academician[i].get('n_judgement_count')
    puan += uluslararasi_hakemlik_sayisi_akademik * 10

    uluslararasi_patent = academician[i].get('i_patent')
    puan += uluslararasi_patent * 2000

    ulusal_patent = academician[i].get('n_patent')
    puan += ulusal_patent * 1000

    #################################################################################################
    #EĞİTİM FAALİYETLERİ

    lisans_ders_sayisi = academician[i].get('u_course_count')
    puan += lisans_ders_sayisi * 40

    yüksek_lisans_ders_sayisi = academician[i].get('pos_course_count')
    puan += yüksek_lisans_ders_sayisi * 45

    doktora_ders_sayisi = academician[i].get('phd_course_count')
    puan += doktora_ders_sayisi * 50

    lisans_dersteki_ogrenci_sayisi = academician[i].get('u_student_count')
    puan += lisans_dersteki_ogrenci_sayisi

    yuksek_lisans_dersteki_ogrenci_sayisi = academician[i].get('pos_student_count')
    puan += yuksek_lisans_dersteki_ogrenci_sayisi * 3/2

    doktora_dersteki_ogrenci_sayisi = academician[i].get('phd_student_count')
    puan += doktora_dersteki_ogrenci_sayisi * 2

    lisans_proje_veya_tez_danismanlik_sayisi = academician[i].get('u_project_thesis_consultant_count')
    puan += lisans_proje_veya_tez_danismanlik_sayisi * 50

    yuksek_lisans_proje_veya_tez_danismanlik_sayisi = academician[i].get('pos_project_thesis_consultant_count')
    puan += yuksek_lisans_proje_veya_tez_danismanlik_sayisi * 75

    doktora_proje_veya_tez_danismanlik_sayisi = academician[i].get('phd_project_thesis_consultant_count')
    puan += doktora_proje_veya_tez_danismanlik_sayisi * 100

    lisans_proje_veya_tez_es_danismanligi_sayisi = academician[i].get('u_project_thesis_co_consultant_count')
    puan += doktora_proje_veya_tez_danismanlik_sayisi * 10

    yuksek_lisans_proje_veya_tez_es_danismanligi_sayisi = academician[i].get('pos_project_thesis_co_consultant_count')
    puan += yuksek_lisans_proje_veya_tez_es_danismanligi_sayisi * 15

    doktora_proje_veya_tez_es_danismanligi_sayisi = academician[i].get('phd_project_thesis_co_consultant_count')
    puan += doktora_proje_veya_tez_es_danismanligi_sayisi * 20

    ogrenci_ve_ders_degerlendirme_sonucu = academician[i].get('student_and_thesis_assignment_result')
    if(ogrenci_ve_ders_degerlendirme_sonucu==1):
        puan -= 40
    elif(ogrenci_ve_ders_degerlendirme_sonucu==2):
        puan -= 20
    elif(ogrenci_ve_ders_degerlendirme_sonucu==3):
        puan += 0
    elif(ogrenci_ve_ders_degerlendirme_sonucu==4):
        puan += 20
    elif(ogrenci_ve_ders_degerlendirme_sonucu >= 5):
        puan += 40
        
    ogrenci_kulubu_danismanlik_sayisi = academician[i].get('student_club_consultant') 
    puan += ogrenci_kulubu_danismanlik_sayisi * 10

    #################################################################################################

    # KURUMSAL FAALİYETLER

    rektorluk = academician[i].get('rector')
    if(rektorluk==True):
        puan += 2000

    rektor_yardimciligi =academician[i].get('vice_rector')
    if(rektor_yardimciligi==True):
        puan += 1500

    rektor_danismanligi =academician[i].get('consultant_rector')
    if(rektor_danismanligi==True):
        puan += 100

    rektor_danismanligi =academician[i].get('consultant_rector')
    if(rektor_danismanligi==True):
        puan += 100

    enstutu_mudurlugu =academician[i].get('institute_directorate')
    if(enstutu_mudurlugu==True):
        puan += 1500

    enstutu_mudur_yardimciligi =academician[i].get('vice_institute_directorate')
    if(enstutu_mudur_yardimciligi==True):
        puan += 75

    merkez_mudurlugu =academician[i].get('central_directorate')
    if(merkez_mudurlugu==True):
        puan += 1500

    merkez_mudur_yardimciligi =academician[i].get('vice_central_directorate')
    if(merkez_mudur_yardimciligi==True):
        puan += 750

    koordinatorluk =academician[i].get('coordinatorship')
    if(koordinatorluk==True):
        puan += 1000

    dekanlik =academician[i].get('dean')
    if(dekanlik==True):
        puan += 1500

    dekan_yardimciligi =academician[i].get('vice_dean')
    if(dekan_yardimciligi ==True):
        puan += 750

    bolum_baskanligi =academician[i].get('president_of_department')
    if(bolum_baskanligi ==True):
        puan += 750

    bolum_baskan_yardimciligi =academician[i].get('vice_president_of_department')
    if(bolum_baskan_yardimciligi ==True):
        puan += 500

    ana_bilim_dali_baskanligi =academician[i].get('head_of_department')
    if(ana_bilim_dali_baskanligi ==True):
        puan += 100

    ana_bilim_dali_baskan_yardimciligi =academician[i].get('vice_head_of_department')
    if(ana_bilim_dali_baskan_yardimciligi ==True):
        puan += 50

    universite_senato_uyeligi =academician[i].get('university_senate_membership')
    if(universite_senato_uyeligi ==True):
        puan += 100

    universite_yonetim_kurulu_uyeligi =academician[i].get('university_board_membership')
    if(universite_yonetim_kurulu_uyeligi ==True):
        puan += 100

    resmi_universite_calisma_grubu_uyeligi =academician[i].get('official_university_study_group_membership')
    if(resmi_universite_calisma_grubu_uyeligi ==True):
        puan += 200

    diger_universite_calisma_grubu_uyeligi =academician[i].get('other_university_study_group_membership')
    if(diger_universite_calisma_grubu_uyeligi ==True):
        puan += 100

    fakulte_yonetim_kurulu_uyeligi =academician[i].get('faculty_board_membership')
    if(fakulte_yonetim_kurulu_uyeligi ==True):
        puan += 50

    resmi_fakulte_calisma_grubu_uyeligi =academician[i].get('official_faculty_study_group_membership')
    if(fakulte_yonetim_kurulu_uyeligi ==True):
        puan += 50 

    diger_fakulte_calisma_grubu_uyeligi =academician[i].get('other_faculty_study_group_membership')
    if(diger_fakulte_calisma_grubu_uyeligi ==True):
        puan += 50       

    juri_uyeligi =academician[i].get('official_jury_membership')
    if(juri_uyeligi ==True):
        puan += 5

    hakemlik =academician[i].get('official_referee')
    if(hakemlik ==True):
        puan += 5

    konferans_baskanligi =academician[i].get('presidentship_of_conferance')
    if(konferans_baskanligi ==True):
        puan += 200

    calistay_baskanligi =academician[i].get('workshop_presidentship')
    if(calistay_baskanligi ==True):
        puan += 50        

    bilimsel_toplanti_baskanligi =academician[i].get('scientific_meeting_presidentship')
    if(bilimsel_toplanti_baskanligi ==True):
        puan += 25

    SEM_faaliyetleri =academician[i].get('SEM_activities')
    if(SEM_faaliyetleri ==True):
        puan += 40

    profesyonel_danismanlik_faaliyetleri =academician[i].get('professional_consultant_activities')
    if(profesyonel_danismanlik_faaliyetleri ==True):
        puan += 500


    basari_katsayisi = puan / 2000

    academician[i]['success_coefficient'] = basari_katsayisi 
     






