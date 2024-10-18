// listeye ekleme ve bulma

function isimGirisi() {
  let isimAdedi = prompt("kac isim girmek istersiniz?");
  let isimler = [];

  for (let i = 0; i < isimAdedi; i++) {
      let isim = prompt(`${i + 1}ismi girin:`);
      isimler.push(isim);
  }
    console.log("isimler: ", isimler);

  let arananIsim = prompt("hangi ismi ariyorsunuz??");
  let isimSayisi = 0;

  for (let isim of isimler) {
      if (isim.toLowerCase() === arananIsim.toLowerCase()) {
          isimSayisi++;
      }
  }

  if (isimSayisi > 0) {
      console.log(`${arananIsim} ismi listenizde ${isimSayisi} adet bulundu.`);
  } else {
      console.log(`${arananIsim} ismi listenizde bulunamadi.`);
  }
}

isimGirisi();


// Kullanıcıya listeye kaç adet isim eklemek istediğini soralım. 
// Kullanıcı cevabına göre isimleri girelim ve daha sonra console'da yazdıralım. (isimler birden fazla eklenebilir)
// Kullanıcıya liste içinden hangi ismi aradığını soralım.
// Kullanıcının vereceği cevaba göre "... ismi listenizde .... adet bulundu" gibi mesaj çıkartalım.