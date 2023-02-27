       
    function sortTable() {
      // Tablodaki satırları al
      var table = document.getElementById("teacherTable");
      var rows = table.rows;

      // İsim sütununa göre satırları sırala
      var sortedRows = Array.from(rows).slice(1).sort(function(row1, row2) {
        var name1 = row1.cells[0].innerHTML;
        var name2 = row2.cells[0].innerHTML;
        return name1.localeCompare(name2);
      });

      // Sıralanmış satırları tablonun içine yerleştir
      for (var i = 0; i < sortedRows.length; i++) {
        table.appendChild(sortedRows[i]);
      }
    }


//---------------------------------------------------------------------------------------
function sortTableScore() {
// Tablodaki satırları al
var table = document.getElementById("teacherTable");
var rows = table.rows;

// Puan sütununa göre satırları sırala
var sortedRows = Array.from(rows).slice(1).sort(function(row1, row2) {
  var score1 = row1.cells[1].innerHTML;
  var score2 = row2.cells[1].innerHTML;
  return score2 - score1;
});

// Sıralanmış satırları tablonun içine yerleştir
for (var i = 0; i < sortedRows.length; i++) {
  table.appendChild(sortedRows[i]);
}
}


//---------------------------------------------------------------------------------------


document.getElementById("addButton").addEventListener("click", function() {
// İsim ve puan girdilerini al
var name = document.getElementById("nameInput").value;
var score = document.getElementById("scoreInput").value;

// Yeni bir satır oluştur
var newRow = document.createElement("tr");

// İsim ve puan değerlerini içeren hücreler oluştur
var nameCell = document.createElement("td");
nameCell.textContent = name;
var scoreCell = document.createElement("td");
scoreCell.textContent = score;

// Detaylar düğmesi için hücre oluştur
var buttonCell = document.createElement("td");
var button = document.createElement("button");
button.textContent = "...";
button.onclick = function() {
  location.href = 'OgretmenGoruntule.html';
};
buttonCell.appendChild(button);

// Hücreleri satıra ekle
newRow.appendChild(nameCell);
newRow.appendChild(scoreCell);
newRow.appendChild(buttonCell);

// Yeni satırı tablo sonuna ekle
var table = document.getElementById("teacherTable");
table.appendChild(newRow);

 // Girdi alanlarını temizle
 document.getElementById("nameInput").value = "";
document.getElementById("scoreInput").value = "";
});

//-----------------------------------------------------------------------------





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
    <option value="-">Tüm Bölümler</option>
      <option value="coğrafya">Coğrafya</option>
      <option value="sosyoloji">Sosyoloji</option>
      <option value="psikoloji">Psikoloji</option>
      <option value="tarih">Tarih</option>
    `;
    break;
  case 'hukuk':
    options = `
    <option value="-">Tüm Bölümler</option>
      <option value="hukuk">Hukuk</option>
    `;
    break;
  case 'muhendislik-ve-mimarlik':
    options = `
    <option value="-">Tüm Bölümler</option>
      <option value="biyomedikal-muhendisligi">Biyomedikal Mühendisliği</option>
      <option value="bilgisayar-muhendisligi">Bilgisayar Mühendisliği</option>
      <option value="elektrik-elektronik-muhendisligi">Elektrik Elektronik Mühendisliği</option>
      <option value="endustri-muhendisligi">Endüstri Mühendisliği</option>
      <option value="temel-bilimler-muhendisligi">Temel Bilimler Mühendisliği</option>
    `;
    break;
  case 'saglik-bilimleri':
    options = `
    <option value="-">Tüm Bölümler</option>
      <option value="dil-ve-konusma-terapisi">Dil ve Konuşma Terapisi</option>
      <option value="fizyoterapi-ve-rehabilitasyon">Fizyoterapi ve Rehabilitasyon</option>
      <option value="hemşirelik">Hemşirelik</option>
      <option value="saglik-yonetimi">Sağlık Yönetimi</option>
      <option value="odyoloji">Odyoloji</option>
    `;
    break;
    case 'eczacilik':
    options = `
    <option value="-">Tüm Bölümler</option>
      <option value="eczacilik">Eczacılık</option>
    `;
    break;
  case 'tip':
    options = `
    <option value="-">Tüm Bölümler</option>
      <option value="tip">Tıp</option>
    `;
    break;
  case 'iktisadi-ve-idari-bilimler':
    options = `
    <option value="-">Tüm Bölümler</option>
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