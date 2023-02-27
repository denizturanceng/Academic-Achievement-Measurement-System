    
    
   document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tipHocasiFaaliyeti").style.display = "none";
 // Öğretmen türü seçimi için <select> elementini al
 var selectElement = document.getElementById("user_type");
 
 // Öğretmen türü değiştiğinde çalışacak fonksiyonu tanımla
 selectElement.addEventListener("change", function() {
 // Öğretmen türü değerini al
 var teacherType = this.value;
 
 
 if (teacherType === "-") {
   document.getElementById("arastirmaFaaliyeti").style.display = "none";
   document.getElementById("egitimFaaliyeti").style.display = "none";
   document.getElementById("kurumsalFaaliyet").style.display = "none";
     document.getElementById("arastirmaGorevlisiFaaliyeti").style.display = "none";
       document.getElementById("tipHocasiFaaliyeti").style.display = "none";
 }
 else if (teacherType === "akademisyen") {
   document.getElementById("arastirmaFaaliyeti").style.display = "block";
   document.getElementById("egitimFaaliyeti").style.display = "block";
   document.getElementById("kurumsalFaaliyet").style.display = "block";
     document.getElementById("arastirmaGorevlisiFaaliyeti").style.display = "none";
       document.getElementById("tipHocasiFaaliyeti").style.display = "none";
 }
 // Eğer öğretmen türü "arastirma görevlisi" ise
 else if (teacherType === "arastirmaGorevlisi") {
   // "arastirmaGorevlisiFaaliyeti" divini göster
   document.getElementById("arastirmaFaaliyeti").style.display = "block";
   document.getElementById("egitimFaaliyeti").style.display = "block";
   document.getElementById("kurumsalFaaliyet").style.display = "block";
   document.getElementById("arastirmaGorevlisiFaaliyeti").style.display = "block";
   document.getElementById("tipHocasiFaaliyeti").style.display = "none";
 }
 // Öğretmen türü "tip hocasi" ise
 else if (teacherType === "tipHocasi") {
   document.getElementById("arastirmaFaaliyeti").style.display = "block";
   document.getElementById("egitimFaaliyeti").style.display = "block";
   document.getElementById("kurumsalFaaliyet").style.display = "block";
   document.getElementById("arastirmaGorevlisiFaaliyeti").style.display = "none";
   // "tipHocasiFaaliyeti" divini göster
   document.getElementById("tipHocasiFaaliyeti").style.display = "block";
 }
 });
 });
 
   //-- Bölüm seçenekleri fakülte seçimine göre dinamik olarak doldurulacak -->
 const fakulteSelect = document.querySelector('#fakulte');
 const bolumSelect = document.querySelector('#bolum');
 
 fakulteSelect.addEventListener('change', () => {
   // Fakülte seçimine göre bölüm seçeneklerini doldur
   const fakulte = fakulteSelect.value;
   let options = '';
   switch (fakulte) {
     case 'fen-edebiyat':
       options = `
         <option value="coğrafya">Coğrafya</option>
         <option value="sosyoloji">Sosyoloji</option>
         <option value="psikoloji">Psikoloji</option>
         <option value="tarih">Tarih</option>
       `;
       break;
     case 'hukuk':
       options = `
         <option value="hukuk">Hukuk</option>
       `;
       break;
     case 'muhendislik-ve-mimarlik':
       options = `
         <option value="biyomedikal-muhendisligi">Biyomedikal Mühendisliği</option>
         <option value="bilgisayar-muhendisligi">Bilgisayar Mühendisliği</option>
         <option value="elektrik-elektronik-muhendisligi">Elektrik Elektronik Mühendisliği</option>
         <option value="endustri-muhendisligi">Endüstri Mühendisliği</option>
         <option value="temel-bilimler-muhendisligi">Temel Bilimler Mühendisliği</option>
       `;
       break;
     case 'saglik-bilimleri':
       options = `
         <option value="dil-ve-konusma-terapisi">Dil ve Konuşma Terapisi</option>
         <option value="fizyoterapi-ve-rehabilitasyon">Fizyoterapi ve Rehabilitasyon</option>
         <option value="hemşirelik">Hemşirelik</option>
         <option value="saglik-yonetimi">Sağlık Yönetimi</option>
         <option value="odyoloji">Odyoloji</option>
       `;
       break;
       case 'eczacilik':
       options = `
         <option value="eczacılık">Eczacılık</option>
       `;
       break;
     case 'tip':
       options = `
         <option value="tıp">Tıp</option>
       `;
       break;
     case 'iktisadi-ve-idari-bilimler':
       options = `
         <option value="iktisat">İktisat</option>
         <option value="isletme">İşletme</option>
         <option value="yonetim-bilisim-sistemleri">Yönetim Bilişim Sistemleri</option>
         <option value="uluslararasi-ticaret-ve-isletmecilik">Uluslararası Ticaret ve İşletmecilik</option>
       `;
       break;
        }
 
   // Seçenekleri bölüm seçimine ekle
   bolumSelect.innerHTML = options;
   // Bölüm seçimine etkin hale getir
   bolumSelect.disabled = false;
 });
 
 
 
 
 
 