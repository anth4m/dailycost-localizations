/*
 * DailyCost Localization
 * ----------------------
 * Czech
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("cs", {

		preference: {
			"currency": "CZK".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota".split("_"),
			"weekdaysShort": "Ne_Po_Út_St_Čt_Pá_So".split("_"),

			"pullText": "Nová ...|Nová n...|Nová ná...|Nová nák...|Nová nákl...|Nová nákla...|Nová náklad...|Nová náklady...|Nová náklady!".split("|"),

			"formatMetaDate": '[<strong>]DD[</strong>].MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>].MM',
			"formatMonthScope": '[<strong>]MM[</strong>].YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Nastavení",
			"preferences": "Předvolby",
			"categories": "Kategorie",
			"wallpaper": "Pozadí",
			"general": "Obecné",
			"accountSettings": "Účet",
			"account": "Můj účet",
			"sharing": "Sdílení",
			"currency": "Měna",
			"security": "Zabezpečení",
			"feedback": "Váš názor",
			"about": "O aplikaci",
			"tipsAndTricks": "Tipy a triky",
			"preview": "Náhled",
			"done": "Hotovo",
			"submit": "Odeslat",
			"restore": "Obnovit",
			"default": "Výchozí",
			"weekstart": "Týden začíná",

			"data": "Data",
			"dataExportCSV": "Exportovat CSV e-mailem",
			"dataExportEmailSubject": "DailyCost - Záloha dat",
			"dataExportEmailBody": "Jednoduše a přehledně.",

			"date": "Datum",
			"sum": "Celkem",
			"category": "Kategorie",

			"entry": "Položka",
			"cost": "Příjem",
			"earn": "Výdej",
			"balance": "Zůstatek",

			"favoriteCurrencies": "Mé měny",
			"allCurrencies": "Všechny měny",

			"emptyCatlist": "Hups, ještě tu nic není.",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Dny",
			"rollTotal": "Položek",
			"rollTotalSum": "Celkem",

			"note": "Poznámka",
			"createdOn": "Vytvořeno",

			"ratingsTitle": "Ohodnoť DailyCost",
			"ratingsDescriptions": "Pokud jsi spokojen s DailyCost, našel by sis chvilku a ohodnotil ji? Nezabere to více než pár minut. Děkuji za podporu!",
			"ratingsButtons": "Hodnotit DailyCost,Později"
		},

		category: {
			"default":        "Obecné",
			"food":           "Jídlo",
			"food-breakfast": "Snídaně",
			"food-lunch":     "Oběd",
			"food-dinner":    "Večeře",
			"drinks":         "Nápoje",
			"groceries":      "Potraviny",
			"shopping":       "Nákupy",

			"personal":       "Osobní",
			"entertain":      "Zábava",
			"movies":         "Filmy",
			"social":         "Společenské",
			"transport":      "Doprava",

			"appstore":       "App Store",
			"mobile":         "Mobil",
			"computer":       "Počítač",
			"gifts":          "Dárky",
			"housing":        "Bydlení",

			"travel":         "Cestování",
			"tickets":        "Lístky",
			"books":          "Knihy",
			"medical":        "Léky",
			"transfer":       "Převody"
		},

		currency: {
			"AED": "Emirátský dirham",
			"AFN": "Afghánský afghání",
			"ALL": "Albánský lek",
			"AMD": "Arménský dram",
			"ANG": "Gulden Nizozemských Antil",
			"AOA": "Angolská kwanza",
			"ARS": "Argentinské peso",
			"AUD": "Australský dolar",
			"AWG": "Arubský florin",
			"AZN": "Ázerbájdžánský manat",

			"BAM": "Konvertibilní marka",
			"BBD": "Barbadoský dolar",
			"BDT": "Bangladéšská taka",
			"BGN": "Bulharský lev",
			"BHD": "Bahrajnský dinár",
			"BIF": "Burundský frank",
			"BMD": "Bermudský dolar",
			"BND": "Brunejský dolar",
			"BOB": "Bolivijský boliviano",
			"BRL": "Brazilský real",
			"BSD": "Bahamský dolar",
			"BTN": "Bhútánský ngultrum",
			"BWP": "Botswanská pula",
			"BYR": "Běloruský rubl",
			"BZD": "Belizský dolar",

			"CAD": "Kanadský dolar",
			"CDF": "Konžský frank",
			"CHF": "Švýcarský frank",
			"CLP": "Chilské peso",
			"CNY": "Čínský jüan",
			"COP": "Kolumbijské peso",
			"CRC": "Kostarický colón",
			"CUC": "Kubánské konvertibilní peso",
			"CUP": "Kubánské peso",
			"CVE": "Kapverdské escudo",
			"CZK": "Česká koruna",

			"DJF": "Džibutský frank",
			"DKK": "Dánská koruna",
			"DOP": "Dominikánské peso",
			"DZD": "Alžírský dinár",

			"EGP": "Egyptská libra",
			"ERN": "Eritrejská nakfa",
			"ETB": "Etiopský birr",
			"EUR": "Euro",

			"FJD": "Fidžijský dolar",
			"FKP": "Falklandská libra",

			"GBP": "Libra šterlinků",
			"GEL": "Gruzínské lari",
			"GGP": "Guernseyská libra",
			"GHS": "Ghanský cedi",
			"GIP": "Gibraltarská libra",
			"GMD": "Gambijský dalasi",
			"GNF": "Guinejský frank",
			"GTQ": "Guatemalský quetzal",
			"GYD": "Guyanský dolar",

			"HKD": "Hongkongský dolar",
			"HNL": "Honduraská lempira",
			"HRK": "Chorvatská kuna",
			"HTG": "Haitský gourde",
			"HUF": "Maďarský forint",

			"IDR": "Indonéská rupie",
			"ILS": "Izraelský šekel",
			"IMP": "Manská libra",
			"INR": "Indická rupie",
			"IQD": "Irácký dinár",
			"IRR": "Íránský rial",
			"ISK": "Islandská koruna",

			"JEP": "Jerseyská libra",
			"JMD": "Jamajský dolar",
			"JOD": "Jordánský dinár",
			"JPY": "Japonský jen",

			"KES": "Keňský šilink",
			"KGS": "Kyrgyzský som",
			"KHR": "Kambodžský riel",
			"KMF": "Komorský frank",
			"KPW": "Severokorejský won",
			"KRW": "Jihokorejský won",
			"KWD": "Kuvajtský dinár",
			"KYD": "Dolar Kajmanských ostrovů",
			"KZT": "Kazašské tenge",

			"LAK": "Laoský kip",
			"LBP": "Libanonská libra",
			"LKR": "Šrílanská rupie",
			"LRD": "Liberijský dolar",
			"LSL": "Lesothský loti",
			"LTL": "Litevský litas",
			"LVL": "Lotyšský lat",
			"LYD": "Libyjský dinár",

			"MAD": "Marocký dirham",
			"MDL": "Moldavské leu",
			"MGA": "Malgašský ariary",
			"MKD": "Makedonský denár",
			"MMK": "Myanmarský kyat",
			"MNT": "Mongolský tugrik",
			"MOP": "Macauská pataca",
			"MRO": "Mauritánská ukíjá",
			"MUR": "Mauricijská rupie",
			"MVR": "Maledivská rupie",
			"MWK": "Malawiská kwacha",
			"MXN": "Mexické peso",
			"MYR": "Malajsijský ringgit",
			"MZN": "Mosambický metical",

			"NAD": "Namibijský dolar",
			"NGN": "Nigerijská naira",
			"NIO": "Nikaragujská córdoba",
			"NOK": "Norská koruna",
			"NPR": "Nepálská rupie",
			"NZD": "Novozélandský dolar",

			"OMR": "Ománský rial",

			"PAB": "Panamská balboa",
			"PEN": "Peruánský nuevo sol",
			"PGK": "Papujsko-guinejská kina",
			"PHP": "Filipínské peso",
			"PKR": "Pákistánská rupie",
			"PLN": "Polský złoty",
			"PYG": "Paraguayský guaraní",

			"QAR": "Katarský rial",

			"RON": "Rumunské leu",
			"RSD": "Srbský dinár",
			"RUB": "Ruský rubl",
			"RWF": "Rwandský frank",

			"SAR": "Saúdský rial",
			"SBD": "Šalamounský dolar",
			"SCR": "Seychelská rupie",
			"SDG": "Súdánská libra",
			"SEK": "Švédská koruna",
			"SGD": "Singapurský dolar",
			"SHP": "Svatohelenská libra",
			"SLL": "Sierraleonský leone",
			"SOS": "Somálský šilink",
			"SPL": "Seborgské luigino",
			"SRD": "Surinamský dolar",
			"STD": "Svatotomášská dobra",
			"SVC": "Salvádorský colón",
			"SYP": "Syrská libra",
			"SZL": "Svazijský lilangeni",

			"THB": "Thajský baht",
			"TJS": "Tádžický somoni",
			"TMT": "Turkmenský manat",
			"TND": "Tuniský dinár",
			"TOP": "Tonžská paanga",
			"TRY": "Nová turecká lira",
			"TTD": "Trinidadsko-tobagský dolar",
			"TVD": "Tuvalský dolar",
			"TWD": "Tchajwanský dolar",
			"TZS": "Tanzanský šilink",

			"UAH": "Ukrajinská hřivna",
			"UGX": "Ugandský šilink",
			"USD": "Americký dolar",
			"UYU": "Uruguayské peso",
			"UZS": "Uzbecký som",

			"VEF": "Venezuelský bolívar",
			"VND": "Vietnamský dong",
			"VUV": "Vanuatský vatu",

			"WST": "Samojská tala",

			"XAF": "CFA frank",
			"XAG": "Troyská unce stříbra",
			"XAU": "Troyská unce zlata",
			"XCD": "Východokaribský dolar",
			"XDR": "Zvláštní práva čerpání",
			"XOF": "CFA frank",
			"XPD": "Troyská unce paladia",
			"XPF": "CFP frank",
			"XPT": "Troyská unce platiny",

			"YER": "Jemenský rial",

			"ZAR": "Jihoafrický rand",
			"ZMW": "Zambijská kwacha",
			"ZWD": "Zimbabwský dolar"
		}

	});

}(DAILYCOST || {}));