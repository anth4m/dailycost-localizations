/*
 * DailyCost Localization
 * ----------------------
 * Chinese Simplified (PRC)
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("zh-cn", {

		preference: {
			"currency": "CNY".split("_"),
			"weekstart": 0
		},

		string: {
			"weekdays": "周日_周一_周二_周三_周四_周五_周六".split("_"),
			"weekdaysShort": "周日_周一_周二_周三_周四_周五_周六".split("_"),

			"pullText": "新增...|新增一...|新增一条...|新增一条开...|新增一条开销...|新增一条开销!".split("|"),

			"formatMetaDate": '[<strong>]MM.DD[</strong>]',
			"formatWeekScope1": '[<strong>]MM.DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]',
			"formatMonthScope": '[<strong>]YYYY.MM[</strong>]',
			"formatYearScope": '[<strong>]YYYY[</strong>]',
/*
			"formatMetaDate": '[<strong>]M[</strong>月][<strong>]DD[</strong>日]',
			"formatWeekScope1": '[<strong>]M[</strong>月][<strong>]DD[</strong>日]',
			"formatWeekScope2": '[<strong>]DD[</strong>日]',
*/
/*
			"formatMetaDate": 'M[月]DD[日]',
			"formatWeekScope1": 'M[月]DD[日]',
			"formatWeekScope2": 'DD[日]',
*/
/*
			"formatMetaDate": '[<strong>]M[月]DD[日</strong>]',
			"formatWeekScope1": '[<strong>]M[月]DD[日</strong>]',
			"formatWeekScope2": '[<strong>]DD[日</strong>]',
*/

			"settings": "设置",
			"preferences": "使用偏好",
			"categories": "开销类别",
			"wallpaper": "壁纸",
			"general": "通用",
			"accountSettings": "帐号",
			"account": "我的 DailyCost 帐号",
			"sharing": "分享",
			"currency": "货币",
			"security": "安全",
			"feedback": "建议与反馈",
			"about": "关于",
			"tipsAndTricks": "使用秘籍",
			"preview": "预览",
			"done": "完成",
			"submit": "提交",
			"restore": "还原",
			"default": "默认",
			"weekstart": "每周开始于",

			"data": "数据",
			"dataExportCSV": "邮件导出Excel文件(CSV)", // "通过Email导出CSV"
			"dataExportEmailSubject": "DailyCost数据备份",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "日期",
			"sum": "金额",
			"category": "类别",

			"entry": "记录",
			"cost": "开销",
			"earn": "收入",
			"balance": "总额",

			"favoriteCurrencies": "常用货币",
			"allCurrencies": "全部货币",

			"emptyCatlist": "亲，这儿还没有任何记录哦",

			"feedbackEmailSubject": "DailyCost反馈",

			"rollDays": "天数",
			"rollTotal": "开销",
			"rollTotalSum": "总金额",

			"note": "备注",
			"createdOn": "记录于",

			"ratingsTitle": "给DailyCost评分",
			"ratingsDescriptions": "如果您喜欢DailyCost，现在就花点时间写个评论吧！您的意见和建议会让它变得更出色。",
			"ratingsButtons": "去评分,下次吧"
		},

		category: {
			"default":        "一般",
			"food":           "餐饮",
			"food-breakfast": "早餐",
			"food-lunch":     "午餐",
			"food-dinner":    "晚餐",
			"drinks":         "饮料",
			"groceries":      "水果零食",
			"shopping":       "购物",

			"personal":       "个人",
			"entertain":      "娱乐",
			"movies":         "电影",
			"social":         "社交",
			"transport":      "交通",

			"appstore":       "App Store",
			"mobile":         "手机通讯",
			"computer":       "电脑",
			"gifts":          "礼品",
			"housing":        "居家",

			"travel":         "旅行",
			"tickets":        "门票",
			"books":          "书籍",
			"medical":        "医疗",
			"transfer":       "转帐"
		},

		currency: {
			"AED": "阿联酋迪拉姆",
			"AFN": "阿富汗阿富汗尼",
			"ALL": "阿尔巴尼亚列克",
			"AMD": "亚美尼亚德拉姆",
			"ANG": "荷兰盾",
			"AOA": "安哥拉宽扎",
			"ARS": "阿根廷比索",
			"AUD": "澳元",
			"AWG": "阿鲁巴盾",
			"AZN": "阿塞拜疆新马纳特",

			"BAM": "波斯尼亚可兑换马尔卡",
			"BBD": "巴巴多斯元",
			"BDT": "孟加拉塔卡",
			"BGN": "保加利亚列弗",
			"BHD": "巴林第纳尔",
			"BIF": "布隆迪法郎",
			"BMD": "百慕大元",
			"BND": "文莱元",
			"BOB": "玻利维亚币",
			"BRL": "巴西雷亚尔",
			"BSD": "巴哈马元",
			"BTN": "不丹鲁姆",
			"BWP": "博茨瓦纳普拉",
			"BYR": "白俄罗斯卢布",
			"BZD": "伯利兹元",

			"CAD": "加拿大元",
			"CDF": "刚果法郎",
			"CHF": "瑞士法郎",
			"CLP": "智利比索",
			"CNY": "人民币",
			"COP": "哥伦比亚比索",
			"CRC": "哥斯达黎加科隆",
			"CUC": "古巴可兑换比索",
			"CUP": "古巴比索",
			"CVE": "佛得角埃斯库多",
			"CZK": "捷克克郎",

			"DJF": "吉布提法郎",
			"DKK": "丹麦克朗",
			"DOP": "多米尼加比索",
			"DZD": "阿尔及利亚第纳尔",

			"EGP": "埃及镑",
			"ERN": "厄立特里亚纳克法",
			"ETB": "埃塞俄比亚比尔",
			"EUR": "欧元",

			"FJD": "斐济元",
			"FKP": "福克兰群岛镑",

			"GBP": "英镑",
			"GEL": "格鲁吉亚拉里",
			"GGP": "根西岛镑",
			"GHS": "加纳塞地",
			"GIP": "直布罗陀镑",
			"GMD": "冈比亚达拉西",
			"GNF": "几内亚法郎",
			"GTQ": "危地马拉格查尔",
			"GYD": "圭亚那元",

			"HKD": "港元",
			"HNL": "洪都拉斯伦皮拉",
			"HRK": "克罗地亚库纳",
			"HTG": "海地古德",
			"HUF": "匈牙利福林",

			"IDR": "印尼盾",
			"ILS": "以色列新谢克尔",
			"IMP": "马恩岛镑",
			"INR": "印度卢比",
			"IQD": "伊拉克第纳尔",
			"IRR": "伊朗里亚尔",
			"ISK": "冰岛克朗",

			"JEP": "泽西镑",
			"JMD": "牙买加元",
			"JOD": "约旦第纳尔",
			"JPY": "日元",

			"KES": "肯尼亚先令",
			"KGS": "吉尔吉斯斯坦索姆",
			"KHR": "柬埔寨瑞尔",
			"KMF": "科摩罗法郎",
			"KPW": "朝鲜元",
			"KRW": "韩元",
			"KWD": "科威特第纳尔",
			"KYD": "开曼群岛元",
			"KZT": "哈萨克斯坦坚戈",

			"LAK": "老挝基普",
			"LBP": "黎巴嫩镑",
			"LKR": "斯里兰卡卢比",
			"LRD": "利比里亚元",
			"LSL": "巴索托洛蒂",
			"LTL": "立陶宛立特",
			"LVL": "拉脱维亚拉特",
			"LYD": "利比亚第纳尔",

			"MAD": "摩洛哥迪拉姆",
			"MDL": "摩尔多瓦列伊",
			"MGA": "马达加斯加阿里亚里",
			"MKD": "马其顿代纳尔",
			"MMK": "缅甸缅元",
			"MNT": "蒙古图格里克",
			"MOP": "澳门币",
			"MRO": "毛里塔尼亚乌吉亚",
			"MUR": "毛里求斯卢比",
			"MVR": "马尔代夫拉菲亚",
			"MWK": "马拉维克瓦查",
			"MXN": "墨西哥比索",
			"MYR": "马来西亚林吉特",
			"MZN": "莫桑比克美提卡",

			"NAD": "纳米比亚元",
			"NGN": "尼日利亚奈拉",
			"NIO": "尼加拉瓜科多巴",
			"NOK": "挪威克朗",
			"NPR": "尼泊尔卢比",
			"NZD": "新西兰元",

			"OMR": "阿曼里亚尔",

			"PAB": "巴拿马巴波亚",
			"PEN": "秘鲁新索尔",
			"PGK": "巴布亚新几内亚基那",
			"PHP": "菲律宾比索",
			"PKR": "巴基斯坦卢比",
			"PLN": "波兰兹罗提",
			"PYG": "巴拉圭瓜拉尼",

			"QAR": "卡塔尔里亚尔",

			"RON": "罗马尼亚新列伊",
			"RSD": "塞尔维亚第纳尔",
			"RUB": "俄罗斯卢布",
			"RWF": "卢旺达法郎",

			"SAR": "沙特里亚尔",
			"SBD": "所罗门群岛元",
			"SCR": "塞舌尔卢比",
			"SDG": "苏丹镑",
			"SEK": "瑞典克朗",
			"SGD": "新加坡元",
			"SHP": "圣赫勒拿群岛磅",
			"SLL": "塞拉利昂利昂",
			"SOS": "索马里先令",
			"SPL": "塞波加大公国币", // Remark
			"SRD": "苏里南元",
			"STD": "圣多美多布拉",
			"SVC": "萨尔瓦多科朗",
			"SYP": "叙利亚镑",
			"SZL": "斯威士兰里兰吉尼",

			"THB": "泰铢",
			"TJS": "塔吉克斯坦索莫尼",
			"TMT": "土库曼斯坦马纳特",
			"TND": "突尼斯第纳尔",
			"TOP": "汤加潘加",
			"TRY": "土耳其里拉",
			"TTD": "特立尼达元",
			"TVD": "图瓦卢元",
			"TWD": "新台币",
			"TZS": "坦桑尼亚先令",

			"UAH": "乌克兰格里夫纳",
			"UGX": "乌干达先令",
			"USD": "美元",
			"UYU": "乌拉圭比索",
			"UZS": "乌兹别克斯坦索姆",

			"VEF": "委内瑞拉玻利瓦尔",
			"VND": "越南盾",
			"VUV": "瓦努阿图瓦图",

			"WST": "萨摩亚塔拉",

			"XAF": "刚果中非共同体法郎",
			"XAG": "银价盎司",
			"XAU": "金价盎司",
			"XCD": "格林纳达东加勒比元",
			"XDR": "特别提款权(纸黄金)",
			"XOF": "多哥非洲共同体法郎",
			"XPD": "钯价盎司",
			"XPF": "太平洋法郎",
			"XPT": "铂价盎司",

			"YER": "也门里亚尔",

			"ZAR": "南非兰特",
			"ZMW": "赞比亚克瓦查",
			"ZWD": "津巴布韦元"
		}

	});

}(DAILYCOST || {}));
