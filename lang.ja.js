/*
 * DailyCost Localization
 * ----------------------
 * Japanese
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("ja", {

		preference: {
			"currency": "JPY".split("_"),
			"weekstart": 0
		},

		string: {
			"weekdays": "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			"weekdaysShort": "日曜_月曜_火曜_水曜_木曜_金曜_土曜".split("_"),

			"pullText": "新た...|新たな...|新たな支...|新たな支出...|新たな支出を...|新たな支出を追...|新たな支出を追加...|新たな支出を追加！".split("|"),

			"formatMetaDate": '[<strong>]MM/DD[</strong>]',
			"formatWeekScope1": '[<strong>]MM/DD[</strong>]',
			"formatWeekScope2": '[<strong>]DD[</strong>]',
			"formatMonthScope": '[<strong>]YYYY/MM[</strong>]',
			"formatYearScope": '[<strong>]YYYY[</strong>]',

			"settings": "設定",
			"preferences": "お好み",
			"categories": "支出種類",
			"wallpaper": "壁紙",
			"general": "一般",
			"accountSettings": "アカウント",
			"account": "マイアカウント",
			"sharing": "シェアリング",
			"currency": "通貨",
			"security": "セキュリティ",
			"feedback": "フィードバック",
			"about": "情報",
			"tipsAndTricks": "ヒント",
			"preview": "プレビュー",
			"done": "完成",
			"submit": "提出",
			"restore": "戻す",
			"default": "既定",
			"weekstart": "一週始まり",

			"data": "データ",
			"dataExportCSV": "メールでエクスポート(Excel CSV)", // "エクスポートCSV"
			"dataExportEmailSubject": "DailyCostデータのバックアップ",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "日付",
			"sum": "総計",
			"category": "種類",

			"entry": "記録",
			"cost": "支出",
			"earn": "収入",
			"balance": "総計",

			"favoriteCurrencies": "常用の通貨",
			"allCurrencies": "すべての通貨",

			"emptyCatlist": "ウープス ここには記録はありません",

			"feedbackEmailSubject": "DailyCostフィードバック",

			"rollDays": "日数",
			"rollTotal": "支出",
			"rollTotalSum": "総計",

			"note": "注釈",
			"createdOn": "記録時間",

			"ratingsTitle": "DailyCostの評価",
			"ratingsDescriptions": "もしDailyCostが好きなら、今すぐ評価してください！貴方の意見と提案があれば、このソフトはもっと素敵になります。",
			"ratingsButtons": "今すぐ評価,後で"
		},

		category: {
			"default":        "一般",
			"food":           "食物",
			"food-breakfast": "朝食",
			"food-lunch":     "昼食",
			"food-dinner":    "夕食",
			"drinks":         "飲物",
			"groceries":      "おやつ",
			"shopping":       "買物",

			"personal":       "個人",
			"entertain":      "娯楽",
			"movies":         "映画",
			"social":         "社交",
			"transport":      "交通",

			"appstore":       "App Store",
			"mobile":         "電話",
			"computer":       "パソコン",
			"gifts":          "プレゼント",
			"housing":        "住宅",

			"travel":         "旅行",
			"tickets":        "チケット",
			"books":          "本",
			"medical":        "医療",
			"transfer":       '振込'
		},

		currency: {
			"AED": "UAEディルハム",
				"AFN": "アフガニスタン・アフガニ",
				"ALL": "アルバニア・レク",
				"AMD": "アルメニア ドラム",
				"ANG": "アンティル ギルダー",
				"AOA": "アンゴラ クワンザ",
			"ARS": "アルゼンチン・ペソ",
			"AUD": "オーストラリア・ドル",
				"AWG": "アルバ フローリン",
				"AZN": "Azerbaijani New Manat",
				"BAM": "Bosnian Convertible Marka",
				"BBD": "バルバドス ドル",
				"BDT": "バングラデシュ タカ",
				"BGN": "ブルガリア レフ",
				"BHD": "バーレーン ディナール",
				"BIF": "ブルンジ フラン",
				"BMD": "バミューダ ドル",
				"BND": "ブルネイ ドル",
				"BOB": "ボリビア ボリビアーノ",
			"BRL": "ブラジル・レアル",
				"BSD": "バハマ ドル",
				"BTN": "ブータン ニュルタム",
				"BWP": "ボツワナ プラ",
				"BYR": "ベラルーシ ルーブル",
				"BZD": "ベリーズ ドル",
			"CAD": "カナダ・ドル",
				"CDF": "コンゴ フラン",
			"CHF": "スイス・フラン",
			"CLP": "チリ・ペソ",
			"CNY": "中国元",
			"COP": "コロンビア·ペソ",
			"CRC": "コスタリカ·コロン",
				"CUC": "キューバ ペソ",
				"CUP": "キューバ ペソ",
				"CVE": "カーボベルデ エスクード",
			"CZK": "チェコ・コルナ",
				"DJF": "ジブチ フラン",
			"DKK": "デンマーク・クローネ",
				"DOP": "ドミニカ ペソ",
				"DZD": "アルジェリア ディナール",
			"EGP": "エジプト・ポンド",
				"ERN": "エリトリア ナクファ",
				"ETB": "エチオピア ブル",
			"EUR": "欧州ユーロ",
				"FJD": "フィジー ドル",
				"FKP": "フォークランド諸島 ポンド",
			"GBP": "イギリス・ポンド",
				"GEL": "グルジア ラリ",
				"GGP": "ガーンジー ポンド",
				"GHS": "Ghanaian Cedi",
				"GIP": "ジブラルタル ポンド",
				"GMD": "ガンビア ダラシ",
				"GNF": "ギニア フラン",
				"GTQ": "グアテマラ ケツァル",
				"GYD": "ガイアナ ドル",
			"HKD": "香港ドル",
				"HNL": "ホンジュラス レンピラ",
				"HRK": "クロアチア クーナ",
				"HTG": "ハイチ グールド",
			"HUF": "ハンガリー・フォリント",
			"IDR": "インドネシア・ルピア",
			"ILS": "イスラエル・新シェケル",
				"IMP": "Isle of Man Pound",
			"INR": "インド・ルピー",
				"IQD": "イラク ディナール",
				"IRR": "イラン リアル",
				"ISK": "アイスランド クローナ",
				"JEP": "Jersey Pound",
				"JMD": "ジャマイカ ドル",
				"JOD": "ヨルダン ディナール",
			"JPY": "日本円",
				"KES": "ケニア シリング",
				"KGS": "キルギス ソム",
				"KHR": "カンボジア リエル",
				"KMF": "コモロ フラン",
				"KPW": "朝鮮ウォン",
			"KRW": "韓国ウォン",
				"KWD": "クウェート ディナール",
				"KYD": "ケイマン諸島 ドル",
				"KZT": "カザフスタン テンゲ",
			"LAK": "ラオス・キープ",
				"LBP": "レバノン ポンド",
				"LKR": "スリランカ ルピー",
				"LRD": "リベリア ドル",
				"LSL": "レソト ロチ",
				"LTL": "リトアニア リタス",
				"LVL": "ラトビア ラッツ",
				"LYD": "リビア ディナール",
				"MAD": "モロッコ ディルハム",
				"MDL": "モルドバ レウ",
				"MGA": "マダガスカル アリアリ",
				"MKD": "マケドニア ディナール",
				"MMK": "Burmese Kyat",
			"MNT": "モンゴル国・トゥグルグ",
				"MOP": "マカオ パタカ",
				"MRO": "モーリタニア ウギア",
				"MUR": "モーリシャス ルピー",
				"MVR": "モルディブ ルフィヤ",
				"MWK": "マラウイ クワチャ",
			"MXN": "メキシコ・ペソ",
			"MYR": "マレーシア・リンギット",
				"MZN": "Mozambican Metical",
				"NAD": "ナミビア ドル",
			"NGN": "ナイジェリア・ナイラ",
				"NIO": "コルドバ オロ",
			"NOK": "ノルウェー・クローネ",
				"NPR": "ネパール ルピー",
			"NZD": "ニュージーランド・ドル",
				"OMR": "オマーン リヤル",
				"PAB": "パナマ バルボア",
				"PEN": "ペルー ソル",
				"PGK": "パプアニューギニア キナ",
			"PHP": "フィリピン・ペソ",
				"PKR": "パキスタン ルピー",
			"PLN": "ポーランド・ズウォティ",
				"PYG": "パラグアイ グァラニ",
				"QAR": "カタール リヤル",
			"RON": "ルーマニア・レウ",
				"RSD": "セルビア ディナール",
			"RUB": "ロシア・ルーブル",
				"RWF": "ルワンダ フラン",
			"SAR": "サウジアラビア・リヤル",
				"SBD": "ソロモン諸島 ドル",
				"SCR": "セーシェル ルピー",
				"SDG": "スーダン ポンド",
			"SEK": "スウェーデン・クローナ",
			"SGD": "シンガポール・ドル",
				"SHP": "セントヘレナ ポンド",
				"SLL": "シエラレオネ レオン",
				"SOS": "ソマリア シリング",
				"SPL": "Seborgan Luigino",
				"SRD": "スリナム ドル",
				"STD": "Sao Tomean Dobra",
				"SVC": "Salvadoran Colon",
				"SYP": "シリア ポンド",
				"SZL": "スワジランド リランゲニ",
			"THB": "タイ・バーツ",
				"TJS": "タジキスタン ソモニ",
				"TMT": "Turkmenistani Manat",
				"TND": "チュニジア ディナール",
				"TOP": "Tongan Pa'anga",
			"TRY": "トルコ・リラ",
				"TTD": "トリニダード・トバゴ ドル",
				"TVD": "Tuvaluan Dollar",
			"TWD": "新台湾ドル",
				"TZS": "タンザニア シリング",
			"UAH": "ウクライナ フリヴニャ",
				"UGX": "ウガンダ シリング",
			"USD": "アメリカ・ドル",
			"UYU": "ウルグアイ・ペソ",
				"UZS": "ウズベキスタン・スム",
				"VEF": "ベネズエラ ボリバル・フエルテ",
			"VND": "ベトナム・ドン",
				"VUV": "バヌアツ バツ",
				"WST": "サモア タラ",
				"XAF": "CFA フラン",
				"XAG": "Silver Ounce",
				"XAU": "Gold Ounce",
				"XCD": "東カリブ ドル",
				"XDR": "IMF Special Drawing Rights",
				"XOF": "CFA フラン",
				"XPD": "Palladium Ounce",
				"XPF": "CFP フラン",
				"XPT": "Platinum Ounce",
				"YER": "Yemeni Rial",
			"ZAR": "南アフリカ・ランド",
				"ZMW": "Zambian Kwacha",
				"ZWD": "Zimbabwean Dollar"
		}

	});

}(DAILYCOST || {}));
