/*
 * DailyCost Localization
 * ----------------------
 * Portuguese
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("pt", {

		preference: {
			"currency": "EUR".split("_"),
			"weekstart": 1
		},

		string: {
			"weekdays": "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			"weekdaysShort": "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

			"pullText": "Nova ...|Nova d...|Nova de...|Nova des...|Nova desp...|Nova despe...|Nova despes...|Nova despesa...|Nova despesa!".split("|"),

			"formatMetaDate": '[<strong>]DD[</strong>]/MM',
			"formatWeekScope1": '[<strong>]DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]/MM',
			"formatMonthScope": '[<strong>]MM[</strong>]/YYYY',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "Definições",
			"preferences": "Preferências",
			"categories": "Categorias",
			"wallpaper": "Papel de parede",
			"general": "Geral",
			"accountSettings": "Conta",
			"account": "A sua conta",
			"sharing": "Partilhar",
			"currency": "Moeda corrente",
			"security": "Segurança",
			"feedback": "Feedback",
			"about": "Acerca",
			"tipsAndTricks": "Dicas",
			"preview": "Pré-visualizar",
			"done": "OK",
			"submit": "Submeter",
			"restore": "Restaurar",
			"default": "Pré-definido",
			"weekstart": "A semana começa",

			"data": "Informação",
			"dataExportCSV": "Faça uma cópia de segurança",
			"dataExportEmailSubject": "Cópia de segurança da aplicação DailyCost",
			"dataExportEmailBody": "Mantenha tudo simples e elegante.",

			"date": "Data",
			"sum": "Descrição",
			"category": "Categoria",

			"entry": "Entrada",
			"cost": "Despesa",
			"earn": "Lucro",
			"balance": "Balanço",

			"favoriteCurrencies": "As moedas que mais usa",
			"allCurrencies": "Todas as moedas em uso",

			"emptyCatlist": "Ooops, ainda não há nada aqui",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Dias",
			"rollTotal": "Despesas",
			"rollTotalSum": "Total",

			"note": "Nota",
			"createdOn": "Criada em",

			"ratingsTitle": "Gosta da aplicação DailyCost?",
			"ratingsDescriptions": "Se gosta desta aplicação, poderia avaliá-la na AppStore? Não tomará muito do seu tempo e contribuirá para a evolução da aplicação.",
			"ratingsButtons": "Avaliar agora,Mais tarde"
		},

		category: {
			"default":        "Geral",
			"food":           "Comida",
			"food-breakfast": "Pequeno almoço",
			"food-lunch":     "Almoço",
			"food-dinner":    "Jantar",
			"drinks":         "Bebidas",
			"groceries":      "Comida",
			"shopping":       "Compras",

			"personal":       "Pessoal",
			"entertain":      "Entretenimento",
			"movies":         "Cinema",
			"social":         "Social",
			"transport":      "Transportes",

			"appstore":       "App Store",
			"mobile":         "Telemóvel",
			"computer":       "Computador",
			"gifts":          "Presentes",
			"housing":        "Domiciliárias",

			"travel":         "Viagem",
			"tickets":        "Bilhetes",
			"books":          "Livross",
			"medical":        "Medicamentos",
			"transfer":       "Transferência"
		},

		currency: {
			"AED": "Emirati Dirham",
			"AFN": "Afeganistão - Afghani",
			"ALL": "Albânia - Lek",
			"AMD": "Arménia - Dream",
			"ANG": "Antilhas - Florim",
			"AOA": "Angola - Kwanza",
			"ARS": "Argentina - Peso",
			"AUD": "Dólar Australiano",
			"AWG": "Aruba - Florim",
			"AZN": "Azerbaijão - Manat Novo",

			"BAM": "Bósnia - Marco",
			"BBD": "Barbados - Dólar",
			"BDT": "Bangladeche - Taka",
			"BGN": "Bulgária - Lev",
			"BHD": "Barém - Dinar",
			"BIF": "Burundi - Franc",
			"BMD": "Bermudas - Dólar",
			"BND": "Brunei - Dólar",
			"BOB": "Bolívia - Boliviano",
			"BRL": "Real Brasileiro",
			"BSD": "Baamas - Dólar",
			"BTN": "Butão - Ngultrum",
			"BWP": "Botsuana - Pula",
			"BYR": "Bielorrússia - Ruble Bielorruso",
			"BZD": "Bezile - Dólar",

			"CAD": "Dólar Canadiano",
			"CDF": "Congo - Franco Congolês",
			"CHF": "Suíssa - Franco",
			"CLP": "Chile - Peso",
			"CNY": "China - Yuan Renminbi",
			"COP": "Colômbia - Peso",
			"CRC": "Costa Rica - Colón",
			"CUC": "Cuba -Convertible Peso",
			"CUP": "Cuba - Peso",
			"CVE": "Cabo Verde - Escudo",
			"CZK": "Chéquia - Coroa",

			"DJF": "Jibuti - Franco",
			"DKK": "Coroa Dinamarquesa",
			"DOP": "Rep. Dominicana - Peso",
			"DZD": "Argélia - Dinar",

			"EGP": "Egito - Libra",
			"ERN": "Eritreia - Nakfa",
			"ETB": "Etiópia - Birr",
			"EUR": "Euro",

			"FJD": "Fiji - Dólar",
			"FKP": "Ilhas Falkland - Libra",

			"GBP": "Libra Inglesa",
			"GEL": "Geórgia - Lari",
			"GGP": "Guernsey - Libra",
			"GHS": "Gana - Novo Cedi",
			"GIP": "Gibraltar - Libra",
			"GMD": "Gâmbia - Dalasi",
			"GNF": "Guiana Francesa - Franco",
			"GTQ": "Guatemala - Quetzal",
			"GYD": "Guiana - Dólar",

			"HKD": "Hong Kong - Dólar",
			"HNL": "Honduras - Lempira",
			"HRK": "Croácia - Kuna",
			"HTG": "Haiti - Gurde",
			"HUF": "Hungria - Forint",

			"IDR": "Indonésia - Rupia",
			"ILS": "Israel - Novo Shekel",
			"IMP": "Ilha de Man - Libra",
			"INR": "Índian - Rupia",
			"IQD": "Iraque - Dinar",
			"IRR": "Irão - Rial",
			"ISK": "Islândia - Coroa",

			"JEP": "Jersey - Libra",
			"JMD": "Jamaica - Dólar",
			"JOD": "Jordânia - Dinar",
			"JPY": "Japão - Iéne",

			"KES": "Quénia - Xelim",
			"KGS": "Quirguizistão - Som",
			"KHR": "Camboja - Riel",
			"KMF": "Comores - Franco",
			"KPW": "Coreia do Norte - Won",
			"KRW": "Coreia do Sul - Won",
			"KWD": "Kuwait - Dinar",
			"KYD": "Ilhas Caimão - Dólar",
			"KZT": "Cazaquistão - Tenge",

			"LAK": "Laos - Kip",
			"LBP": "Líbano - Libra",
			"LKR": "Sri Lanka - Rupia",
			"LRD": "Libéria - Dólar",
			"LSL": "Lesoto - Loti",
			"LTL": "Lituânia - Litas",
			"LVL": "Letónia - Lats",
			"LYD": "Líbia - Dinar",

			"MAD": "Marrocos - Dirham",
			"MDL": "Moldávia - Leu",
			"MGA": "Madagáscar - Ariary",
			"MKD": "MacedÓNIA - Denar",
			"MMK": "Birmânia - Kyat",
			"MNT": "Mongólia - Tughrik",
			"MOP": "Macau - Pataca",
			"MRO": "Mauritânia - Ouguiya",
			"MUR": "Maurícia - Rupia",
			"MVR": "Maldivas - Rupia",
			"MWK": "Malavi - Kwacha",
			"MXN": "México - Peso",
			"MYR": "Malásia - Ringgit",
			"MZN": "Moçambique - Novo Metical",

			"NAD": "Namíbia - Dólar",
			"NGN": "Nigéria - Naira",
			"NIO": "Nicarágua - Córdoba",
			"NOK": "Noruega - Coroa",
			"NPR": "Nepa - Rupia",
			"NZD": "Nova Zelândia - Dólar",

			"OMR": "Omã - Rial",

			"PAB": "Panamá - Balboa",
			"PEN": "Peru - Novo Sol",
			"PGK": "Papua Nova Guiné - Kina",
			"PHP": "Filipinas - Peso",
			"PKR": "Paquistão - Rupia",
			"PLN": "Polónia - Zloti",
			"PYG": "Paraguai - Guarani",

			"QAR": "Catar - Rial",

			"RON": "Roménia - Novo Lei",
			"RSD": "Sérvia - Dinar",
			"RUB": "Rúsia - Rublo",
			"RWF": "Ruanda - Franco ruandês",

			"SAR": "Arábia Saudita - Rial",
			"SBD": "Ilhas Salomão - Dólar",
			"SCR": "Seicheles - Rupia",
			"SDG": "Sudão - Libra",
			"SEK": "Suécia - Coroa",
			"SGD": "Singapura - Dólar",
			"SHP": "Santa Helena - Libra",
			"SLL": "Serra Leoa - Leone",
			"SOS": "Somália - Xelim",
			"SPL": "Seborga - Luigino",
			"SRD": "Suriname - Dólar",
			"STD": "São Tomé e Príncipe - Dobra",
			"SVC": "Salvador - Colón",
			"SYP": "Síria - Libra",
			"SZL": "Suazilândia - Lilangeni",

			"THB": "Tailândia - Baht",
			"TJS": "Tajikistan - Somoni",
			"TMT": "Turquemenistão - Novo Manat",
			"TND": "Tunísia - Dinar",
			"TOP": "Tonga - Pa'anga",
			"TRY": "Turquia - Lira",
			"TTD": "Trinidade - Dólar",
			"TVD": "Tuvalu - Dólar",
			"TWD": "Taiwan - Dollar",
			"TZS": "Tanzânia - Xelim",

			"UAH": "Ucrânia - Hryvna",
			"UGX": "Uganda - Xelim",
			"USD": "Dólar Americano",
			"UYU": "Uruguai - Peso",
			"UZS": "Uzbequistão - Som",

			"VEF": "Venezuela - Bolívar",
			"VND": "Vietname - Dong",
			"VUV": "Vanuatu - Vatu",

			"WST": "Samoa - Tala",

			"XAF": "CFA - Franco",
			"XAG": "Prata (onça)",
			"XAU": "Ouro (onça)",
			"XCD": "Este das Caraíbas - Dólar",
			"XDR": "Direitos de Saque Especiais",
			"XOF": "CFA - Franco",
			"XPD": "Paládio (onça)",
			"XPF": "Pacífico Central - Franco",
			"XPT": "Platina (onça)",

			"YER": "Yemen - Rial",

			"ZAR": "África do Sul - Rand",
			"ZMW": "Zâmbia - Kwacha",
			"ZWD": "Zimbabué - Dólar"
		}

	});

}(DAILYCOST || {}));
