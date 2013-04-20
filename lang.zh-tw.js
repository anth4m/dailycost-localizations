/*
 * DailyCost Localization
 * ----------------------
 * Chinese Traditional (Taiwan)
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("zh-tw", {

		preference: {
			"currency": "TWD".split("_"),
			"weekstart": 0
		},

		string: {
			"weekdays": "周日_周一_周二_周三_周四_周五_周六".split("_"),
			"weekdaysShort": "周日_周一_周二_周三_周四_周五_周六".split("_"),

			"pullText": "新增...|新增一...|新增一條...|新增一條開...|新增一條開銷...|新增一條開銷!".split("|"),

			"formatMetaDate": '[<strong>]MM.DD[</strong>]',
			"formatWeekScope1": '[<strong>]MM.DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]',
			"formatMonthScope": '[<strong>]YYYY.MM[</strong>]',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "設定",
			"preferences": "使用偏好",
			"categories": "開銷類別",
			"wallpaper": "桌布",
			"general": "一般",
			"accountSettings": "帳號",
			"account": "我的 DailyCost 帳號",
			"sharing": "分享",
			"currency": "貨幣",
			"security": "安全",
			"feedback": "建議及反饋",
			"about": "關於",
			"tipsAndTricks": "使用秘籍",
			"preview": "預覽",
			"done": "完成",
			"submit": "提交",
			"restore": "還原",
			"default": "默認",
			"weekstart": "每週開始於",

			"data": "數據",
			"dataExportCSV": "郵件導出Excel文件(CSV)", // "通過Email導出CSV"
			"dataExportEmailSubject": "DailyCost數據備份",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "日期",
			"sum": "金額",
			"category": "類別",

			"entry": "記錄",
			"cost": "開銷",
			"earn": "收入",
			"balance": "總額",

			"favoriteCurrencies": "常用貨幣",
			"allCurrencies": "全部貨幣",

			"emptyCatlist": "喔，這裡還沒有任何記錄喔",

			"feedbackEmailSubject": "DailyCost反饋",

			"rollDays": "天數",
			"rollTotal": "開銷",
			"rollTotalSum": "總金額",

			"note": "附註",
			"createdOn": "紀錄於",

			"ratingsTitle": "給DailyCost評分",
			"ratingsDescriptions": "如果您喜歡DailyCost，現在就花點時間寫個評論吧！您的意見和建議會讓他變得更出色。",
			"ratingsButtons": "去評分,下次吧"
		},

		category: {
			"default":        "一般",
			"food":           "餐飲",
			"food-breakfast": "早餐",
			"food-lunch":     "午餐",
			"food-dinner":    "晚餐",
			"drinks":         "飲料",
			"groceries":      "水果零食",
			"shopping":       "購物",

			"personal":       "個人",
			"entertain":      "娛樂",
			"movies":         "電影",
			"social":         "社交",
			"transport":      "交通",

			"appstore":       "App Store",
			"mobile":         "手機通訊",
			"computer":       "電腦",
			"gifts":          "禮物",
			"housing":        "居家",

			"travel":         "旅遊",
			"tickets":        "門票",
			"books":          "書籍",
			"medical":        "醫療",
			"transfer":       "轉帳"
		},

		currency: {
			"AED": "阿联酋迪拉姆",
			"AFN": "阿富汗阿富汗尼",
			"ALL": "阿爾巴尼亞列克",
			"AMD": "亞美尼亞德拉姆",
			"ANG": "荷蘭盾",
			"AOA": "安哥拉寬扎",
			"ARS": "阿根廷比索",
			"AUD": "澳元",
			"AWG": "阿魯巴盾",
			"AZN": "阿塞拜疆新馬納特",

			"BAM": "波斯尼亞可兌換馬爾卡",
			"BBD": "巴巴多斯元",
			"BDT": "孟加拉塔卡",
			"BGN": "保加利亞列弗",
			"BHD": "巴林第納爾",
			"BIF": "蒲隆地法郎",
			"BMD": "百慕達元",
			"BND": "文莱元",
			"BOB": "玻利維亞幣",
			"BRL": "巴西雷亚尔",
			"BSD": "巴哈馬元",
			"BTN": "不丹魯姆",
			"BWP": "博茨瓦納普拉",
			"BYR": "白俄羅斯盧布",
			"BZD": "伯利茲元",

			"CAD": "加元",
			"CDF": "剛果法郎",
			"CHF": "瑞士法郎",
			"CLP": "智利比索",
			"CNY": "人民币",
			"COP": "哥倫比亞比索",
			"CRC": "哥斯達黎加科隆",
			"CUC": "古巴可兌換比索",
			"CUP": "古巴比索",
			"CVE": "佛得角埃斯庫多",
			"CZK": "捷克克朗",

			"DJF": "吉布提法郎",
			"DKK": "丹麦克朗",
			"DOP": "多米尼加比索",
			"DZD": "阿爾及利亞第納爾",

			"EGP": "埃及鎊",
			"ERN": "厄立特里亞納克法",
			"ETB": "埃塞俄比亞比爾",
			"EUR": "欧元",

			"FJD": "斐濟元",
			"FKP": "福克蘭群島鎊",

			"GBP": "英鎊",
			"GEL": "格魯吉亞拉里",
			"GGP": "根西島鎊",
			"GHS": "加納塞地",
			"GIP": "直布罗陀镑",
			"GMD": "岡比亞達拉西",
			"GNF": "幾內亞法郎",
			"GTQ": "危地馬拉格查爾",
			"GYD": "圭亞那元",

			"HKD": "港元",
			"HNL": "洪都拉斯倫皮拉",
			"HRK": "克羅地亞庫納",
			"HTG": "海地古德",
			"HUF": "匈牙利福林",

			"IDR": "印尼盾",
			"ILS": "以色列新謝克爾",
			"IMP": "曼島鎊",
			"INR": "印度盧比",
			"IQD": "伊拉克第納爾",
			"IRR": "伊朗里亞爾",
			"ISK": "冰島克朗",

			"JEP": "澤西鎊",
			"JMD": "牙買加元",
			"JOD": "約旦第納爾",
			"JPY": "日元",

			"KES": "肯尼亚先令",
			"KGS": "吉爾吉斯斯坦索姆",
			"KHR": "柬埔寨瑞爾",
			"KMF": "科摩羅法郎",
			"KPW": "朝鮮元",
			"KRW": "韩元",
			"KWD": "科威特第納爾",
			"KYD": "開曼群島元",
			"KZT": "哈薩克斯坦堅戈",

			"LAK": "寮國基普",
			"LBP": "黎巴嫩鎊",
			"LKR": "斯里蘭卡盧比",
			"LRD": "利比里亞元",
			"LSL": "巴索托洛蒂",
			"LTL": "立陶宛立特",
			"LVL": "拉脫維亞拉特",
			"LYD": "利比亞第納爾",

			"MAD": "摩洛哥迪拉姆",
			"MDL": "摩爾多瓦列伊",
			"MGA": "馬达加斯加阿里亞里",
			"MKD": "馬其頓代納爾",
			"MMK": "緬甸緬元",
			"MNT": "蒙古圖格里克",
			"MOP": "澳門幣",
			"MRO": "毛里塔尼亞烏吉亞",
			"MUR": "毛里求斯盧比",
			"MVR": "馬爾代夫拉菲亞",
			"MWK": "馬拉維克瓦查",
			"MXN": "墨西哥比索",
			"MYR": "馬來西亞林吉特",
			"MZN": "莫桑比克美提卡",

			"NAD": "納米比亞元",
			"NGN": "奈及利亞奈拉",
			"NIO": "尼加拉瓜科多巴",
			"NOK": "挪威克朗",
			"NPR": "尼泊爾盧比",
			"NZD": "新西蘭元",

			"OMR": "阿曼里亞爾",

			"PAB": "巴拿馬巴波亞",
			"PEN": "秘魯新索爾",
			"PGK": "巴布亞新幾內亞基那",
			"PHP": "菲律賓比索",
			"PKR": "巴基斯坦盧比",
			"PLN": "波蘭茲羅提",
			"PYG": "巴拉圭瓜拉尼",

			"QAR": "卡塔爾里亞爾",

			"RON": "羅馬尼亞新列伊",
			"RSD": "塞爾維亞第納爾",
			"RUB": "俄羅斯盧布",
			"RWF": "盧旺達法郎",

			"SAR": "沙特里亞爾",
			"SBD": "所羅門群島元",
			"SCR": "塞舌爾盧比",
			"SDG": "蘇丹鎊",
			"SEK": "瑞典克朗",
			"SGD": "新加坡元",
			"SHP": "聖赫勒拿群島磅",
			"SLL": "塞拉利昂利昂",
			"SOS": "索馬里先令",
			"SPL": "塞波加大公國幣", // Remark
			"SRD": "蘇里南元",
			"STD": "聖多美多布拉",
			"SVC": "薩爾瓦多科朗",
			"SYP": "敘利亞鎊",
			"SZL": "斯威士蘭里蘭吉尼",

			"THB": "泰銖",
			"TJS": "塔吉克斯坦索莫尼",
			"TMT": "土庫曼斯坦馬納特",
			"TND": "突尼斯第納爾",
			"TOP": "湯加潘加",
			"TRY": "土耳其里拉",
			"TTD": "特立尼達元",
			"TVD": "圖瓦盧元",
			"TWD": "新臺幣",
			"TZS": "坦桑尼亞先令",

			"UAH": "烏克蘭格里夫納",
			"UGX": "烏干達先令",
			"USD": "美元",
			"UYU": "烏拉圭比索",
			"UZS": "烏茲別克斯坦索姆",

			"VEF": "委內瑞拉玻利瓦爾",
			"VND": "越南盾",
			"VUV": "瓦努阿圖瓦圖",

			"WST": "薩摩亞塔拉",

			"XAF": "剛果中非共同體法郎",
			"XAG": "銀價盎司",
			"XAU": "金價盎司",
			"XCD": "格林納達東加勒比元",
			"XDR": "特別提款權(紙黃金)",
			"XOF": "多哥非洲共同體法郎",
			"XPD": "鈀價盎司",
			"XPF": "太平洋法郎",
			"XPT": "鉑價盎司",

			"YER": "也門里亞爾",

			"ZAR": "南非蘭特",
			"ZMW": "贊比亞克瓦查",
			"ZWD": "津巴布韋元"
		}

	});

}(DAILYCOST || {}));
