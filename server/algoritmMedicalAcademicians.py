import pymongo
import pandas as pd

client = pymongo.MongoClient("mongodb+srv://izbu:izbu1463@clusterbakircayassesmen.pdz9niv.mongodb.net/BakircayAcademicianAssesmentProject?retryWrites=true&w=majority")
db= client["BakircayAcademicianAssesmentProject"]
collection=db["academicians"]

academician =list(collection.find())


i=0
for doc in collection.find():
    #ARAŞTIRMA FAALİYETLERİ
    puan = 0
    
    ulusal_makale_sayisi = doc["n_essay_count"]
    puan += ulusal_makale_sayisi * 1000

    uluslararasi_makale_sayisi = doc["i_essay_count"]
    puan += uluslararasi_makale_sayisi * 2000

    uluslararasi_q1q2_makale_sayisi = doc["i_q1q2_essay_count"]
    puan += uluslararasi_q1q2_makale_sayisi * 2200

    ulusal_kitap_sayisi = doc["n_book_count"]
    puan += ulusal_kitap_sayisi * 2000

    uluslararasi_kitap_sayisi = doc["i_book_count"]
    puan += uluslararasi_kitap_sayisi * 4000

    uluslararasi_kitap_bolum_sayisi = doc["i_book_chapter_count"]
    puan += uluslararasi_kitap_bolum_sayisi * 1000

    ulusal_kitap_bolum_sayisi = doc["n_book_chapter_count"]
    puan += ulusal_kitap_bolum_sayisi * 500

    uluslararasi_bildiri_sayisi = doc["i_statement_count"]
    puan += uluslararasi_bildiri_sayisi * 400

    ulusal_bildiri_sayisi = doc["n_statement_count"]
    puan += ulusal_bildiri_sayisi * 200

    uluslararasi_kitap_veya_dergi_editorlugu_sayisi = doc["i_editorship_count"]
    puan += uluslararasi_kitap_veya_dergi_editorlugu_sayisi * 400

    ulusal_kitap_veya_dergi_editorlugu_sayisi = doc["n_editorship_count"]
    puan += ulusal_kitap_veya_dergi_editorlugu_sayisi * 200

    uluslararasi_hakemlik_sayisi_akademik = doc["i_judgement_count"]
    puan += uluslararasi_hakemlik_sayisi_akademik * 20

    ulusal_hakemlik_sayisi_akademik = doc["n_judgement_count"]
    puan += uluslararasi_hakemlik_sayisi_akademik * 10

    uluslararasi_patent = doc["i_patent"]
    puan += uluslararasi_patent * 2000

    ulusal_patent = doc["n_patent"]
    puan += ulusal_patent * 1000

    #################################################################################################
    #EĞİTİM FAALİYETLERİ

    lisans_ders_sayisi = doc["u_course_count"]
    puan += lisans_ders_sayisi * 40

    yüksek_lisans_ders_sayisi = doc["pos_course_count"]
    puan += yüksek_lisans_ders_sayisi * 45

    doktora_ders_sayisi = doc["phd_course_count"]
    puan += doktora_ders_sayisi * 50

    lisans_dersteki_ogrenci_sayisi = doc["u_student_count"]
    puan += lisans_dersteki_ogrenci_sayisi

    yuksek_lisans_dersteki_ogrenci_sayisi = doc["pos_student_count"]
    puan += yuksek_lisans_dersteki_ogrenci_sayisi * 3/2

    doktora_dersteki_ogrenci_sayisi = doc["phd_student_count"]
    puan += doktora_dersteki_ogrenci_sayisi * 2

    lisans_proje_veya_tez_danismanlik_sayisi = doc["u_project_thesis_consultant_count"]
    puan += lisans_proje_veya_tez_danismanlik_sayisi * 50

    yuksek_lisans_proje_veya_tez_danismanlik_sayisi = doc["pos_project_thesis_consultant_count"]
    puan += yuksek_lisans_proje_veya_tez_danismanlik_sayisi * 75

    doktora_proje_veya_tez_danismanlik_sayisi = doc["phd_project_thesis_consultant_count"]
    puan += doktora_proje_veya_tez_danismanlik_sayisi * 100

    lisans_proje_veya_tez_es_danismanligi_sayisi = doc["u_project_thesis_co_consultant_count"]
    puan += doktora_proje_veya_tez_danismanlik_sayisi * 10

    yuksek_lisans_proje_veya_tez_es_danismanligi_sayisi = doc["pos_project_thesis_co_consultant_count"]
    puan += yuksek_lisans_proje_veya_tez_es_danismanligi_sayisi * 15

    doktora_proje_veya_tez_es_danismanligi_sayisi = doc["phd_project_thesis_co_consultant_count"]
    puan += doktora_proje_veya_tez_es_danismanligi_sayisi * 20

    ogrenci_ve_ders_degerlendirme_sonucu = doc["student_and_thesis_assignment_result"]
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
        
    ogrenci_kulubu_danismanlik_sayisi =  doc["student_club_consultant"]
    puan += ogrenci_kulubu_danismanlik_sayisi * 10

    #################################################################################################

    # KURUMSAL FAALİYETLER

    rektorluk = doc["rector"]
    if(rektorluk==True):
        puan += 2000

    rektor_yardimciligi = doc["vice_rector"]
    if(rektor_yardimciligi==True):
        puan += 1500

    rektor_danismanligi = doc["consultant_rector"]
    if(rektor_danismanligi==True):
        puan += 100

    rektor_danismanligi = doc["consultant_rector"]
    if(rektor_danismanligi==True):
        puan += 100

    enstutu_mudurlugu = doc["institute_directorate"]
    if(enstutu_mudurlugu==True):
        puan += 1500

    enstutu_mudur_yardimciligi = doc["vice_institute_directorate"]
    if(enstutu_mudur_yardimciligi==True):
        puan += 75

    merkez_mudurlugu = doc["central_directorate"]
    if(merkez_mudurlugu==True):
        puan += 1500

    merkez_mudur_yardimciligi = doc["vice_central_directorate"]
    if(merkez_mudur_yardimciligi==True):
        puan += 750

    koordinatorluk = doc["coordinatorship"]
    if(koordinatorluk==True):
        puan += 1000

    dekanlik = doc["dean"]
    if(dekanlik==True):
        puan += 1500

    dekan_yardimciligi = doc["vice_dean"]
    if(dekan_yardimciligi ==True):
        puan += 750

    bolum_baskanligi = doc["president_of_department"]
    if(bolum_baskanligi ==True):
        puan += 750

    bolum_baskan_yardimciligi = doc["vice_president_of_department"]
    if(bolum_baskan_yardimciligi ==True):
        puan += 500

    ana_bilim_dali_baskanligi = doc["head_of_department"]
    if(ana_bilim_dali_baskanligi ==True):
        puan += 100

    ana_bilim_dali_baskan_yardimciligi = doc["vice_head_of_department"]
    if(ana_bilim_dali_baskan_yardimciligi ==True):
        puan += 50

    universite_senato_uyeligi = doc["university_senate_membership"]
    if(universite_senato_uyeligi ==True):
        puan += 100

    universite_yonetim_kurulu_uyeligi = doc["university_board_membership"]
    if(universite_yonetim_kurulu_uyeligi ==True):
        puan += 100

    resmi_universite_calisma_grubu_uyeligi = doc["official_university_study_group_membership"]
    if(resmi_universite_calisma_grubu_uyeligi ==True):
        puan += 200

    diger_universite_calisma_grubu_uyeligi = doc["other_university_study_group_membership"]
    if(diger_universite_calisma_grubu_uyeligi ==True):
        puan += 100

    fakulte_yonetim_kurulu_uyeligi = doc["faculty_board_membership"]
    if(fakulte_yonetim_kurulu_uyeligi ==True):
        puan += 50

    resmi_fakulte_calisma_grubu_uyeligi =doc["official_faculty_study_group_membership"]
    if(fakulte_yonetim_kurulu_uyeligi ==True):
        puan += 50 

    diger_fakulte_calisma_grubu_uyeligi = doc["other_faculty_study_group_membership"]
    if(diger_fakulte_calisma_grubu_uyeligi ==True):
        puan += 50       

    juri_uyeligi =doc["official_jury_membership"]
    if(juri_uyeligi ==True):
        puan += 5

    hakemlik = doc["official_referee"]
    if(hakemlik ==True):
        puan += 5

    konferans_baskanligi = doc["presidentship_of_conferance"]
    if(konferans_baskanligi ==True):
        puan += 200

    calistay_baskanligi = doc["workshop_presidentship"]
    if(calistay_baskanligi ==True):
        puan += 50        

    bilimsel_toplanti_baskanligi = doc["scientific_meeting_presidentship"]
    if(bilimsel_toplanti_baskanligi ==True):
        puan += 25

    SEM_faaliyetleri = doc["SEM_activities"]
    if(SEM_faaliyetleri ==True):
        puan += 40

    profesyonel_danismanlik_faaliyetleri = doc["professional_consultant_activities"]
    if(profesyonel_danismanlik_faaliyetleri ==True):
        puan += 500


    basari_katsayisi = (puan / 2000)
    

    #academician[i]['success_coefficient'] = basari_katsayisi 
    collection.update_one({"_id": doc["_id"]}, {"$set": {"success_coefficient": basari_katsayisi}})
