import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

type Id = "osen" | "ng";

const offers = {
  osen: {
    id: "osen" as const,
    kicker: "Конец октября · море ещё открыто",
    title: "Киты днём. Сияние вечером.",
    lead: "Ночи уже тёмные, катер ещё ходит. После ноября остаётся только берег.",
    image: "/art/map.jpg",
    file: "/offers/Kolatour_Osen_4.pdf",
    fileName: "КолаТур_Осень_4_человека.pdf",
    days: [
      ["День 1", "Охота", "Вечер от вашего адреса. Если небо закрыто — ночь переносим, не списываем."],
      ["День 2", "Териберка и море", "Пляж, «Яйца дракона», кладбище кораблей. Катер 2 часа. Кита не обещаем — обещаем выход."],
      ["День 3", "Город и «Ленин»", "Обзорная и атомный ледокол. Пустая первая ночь становится второй охотой."],
      ["День 4", "Саамы", "Олени и чум. Короче день под вылет. Третья охота — если ещё тихо, без доплаты."],
    ],
    main: ["4 дня", "178 000 ₽", "44 500 ₽ с человека", "Сияние, море, ледокол, саамы. Жильё не входит."],
    alt: ["3 дня", "148 000 ₽", "37 000 ₽ с человека", "Без саамского дня. Охота, Териберка и «Ленин»."],
  },
  ng: {
    id: "ng" as const,
    kicker: "Новый год · море уже закрыто",
    title: "Полярная ночь. Сияние и снег.",
    lead: "Катера нет — и это на первой странице. Ночь длиннее, снег есть, сияние случается чаще.",
    image: "/art/ice.jpg",
    file: "/offers/Kolatour_NG_4.pdf",
    fileName: "КолаТур_Новый_год_4_человека.pdf",
    days: [
      ["День 1", "Первая охота", "Отдельная машина, плед, термос. Облака не сжигают вечер — он переезжает."],
      ["День 2", "Зимняя Териберка", "Лёд у камней, «Яйца дракона», кладбище кораблей. Вечером вторая охота. Не катер."],
      ["День 3", "Хаски или саамы", "Короткая упряжка или тихая деревня с оленями. Цена одна, выбор до заезда."],
      ["День 4", "Ледокол", "«Ленин» днём. Если две ночи молчали — третья охота вечером, без доплаты."],
    ],
    main: ["4 дня", "218 000 ₽", "54 500 ₽ с человека", "Две охоты и запасная, Териберка, хаски или саамы, ледокол."],
    alt: ["3 дня", "178 000 ₽", "44 500 ₽ с человека", "Без ледокола. Сияние, зимняя Териберка, хаски или саамы."],
  },
};

function Home() {
  const [id, setId] = useState<Id>("osen");
  const offer = offers[id];

  return (
    <main className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
      <header className="mb-5">
        <p className="text-xs font-bold tracking-widest text-accent uppercase">КолаТур · база на четверых</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Две программы. В обеих — сияние.</h1>
        <p className="mt-2 max-w-xl text-muted">
          Конец октября и новогодние праздники. Мини-группа, отдельная машина, жильё ваше. PDF можно сразу отправить.
        </p>
      </header>

      <div className="switch mb-5" role="tablist" aria-label="Программа">
        <button type="button" role="tab" aria-pressed={id === "osen"} onClick={() => setId("osen")}>
          Осень
        </button>
        <button type="button" role="tab" aria-pressed={id === "ng"} onClick={() => setId("ng")}>
          Новый год
        </button>
      </div>

      <section className="hero mb-5">
        <img src={offer.image} alt="" />
        <div className="hero-veil" />
        <div className="hero-copy">
          <p className="text-xs font-bold tracking-widest text-accent uppercase">{offer.kicker}</p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{offer.title}</h2>
          <p className="mt-1 max-w-lg text-sm text-muted">{offer.lead}</p>
        </div>
      </section>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row">
        <a className="dl" href={offer.file} download={offer.fileName}>
          <Download size={18} />
          Скачать PDF
        </a>
        <a className="ghost" href="https://wa.me/79958771979" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Яна · WhatsApp
        </a>
      </div>

      <div className="mb-5 grid gap-3">
        {offer.days.map(([day, title, text]) => (
          <article className="day" key={day}>
            <p className="text-sm font-bold text-accent">{day}</p>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <article className="price lead">
          <p className="text-xs font-bold tracking-widest text-accent uppercase">{offer.main[0]} · на четверых</p>
          <p className="mt-2 text-3xl font-bold">{offer.main[1]}</p>
          <p className="text-sm">{offer.main[2]}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{offer.main[3]}</p>
        </article>
        <article className="price">
          <p className="text-xs font-bold tracking-widest text-hot uppercase">{offer.alt[0]} · короче</p>
          <p className="mt-2 text-3xl font-bold">{offer.alt[1]}</p>
          <p className="text-sm">{offer.alt[2]}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{offer.alt[3]}</p>
        </article>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">
        Проживание, дорога до Мурманска и питание не входят. Китов и сияние в договор не пишем — пишем выезды.
        Апартаменты на четверых считаем отдельно. Офис: Софьи Перовской, 17 · kola-tour@ya.ru · kolatour.ru
      </p>
    </main>
  );
}
