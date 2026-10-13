import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as MessageCircle, r as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOkgVCYo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var offers = {
	osen: {
		id: "osen",
		kicker: "Конец октября · море ещё открыто",
		title: "Киты днём. Сияние вечером.",
		lead: "Ночи уже тёмные, катер ещё ходит. После ноября остаётся только берег.",
		image: "/art/map.jpg",
		file: "/offers/Kolatour_Osen_4.pdf",
		fileName: "КолаТур_Осень_4_человека.pdf",
		days: [
			[
				"День 1",
				"Охота",
				"Вечер от вашего адреса. Если небо закрыто — ночь переносим, не списываем."
			],
			[
				"День 2",
				"Териберка и море",
				"Пляж, «Яйца дракона», кладбище кораблей. Катер 2 часа. Кита не обещаем — обещаем выход."
			],
			[
				"День 3",
				"Город и «Ленин»",
				"Обзорная и атомный ледокол. Пустая первая ночь становится второй охотой."
			],
			[
				"День 4",
				"Саамы",
				"Олени и чум. Короче день под вылет. Третья охота — если ещё тихо, без доплаты."
			]
		],
		main: [
			"4 дня",
			"178 000 ₽",
			"44 500 ₽ с человека",
			"Сияние, море, ледокол, саамы. Жильё не входит."
		],
		alt: [
			"3 дня",
			"148 000 ₽",
			"37 000 ₽ с человека",
			"Без саамского дня. Охота, Териберка и «Ленин»."
		]
	},
	ng: {
		id: "ng",
		kicker: "Новый год · море уже закрыто",
		title: "Полярная ночь. Сияние и снег.",
		lead: "Катера нет — и это на первой странице. Ночь длиннее, снег есть, сияние случается чаще.",
		image: "/art/ice.jpg",
		file: "/offers/Kolatour_NG_4.pdf",
		fileName: "КолаТур_Новый_год_4_человека.pdf",
		days: [
			[
				"День 1",
				"Первая охота",
				"Отдельная машина, плед, термос. Облака не сжигают вечер — он переезжает."
			],
			[
				"День 2",
				"Зимняя Териберка",
				"Лёд у камней, «Яйца дракона», кладбище кораблей. Вечером вторая охота. Не катер."
			],
			[
				"День 3",
				"Хаски или саамы",
				"Короткая упряжка или тихая деревня с оленями. Цена одна, выбор до заезда."
			],
			[
				"День 4",
				"Ледокол",
				"«Ленин» днём. Если две ночи молчали — третья охота вечером, без доплаты."
			]
		],
		main: [
			"4 дня",
			"218 000 ₽",
			"54 500 ₽ с человека",
			"Две охоты и запасная, Териберка, хаски или саамы, ледокол."
		],
		alt: [
			"3 дня",
			"178 000 ₽",
			"44 500 ₽ с человека",
			"Без ледокола. Сияние, зимняя Териберка, хаски или саамы."
		]
	}
};
function Home() {
	const [id, setId] = (0, import_react.useState)("osen");
	const offer = offers[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-widest text-accent uppercase",
						children: "КолаТур · база на четверых"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-3xl font-bold tracking-tight sm:text-4xl",
						children: "Две программы. В обеих — сияние."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-muted",
						children: "Конец октября и новогодние праздники. Мини-группа, отдельная машина, жильё ваше. PDF можно сразу отправить."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "switch mb-5",
				role: "tablist",
				"aria-label": "Программа",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-pressed": id === "osen",
					onClick: () => setId("osen"),
					children: "Осень"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-pressed": id === "ng",
					onClick: () => setId("ng"),
					children: "Новый год"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: offer.image,
						alt: ""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-veil" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-widest text-accent uppercase",
								children: offer.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-bold sm:text-3xl",
								children: offer.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-lg text-sm text-muted",
								children: offer.lead
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "dl",
					href: offer.file,
					download: offer.fileName,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 18 }), "Скачать PDF"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "ghost",
					href: "https://wa.me/79958771979",
					target: "_blank",
					rel: "noreferrer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 18 }), "Яна · WhatsApp"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 grid gap-3",
				children: offer.days.map(([day, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "day",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-accent",
							children: day
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: text
						})
					]
				}, day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "price lead",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-bold tracking-widest text-accent uppercase",
							children: [offer.main[0], " · на четверых"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-bold",
							children: offer.main[1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: offer.main[2]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: offer.main[3]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "price",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-bold tracking-widest text-hot uppercase",
							children: [offer.alt[0], " · короче"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-bold",
							children: offer.alt[1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: offer.alt[2]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: offer.alt[3]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted",
				children: "Проживание, дорога до Мурманска и питание не входят. Китов и сияние в договор не пишем — пишем выезды. Апартаменты на четверых считаем отдельно. Офис: Софьи Перовской, 17 · kola-tour@ya.ru · kolatour.ru"
			})
		]
	});
}
//#endregion
export { Home as component };
