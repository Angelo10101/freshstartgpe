import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Be9KFcqv.js
var import_jsx_runtime = require_jsx_runtime();
var freshstart_logo_default = "/assets/freshstart-logo-DkQ8Uwgi.png";
var hero_room_default = "/assets/hero-room-CJWBdOcI.jpg";
var service_painting_default = "/assets/service-painting-BoGHQGWn.jpg";
var service_gardening_default = "/assets/service-gardening-DlrlC9Sk.jpg";
var service_exterior_default = "/assets/service-exterior-DIvt-oZi.jpg";
var PHONE = "+44 7856 322075";
var PHONE_HREF = "tel:+447856322075";
var ADDRESS = "86–90 Paul St, London EC2A 4NE";
var HOURS_SCHEDULE = ["9 am–10 pm,", "Monday through Sunday"].join("\n");
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: freshstart_logo_default,
						alt: "FreshStart",
						className: "h-9 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden gap-8 text-sm text-muted-foreground md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "transition hover:text-primary",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "transition hover:text-primary",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#reviews",
							className: "transition hover:text-primary",
							children: "Reviews"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "transition hover:text-primary",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: PHONE_HREF,
					className: "hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex",
					children: "Call for a free quote"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pt-16 pb-20 md:grid-cols-12 md:gap-12 md:pt-24 md:pb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6 md:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), "London · Walthamstow · Leyton"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-5xl leading-[1.05] text-primary md:text-6xl lg:text-7xl",
						children: "Bring the fresh start into your home."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg text-muted-foreground",
						children: "Friendly, reliable painters and gardeners serving East London. Honest work, tidy finish, and a free quote — any time you ring."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_HREF,
							className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90",
							children: ["Call ", PHONE]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary",
							children: "See what we do"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center gap-4 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "4.9 · 10 Google reviews" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative md:col-span-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-sm shadow-[var(--shadow-soft)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_room_default,
						alt: "Freshly painted London townhouse interior with sage green walls",
						width: 1600,
						height: 1200,
						className: "h-[420px] w-full object-cover md:h-[560px]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-6 -left-6 hidden rounded-sm border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl text-primary",
						children: "10+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Years on the tools"
					})]
				})]
			})]
		})
	});
}
var services = [
	{
		title: "Interior Painting",
		body: "Walls, ceilings, woodwork and feature rooms. Clean lines, careful prep, no mess left behind.",
		img: service_painting_default
	},
	{
		title: "Gardening & Upkeep",
		body: "Lawns, hedges, pruning and tidy-ups. Regular visits or one-off transformations.",
		img: service_gardening_default
	},
	{
		title: "Exterior & Odd Jobs",
		body: "Front doors, fences, rendering touch-ups and the small things on your list.",
		img: service_exterior_default
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "border-t border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "What we do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl text-primary md:text-5xl",
					children: "A small team. A long list of jobs done well."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-muted-foreground",
					children: "Gardening, painting and the bits in between — local, reliable, and always free to quote on anything you ring us about."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.title,
								width: 1024,
								height: 1024,
								loading: "lazy",
								className: "h-72 w-full object-cover transition duration-700 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-2xl text-primary",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: s.body
						})
					]
				}, s.title))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "About"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl text-primary md:text-5xl",
					children: "Local hands, honest work."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5 text-lg text-muted-foreground md:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "FreshStart is a small painting and gardening crew based in East London — covering Walthamstow, Leyton and the surrounding boroughs. Every job, big or small, gets the same care: tidy site, fair price, finish you can be proud of." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Got a question, or want a quote? Give us a ring any time. We'll come round, take a look, and tell you straight what it'll cost." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-6 pt-4 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "4.9",
								l: "Google rating"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "10+",
								l: "Years experience"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								k: "Free",
								l: "Quotes, always"
							})
						]
					})
				]
			})]
		})
	});
}
function Stat({ k, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-l-2 border-primary pl-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-3xl text-primary",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
			children: l
		})]
	});
}
var reviews = [
	{
		quote: "Amazing service, extremely happy with the result!",
		name: "Google reviewer"
	},
	{
		quote: "Worked very hard especially the Chinese brother — very good honest people.",
		name: "H."
	},
	{
		quote: "Very friendly, good English communication and they did a very good job.",
		name: "B."
	}
];
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "border-t border-border bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "Reviews"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto mt-3 max-w-2xl text-4xl text-primary md:text-5xl",
					children: "Rated 4.9 by neighbours across East London."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex h-full flex-col justify-between rounded-sm border border-border bg-card p-7 shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 font-serif text-xl leading-snug text-foreground",
							children: [
								"\"",
								r.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 text-sm text-muted-foreground",
							children: ["— ", r.name]
						})
					]
				}, r.name))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 rounded-sm bg-primary p-10 text-primary-foreground md:grid-cols-12 md:p-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] opacity-70",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl md:text-5xl",
							children: "Ring for a free quote — any job, big or small."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md opacity-80",
							children: "Pick up the phone and we'll come and have a look. No pressure, no obligation — just an honest price."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_HREF,
								className: "rounded-full bg-background px-6 py-3 text-sm font-medium text-primary transition hover:opacity-90",
								children: ["Call ", PHONE]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.instagram.com/",
								target: "_blank",
								rel: "noreferrer",
								className: "rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10",
								children: "Find us on Instagram"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-6 border-t border-primary-foreground/20 pt-8 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Phone",
							value: PHONE,
							href: PHONE_HREF
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Address",
							value: ADDRESS
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Hours",
							value: HOURS_SCHEDULE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Areas",
							value: "Walthamstow, Leyton & all of East London"
						})
					]
				})]
			})
		})
	});
}
function Info({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs uppercase tracking-[0.18em] opacity-60",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 whitespace-pre-line font-serif text-xl",
		children: href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "underline-offset-4 hover:underline",
			children: value
		}) : value
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: freshstart_logo_default,
					alt: "FreshStart",
					className: "h-8 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Painting & gardening · London"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" FreshStartGPE. All rights reserved."
				]
			})]
		})
	});
}
function Star() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className: "text-accent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" })
	});
}
//#endregion
export { Home as component };
