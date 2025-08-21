import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Building2, Phone, Mail, MapPin, Clock, ChevronRight, Lock } from "lucide-react";

const brand = {
  name: "LIVORI NAMI",
};

const translations = {
  lv: {
    heroTitle: "Atbildīga pārvaldība un apsaimniekošana",
    heroDesc: "Caurspīdīgi budžeti, pārbaudāmi darbības rezultāti un reāla komunālo izmaksu optimizācija. Operatīva reakcija avārijās gadījumā.",
    advantages: [
      ["Pārvaldīšanas līgums", "Pārvaldām un apsaimniekojam māju, ievērojot regulējumu, vienošanās un labo praksi; pārstāvam īpašniekus attiecībās ar komunālo pakalpojumu sniedzējiem."],
      ["Avārijas 24/7", "Informējam un ātri rīkojamies; nodrošinām avārijas cēloņa operatīvo likvidāciju."],
      ["Norēķini", "Caurskatāmi un skaidri rēķini par sniegto pakalpojumu, nekādu neattaisnotu maksājumu."],
      ["Kopsapulces", "Organizējam sapulces, sagatavojam protokols, lēmumus un citu nepieciešamo dokumentāciju; elektroniskā balsošana."],
      ["Energoefektivitāte", "Optimizējam komunālos pakalpojumus un ieviešam risinājumus, kas samazina izmaksas un patēriņu."],
      ["Digitālie risinājumi un AI", "Attīstām klientu portālu un integrējam mākslīgā intelekta rīkus, lai katrs īpašnieks varētu ērti sekot līdzi savam īpašumam tiešsaistē."]
    ],
    tariffsTitle: "Tarifi",
    tariffsDesc: "Mūsu sadarbības tarifi ir sekojošie:",
    tariffs: [
      ["Bāzes", "no 0,50 € / m²", "Ikdienas ekspluatācija un dispečerdarbs"],
      ["Papildus", "no 0,65 € / m²", "Papildu pārvaldīšanas darbi un inženieru sistēmu regulārā apkope"],
      ["Projekts +", "pēc vienošanās", "Atkarībā no mājas specifikas un projekta uzdevumiem"]
    ],
    aboutTitle: "Par mums",
    aboutText: "Mēs esam jauns, taču pieredzējis pārvaldnieks ar ambīcijām nodrošināt tās pilnvarotājiem ērtu un skaidru apsaimniekošanas pakalpojumu. Mēs cenšamies modernizēt un digitalizēt pakalpojumu, lai tas būtu vienmēr pieejams, bez papildus maksājumiem un nepamatotas birokrātijas. Atskaites, uzkrājumi, plānotie un izpildītie darbi – vienmēr Jums pieejamā veidā.",
    contactTitle: "Sazināties ar mums",
    contactDesc: "Bezmaksas mājas audits un piedāvājums izmaksu optimizācijai.",
    footer: "Publiskā informācija • Privātuma politika • Sīkdatnes"
  },
  ru: {
    heroTitle: "Ответственное управление и обслуживание",
    heroDesc: "Прозрачные бюджеты, проверяемые результаты и реальная оптимизация коммунальных расходов. Оперативная реакция в случае аварии.",
    advantages: [
      ["Договор управления", "Управляем и обслуживаем дом в соответствии с законодательством, соглашениями и лучшей практикой; представляем интересы владельцев в отношениях с коммунальными службами."],
      ["Аварии 24/7", "Информируем и быстро реагируем; обеспечиваем оперативное устранение причины аварии."],
      ["Расчёты", "Прозрачные и понятные счета за оказанные услуги, никаких необоснованных платежей."],
      ["Общие собрания", "Организуем собрания, готовим протоколы, решения и другие необходимые документы; электронное голосование."],
      ["Энергоэффективность", "Оптимизируем коммунальные услуги и внедряем решения, снижающие затраты и потребление."],
      ["Цифровые решения и ИИ", "Развиваем клиентский портал и интегрируем инструменты искусственного интеллекта, чтобы каждый владелец мог удобно следить за своим имуществом онлайн."]
    ],
    tariffsTitle: "Тарифы",
    tariffsDesc: "Наши тарифы следующие:",
    tariffs: [
      ["Базовый", "от 0,50 € / м²", "Ежедневная эксплуатация и диспетчерская работа"],
      ["Дополнительный", "от 0,65 € / м²", "Дополнительные работы по управлению и регулярное обслуживание инженерных систем"],
      ["Проект +", "по договорённости", "В зависимости от специфики дома и задач проекта"]
    ],
    aboutTitle: "О нас",
    aboutText: "Мы — молодой, но опытный управляющий с амбициями обеспечить своим доверителям удобный и понятный сервис. Мы стремимся модернизировать и цифровизировать услуги, чтобы они были всегда доступны, без лишних платежей и ненужной бюрократии. Отчёты, накопления, плановые и выполненные работы — всегда в доступной форме.",
    contactTitle: "Связаться с нами",
    contactDesc: "Бесплатный аудит дома и предложение по оптимизации расходов.",
    footer: "Публичная информация • Политика конфиденциальности • Cookies"
  },
  en: {
    heroTitle: "Responsible management and maintenance",
    heroDesc: "Transparent budgets, verifiable results and real optimization of utility costs. Prompt response in case of emergency.",
    advantages: [
      ["Management Agreement", "We manage and maintain the building in accordance with regulations, agreements and best practices; we represent owners in relations with utility providers."],
      ["Emergencies 24/7", "We inform and act quickly; ensuring prompt elimination of emergency causes."],
      ["Transparent Billing", "Clear and transparent invoices for services provided, no unjustified payments."],
      ["General Meetings", "We organize meetings, prepare protocols, decisions and other necessary documentation; electronic voting."],
      ["Energy Efficiency", "We optimize utilities and implement solutions that reduce costs and consumption."],
      ["Digital Solutions & AI", "We are developing a client portal and integrating AI tools so that each owner can easily monitor their property online."]
    ],
    tariffsTitle: "Tariffs",
    tariffsDesc: "Our cooperation tariffs are as follows:",
    tariffs: [
      ["Basic", "from €0.50 / m²", "Daily operation and dispatch service"],
      ["Additional", "from €0.65 / m²", "Additional management tasks and regular maintenance of engineering systems"],
      ["Project +", "negotiable", "Depending on the specifics of the house and project tasks"]
    ],
    aboutTitle: "About us",
    aboutText: "We are a young but experienced property manager with ambitions to provide clients with a convenient and clear management service. We strive to modernize and digitalize the service so that it is always accessible, without extra fees and unnecessary bureaucracy. Reports, savings, planned and completed works — always accessible to you.",
    contactTitle: "Contact us",
    contactDesc: "Free building audit and cost optimization proposal.",
    footer: "Public information • Privacy Policy • Cookies"
  }
};

export default function App() {
  const [lang, setLang] = useState("lv");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-900 to-blue-600 text-white"><Building2 className="w-5 h-5"/></div>
            <span className="font-semibold tracking-wide">{brand.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={()=>setLang("lv")} className={lang==="lv"?"font-bold":""}>LV</button>
            <button onClick={()=>setLang("ru")} className={lang==="ru"?"font-bold":""}>RU</button>
            <button onClick={()=>setLang("en")} className={lang==="en"?"font-bold":""}>EN</button>
          </nav>
          <a href="#kontakti" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-700 text-white text-sm hover:bg-blue-600 transition">
            <Phone className="w-4 h-4"/> Kontakti
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{t.heroTitle}</h1>
            <p className="mt-4 text-lg text-blue-100">{t.heroDesc}</p>
          </motion.div>
        </div>
      </section>

      <section id="prieksrocibas" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">{lang==="ru"?"Преимущества":lang==="en"?"Advantages":"Priekšrocības"}</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.advantages.map((a, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 bg-white hover:shadow-sm transition">
                <h3 className="text-lg font-semibold">{a[0]}</h3>
                <p className="mt-2 text-slate-700">{a[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tarifi" className="py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">{t.tariffsTitle}</h2>
          <p className="mt-2 text-slate-600">{t.tariffsDesc}</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {t.tariffs.map((p, i) => (
              <div key={i} className="rounded-3xl border p-6 bg-white hover:shadow-sm transition border-slate-200">
                <h3 className="text-xl font-semibold">{p[0]}</h3>
                <div className="mt-3 text-2xl font-bold">{p[1]}</div>
                <p className="mt-2 text-sm text-slate-600">{p[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="par" className="py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">{t.aboutTitle}</h2>
          <p className="mt-3 text-slate-700">{t.aboutText}</p>
        </div>
      </section>

      <section id="kontakti" className="py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold">{t.contactTitle}</h2>
          <p className="mt-2 text-slate-600">{t.contactDesc}</p>
          <div className="mt-4 space-y-2 text-slate-700">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> +371 0000 0000</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> nami@livori.lv</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Muitas iela 1, Rīga, LV-1010</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> P.–Pk. 9:00–18:00</div>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 text-center">
          {t.footer}<br/>© {new Date().getFullYear()} LIVORI NAMI
        </div>
      </footer>
    </div>
  );
}