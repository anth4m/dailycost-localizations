/*
 * DailyCost Localization
 *
 */

(function(app, undefined) {
	"use strict";

	app.addLanguage("de", {

		preference: {
			"currency": "EUR".split("_")
		},

		string: {
			"weekdays": "Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag_Sonntag".split("_"),
			"weekdaysShort": "Mo_Di_Mi_Do_Fr_Sa_So".split("_"),
			"pullText": "Neue ..._Neue k..._Neue ko..._Neue kos..._Neue kost..._Neue koste..._Neue kosten..._Neue kosten!".split("_"),
			"formatMetaDate": 'MM[<span>]DD[</span>] [<span class="day">]ddd[</span>]',

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
			"weekStart": "Wochenanfang",

			"data": "Daten",
			"dataExportCSV": "Export CSV per Email",
			"dataExportEmailSubject": "DailyCost Datensicherung",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "Datum",
			"sum": "Summe",
			"category": "Kategorie",

			"favoriteCurrencies": "Meiner Währungen",
			"allCurrencies": "Alle Währungen",

			"emptyCatlist": "Hier sind noch keine kosten eingetragen",

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
		}

	});

}(DAILYCOST || {}));
