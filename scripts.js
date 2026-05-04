// ===== TRANSLATIONS =====
var T = {
  "hero.badge": { pt: "Parceiro Autorizado Algar Telecom", en: "Authorized Algar Telecom Partner", es: "Socio Autorizado Algar Telecom" },
  "hero.title": { pt: 'Mais velocidade e <span class="highlight">estabilidade para sua casa</span>', en: 'More speed and <span class="highlight">stability for your home</span>', es: 'M\u00e1s velocidad y <span class="highlight">estabilidad para tu casa</span>' },
  "hero.subtitle": { pt: "Fibra \u00f3ptica real, suporte preparado e desempenho consistente todos os dias. Consulte a disponibilidade no seu endere\u00e7o.", en: "Real fiber optic, prepared support and consistent performance every day. Check availability at your address.", es: "Fibra \u00f3ptica real, soporte preparado y rendimiento consistente todos los d\u00edas. Consulta la disponibilidad en tu direcci\u00f3n." },
  "hero.placeholder": { pt: "Digite seu CEP", en: "Enter your ZIP code", es: "Ingresa tu c\u00f3digo postal" },
  "hero.button": { pt: "Consultar disponibilidade", en: "Check availability", es: "Consultar disponibilidad" },
  "hero.benefit1": { pt: "Assista em 4K sem travar", en: "Watch in 4K without lag", es: "Mira en 4K sin cortes" },
  "hero.benefit2": { pt: "Wi-Fi para toda casa", en: "Wi-Fi for the whole home", es: "Wi-Fi para toda la casa" },
  "hero.benefit3": { pt: "Jogue com ping est\u00e1vel", en: "Play with stable ping", es: "Juega con ping estable" },
  "hero.benefit4": { pt: "Downloads r\u00e1pidos", en: "Fast downloads", es: "Descargas r\u00e1pidas" },
  "plans.label": { pt: "Planos", en: "Plans", es: "Planes" },
  "plans.title": { pt: "Escolha o melhor plano Algar para sua casa", en: "Choose the best Algar plan for your home", es: "Elige el mejor plan Algar para tu casa" },
  "plans.desc": { pt: 'Planos dispon\u00edveis na sua regi\u00e3o j\u00e1 est\u00e3o com <strong>R$10 de desconto</strong> no d\u00e9bito autom\u00e1tico.', en: 'Plans available in your area already include a <strong>R$10 discount</strong> on automatic debit.', es: 'Los planes disponibles en tu regi\u00f3n ya incluyen <strong>R$10 de descuento</strong> en d\u00e9bito autom\u00e1tico.' },
  "plans.popular": { pt: "Mais Escolhido", en: "Most Chosen", es: "M\u00e1s Elegido" },
  "plans.cta": { pt: "Consultar disponibilidade", en: "Check availability", es: "Consultar disponibilidad" },
  "test.label": { pt: "Depoimentos", en: "Testimonials", es: "Testimonios" },
  "test.title": { pt: "Quem conectou, aprovou", en: "Connected and approved", es: "Quien se conect\u00f3, lo aprob\u00f3" },
  "test.desc": { pt: "Veja o que nossos clientes falam sobre a experi\u00eancia.", en: "See what our customers say about the experience.", es: "Mira lo que dicen nuestros clientes sobre la experiencia." },
  "cta.title": { pt: "Quer saber se atendemos sua regi\u00e3o?", en: "Want to know if we cover your area?", es: "\u00bfQuieres saber si cubrimos tu regi\u00f3n?" },
  "cta.subtitle": { pt: "Consulte a disponibilidade de internet fibra no seu endere\u00e7o e contrate agora mesmo.", en: "Check fiber internet availability at your address and subscribe now.", es: "Consulta la disponibilidad de internet fibra en tu direcci\u00f3n y contrata ahora mismo." },
  "faq.label": { pt: "FAQ", en: "FAQ", es: "FAQ" },
  "faq.title": { pt: "D\u00favidas frequentes", en: "Frequently asked questions", es: "Preguntas frecuentes" },
  "footer.rep": { pt: "Parceiro autorizado Algar Telecom", en: "Authorized Algar Telecom Partner", es: "Socio autorizado Algar Telecom" },
  "footer.rights": { pt: "\u00a9 2026 Parceiro autorizado Algar Telecom. Todos os direitos reservados.", en: "\u00a9 2026 Authorized Algar Telecom Partner. All rights reserved.", es: "\u00a9 2026 Socio autorizado Algar Telecom. Todos los derechos reservados." },
  "hero.covered": { pt: "Boa not\u00edcia! Temos cobertura para", en: "Good news! We cover", es: "\u00a1Buena noticia! Tenemos cobertura para" },
  "hero.see_plans": { pt: "Ver planos agora \u2192", en: "See plans now \u2192", es: "Ver planes ahora \u2192" },
  "hero.not_covered_title": { pt: "Ainda n\u00e3o chegamos a\u00ed \ud83d\ude80", en: "We're not there yet \ud83d\ude80", es: "A\u00fan no llegamos ah\u00ed \ud83d\ude80" },
  "hero.not_covered": { pt: "Deixe seu contato e avisamos quando a Algar estiver dispon\u00edvel na sua regi\u00e3o.", en: "Leave your contact and we'll notify you when Algar is available in your area.", es: "D\u00e9janos tu contacto y te avisamos cuando Algar est\u00e9 disponible en tu regi\u00f3n." }
};

var SUPPORTED_LANGS = ["pt", "en", "es"];
var savedLang = localStorage.getItem("lang");
var currentLang = SUPPORTED_LANGS.indexOf(savedLang) >= 0 ? savedLang : "pt";
// Seletor de idiomas foi removido do menu — força PT pra evitar lang preso de testes antigos
currentLang = "pt";

// ===== CONFIG GLOBAL =====
var WHATSAPP_NUMBER = "553121172419"; // +55 31 2117-2419
var LEAD_FORM_EMAIL = "dayane.martins@hmbtecnologia.com.br";

function t(key) { return T[key] && T[key][currentLang] || T[key] && T[key]["pt"] || key; }

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (T[key]) el.textContent = T[key][currentLang] || T[key]["pt"];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (T[key]) el.innerHTML = T[key][currentLang] || T[key]["pt"];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (T[key]) el.placeholder = T[key][currentLang] || T[key]["pt"];
  });
  // Update CEP button (it has inner SVG so use innerHTML)
  var cepBtn = document.getElementById("cepBtn");
  if (cepBtn && !cepBtn.disabled) {
    cepBtn.innerHTML = t("hero.button") + ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  }
}

// ===== SPLASH SCREEN =====
(function () {
  var splash = document.getElementById("splash");
  var main = document.getElementById("main-content");
  if (!splash || !main) return;
  setTimeout(function () { splash.classList.add("exit"); }, 1800);
  setTimeout(function () { splash.style.display = "none"; main.classList.add("visible"); }, 2400);
})();

// ===== APPLY LANG ON LOAD =====
applyLang();

// ===== NAV CTA: scroll to CEP and focus input =====
(function () {
  var navCta = document.getElementById("navCepCta");
  if (!navCta) return;
  navCta.addEventListener("click", function (e) {
    var input = document.getElementById("cepInput");
    if (!input) return;
    setTimeout(function () { input.focus({ preventScroll: true }); }, 600);
  });
})();

// ===== FLOATING WHATSAPP: link com mensagem pré-preenchida =====
(function () {
  var fwa = document.getElementById("floatingWa");
  if (!fwa) return;
  var msg = encodeURIComponent("Vim da LP da Algar e tenho uma dúvida...");
  fwa.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
})();

// ===== CEP LOOKUP =====
(function () {
  var input = document.getElementById("cepInput");
  var btn = document.getElementById("cepBtn");
  var result = document.getElementById("cepResult");

  // Guarda contexto da última consulta de CEP pra usar no form de captura
  var lastLeadContext = { cep: "", city: "", uf: "" };

  var btnArrowSvg = ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  var whatsappSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  // Point-in-polygon (ray casting)
  function pointInPolygon(lng, lat, poly) {
    var inside = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1];
      var xj = poly[j][0], yj = poly[j][1];
      if (((yi > lat) !== (yj > lat)) && (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }

  function isInCoverage(lng, lat) {
    if (typeof COVERAGE_POLYS === "undefined") return false;
    for (var i = 0; i < COVERAGE_POLYS.length; i++) {
      if (pointInPolygon(lng, lat, COVERAGE_POLYS[i])) return true;
    }
    return false;
  }

  input.addEventListener("input", function () {
    var digits = input.value.replace(/\D/g, "").slice(0, 8);
    input.value = digits.length > 5 ? digits.slice(0, 5) + "-" + digits.slice(5) : digits;
    result.className = "cep-result";
    result.innerHTML = "";
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") checkCep();
  });

  btn.addEventListener("click", checkCep);

  function checkCep() {
    var clean = input.value.replace(/\D/g, "");
    if (clean.length < 8) return;

    btn.disabled = true;
    btn.textContent = "...";

    var cepFormatted = clean.slice(0, 5) + "-" + clean.slice(5);

    // Step 1: get address from ViaCEP
    lastLeadContext = { cep: cepFormatted, city: "", uf: "" };
    fetch("https://viacep.com.br/ws/" + clean + "/json/")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.erro) { showNotCovered(); resetBtn(); return; }
        var city = data.localidade;
        lastLeadContext.city = city;
        lastLeadContext.uf = data.uf;

        // Step 2: geocode to get lat/lng via Nominatim
        var query = encodeURIComponent(cepFormatted + ", " + city + ", " + data.uf + ", Brasil");
        return fetch("https://nominatim.openstreetmap.org/search?q=" + query + "&format=json&limit=1", {
          headers: { "Accept-Language": "pt-BR" }
        })
        .then(function (r) { return r.json(); })
        .then(function (geo) {
          if (!geo || !geo.length) { showNotCovered(); return; }
          var lat = parseFloat(geo[0].lat);
          var lng = parseFloat(geo[0].lon);

          // Step 3: check if point is inside coverage polygons
          if (isInCoverage(lng, lat)) {
            showCovered(city, cepFormatted);
          } else {
            showNotCovered();
          }
        });
      })
      .catch(function () { showNotCovered(); })
      .finally(function () { resetBtn(); });
  }

  function resetBtn() {
    btn.disabled = false;
    btn.innerHTML = t("hero.button") + btnArrowSvg;
  }

  function showCovered(city, cep) {
    var msg = encodeURIComponent("Olá! Tenho interesse nos planos de internet fibra da Algar Telecom. Meu CEP é " + cep + " (" + city + "). Podem me ajudar?");
    var waLink = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;

    result.className = "cep-result covered";
    result.innerHTML = '<strong>' + t("hero.covered") + ' ' + city + ' 🎉</strong><br>Fale com um especialista.'
      + '<br><a href="' + waLink + '" target="_blank" rel="noopener" class="whatsapp-btn" onclick="gtag_report_conversion(\'' + waLink + '\'); return true;">' + whatsappSvg + ' Falar via WhatsApp</a>'
      + ' <a href="#planos" class="see-plans-link">' + t("hero.see_plans") + '</a>';
  }

  function showNotCovered() {
    result.className = "cep-result not-covered";
    result.innerHTML = ''
      + '<strong>' + t("hero.not_covered_title") + '</strong>'
      + '<p class="nc-text">' + t("hero.not_covered") + '</p>'
      + '<form class="nc-form" id="leadForm" novalidate>'
      +   '<input type="text" name="name" id="leadName" placeholder="Nome" required />'
      +   '<input type="tel" name="whatsapp" id="leadWhatsapp" placeholder="WhatsApp (com DDD)" required />'
      +   '<button type="submit" class="nc-submit">Quero ser avisado</button>'
      + '</form>';

    var form = document.getElementById("leadForm");
    if (form) form.addEventListener("submit", handleLeadSubmit);
    var waInput = document.getElementById("leadWhatsapp");
    if (waInput) waInput.addEventListener("input", maskWhatsapp);
  }

  function maskWhatsapp(e) {
    var d = e.target.value.replace(/\D/g, "").slice(0, 11);
    var out = "";
    if (d.length > 0) out = "(" + d.slice(0, 2);
    if (d.length >= 3) out += ") " + d.slice(2, d.length > 10 ? 7 : 6);
    if (d.length >= 7) out += "-" + d.slice(d.length > 10 ? 7 : 6);
    e.target.value = out;
  }

  function handleLeadSubmit(e) {
    e.preventDefault();
    var nameEl = document.getElementById("leadName");
    var waEl = document.getElementById("leadWhatsapp");
    var submitBtn = e.target.querySelector(".nc-submit");
    var name = nameEl.value.trim();
    var whatsapp = waEl.value.trim();
    if (!name || whatsapp.replace(/\D/g, "").length < 10) {
      result.classList.add("nc-error");
      setTimeout(function () { result.classList.remove("nc-error"); }, 600);
      return;
    }

    var origBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    var regionLabel = lastLeadContext.city
      ? lastLeadContext.city + (lastLeadContext.uf ? "/" + lastLeadContext.uf : "")
      : "região não identificada";

    var contextMessage = "Olá Dayane! Esse é um lead da Landing Page da Algar Fibra Rápida. "
      + "O CEP informado ainda não tem cobertura, mas a pessoa preencheu o formulário pedindo "
      + "para ser avisada quando a Algar chegar na região dela. Entre em contato pelo WhatsApp abaixo.";

    var payload = {
      "Nome": name,
      "WhatsApp": whatsapp,
      "CEP": lastLeadContext.cep || "(não informado)",
      "Cidade/UF": regionLabel,
      "Mensagem": contextMessage,
      "_subject": "Novo lead da LP Algar — fora de cobertura (" + regionLabel + ")",
      "_template": "table",
      "_captcha": "false"
    };

    fetch("https://formsubmit.co/ajax/" + LEAD_FORM_EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(function (r) {
      console.log("[FormSubmit] status", r.status, r.statusText);
      return r.text().then(function (txt) {
        console.log("[FormSubmit] body", txt);
        return { ok: r.ok, status: r.status, body: txt };
      });
    })
    .then(function (res) {
      // FormSubmit retorna 2xx quando aceita o envio (mesmo na ativação inicial).
      // Não vou checar campos do JSON — confio no status HTTP.
      if (res.ok) {
        result.innerHTML = ''
          + '<strong>Recebemos seu contato! 🎉</strong>'
          + '<p class="nc-text">Avisamos assim que a Algar chegar na sua região, ' + name.split(" ")[0] + '.</p>';
      } else {
        console.warn("[FormSubmit] resposta não-OK:", res.status, res.body);
        showLeadError(submitBtn, origBtnHtml);
      }
    })
    .catch(function (err) {
      console.error("[FormSubmit] erro de rede:", err);
      showLeadError(submitBtn, origBtnHtml);
    });
  }

  function showLeadError(submitBtn, origBtnHtml) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = origBtnHtml;
    var existing = document.querySelector(".nc-form-error");
    if (existing) return;
    var msg = document.createElement("p");
    msg.className = "nc-text nc-form-error";
    msg.style.color = "#ffd0d0";
    msg.style.marginTop = "10px";
    msg.textContent = "Não foi possível enviar agora. Tente novamente em instantes.";
    var form = document.getElementById("leadForm");
    if (form) form.appendChild(msg);
  }
})();

// ===== FAQ ACCORDION =====
window.toggleFaq = function (trigger) {
  var item = trigger.parentElement;
  var wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(function (el) { el.classList.remove("open"); });
  if (!wasOpen) item.classList.add("open");
};

// ===== SCROLL REVEAL =====
(function () {
  var els = document.querySelectorAll(".reveal, .reveal-item");
  function check() {
    els.forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("visible");
    });
  }
  window.addEventListener("scroll", check);
  setTimeout(check, 2500);
})();
