"use strict";
const copy = {
  en: ["Language","For parents and carers","Help keep this app free","This app supports children with autism in learning and daily life. It is and will remain completely free. A voluntary contribution helps maintain, improve and further develop the app.","A contribution of your choice","Choose your amount at PayPal in EUR (€), for example €2, €5, €10 or €25, or any other amount. Check and confirm it there.","Donate with PayPal","Donations are not available yet.","Payment is handled by PayPal. This page does not collect or store payment details. PayPal fees may apply.","Donating is completely voluntary. All features stay free. There are no paid extras or donor rewards.","Privacy policy","This supports app development. We do not claim charitable status or tax deductibility.","Continue to PayPal to enter and confirm your amount in EUR.","Contact"],
  nl: ["Taal","Voor ouders en begeleiders","Help deze app gratis te houden","Deze app ondersteunt kinderen met autisme bij het leren en in het dagelijks leven. De app is en blijft volledig gratis. Met een vrijwillige bijdrage help je bij het onderhouden, verbeteren en verder ontwikkelen van de app.","Een bijdrage naar keuze","Kies je bedrag bij PayPal in EUR (€), bijvoorbeeld € 2, € 5, € 10 of € 25, of een ander bedrag. Controleer en bevestig het daar.","Doneren via PayPal","Doneren is nog niet beschikbaar.","PayPal verwerkt de betaling. Deze pagina verzamelt of bewaart geen betaalgegevens. PayPal kan transactiekosten rekenen.","Doneren is volledig vrijwillig. Alle functies blijven gratis. Er zijn geen betaalde extra’s of voordelen voor donateurs.","Privacybeleid","Je steunt de ontwikkeling van de app. We claimen geen goededoelenstatus of fiscale aftrekbaarheid.","Je gaat naar PayPal om je bedrag in EUR in te voeren en te bevestigen.","Contact"],
  de: ["Sprache","Für Eltern und Betreuungspersonen","Hilf mit, diese App kostenlos zu halten","Diese App unterstützt Kinder mit Autismus beim Lernen und im Alltag. Sie ist und bleibt vollständig kostenlos. Ein freiwilliger Beitrag hilft bei Wartung, Verbesserung und Weiterentwicklung.","Ein Beitrag deiner Wahl","Wähle deinen Betrag bei PayPal in EUR (€), zum Beispiel 2 €, 5 €, 10 €, 25 € oder einen anderen Betrag. Prüfe und bestätige ihn dort.","Mit PayPal spenden","Spenden sind noch nicht verfügbar.","PayPal verarbeitet die Zahlung. Diese Seite erfasst oder speichert keine Zahlungsdaten. PayPal-Gebühren können anfallen.","Spenden sind völlig freiwillig. Alle Funktionen bleiben kostenlos. Es gibt keine kostenpflichtigen Extras oder Vorteile für Spender.","Datenschutz","Du unterstützt die App-Entwicklung. Wir beanspruchen weder Gemeinnützigkeit noch steuerliche Absetzbarkeit.","Bei PayPal gibst du deinen Betrag in EUR ein und bestätigst ihn.","Kontakt"],
  es: ["Idioma","Para madres, padres y cuidadores","Ayuda a mantener esta app gratuita","Esta app apoya a los niños con autismo en el aprendizaje y la vida diaria. Es y seguirá siendo completamente gratuita. Una aportación voluntaria ayuda a mantenerla, mejorarla y desarrollarla.","Una aportación a tu elección","Elige el importe en PayPal en EUR (€), por ejemplo 2 €, 5 €, 10 €, 25 € u otro importe. Revísalo y confírmalo allí.","Donar con PayPal","Las donaciones aún no están disponibles.","PayPal procesa el pago. Esta página no recoge ni almacena datos de pago. PayPal puede cobrar comisiones.","Donar es totalmente voluntario. Todas las funciones siguen siendo gratuitas. No hay extras de pago ni ventajas para donantes.","Privacidad","Apoyas el desarrollo de la app. No afirmamos ser una entidad benéfica ni ofrecemos deducciones fiscales.","Continuarás a PayPal para introducir y confirmar el importe en EUR.","Contacto"],
  fr: ["Langue","Pour les parents et accompagnants","Aidez cette application à rester gratuite","Cette application accompagne les enfants autistes dans leurs apprentissages et leur quotidien. Elle est et restera entièrement gratuite. Une contribution volontaire aide à son entretien, son amélioration et son développement.","Une contribution de votre choix","Choisissez votre montant sur PayPal en EUR (€), par exemple 2 €, 5 €, 10 €, 25 € ou un autre montant. Vérifiez-le et confirmez-le sur PayPal.","Faire un don avec PayPal","Les dons ne sont pas encore disponibles.","PayPal traite le paiement. Cette page ne collecte ni ne conserve de données de paiement. Des frais PayPal peuvent s’appliquer.","Les dons sont entièrement volontaires. Toutes les fonctions restent gratuites. Aucun supplément payant ni avantage pour les donateurs.","Confidentialité","Vous soutenez le développement de l’application. Nous ne revendiquons aucun statut caritatif ni déductibilité fiscale.","Vous allez accéder à PayPal pour saisir et confirmer votre montant en EUR.","Contact"],
  ar: ["اللغة","للآباء ومقدمي الرعاية","ساعد في إبقاء هذا التطبيق مجانيًا","يدعم هذا التطبيق الأطفال ذوي التوحد في التعلم والحياة اليومية. التطبيق مجاني وسيبقى مجانيًا بالكامل. تساعد المساهمة الطوعية في صيانته وتحسينه وتطويره.","مساهمة من اختيارك","اختر المبلغ لدى PayPal باليورو EUR (€)، مثل 2 أو 5 أو 10 أو 25 يورو، أو أي مبلغ آخر. راجعه وأكده هناك.","التبرع عبر PayPal","التبرعات غير متاحة بعد.","تعالج PayPal الدفع. لا تجمع هذه الصفحة بيانات الدفع ولا تخزنها. قد تفرض PayPal رسومًا.","التبرع اختياري تمامًا. تبقى جميع الميزات مجانية. لا توجد إضافات مدفوعة أو مزايا للمتبرعين.","سياسة الخصوصية","أنت تدعم تطوير التطبيق. لا ندعي صفة مؤسسة خيرية أو إمكانية الخصم الضريبي.","ستنتقل إلى PayPal لإدخال المبلغ باليورو وتأكيده.","للتواصل"],
  zh: ["语言","供家长和照护者使用","帮助这款应用保持免费","这款应用在学习和日常生活中为自闭症儿童提供支持。应用现在和将来都完全免费。自愿捐赠有助于应用的维护、改进和持续开发。","自选捐赠金额","请在 PayPal 以欧元 EUR (€) 输入金额，例如 €2、€5、€10、€25 或其他金额，并在那里核对和确认。","通过 PayPal 捐赠","捐赠暂未开放。","付款由 PayPal 处理。本页面不收集或存储付款信息。PayPal 可能收取手续费。","捐赠完全自愿。所有功能始终免费。捐赠者不会获得付费附加功能或奖励。","隐私政策","您支持的是应用开发。我们不声称具有慈善组织资格，也不承诺税收抵扣。","您将前往 PayPal 输入并确认欧元金额。","联系"],
  hi: ["भाषा","माता-पिता और देखभाल करने वालों के लिए","इस ऐप को मुफ़्त बनाए रखने में मदद करें","यह ऐप ऑटिज़्म वाले बच्चों को सीखने और रोज़मर्रा के जीवन में सहायता करता है। यह ऐप पूरी तरह मुफ़्त है और रहेगा। स्वैच्छिक योगदान इसके रखरखाव, सुधार और आगे के विकास में मदद करता है।","अपनी पसंद का योगदान","PayPal पर EUR (€) में राशि चुनें, जैसे €2, €5, €10, €25 या कोई अन्य राशि। वहीं जाँचकर पुष्टि करें।","PayPal से दान करें","दान अभी उपलब्ध नहीं है।","भुगतान PayPal द्वारा संसाधित होता है। यह पृष्ठ भुगतान विवरण इकट्ठा या संग्रहीत नहीं करता। PayPal शुल्क लग सकते हैं।","दान पूरी तरह स्वैच्छिक है। सभी सुविधाएँ मुफ़्त रहेंगी। दानदाताओं के लिए कोई सशुल्क अतिरिक्त सुविधा या लाभ नहीं है।","गोपनीयता नीति","आप ऐप के विकास में सहयोग कर रहे हैं। हम धर्मार्थ संस्था होने या कर कटौती का दावा नहीं करते।","आप EUR में राशि दर्ज करने और पुष्टि करने के लिए PayPal पर जाएँगे।","संपर्क"],
  ru: ["Язык","Для родителей и сопровождающих","Помогите приложению оставаться бесплатным","Это приложение помогает детям с аутизмом учиться и справляться с повседневными делами. Оно полностью бесплатно и останется таким. Добровольный взнос помогает поддерживать, улучшать и развивать приложение.","Взнос на ваш выбор","Выберите сумму в PayPal в EUR (€), например 2 €, 5 €, 10 €, 25 € или другую сумму. Проверьте и подтвердите её там.","Пожертвовать через PayPal","Пожертвования пока недоступны.","Платёж обрабатывает PayPal. Эта страница не собирает и не хранит платёжные данные. Возможны комиссии PayPal.","Пожертвования полностью добровольны. Все функции остаются бесплатными. Платных дополнений и преимуществ для жертвователей нет.","Конфиденциальность","Вы поддерживаете разработку приложения. Мы не заявляем о благотворительном статусе или налоговых вычетах.","Вы перейдёте в PayPal, чтобы ввести и подтвердить сумму в EUR.","Контакт"]
};
const keys = ["language-label","audience","title","intro","payment-title","amount","paypal","status","payment-info","promise","privacy","tax"];
function paypalLink(config) {
  if (config?.ready !== true) return null;
  try {
    const url = new URL(config.paypalUrl);
    if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
    if (!["www.paypal.com","paypal.com","www.paypal.me","paypal.me"].includes(url.hostname)) return null;
    if (url.pathname === "/") return null;
    return url.href;
  } catch { return null; }
}
function render(language) {
  const lang = Object.hasOwn(copy,language) ? language : "en";
  const words = copy[lang];
  const config = window.donationConfig ?? {};
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = `${words[2]} · Autism Learning App`;
  document.getElementById("language").value = lang;
  keys.forEach((id,i) => { document.getElementById(id).textContent = words[i]; });
  const link = document.getElementById("paypal");
  const href = paypalLink(config);
  link.setAttribute("aria-disabled",String(!href));
  link.removeAttribute("href");
  if (href) { link.href = href; document.getElementById("status").textContent = words[12]; }
  const email = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(config.contactEmail ?? "")
    ? config.contactEmail : "donate@highor.com";
  document.getElementById("contact").textContent = `${words[13]}: ${email}`;
  document.getElementById("contact").href = `mailto:${email}`;
}
render(new URLSearchParams(window.location.search).get("lang") ?? "en");
document.getElementById("language").addEventListener("change", event => {
  render(event.target.value);
  const url = new URL(window.location.href);
  url.searchParams.set("lang",event.target.value);
  window.history.replaceState(null,"",url);
});
