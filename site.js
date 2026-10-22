// Яндекс Метрика и плашка о cookie для всех страниц сайта.
//
// Как включить: впиши номер счётчика вместо 0 и залей файл на сайт.
// Пока стоит 0, ничего не грузится и плашка не показывается.
var METRIKA_ID = 0; // например: var METRIKA_ID = 123456789;

(function () {
  if (!METRIKA_ID) return;

  // Счётчик. Внешние ссылки (кнопка «Начать бесплатно» в бота)
  // Метрика считает сама: trackLinks.
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }
    k = e.createElement(t); a = e.getElementsByTagName(t)[0];
    k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=" + METRIKA_ID, "ym");
  ym(METRIKA_ID, "init", {
    clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true
  });

  // Плашка о cookie: один раз, пока посетитель не нажал «Понятно»
  var seen = false;
  try { seen = !!localStorage.getItem("cookiesAccepted"); } catch (err) { /* приватный режим */ }
  if (seen) return;

  var bar = document.createElement("div");
  bar.setAttribute("role", "region");
  bar.setAttribute("aria-label", "Уведомление о cookie");
  bar.style.cssText =
    "position:fixed;left:12px;right:12px;bottom:12px;z-index:100;max-width:560px;margin:0 auto;" +
    "background:#1d362f;color:#f6f5f0;border-radius:18px;padding:14px 16px;" +
    "display:flex;gap:14px;align-items:center;box-shadow:0 12px 34px rgba(29,54,47,.28);" +
    "font:500 14px/1.45 Manrope,-apple-system,'Segoe UI',Arial,sans-serif";
  bar.innerHTML =
    '<span style="flex:1">Сайт использует cookie. ' +
    'Подробнее — в <a href="privacy.html" style="color:#63c354;font-weight:700;text-decoration:none">Политике</a>.</span>' +
    '<button type="button" style="flex:none;background:#63c354;color:#fff;border:0;border-radius:99px;' +
    'padding:9px 16px;font:700 14px Unbounded,Manrope,Arial,sans-serif;cursor:pointer">Понятно</button>';
  bar.querySelector("button").addEventListener("click", function () {
    try { localStorage.setItem("cookiesAccepted", "true"); } catch (err) { /* не сохранится — не страшно */ }
    bar.remove();
  });
  document.body.appendChild(bar);
})();
