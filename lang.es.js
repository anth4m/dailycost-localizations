/*
 * DailyCost Localization
 * ----------------------
 * Spanish
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("es", {

		preference: {
			"currency": "EUR".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			"weekdaysShort": "dom._lun._mar._mié._jue._vie._sáb.".split("_"),

			"pullText": "Nuevo ...|Nuevo g...|Nuevo ga...|Nuevo gas...|Nuevo gast...|Nuevo gasto...|Nuevo gasto!".split("|"),

			"formatMetaDate": '[<strong>]DD[</strong>]/MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]/MM',
			"formatMonthScope": '[<strong>]MM[</strong>]/YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Ajustes",
			"preferences": "Preferencias",
			"categories": "Categorías",
			"wallpaper": "Fondo",
			"general": "General",
			"accountSettings": "Cuenta",
			"account": "Mi Cuenta",
			"sharing": "Compartir",
			"currency": "Moneda",
			"security": "Seguridad",
			"feedback": "Feedback",
			"about": "Información",
			"tipsAndTricks": "Trucos y Consejos",
			"preview": "Previsualizar",
			"done": "OK",
			"submit": "Enviar",
			"restore": "Restaurar",
			"default": "Por defecto",
			"weekstart": "Semana empieza en",

			"data": "Datos",
			"dataExportCSV": "Exportar CSV vía Email",
			"dataExportEmailSubject": "Backup de DailyCost",
			"dataExportEmailBody": "Simple y elegante.",

			"date": "Fecha",
			"sum": "Importe",
			"category": "Categoría",

			"entry": "Ingreso",
			"cost": "Gasto",
			"earn": "Beneficio",
			"balance": "Balance",

			"favoriteCurrencies": "Divisas favoritas",
			"allCurrencies": "Todas las divisas",

			"emptyCatlist": "Ooops, no has puesto nada",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Días",
			"rollTotal": "Gastos",
			"rollTotalSum": "Total",

			"note": "Nota",
			"createdOn": "Creado el",

			"ratingsTitle": "Vota DailyCost",
			"ratingsDescriptions": "Si disfrutas usando DailyCost, te importaría tomarte un momento para votarnos? Son sólo unos minutos. Gracias por ayudarnos!",
			"ratingsButtons": "Votar DailyCost,Después"
		},

		category: {
			"default":        "General",
			"food":           "Comida",
			"food-breakfast": "Desayuno",
			"food-lunch":     "Almuerzo",
			"food-dinner":    "Cena",
			"drinks":         "Bebidas",
			"groceries":      "Comestibles",
			"shopping":       "Tiendas",

			"personal":       "Personal",
			"entertain":      "Ocio",
			"movies":         "Películas",
			"social":         "Social",
			"transport":      "Transporte",

			"appstore":       "App Store",
			"mobile":         "Teléfono",
			"computer":       "Ordenador",
			"gifts":          "Regalos",
			"housing":        "Alojamiento",

			"travel":         "Viajes",
			"tickets":        "Entradas",
			"books":          "Libros",
			"medical":        "Médico",
			"transfer":       "Transferencia"
		},

		currency: {
			"AED": "Dirham Emiratí",
			"AFN": "Afghani Afganistán",
			"ALL": "Lek Albania",
			"AMD": "Dram Armenio",
			"ANG": "Guilder Antillas Holandesas",
			"AOA": "Nueva Kwanza Angola",
			"ARS": "Peso Argentina",
			"AUD": "Dólar Australia",
			"AWG": "Florín Aruba",
			"AZN": "Manat Azerbaijani",

			"BAM": "Marco Bosnioherzegovino",
			"BBD": "Dólar Barbados",
			"BDT": "Taka Bangladesh",
			"BGN": "Lev Bulgaria",
			"BHD": "Dinar bahraini",
			"BIF": "Franco Burundi",
			"BMD": "Dólar Bermuda",
			"BND": "Dólar Brunei",
			"BOB": "Boliviano Bolivia",
			"BRL": "Real Brasileño",
			"BSD": "Dólar Bahamas",
			"BTN": "Ngultrum Bhutanés",
			"BWP": "Pula Botswana",
			"BYR": "Rublo Beloruso",
			"BZD": "Dólar Belice",

			"CAD": "Dólar Canadá",
			"CDF": "Franco Congolés",
			"CHF": "Franco Suiza",
			"CLP": "Peso Chile",
			"CNY": "Yuan China",
			"COP": "Peso Colombia",
			"CRC": "Colón Costa Rica",
			"CUC": "Peso Convertible Cubano",
			"CUP": "Peso Cuba",
			"CVE": "Escudo Cabo Verde",
			"CZK": "Corona República Checa",

			"DJF": "Franco Djibouti",
			"DKK": "Corona Dinamarca",
			"DOP": "Peso República Dominicana",
			"DZD": "Dinar Argelino",

			"EGP": "Libra Egipto",
			"ERN": "Nakfa Eritrea",
			"ETB": "Birr Etiopía",
			"EUR": "Euro",

			"FJD": "Dólar Fiji",
			"FKP": "Libra Islas Falkland",

			"GBP": "Libra Inglaterra",
			"GEL": "Lari Georgiano",
			"GGP": "Libra Guernsey",
			"GHS": "Cedi Ghana",
			"GIP": "Libra Gibraltar",
			"GMD": "Dalasi Gambia",
			"GNF": "Franco Guinea",
			"GTQ": "Quetzal Guatemala",
			"GYD": "Dólar Guyana",

			"HKD": "Dólar Hong Kong",
			"HNL": "Lempira Honduras",
			"HRK": "Corona Croacia",
			"HTG": "Gourde Haití",
			"HUF": "Forint Hungría",

			"IDR": "Rupia Indonesia",
			"ILS": "Nuevo Shekel Israel",
			"IMP": "Libra Isla de Man",
			"INR": "Rupia India",
			"IQD": "Dinar Iraq",
			"IRR": "Rial Iran",
			"ISK": "Corona Islandia",

			"JEP": "Libra Jersey",
			"JMD": "Dólar Jamaicano",
			"JOD": "Dinar Jordania",
			"JPY": "Yen Japón",

			"KES": "Chelín Kenya",
			"KGS": "Kyrgyzstani Som",
			"KHR": "Riel Camboya",
			"KMF": "Franco Islas Comoros",
			"KPW": "Won Corea Norte",
			"KRW": "Won Corea Sur",
			"KWD": "Dinar Kuwait",
			"KYD": "Dolar Islas Caimán",
			"KZT": "Tenge Kazajstán",

			"LAK": "Kip Laos",
			"LBP": "Libra Libanesa",
			"LKR": "Rupia Sri Lanka",
			"LRD": "Dólar Liberia",
			"LSL": "Loti Lesotho",
			"LTL": "Litas Lituania",
			"LVL": "Lat Latvia",
			"LYD": "Dinar Libia",

			"MAD": "Dirham Marruecos",
			"MDL": "Lei Moldavia",
			"MGA": "Ariary Malgache",
			"MKD": "Dener Macedonia",
			"MMK": "Kyat Myanmar",
			"MNT": "Tugrik Mongolia",
			"MOP": "Pataca Macao",
			"MRO": "Ouguiya Mauritania",
			"MUR": "Rupia Mauricio",
			"MVR": "Rufiyaa Maldivas",
			"MWK": "Kwacha Malawi",
			"MXN": "Peso México",
			"MYR": "Ringgit Malasia",
			"MZN": "Metical Mozambique",

			"NAD": "Dólar Namibia",
			"NGN": "Naira Nigeria",
			"NIO": "Córdoba Nicaragua",
			"NOK": "Corona Noruega",
			"NPR": "Rupia Nepal",
			"NZD": "Dólar Nueva Zelanda",

			"OMR": "Rial Omani",

			"PAB": "Balboa Panamá",
			"PEN": "Sol Perú",
			"PGK": "Kina Papúa Nueva Guinea",
			"PHP": "Peso Filipinas",
			"PKR": "Rupia Pakistán",
			"PLN": "Zloty Polonia",
			"PYG": "Guarani Paraguay",

			"QAR": "Rial Qatari",

			"RON": "Leu Rumania",
			"RSD": "Dinar Serbio",
			"RUB": "Rublo Rusia",
			"RWF": "Franco Rwanda",

			"SAR": "Riyal Saudí",
			"SBD": "Dólar Islas Salomón",
			"SCR": "Rupia Seychelles",
			"SDG": "Libra Sudán",
			"SEK": "Corona Suecia",
			"SGD": "Dólar Singapur",
			"SHP": "Libra Sta Helena",
			"SLL": "Leone Sierra Leona",
			"SOS": "Chelín Somalia",
			"SPL": "Seborga Luigino",
			"SRD": "Guilder Surinam",
			"STD": "Dobra San Tomas",
			"SVC": "Colón Salvador",
			"SYP": "Libra Siria",
			"SZL": "Lilangeni Swazilandia",

			"THB": "Baht Tailandia",
			"TJS": "Tajikistan Somoni",
			"TMT": "Turkmenistán Manat",
			"TND": "Dinar Tunez",
			"TOP": "Paanga Tonga",
			"TRY": "Lira Turquía",
			"TTD": "Dólar Trinidad y Tobago",
			"TVD": "Dólar Tuvalu",
			"TWD": "Dólar Taiwán",
			"TZS": "Chelín Tanzania",

			"UAH": "Hryvnia Ucrania",
			"UGX": "Chelín Uganda",
			"USD": "Dólar América",
			"UYU": "Peso Uruguayo",
			"UZS": "Uzbekistán Som",

			"VEF": "Bolivar Venezuela",
			"VND": "Dong Vietnam",
			"VUV": "Vatu Vanuatu",

			"WST": "Tala Samoa",

			"XAF": "Africano Central Cfa",
			"XAG": "Onzas de plata",
			"XAU": "Onzas de oro",
			"XCD": "Dólar Caribe del Este",
			"XDR": "IMF Special Drawing Rights",
			"XOF": "CFA Franc",
			"XPD": "Onzas de Paladio",
			"XPF": "Franco Del Pacifico",
			"XPT": "Onzas de Platino",

			"YER": "Rial Yemen",

			"ZAR": "Rand Sudáfrica",
			"ZMW": "Kwacha Zambia",
			"ZWD": "Dólar Zimbabwe"
		}

	});

}(DAILYCOST || {}));
