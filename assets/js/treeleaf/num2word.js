function getBelowHundred(e) {
    return teens[e]
}

function translate_nepali_num_into_words(e) {
    if (isNaN(e) || "" == e) return "N/A"
    var t = "",
        r = 0
    if (-1 != e.indexOf(".") && (number_parts = e.split("."), e = number_parts[0], r = number_parts[1], decimal_tens = "" + r.substring(0, 2), 1 == decimal_tens.length && (decimal_tens = "" + decimal_tens + "0"), decimal_words = "" + teens[parseInt(decimal_tens)] + " पैसा"), e.length > 13) return void alert("Number greater than kharab not supported")
    var n = Math.floor(e % 100)
    if (("" + e).length > 2) var a = ("" + e).substring(("" + e).length - 3, ("" + e).length - 2)
    var i = Math.floor(e % 1e5)
    i = "" + i, i = i.substring(0, i.length - 3)
    var o = Math.floor(e % 1e7)
    o = "" + o, o = o.substring(0, o.length - 5)
    var s = Math.floor(e % 1e9)
    s = "" + s, s = s.substring(0, s.length - 7)
    var l = Math.floor(e % 1e11)
    l = "" + l, l = l.substring(0, l.length - 9)
    var u = Math.floor(e % 1e13)
    return u = "" + u, u = u.substring(0, u.length - 11), u > 0 && (t += teens[u] + " खरब"), l > 0 && (t += " " + teens[l] + " अरब"), s > 0 && (t += " " + teens[s] + " करोड"), o > 0 && (t += " " + teens[o] + " लाख"), i > 0 && (t += " " + teens[i] + " हजार"), a > 0 && (t += " " + units[a] + " सय"), n > 0 && (t += " " + teens[n]), "" != t.trim() && (t += " रुपैंया"), r > 0 && (t += ("" != t.trim() ? ", " : "") + decimal_words), t
}

function get_nepali_currency(e) {
    if (isNaN(e) || "" == e) return "N/A"
    if (("" + Math.floor(e)).length > 13) return "Too Long"
    for (var t = Math.round(100 * (e - Math.floor(e))), r = null, n = ("" + e).length, a = ["", "Hundred", "Thousand", "Lakh", "Crore", "Arab", "Kharab"], i = {
            0: "",
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine",
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen",
            20: "Twenty",
            30: "Thirty",
            40: "Forty",
            50: "Fifty",
            60: "Sixty",
            70: "Seventy",
            80: "Eighty",
            90: "Ninety"
        }, o = 0, s = [], l = Math.floor(e); n > o;) divider = 2 == o ? 10 : 100, e = Math.floor(l % divider), l = Math.floor(l / divider), o += 10 == divider ? 1 : 2, e ? (plural = (counter = s.length) && e > 9 ? "s" : "", r = 1 == counter && s[0] ? "and " : "", s.push(21 > e ? i[e] + " " + a[counter] + (2 != counter ? plural : "") + " " + r : i[10 * Math.floor(e / 10)] + " " + i[e % 10] + " " + a[counter] + (2 != counter ? plural : "") + " " + r)) : s.push("")
    var u = s.reverse().join("").trim(),
        h = t ? (u ? "and " : "") + (21 > t ? i[t] : i[10 * Math.floor(t / 10)] + (t % 10 ? " " : "") + i[t % 10]) + " Paisa" : ""
    return (u ? u + " Rupees " : "") + h
}

var units = ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस"],
    teens = ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस", "एघार", "बाह्र", "तेह्र", "चौध", "पन्ध्र", "सोह्र", "सत्र", "अठाह्र", "उन्नाइस", "बीस", "एकाइस", "बाइस", "तेइस", "चौबीस", "पचीस", "छब्बीस", "सत्ताइस", "अठ्ठाइस", "उनन्तीस", "तीस", "एकतीस", "बतीस", "तेतीस", "चौतीस", "पैतीस", "छतीस", "सरतीस", "अरतीस", "उननचालीस", "चालीस", "एकचालीस", "बयालिस", "तीरचालीस", "चौवालिस", "पैंतालिस", "छयालिस", "सरचालीस", "अरचालीस", "उननचास", "पचास", "एकाउन्न", "बाउन्न", "त्रिपन्न", "चौवन्न", "पच्पन्न", "छपन्न", "सन्ताउन्न", "अन्ठाउँन्न", "उनान्न्साठी ", "साठी", "एकसाठी", "बासाठी", "तीरसाठी", "चौंसाठी", "पैसाठी", "छैसठी", "सत्सठ्ठी", "अर्सठ्ठी", "उनन्सत्तरी", "सतरी", "एकहत्तर", "बहत्तर", "त्रिहत्तर", "चौहत्तर", "पचहत्तर", "छहत्तर", "सत्हत्तर", "अठ्हत्तर", "उनास्सी", "अस्सी", "एकासी", "बयासी", "त्रीयासी", "चौरासी", "पचासी", "छयासी", "सतासी", "अठासी", "उनान्नब्बे", "नब्बे", "एकान्नब्बे", "बयान्नब्बे", "त्रियान्नब्बे", "चौरान्नब्बे", "पंचान्नब्बे", "छयान्नब्बे", "सन्तान्‍नब्बे", "अन्ठान्नब्बे", "उनान्सय"],
    tens = ["", "दस", "बीस", "तीस", "चालीस", "पचास", "साठी", "सतरी", "अस्सी", "नब्बे"]