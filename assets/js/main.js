(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  let countdown = select(".countdown");
  const clock = countdown.innerHTML;
  function getMonthName() {
    const months = [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentyabr",
      "oktyabr",
      "noyabr",
      "dekabr",
    ];
    return months[new Date().getMonth()];
  }
  const countDownDate = function () {
    let hours = Math.floor(new Date().getHours());
    let minutes = Math.floor(new Date().getMinutes());
    let seconds = Math.floor(new Date().getSeconds());
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    countdown.innerHTML = clock
      .replace("%h", hours)
      .replace("%m", minutes)
      .replace("%s", seconds)
      .replace("%d", new Date().getDate());
  };
  countDownDate();
  setInterval(countDownDate, 1000);
  const infoToday = function () {
    let today = select(".title");
    const output = today.innerHTML;
    let month = new Date().getDate() + "-" + getMonthName();
    today.innerHTML = output.replace("%today", month);
    let today1 = select(".description");
    const output1 = today1.innerHTML;
    today1.innerHTML = output1.replace("%today", month);
  };
  // infoToday();

  const atamalarfunck = function(){
    let atama  = select(".atama");
    const output  = atama.innerHTML;
    function getrandom(){
      var atamalar =[
        "Avtomagistral — 5.1. yo‘l belgisi bilan belgilangan, har bir yo‘nalishning qatnov qismlari ajratuvchi bo‘lak bilan ajratilgan (u bo‘lmaganda yo‘l to‘siqlari bilan) hamda boshqa yo‘llar, tramvay va temir yo‘llari, piyoda va velosiped yo‘lkalari bilan bir sathda kesishmaydigan yo‘l.",
    
    "Avtopoyezd — ulagich moslamalari bilan ulangan egarli shatakka oluvchi va yarim tirkama yoki yuk avtomobili va tirkama (tirkamalar)dan iborat transport vositasi tarkibi.",
    
    "Yo‘l harakati xavfsizligi — yo‘l harakati qatnashchilarining yo‘l-transport hodisalari va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo‘l harakati holati.",
    
    "Velosiped — odam kuchi bilan harakatlantiriladigan (nogironlar aravachasidan tashqari) ikki yoki undan ortiq g‘ildirakli transport vositasi.",
    
    "Transport vositasining egasi — transport vositasiga mulk huquqi yoki boshqa ashyoviy huquqlar asosida egalik qiluvchi yuridik yoki jismoniy shaxs.",
    
    "Haydovchi — yo‘llarda transport vositasini boshqarib borayotgan shaxs. Boshqarishni o‘rgatuvchi, ot aravani boshqarayotgan, hayvonlarni minib harakatlanayotgan yoki ularni yetaklab borayotgan, chorva mollari (poda)ni haydab borayotgan shaxslar haydovchiga tenglashtiriladi.",
    
    "Majburiy to‘xtash — texnik nuqson, tashilayotgan yuk, haydovchi va yo‘lovchining holati, yo‘ldagi biror to‘siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog‘liq holda transport vositasi harakatini to‘xtatish.",
    
    "Asosiy yo‘l — tuproqli yo‘lga nisbatan qattiq qoplamali (asfalt va sement-betonli, tosh va shunga o‘xshashlar yotqizilgan), kesishayotgan yoki tutashgan yo‘lga nisbatan 2.1, 2.3.1 — 2.3.3 yoki 5.1 yo‘l belgilari bilan belgilangan yoxud yondosh hududdan chiqadigan yo‘lga nisbatan har qanday yo‘l. Ikkinchi darajali yo‘lning bevosita chorrahaga tutash qismining qoplamali bo‘lishi uni asosiy yo‘l bilan teng huquqli qilmaydi.",
    
    "Arava — ot (yoki boshqa hayvonlar)ga qo‘shib tortiladigan yoki odam mushak kuchi bilan harakatga keltiriladigan dvigatel bilan jihozlanmagan, yuk tashishga mo‘ljallangan qurilma.",
    
    "Yo‘l — transport vositalari va piyodalarning harakatlanishi uchun qurilgan yoki moslashtirilgan yer bo‘lagi yoxud sun’iy inshoot yuzasi. Yo‘l avtomobil va shahar elektr transporti yo‘llarini hamda trotuarlarni o‘z ichiga oladi.",
    
    "Yo‘l-transport hodisasi — transport vositasining yo‘lda harakatlanishi jarayonida ro‘y bergan, fuqarolarning halok bo‘lishiga yoki sog‘lig‘iga zarar yetishiga, transport vositalari, inshootlar, yuklarning shikastlanishi yoxud boshqa moddiy zarar yetishiga sabab bo‘lgan hodisa.",
    
    "Yo‘l harakati — odamlar va yuklarning transport vositalari yordamida yoki bunday vositalarsiz yo‘llar doirasida harakatlanishi jarayonida yuzaga keluvchi munosabatlar majmui.",
    
    "Temir yo‘l kesishmasi — yo‘lning temir yo‘llar bilan bir sathda kesishgan joyi.",
    
    "Yo‘nalishli transport vositasi — belgilangan yo‘nalishi va bekatlari bo‘lgan, yo‘lovchi tashish uchun mo‘ljallangan umum foydalanishdagi transport vositalari (trolleybus, tramvay, avtobus, yo‘nalishli taksi).",
    
    "Mexanik transport vositasi — dvigatel bilan harakatga keltiriladigan transport vositasi (mopeddan tashqari). Bu atama barcha traktor va o‘ziyurar moslamalarga ham taalluqlidir.",
    
    "Moped — ish hajmi 50 sm3 gacha, yuqori tezligi soatiga 50 kilometrdan oshmaydigan dvigatel bilan harakatga keltiriladigan ikki yoki uch g‘ildirakli transport vositasi. Osma dvigatelli velosipedlar va yuqoridagi ta’rifga ega bo‘lgan boshqa transport vositalari ham mopedlarga tenglashtiriladi.",
    
    "Mototsikl — kajavali yoki kajavasiz ikki g‘ildirakli mexanik transport vositasi. Aslahalangan holatdagi vazni 400 kilogrammdan oshmaydigan uch va to‘rt g‘ildirakli mexanik transport vositalari, shuningdek dvigatelining ish hajmi 50 sm3 dan yoki eng yuqori konstruktiv tezligi soatiga 50 kilometrdan ortiq bo‘lgan skuter, kvadrotsikl, elektroskuterlar ham mototsikllarga tenglashtiriladi.",
    
    "Aholi punkti — kirish va chiqish yo‘llari 5.22 — 5.25 yo‘l belgilari bilan belgilangan hudud.",
    
    "Etarlicha ko‘rinmaslik — yomg‘ir, qor yog‘ishi, tuman tushishi va shunga o‘xshash sharoitlarda, shuningdek kunning g‘ira-shira vaqtida yo‘lning ko‘rinish masofasi 300 metrdan kam bo‘lishi.",
    
    "Quvib o‘tish — egallagan harakatlanish bo‘lagidan chiqib, oldinda harakatlanayotgan transport vositasidan o‘zib ketish.",
    
    "Yo‘l harakati xavfsizligini ta’minlash — yo‘l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og‘ir oqibatlarini kamaytirishga qaratilgan faoliyat.",
    
    "Yo‘l yoqasi — yo‘lning qatnov qismiga u bilan bir sathda bevosita tutashgan, qoplama turi bilan farq qiladigan yoki 1.1 yo‘l chizig‘i yordamida ajratilgan, ushbu Qoidalarga muvofiq harakatlanish, to‘xtash va to‘xtab turish uchun mo‘ljallangan bo‘lagi.",
    
    "Yo‘l harakatini tashkil etish — yo‘llarda harakatni boshqarish bo‘yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqaruv harakatlari majmui.",
    
    "Piyodalarning tashkiliy jamlanmasi — Qoidalarning 16-bandi talablariga muvofiq, yo‘lda bir yo‘nalishda birgalikda harakatlanayotgan odamlar guruhi.",
    
    "Transport vositalarining tashkiliy jamlanmasi — oldida yalt-yalt etuvchi ko‘k rangli yoki ko‘k va qizil rangli chiroq mayoqchasi yoqilgan transport vositasi kuzatib borayotgan, bevosita bir-birining ketidan, bitta harakatlanish bo‘lagida, chiroqlarini doimiy yoqib kelayotgan, uch va undan ortiq mexanik transport vositalari guruhi.",
    
    "Bolalar guruhini tashkiliy tashish — yo‘nalishli transport vositalariga daxli bo‘lmagan avtobuslarda sakkiz va undan ortiq bolalarning tashkiliy tashilishi.",
    
    "To‘xtash — transport vositasi harakatini 10 daqiqagacha bo‘lgan muddatga to‘xtatish (harakatsiz holatga keltirish).",
    
    "Yo‘lovchi — transport vositasidagi (haydovchidan tashqari) shaxs.",
    
    "Chorraha — yo‘llarning o‘zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi.",
    
    "Chorraha chegarasi uning markazidan qatnov qismlari oxiridagi qarama-qarshi tomonlarning eng uzoq burila boshlagan joylarini tutashtiruvchi tasavvur qilinadigan chiziqlar bilan aniqlanadi.",
    
    "Yondosh hududlardan chiqish joylari chorraha hisoblanmaydi.",
    
    "Ogohlantiruvchi ishoralar — avariya holatlarining oldini olish maqsadida, shuningdek harakat yo‘nalishini o‘zgartirishda qo‘llaniladigan ishoralar.",
    
    "Piyoda — transport vositasidan tashqarida bo‘lgan va yo‘lda biror-bir yumush bilan band bo‘lmagan shaxs.",
    
    "Velosiped, moped, mototsikl, chana, aravacha va bolalar hamda nogironlar aravachasini yetaklagan, nogironlarning dvigatelsiz aravachasida harakatlanayotgan shaxslar ham piyoda hisoblanadilar.",
    
    "Piyodalar o‘tish joyi — yo‘l qatnov qismining piyodalar kesib o‘tishi uchun mo‘ljallangan, 5.16.1, 5.16.2 yo‘l belgilari va 1.14.1 — 1.14.3 yo‘l chiziqlari bilan ajratilgan bo‘lagi.",
    
    "Yo‘l chiziqlari bo‘lmasa, piyodalar o‘tish joyining kengligi 5.16.1 va 5.16.2 yo‘l belgilari orasidagi masofa bilan aniqlanadi.",
    
    "Piyodalar yo‘lkasi — yo‘lning piyodalar harakatlanishi uchun mo‘ljallangan va transport vositalari harakati taqiqlangan qismi.",
    
    "Yondosh hudud — bevosita yo‘lga tutashgan va transport vositalari o‘tib ketishi uchun mo‘ljallanmagan hudud (hovlilar, turar joy dahalari, avtomobil to‘xtab turish joylari, yonilg‘i quyish shoxobchalari, korxona va shunga o‘xshashlar).",
    
    "Imtiyoz — mo‘ljallangan yo‘nalishda boshqa yo‘l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi.",
    
    "Tirkama — mexanik transport vositasi tarkibida harakatlanishga mo‘ljallangan, dvigatel bilan jihozlanmagan transport vositasi. Bu atama yarim tirkama va uzaytiriladigan tirkamalarga ham taalluqlidir.",
    
    "Qatnov qismi — yo‘lning relssiz transport vositalari harakati uchun mo‘ljallangan qismi.",
    
    "Harakatlanish bo‘lagi — avtomobillarning bir qator bo‘lib harakatlanishi uchun yetarlicha keng bo‘lgan, yo‘l chiziqlari bilan belgilangan yoki belgilanmagan yo‘l qatnov qismining har qanday bo‘ylama bo‘lagi.",
    
    "Ajratuvchi bo‘lak — yo‘lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to‘xtashi uchun mo‘ljallanmagan, yo‘l sathidan baland va (yoki) 1.1 yotiq chizig‘i bilan belgilangan qismi.",
    
    "Ruxsat etilgan to‘la vazn — aslahalangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan, yuk, haydovchi va yo‘lovchilari bilan birgalikdagi eng yuqori vazni (o‘lchovi).",
    
    "Bir tarkibda harakatlanayotgan (tirkama va h. k.) transport vositalarining ruxsat etilgan to‘la vazniga shu tarkibga kiruvchi transport vositalarining ruxsat etilgan to‘la vaznlari yig‘indisi kiradi.",
    
    "Reversiv harakat — yo‘l qatnov qismining maxsus ajratilgan, 5.35 — 5.37 yo‘l belgilari, 1.9 yo‘l chizig‘i bilan belgilangan va ustida reversiv svetofor o‘rnatilgan bo‘lagida harakat yo‘nalishining qarama-qarshi tomonga o‘zgarishi.",
    
    "Tartibga soluvchi — O‘zbekiston Respublikasi Ichki ishlar vazirligi Davlat yo‘l harakati xavfsizligi xizmati (keyingi o‘rinlarda DYHXX), harbiy avtomobil nazorati organlari xodimi, o‘z xizmat vazifalarini bajarayotgan, ushbu Qoidalarda ko‘zda tutilgan ishoralar yordamida yo‘l harakatini tartibga solish vakolatiga ega bo‘lgan va uni bevosita amalga oshirayotgan, yo‘ldan foydalanish xizmati xodimlari, temir yo‘l kesishmasi va sol kechuvlaridagi navbatchilar. Tartibga soluvchi maxsus kiyim va (yoki) taniqlik belgisi (qo‘l bog‘ichi, jezl, qizil ishorali yorug‘lik qaytargich, qizil chiroq yoki bayroqcha)ga ega bo‘lishi shart.",
    
    "Yo‘l berish — yo‘l harakati qatnashchilariga nisbatan imtiyozi bo‘lgan boshqa yo‘l harakati qatnashchisining harakat yo‘nalishi yoki tezligini o‘zgartirishga majbur etishi mumkin bo‘lgan hollarda harakatni davom ettirmasligini yoki boshlamasligini, biror-bir manyovr bajarishi mumkin emasligini bildiruvchi talab.",
    
    "Yo‘l harakati qatnashchisi — yo‘l harakati jarayonida transport vositasining haydovchisi, yo‘lovchisi yoki piyoda tariqasida bevosita ishtirok etayotgan shaxs.",
    
    "Transport vositasi — odamlarni, yuklarni tashishga yoki maxsus ishlarni bajarishga mo‘ljallangan qurilma.",
    
    "Trotuar — qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to‘siqlar bilan ajratilgan va piyodalarning harakatlanishi uchun mo‘ljallangan yo‘l qismi.",
    
    "To‘xtab turish — transport vositasiga yo‘lovchilarni chiqarish yoki tushirish, yuk ortish yoki tushirish bilan bog‘liq bo‘lmagan hollarda harakatini 10 daqiqadan ko‘proq vaqtga atayin to‘xtatish.",
    
    "Qorong‘i vaqt — kechki g‘ira-shiraning oxiridan tonggi g‘ira-shiraning boshlanishigacha bo‘lgan oraliqdagi vaqt.",
    
    "Haqiqiy vazn — transport vositasining yuki, haydovchi va yo‘lovchilari bilan birgalikdagi vazni.",
    
    "Foto va video qayd etish — yo‘l harakati qoidalari buzilishini maxsus avtomatlashtirilgan foto va video texnik vositalari yordamida qayd etish.",
      ];
      var randomIndex = Math.floor(Math.random() * atamalar.length);
      return atamalar[randomIndex];
    }
    atama.innerHTML = output.replace("%atama", getrandom())
  }
  atamalarfunck();

  const descriptionToday = function () {
    let description = select(".descriptionToday");
    const output = description.innerHTML;
    let day = "";
    function getRandomTilak() {
  var tilaklar = [
      "Kuningiz maroqli o‘tsin!",
      "Yaxshi kayfiyat hamroh bo‘lsin!",
      "O‘rganishdan to'xtamang!",
      "Yangiliklar bilan hamnafas bo‘ling!",
      "Yangi marralarni zabt eting!",
  ];
  var randomIndex = Math.floor(Math.random() * tilaklar.length);
  return tilaklar[randomIndex];
}
    let text = getRandomTilak();
    switch (new Date().getDay()) {
      case 0:
        day = "Yakshanba";
        break;
      case 1:
        day = "Dushanba";
        break;
      case 2:
        day = "Seshanba";
        break;
      case 3:
        day = "Chorshanba";
        break;
      case 4:
        day = "Payshanba";
        break;
      case 5:
        day = "Juma";
        if (new Date().getHours() < 13) {
          text = "Juma nomozini o‘tkazib yubormang!";
        } else {
          text = "Ilm olishdan to‘xtamang!";
        }
        break;
      case 6:
        day = "Shanba";
        break;
    }
    description.innerHTML = output
      .replace("%d", new Date().getDate() + " - " + getMonthName())
      .replace("%w", day)
      .replace("%t", text);
  };
  descriptionToday();
})();

function saveName() {
  var name = prompt("Iltimos ismingizni kiriting:");
  if (name) {
    localStorage.setItem("savedName", name);
    document.getElementById("nameDisplay").textContent = name;
    location.reload();
  }
}

window.onload = function() {
  var savedName = localStorage.getItem("savedName");
  if (savedName) {
    if (new Date().getHours() <= 10 && new Date().getHours() > 4) {
      document.getElementById("nameDisplay").textContent = "Xayrli tong, " + savedName;
    } else if (new Date().getHours() < 19 && new Date().getHours() >= 11) {
      document.getElementById("nameDisplay").textContent = "Xayrli kun, " + savedName;
    }else {
      document.getElementById("nameDisplay").textContent = "Xayrli kech, " + savedName;
    }
   } else {
    saveName();
  }
};