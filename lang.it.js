/*
 * DailyCost Localization
 * ----------------------
 * Italian
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("it", {

		preference: {
			"currency": "EUR".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
			"weekdaysShort": "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),

			"pullText": "Nuova ...|Nuova s...|Nuova sp...|Nuova spe...|Nuova spes...|Nuova spesa...|Nuova spesa!".split("|"),

			"formatMetaDate": '[<strong>]DD[</strong>]/MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]/MM',
			"formatMonthScope": '[<strong>]MM[</strong>]/YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Impostazioni",
			"preferences": "Preferenze",
			"categories": "Categorie",
			"wallpaper": "Sfondo",
			"general": "Generale",
			"accountSettings": "Account",
			"account": "Il mio Account",
			"sharing": "Condivisione",
			"currency": "Valuta",
			"security": "Sicurezza",
			"feedback": "Feedback",
			"about": "Circa",
			"tipsAndTricks": "Tips & Tricks",
			"preview": "Preview",
			"done": "Fatto",
			"submit": "Invia",
			"restore": "Ripristina",
			"default": "Default",
			"weekstart": "Inizio settimana",

			"data": "Dati",
			"dataExportCSV": "Esporta CSV via Email",
			"dataExportEmailSubject": "DailyCost Backup dati",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "Data",
			"sum": "Somma",
			"category": "Categoria",

			"entry": "Entrata",
			"cost": "Spesa",
			"earn": "Guadagno",
			"balance": "Bilancio",

			"favoriteCurrencies": "Mia valuta",
			"allCurrencies": "Tutte le valute",

			"emptyCatlist": "Ooops, qui non c'è ancora niente",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Giorni",
			"rollTotal": "Spese",
			"rollTotalSum": "Totale",

			"note": "Nota",
			"createdOn": "Inserito il",

			"ratingsTitle": "Valuta DailyCost",
			"ratingsDescriptions": "Se ti piace DailyCost, perché non scrivi una recensione? Ci vorrà meno di un minuto. Grazie per il tuo supporto!",
			"ratingsButtons": "Valuta DailyCost,Dopo"
		},

		category: {
			"default":        "Generale",
			"food":           "Cibo",
			"food-breakfast": "Colazione",
			"food-lunch":     "Pranzo",
			"food-dinner":    "Cena",
			"drinks":         "Bevande",
			"groceries":      "Drogheria", // Generi alimentari
			"shopping":       "Acquisti",

			"personal":       "Personale",
			"entertain":      "Divertimento",
			"movies":         "Films",
			"social":         "Social",
			"transport":      "Trasporti",

			"appstore":       "App Store",
			"mobile":         "Mobile",
			"computer":       "Computer",
			"gifts":          "Regali",
			"housing":        "Abitazione",

			"travel":         "Viaggi",
			"tickets":        "Biglietti",
			"books":          "Libri",
			"medical":        "Farmaci",
			"transfer":       "Trasferire"
		},

		currency: {
			"AED": "Dirham degli Emirati Arabi Uniti",
			"AFN": "Afghani afgano",
			"ALL": "Lek albanese",
			"AMD": "Dram armeno",
			"ANG": "Fiorino delle Antille olandesi",
			"AOA": "Kwanza angolano",
			"ARS": "Peso argentino",
			"AUD": "Dollaro australiano",
			"AWG": "Fiorino arubano",
			"AZN": "Manat azero",

			"BAM": "Marco bosniaco",
			"BBD": "Dollaro di Barbados",
			"BDT": "Taka bengalese",
			"BGN": "Nuovo lev bulgaro",
			"BHD": "Dinaro del Bahrain",
			"BIF": "Franco del Burundi",
			"BMD": "Dollaro della Bermuda",
			"BND": "Dollaro del Brunei",
			"BOB": "Boliviano boliviano",
			"BRL": "Real brasiliano",
			"BSD": "Dollaro delle Bahamas",
			"BTN": "Ngultrum del Bhutan",
			"BWP": "Pula del Botswana",
			"BYR": "Rublo bielorusso",
			"BZD": "Dollaro del Belize",

			"CAD": "Dollaro canadese",
			"CDF": "Franco congolese",
			"CHF": "Franco svizzero",
			"CLP": "Peso cileno",
			"CNY": "Renminbi cinese (Yuan)",
			"COP": "Peso colombiano",
			"CRC": "Colón costaricano",
			"CUC": "Peso cubano convertibile",
			"CUP": "Peso cubano",
			"CVE": "Escudo di Capo Verde",
			"CZK": "Corona ceca",

			"DJF": "Franco gibutiano",
			"DKK": "Corona danese",
			"DOP": "Peso dominicano",
			"DZD": "Dinaro algerino",

			"EGP": "Lira egiziana (o sterlina)",
			"ERN": "Nakfa eritreo",
			"ETB": "Birr etiope",
			"EUR": "Euro",

			"FJD": "Dollaro delle Figi",
			"FKP": "Sterlina delle Falkland",

			"GBP": "Sterlina britannica",
			"GEL": "Lari georgiano",
			"GGP": "Sterlina di Guernsey",
			"GHS": "Cedi ghanese",
			"GIP": "Sterlina di Gibilterra",
			"GMD": "Dalasi gambese",
			"GNF": "Franco guineano",
			"GTQ": "Quetzal guatemalteco",
			"GYD": "Dollaro della Guyana",

			"HKD": "Dollaro di Hong Kong",
			"HNL": "Lempira honduregna",
			"HRK": "Kuna croata",
			"HTG": "Gourde haitiano",
			"HUF": "Fiorino ungherese",

			"IDR": "Rupia indonesiana",
			"ILS": "Nuovo siclo israeliano",
			"IMP": "Sterlina di Man",
			"INR": "Rupia indiana",
			"IQD": "Dinaro iracheno",
			"IRR": "Rial iraniano",
			"ISK": "Corona islandese",

			"JEP": "Sterlina di Jersey",
			"JMD": "Dollaro giamaicano",
			"JOD": "Dinaro giordano",
			"JPY": "Yen giapponese",

			"KES": "Scellino keniota",
			"KGS": "Som kirghizo",
			"KHR": "Riel cambogiano",
			"KMF": "Franco delle Comore",
			"KPW": "Won nordcoreano",
			"KRW": "Won sudcoreano",
			"KWD": "Dinaro kuwaitiano",
			"KYD": "Dollaro delle Cayman",
			"KZT": "Tenge kazako",

			"LAK": "Kip laotiano",
			"LBP": "Lira libanese (o sterlina)",
			"LKR": "Rupia singalese",
			"LRD": "Dollaro liberiano",
			"LSL": "Loti lesothiano",
			"LTL": "Lita lituano",
			"LVL": "Lats lettone",
			"LYD": "Dinaro libico",

			"MAD": "Dirham marocchino",
			"MDL": "Leu moldavo",
			"MGA": "Ariary malgascio",
			"MKD": "Dinaro macedone",
			"MMK": "Kyat birmano",
			"MNT": "Tugrik mongolo",
			"MOP": "Pataca di Macao",
			"MRO": "Ouguiya mauritana",
			"MUR": "Rupia mauriziana",
			"MVR": "Rufiyaa delle Maldive",
			"MWK": "Kwacha malawiano",
			"MXN": "Peso messicano",
			"MYR": "Ringgit malese",
			"MZN": "Metical mozambicano",

			"NAD": "Dollaro namibiano",
			"NGN": "Naira nigeriana",
			"NIO": "Cordoba nicaraguense",
			"NOK": "Corona norvegese",
			"NPR": "Rupia nepalese",
			"NZD": "Dollaro neozelandese",

			"OMR": "Rial dell'Oman",

			"PAB": "Balboa panamense",
			"PEN": "Nuevo sol peruviano",
			"PGK": "Kina papuana",
			"PHP": "Peso filippino",
			"PKR": "Rupia pakistana",
			"PLN": "Złoty polacco",
			"PYG": "Guarani paraguaiano",

			"QAR": "Rial del Qatar",

			"RON": "Nuovo leu rumeno",
			"RSD": "Dinaro serbo",
			"RUB": "Rublo russo",
			"RWF": "Franco ruandese",

			"SAR": "Rial saudita",
			"SBD": "Dollaro delle Salomone",
			"SCR": "Rupia delle Seychelles",
			"SDG": "Sterlina sudanese",
			"SEK": "Corona svedese",
			"SGD": "Dollaro di Singapore",
			"SHP": "Sterlina di Sant'Elena",
			"SLL": "Leone sierraleonese",
			"SOS": "Scellino somalo",
			"SPL": "Seborgan Luigino",
			"SRD": "Dollaro surinamese",
			"STD": "Dobra di São Tomé e Príncipe",
			"SVC": "Colòn salvadoregno",
			"SYP": "Lira siriana (o sterlina)",
			"SZL": "Lilangeni dello Swaziland",

			"THB": "Baht thailandese",
			"TJS": "Somoni tagico",
			"TMT": "Manat turkmeno",
			"TND": "Dinaro tunisino",
			"TOP": "Paʻanga tongano",
			"TRY": "Nuova lira turca",
			"TTD": "Dollaro di Trinidad e Tobago",
			"TVD": "Tuvaluan Dollar",
			"TWD": "Nuovo dollaro taiwanese",
			"TZS": "Scellino tanzaniano",

			"UAH": "Grivnia ucraina",
			"UGX": "Scellino ugandese",
			"USD": "Dollaro statunitense",
			"UYU": "Peso uruguaiano",
			"UZS": "Som uzbeco",

			"VEF": "Bolivar venezuelano",
			"VND": "Đồng vietnamita",
			"VUV": "Vatu di Vanuatu",

			"WST": "Tala samoano",

			"XAF": "Franco CFA BEAC",
			"XAG": "Argento",
			"XAU": "Oro",
			"XCD": "Dollaro dei Caraibi Orientali",
			"XDR": "Diritti Speciali di Prelievo",
			"XOF": "Franco CFA BCEAO",
			"XPD": "Palladio",
			"XPF": "Franco CFP",
			"XPT": "Platino",

			"YER": "Rial yemenita",

			"ZAR": "Rand sudafricano",
			"ZMW": "Kwacha zambiano",
			"ZWD": "Dollaro zimbabwiano"
		}

	});

}(DAILYCOST || {}));