/*
 * DailyCost Localization
 * ----------------------
 * German
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("de", {

		preference: {
			"currency": "EUR".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			"weekdaysShort": "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),

			"pullText": "Neue ..._Neue k..._Neue ko..._Neue kos..._Neue kost..._Neue koste..._Neue kosten..._Neue kosten!".split("_"),

			"formatMetaDate": '[<strong>]DD[</strong>].MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>].MM',
			"formatMonthScope": '[<strong>]MM[</strong>].YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Einstellungen",
			"preferences": "Voreinstellungen",
			"categories": "Kategorien",
			"wallpaper": "Hintergrund",
			"general": "Allgemein",
			"accountSettings": "Account",
			"account": "My Account",
			"sharing": "Teilen",
			"currency": "Währung",
			"security": "Sicherheit",
			"feedback": "Feedback",
			"about": "Über",
			"tipsAndTricks": "Tipps & Tricks",
			"preview": "Vorschau",
			"done": "Fertig",
			"submit": "Einreichen",
			"restore": "Wiederherstellen",
			"default": "Default",
			"weekstart": "Wochenanfang",

			"data": "Daten",
			"dataExportCSV": "Export CSV per Email",
			"dataExportEmailSubject": "DailyCost Datensicherung",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "Datum",
			"sum": "Summe",
			"category": "Kategorie",

			"entry": "Eintrag",
			"cost": "Kosten",
			"earn": "Verdienen",
			"balance": "Summe",

			"favoriteCurrencies": "Meiner Währungen",
			"allCurrencies": "Alle Währungen",

			"emptyCatlist": "Hier sind noch keine eintrag",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Tage",
			"rollTotal": "Kosten",
			"rollTotalSum": "Gesamt",

			"note": "Notiz",
			"createdOn": "Erstellt am",

			"ratingsTitle": "DailyCost Bewerten",
			"ratingsDescriptions": "Falls dir DailyCost gefällt, bitte bewerte die App! Das Ganze dauert weniger als eine Minute. Vielen Dank für deine Unterstützung!",
			"ratingsButtons": "Bewerten,Später"
		},

		category: {
			"default":        "Allgemein",
			"food":           "Essen",
			"food-breakfast": "Frühstück",
			"food-lunch":     "Mittagessen",
			"food-dinner":    "Abendessen",
			"drinks":         "Getränk",
			"groceries":      "Lebensmittel",
			"shopping":       "Einkäufe",

			"personal":       "Persönlich",
			"entertain":      "Unterhaltung",
			"movies":         "Filme",
			"social":         "Social",
			"transport":      "Reisen",

			"appstore":       "App Store",
			"mobile":         "Handy",
			"computer":       "Computer",
			"gifts":          "Geschenke",
			"housing":        "Wohnung",

			"travel":         "Urlaub",
			"tickets":        "Tickets",
			"books":          "Bücher",
			"medical":        "Gesundheit",
			"transfer":       "Transfer"
		},

		currency: {
			"AED": "Emirati Dirham",
			"AFN": "Afghan Afghani",
			"ALL": "Albanian Lek",
			"AMD": "Armenian Dram",
			"ANG": "Dutch Guilder",
			"AOA": "Angolan Kwanza",
			"ARS": "Argentine Peso",
			"AUD": "Australian Dollar",
			"AWG": "Aruban or Dutch Guilder",
			"AZN": "Azerbaijani New Manat",

			"BAM": "Bosnian Convertible Marka",
			"BBD": "Barbadian or Bajan Dollar",
			"BDT": "Bangladeshi Taka",
			"BGN": "Bulgarian Lev",
			"BHD": "Bahraini Dinar",
			"BIF": "Burundian Franc",
			"BMD": "Bermudian Dollar",
			"BND": "Bruneian Dollar",
			"BOB": "Bolivian Boliviano",
			"BRL": "Brazilian Real",
			"BSD": "Bahamian Dollar",
			"BTN": "Bhutanese Ngultrum",
			"BWP": "Botswana Pula",
			"BYR": "Belarusian Ruble",
			"BZD": "Belizean Dollar",

			"CAD": "Canadian Dollar",
			"CDF": "Congolese Franc",
			"CHF": "Swiss Franc",
			"CLP": "Chilean Peso",
			"CNY": "Chinese Yuan Renminbi",
			"COP": "Colombian Peso",
			"CRC": "Costa Rican Colon",
			"CUC": "Cuban Convertible Peso",
			"CUP": "Cuban Peso",
			"CVE": "Cape Verdean Escudo",
			"CZK": "Czech Koruna",

			"DJF": "Djiboutian Franc",
			"DKK": "Danish Krone",
			"DOP": "Dominican Peso",
			"DZD": "Algerian Dinar",

			"EGP": "Egyptian Pound",
			"ERN": "Eritrean Nakfa",
			"ETB": "Ethiopian Birr",
			"EUR": "Euro",

			"FJD": "Fijian Dollar",
			"FKP": "Falkland Island Pound",

			"GBP": "British Pound",
			"GEL": "Georgian Lari",
			"GGP": "Guernsey Pound",
			"GHS": "Ghanaian Cedi",
			"GIP": "Gibraltar Pound",
			"GMD": "Gambian Dalasi",
			"GNF": "Guinean Franc",
			"GTQ": "Guatemalan Quetzal",
			"GYD": "Guyanese Dollar",

			"HKD": "Hong Kong Dollar",
			"HNL": "Honduran Lempira",
			"HRK": "Croatian Kuna",
			"HTG": "Haitian Gourde",
			"HUF": "Hungarian Forint",

			"IDR": "Indonesian Rupiah",
			"ILS": "Israeli New Shekel",
			"IMP": "Isle of Man Pound",
			"INR": "Indian Rupee",
			"IQD": "Iraqi Dinar",
			"IRR": "Iranian Rial",
			"ISK": "Icelandic Krona",

			"JEP": "Jersey Pound",
			"JMD": "Jamaican Dollar",
			"JOD": "Jordanian Dinar",
			"JPY": "Japanese Yen",

			"KES": "Kenyan Shilling",
			"KGS": "Kyrgyzstani Som",
			"KHR": "Cambodian Riel",
			"KMF": "Comoran Franc",
			"KPW": "North Korean Won",
			"KRW": "South Korean Won",
			"KWD": "Kuwaiti Dinar",
			"KYD": "Caymanian Dollar",
			"KZT": "Kazakhstani Tenge",

			"LAK": "Lao or Laotian Kip",
			"LBP": "Lebanese Pound",
			"LKR": "Sri Lankan Rupee",
			"LRD": "Liberian Dollar",
			"LSL": "Basotho Loti",
			"LTL": "Lithuanian Litas",
			"LVL": "Latvian Lat",
			"LYD": "Libyan Dinar",

			"MAD": "Moroccan Dirham",
			"MDL": "Moldovan Leu",
			"MGA": "Malagasy Ariary",
			"MKD": "Macedonian Denar",
			"MMK": "Burmese Kyat",
			"MNT": "Mongolian Tughrik",
			"MOP": "Macau Pataca",
			"MRO": "Mauritanian Ouguiya",
			"MUR": "Mauritian Rupee",
			"MVR": "Maldivian Rufiyaa",
			"MWK": "Malawian Kwacha",
			"MXN": "Mexican Peso",
			"MYR": "Malaysian Ringgit",
			"MZN": "Mozambican Metical",

			"NAD": "Namibian Dollar",
			"NGN": "Nigerian Naira",
			"NIO": "Nicaraguan Cordoba",
			"NOK": "Norwegian Krone",
			"NPR": "Nepalese Rupee",
			"NZD": "New Zealand Dollar",

			"OMR": "Omani Rial",

			"PAB": "Panamanian Balboa",
			"PEN": "Peruvian Nuevo Sol",
			"PGK": "Papua New Guinean Kina",
			"PHP": "Philippine Peso",
			"PKR": "Pakistani Rupee",
			"PLN": "Polish Zloty",
			"PYG": "Paraguayan Guarani",

			"QAR": "Qatari Riyal",

			"RON": "Romanian New Leu",
			"RSD": "Serbian Dinar",
			"RUB": "Russian Ruble",
			"RWF": "Rwandan Franc",

			"SAR": "Saudi Arabian Riyal",
			"SBD": "Solomon Islander Dollar",
			"SCR": "Seychellois Rupee",
			"SDG": "Sudanese Pound",
			"SEK": "Swedish Krona",
			"SGD": "Singapore Dollar",
			"SHP": "Saint Helenian Pound",
			"SLL": "Sierra Leonean Leone",
			"SOS": "Somali Shilling",
			"SPL": "Seborgan Luigino",
			"SRD": "Surinamese Dollar",
			"STD": "Sao Tomean Dobra",
			"SVC": "Salvadoran Colon",
			"SYP": "Syrian Pound",
			"SZL": "Swazi Lilangeni",

			"THB": "Thai Baht",
			"TJS": "Tajikistani Somoni",
			"TMT": "Turkmenistani Manat",
			"TND": "Tunisian Dinar",
			"TOP": "Tongan Pa'anga",
			"TRY": "Turkish Lira",
			"TTD": "Trinidadian Dollar",
			"TVD": "Tuvaluan Dollar",
			"TWD": "Taiwan New Dollar",
			"TZS": "Tanzanian Shilling",

			"UAH": "Ukrainian Hryvna",
			"UGX": "Ugandan Shilling",
			"USD": "US Dollar",
			"UYU": "Uruguayan Peso",
			"UZS": "Uzbekistani Som",

			"VEF": "Venezuelan Bolivar",
			"VND": "Vietnamese Dong",
			"VUV": "Ni-Vanuatu Vatu",

			"WST": "Samoan Tala",

			"XAF": "Central African CFA Franc BEAC",
			"XAG": "Silver Ounce",
			"XAU": "Gold Ounce",
			"XCD": "East Caribbean Dollar",
			"XDR": "IMF Special Drawing Rights",
			"XOF": "CFA Franc",
			"XPD": "Palladium Ounce",
			"XPF": "CFP Franc",
			"XPT": "Platinum Ounce",

			"YER": "Yemeni Rial",

			"ZAR": "South African Rand",
			"ZMW": "Zambian Kwacha",
			"ZWD": "Zimbabwean Dollar"
		}

	});

}(DAILYCOST || {}));
