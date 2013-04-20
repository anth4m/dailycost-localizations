/*
 * DailyCost Localization
 * ----------------------
 * Russian
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("ru", {

		preference: {
			"currency": "RUB".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
			"weekdaysShort": "Вск_Пнд_Втр_Срд_Чтв_Птн_Сбт".split("_"),
			// "weekdaysMin": "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),

			"pullText": "Новый ...|Новый р...|Новый ра...|Новый рас...|Новый расх...|Новый расхо...|Новый расход...|Новый расход!".split("|"),

			"formatMetaDate": '[<strong>]DD[</strong>].MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>].MM',
			"formatMonthScope": '[<strong>]MM[</strong>].YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Настройки",
			"preferences": "Установки",
			"categories": "Категории",
			"wallpaper": "Обои",
			"general": "Основные",
			"accountSettings": "Настройки уч. записи",
			"account": "Учетная запись",
			"sharing": "Поделиться",
			"currency": "Валюты",
			"security": "Безопасность",
			"feedback": "Обратная связь",
			"about": "О программе",
			"tipsAndTricks": "Советы и Подсказки",
			"preview": "Просмотр",
			"done": "Готово",
			"submit": "Принять",
			"restore": "Восстановить",
			"default": "По умолчанию",
			"weekstart": "Начало недели",

			"data": "Данные",
			"dataExportCSV": "Экспорт CSV по Email",
			"dataExportEmailSubject": "Резервная копия DailyCost",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "Дата",
			"sum": "Сумма",
			"category": "Категория",

			"entry": "Запись",
			"cost": "Расход",
			"earn": "Доход",
			"balance": "Баланс",

			"favoriteCurrencies": "Мои валюты",
			"allCurrencies": "Все валюты",

			"emptyCatlist": "Ой, здесь ничего еще нет!",

			"feedbackEmailSubject": "Оставить отзыв",

			"rollDays": "Дни",
			"rollTotal": "Расходы",
			"rollTotalSum": "Всего",

			"note": "Заметка",
			"createdOn": "Создана",

			"ratingsTitle": "Оцени DailyCost",
			"ratingsDescriptions": "Если Вам понравилась DailyCost, не могли бы Вы ее оценить? Это не займет больше минуты. Спасибо за Вашу поддержку!",
			"ratingsButtons": "Оценить,Позже"
		},

		category: {
			"default":        "Основные",
			"food":           "Еда",
			"food-breakfast": "Завтрак",
			"food-lunch":     "Обед",
			"food-dinner":    "Ужин",
			"drinks":         "Напитки",
			"groceries":      "Продукты",
			"shopping":       "Шоппинг",

			"personal":       "Личные",
			"entertain":      "Развлечения",
			"movies":         "Кино",
			"social":         "Социальные",
			"transport":      "Транспорт",

			"appstore":       "App Store",
			"mobile":         "Мобильный",
			"computer":       "Компютер",
			"gifts":          "Подарки",
			"housing":        "Домашние",

			"travel":         "Поездки",
			"tickets":        "Билеты",
			"books":          "Книги",
			"medical":        "Медицина",
			"transfer":       "Переводы"
		},

		currency: {
			"AED": "Дирхам ОАЭ",
			"AFN": "Afghan Afghani",
			"ALL": "Albanian Lek",
			"AMD": "Армянский драм",
			"ANG": "Dutch Guilder",
			"AOA": "Angolan Kwanza",
			"ARS": "Аргентинский песо",
			"AUD": "Австралийский доллар",
			"AWG": "Aruban or Dutch Guilder",
			"AZN": "Азербайджанский манат",

			"BAM": "Bosnian Convertible Marka",
			"BBD": "Barbadian or Bajan Dollar",
			"BDT": "Bangladeshi Taka",
			"BGN": "Болгарский лев",
			"BHD": "Bahraini Dinar",
			"BIF": "Burundian Franc",
			"BMD": "Bermudian Dollar",
			"BND": "Bruneian Dollar",
			"BOB": "Bolivian Boliviano",
			"BRL": "Бразильский реал",
			"BSD": "Bahamian Dollar",
			"BTN": "Bhutanese Ngultrum",
			"BWP": "Botswana Pula",
			"BYR": "Белорусский рубль",
			"BZD": "Belizean Dollar",

			"CAD": "Канадский доллар",
			"CDF": "Congolese Franc",
			"CHF": "Швейцарский франк",
			"CLP": "Чилийский песо",
			"CNY": "Китайский юань",
			"COP": "Колумбийский песо",
			"CRC": "Коста-риканский колон",
			"CUC": "Cuban Convertible Peso",
			"CUP": "Cuban Peso",
			"CVE": "Cape Verdean Escudo",
			"CZK": "Чешская крона",

			"DJF": "Djiboutian Franc",
			"DKK": "Датская крона",
			"DOP": "Dominican Peso",
			"DZD": "Algerian Dinar",

			"EGP": "Египетский фунт",
			"ERN": "Eritrean Nakfa",
			"ETB": "Ethiopian Birr",
			"EUR": "Евро",

			"FJD": "Fijian Dollar",
			"FKP": "Falkland Island Pound",

			"GBP": "Британский фунт",
			"GEL": "Грузинский лари",
			"GGP": "Guernsey Pound",
			"GHS": "Ghanaian Cedi",
			"GIP": "Gibraltar Pound",
			"GMD": "Gambian Dalasi",
			"GNF": "Guinean Franc",
			"GTQ": "Guatemalan Quetzal",
			"GYD": "Guyanese Dollar",

			"HKD": "Гонконгский доллар",
			"HNL": "Honduran Lempira",
			"HRK": "Хорватская куна",
			"HTG": "Haitian Gourde",
			"HUF": "Венгерский форинт",

			"IDR": "Индонезийская рупия",
			"ILS": "Израильский шекель",
			"IMP": "Isle of Man Pound",
			"INR": "Индийская рупия",
			"IQD": "Иракский динар",
			"IRR": "Иранский риал",
			"ISK": "Исландская крона",

			"JEP": "Jersey Pound",
			"JMD": "Jamaican Dollar",
			"JOD": "Jordanian Dinar",
			"JPY": "Японская йена",

			"KES": "Kenyan Shilling",
			"KGS": "киргизских сомов",
			"KHR": "Cambodian Riel",
			"KMF": "Comoran Franc",
			"KPW": "North Korean Won",
			"KRW": "Южнокорейский вон",
			"KWD": "Кувейтский динар",
			"KYD": "Caymanian Dollar",
			"KZT": "Казахский тенге",

			"LAK": "Лаосский кип",
			"LBP": "Ливанский фунт",
			"LKR": "Sri Lankan Rupee",
			"LRD": "Liberian Dollar",
			"LSL": "Basotho Loti",
			"LTL": "Литовский лит",
			"LVL": "Латвийский лат",
			"LYD": "Ливийский динар",

			"MAD": "Moroccan Dirham",
			"MDL": "Молдавский лей",
			"MGA": "Malagasy Ariary",
			"MKD": "Macedonian Denar",
			"MMK": "Burmese Kyat",
			"MNT": "Монгольский тугрик",
			"MOP": "Macau Pataca",
			"MRO": "Mauritanian Ouguiya",
			"MUR": "Mauritian Rupee",
			"MVR": "Maldivian Rufiyaa",
			"MWK": "Malawian Kwacha",
			"MXN": "Мексиканский песо",
			"MYR": "Малайзийский ринггит",
			"MZN": "Mozambican Metical",

			"NAD": "Namibian Dollar",
			"NGN": "Нигерийская найра",
			"NIO": "Nicaraguan Cordoba",
			"NOK": "Норвежская крона",
			"NPR": "Nepalese Rupee",
			"NZD": "Новозеландский доллар",

			"OMR": "Omani Rial",

			"PAB": "Panamanian Balboa",
			"PEN": "Перуанский новый соль",
			"PGK": "Papua New Guinean Kina",
			"PHP": "Филиппинское песо",
			"PKR": "Пакистанская рупия",
			"PLN": "Польский злотый",
			"PYG": "Paraguayan Guarani",

			"QAR": "Qatari Riyal",

			"RON": "Новых румынских леев",
			"RSD": "Serbian Dinar",
			"RUB": "Российский рубль",
			"RWF": "Rwandan Franc",

			"SAR": "Саудовский риал",
			"SBD": "Solomon Islander Dollar",
			"SCR": "Seychellois Rupee",
			"SDG": "Sudanese Pound",
			"SEK": "Шведская крона",
			"SGD": "Сингапурский доллар",
			"SHP": "Saint Helenian Pound",
			"SLL": "Sierra Leonean Leone",
			"SOS": "Somali Shilling",
			"SPL": "Seborgan Luigino",
			"SRD": "Surinamese Dollar",
			"STD": "Sao Tomean Dobra",
			"SVC": "Salvadoran Colon",
			"SYP": "Сирийский фунт",
			"SZL": "Swazi Lilangeni",

			"THB": "Таиландский бат",
			"TJS": "Таджикский сомони",
			"TMT": "Туркменский манат",
			"TND": "Tunisian Dinar",
			"TOP": "Tongan Pa'anga",
			"TRY": "Турецкая лира",
			"TTD": "Trinidadian Dollar",
			"TVD": "Tuvaluan Dollar",
			"TWD": "Тайваньский доллар",
			"TZS": "Tanzanian Shilling",

			"UAH": "Украинская гривна",
			"UGX": "Ugandan Shilling",
			"USD": "Доллар США",
			"UYU": "Уругвайский песо",
			"UZS": "Узбекский сум",

			"VEF": "Venezuelan Bolivar",
			"VND": "Вьетнамский донг",
			"VUV": "Ni-Vanuatu Vatu",

			"WST": "Samoan Tala",

			"XAF": "Central African CFA Franc BEAC",
			"XAG": "Серебро",
			"XAU": "Золото",
			"XCD": "East Caribbean Dollar",
			"XDR": "СПЗ",
			"XOF": "Франк КФА ВСЕАО",
			"XPD": "Палладий",
			"XPF": "CFP Franc",
			"XPT": "Платина",

			"YER": "Yemeni Rial",

			"ZAR": "Южноафриканский ранд",
			"ZMW": "Zambian Kwacha",
			"ZWD": "Zimbabwean Dollar"
		}

	});

}(DAILYCOST || {}));
