/* jshint esversion: 11 */

const countries = [
    {
        "name": "Afghanistan",
        "iso": "af",
        "region": "Asia",
        "options": [
            {"name": "Afghanistan", "iso": "af"},
            {"name": "Malawi", "iso": "mw"},
            {"name": "United Arab Emirates", "iso": "ae"},
            {"name": "Libya", "iso": "ly"},
        ]
    },
    {
        "name": "Åland Islands",
        "iso": "ax",
        "region": "Europe",
        "options": [
            {"name": "Åland Islands", "iso": "ax"},
            {"name": "Sweden", "iso": "se"},
            {"name": "Iceland", "iso": "is"},
            {"name": "Faroe Islands", "iso": "fo"},
        ]
    },
    {
        "name": "Albania",
        "iso": "al",
        "region": "Europe",
        "options": [
            {"name": "Albania", "iso": "al"},
            {"name": "Montenegro", "iso": "me"},
            {"name": "Isle of Man", "iso": "im"},
            {"name": "Hong Kong", "iso": "hk"},
        ]
    },
    {
        "name": "Algeria",
        "iso": "dz",
        "region": "Africa",
        "options": [
            {"name": "Algeria", "iso": "dz"},
            {"name": "Nigeria", "iso": "ng"},
            {"name": "Norfolk Island", "iso": "nf"},
            {"name": "Pakistan", "iso": "pk"},
        ]
    },
    {
        "name": "American Samoa",
        "iso": "as",
        "region": "Oceania",
        "options": [
            {"name": "American Samoa", "iso": "as"},
            {"name": "Samoa", "iso": "ws"},
            {"name": "Liberia", "iso": "lr"},
            {"name": "Antigua and Barbuda", "iso": "ag"},
        ]
    },
    {
        "name": "Andorra",
        "iso": "ad",
        "region": "Europe",
        "options": [
            {"name": "Andorra", "iso": "ad"},
            {"name": "Romania", "iso": "ro"},
            {"name": "Chad", "iso": "td"},
            {"name": "Moldova", "iso": "md"},
        ]
    },
    {
        "name": "Angola",
        "iso": "ao",
        "region": "Africa",
        "options": [
            {"name": "Angola", "iso": "ao"},
            {"name": "Germany", "iso": "de"},
            {"name": "Belgium", "iso": "be"},
            {"name": "Uganda", "iso": "ug"},
        ]
    },
    {
        "name": "Anguilla",
        "iso": "ai",
        "region": "Americas",
        "options": [
            {"name": "Anguilla", "iso": "ai"},
            {"name": "Montserrat", "iso": "ms"},
            {"name": "Turks and Caicos", "iso": "tc"},
            {"name": "Cayman Islands", "iso": "ky"},
        ]
    },
    {
        "name": "Antarctica",
        "iso": "aq",
        "region": "Oceania",
        "options": [
            {"name": "Antarctica", "iso": "aq"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Somalia", "iso": "so"},
            {"name": "Saint Lucia", "iso": "lc"},
        ]
    },
    {
        "name": "Antigua and Barbuda",
        "iso": "ag",
        "region": "Americas",
        "options": [
            {"name": "Antigua and Barbuda", "iso": "ag"},
            {"name": "Timor-Leste", "iso": "tl"},
            {"name": "Trinidad and Tobago", "iso": "tt"},
            {"name": "Bermuda", "iso": "bm"},
        ]
    },
    {
        "name": "Argentina",
        "iso": "ar",
        "region": "Americas",
        "options": [
            {"name": "Argentina", "iso": "ar"},
            {"name": "Uruguay", "iso": "uy"},
            {"name": "Nicaragua", "iso": "ni"},
            {"name": "El Salvador", "iso": "sv"},
        ]
    },
    {
        "name": "Armenia",
        "iso": "am",
        "region": "Asia",
        "options": [
            {"name": "Armenia", "iso": "am"},
            {"name": "Colombia", "iso": "co"},
            {"name": "Venezuela", "iso": "ve"},
            {"name": "Ecuador", "iso": "ec"},
        ]
    },
    {
        "name": "Aruba",
        "iso": "aw",
        "region": "Americas",
        "options": [
            {"name": "Aruba", "iso": "aw"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Cabo Verde", "iso": "cv"},
            {"name": "Somalia", "iso": "so"},
        ]
    },
    {
        "name": "Australia",
        "iso": "au",
        "region": "Oceania",
        "options": [
            {"name": "Australia", "iso": "au"},
            {"name": "New Zealand", "iso": "nz"},
            {"name": "Cook Islands", "iso": "ck"},
            {"name": "Tuvalu", "iso": "tv"},
        ]
    },
    {
        "name": "Austria",
        "iso": "at",
        "region": "Europe",
        "options": [
            {"name": "Austria", "iso": "at"},
            {"name": "Latvia", "iso": "lv"},
            {"name": "French Polynesia", "iso": "pf"},
            {"name": "Lebanon", "iso": "lb"},
        ]
    },
    {
        "name": "Azerbaijan",
        "iso": "az",
        "region": "Asia",
        "options": [
            {"name": "Azerbaijan", "iso": "az"},
            {"name": "Libya", "iso": "ly"},
            {"name": "Western Sahara", "iso": "eh"},
            {"name": "Comoros", "iso": "km"},
        ]
    },
    {
        "name": "Bahamas",
        "iso": "bs",
        "region": "Americas",
        "options": [
            {"name": "Bahamas", "iso": "bs"},
            {"name": "Barbados", "iso": "bb"},
            {"name": "Bosnia and Herzegovina", "iso": "ba"},
            {"name": "Tokelau", "iso": "tk"},
        ]
    },
    {
        "name": "Bahrain",
        "iso": "bh",
        "region": "Asia",
        "options": [
            {"name": "Bahrain", "iso": "bh"},
            {"name": "Qatar", "iso": "qa"},
            {"name": "Malta", "iso": "mt"},
            {"name": "Tonga", "iso": "to"},
        ]
    },
    {
        "name": "Bangladesh",
        "iso": "bd",
        "region": "Asia",
        "options": [
            {"name": "Bangladesh", "iso": "bd"},
            {"name": "Palau", "iso": "pw"},
            {"name": "Japan", "iso": "jp"},
            {"name": "Greenland", "iso": "gl"},
        ]
    },
    {
        "name": "Barbados",
        "iso": "bb",
        "region": "Americas",
        "options": [
            {"name": "Barbados", "iso": "bb"},
            {"name": "Bahamas", "iso": "bs"},
            {"name": "Bosnia and Herzegovina", "iso": "ba"},
            {"name": "Tokelau", "iso": "tk"},
        ]
    },
    {
        "name": "Belarus",
        "iso": "by",
        "region": "Europe",
        "options": [
            {"name": "Belarus", "iso": "by"},
            {"name": "Burkina Faso", "iso": "bf"},
            {"name": "Madagascar", "iso": "mg"},
            {"name": "Oman", "iso": "om"},
        ]
    },
    {
        "name": "Belgium",
        "iso": "be",
        "region": "Europe",
        "options": [
            {"name": "Belgium", "iso": "be"},
            {"name": "Germany", "iso": "de"},
            {"name": "Uganda", "iso": "ug"},
            {"name": "Angola", "iso": "ao"},
        ]
    },
    {
        "name": "Belize",
        "iso": "bz",
        "region": "Americas",
        "options": [
            {"name": "Belize", "iso": "bz"},
            {"name": "Guam", "iso": "gu"},
            {"name": "Laos", "iso": "la"},
            {"name": "Haiti", "iso": "ht"},
        ]
    },
    {
        "name": "Benin",
        "iso": "bj",
        "region": "Africa",
        "options": [
            {"name": "Benin", "iso": "bj"},
            {"name": "Guinea-Bissau", "iso": "gw"},
            {"name": "Ghana", "iso": "gh"},
            {"name": "Guinea", "iso": "gn"},
        ]
    },
    {
        "name": "Bermuda",
        "iso": "bm",
        "region": "Americas",
        "options": [
            {"name": "Bermuda", "iso": "bm"},
            {"name": "Niue", "iso": "nu"},
            {"name": "Anguilla", "iso": "ai"},
            {"name": "Montserrat", "iso": "ms"},
        ]
    },
    {
        "name": "Bhutan",
        "iso": "bt",
        "region": "Asia",
        "options": [
            {"name": "Bhutan", "iso": "bt"},
            {"name": "Sri Lanka", "iso": "lk"},
            {"name": "Seychelles", "iso": "sc"},
            {"name": "Marshall Islands", "iso": "mh"},
        ]
    },
    {
        "name": "Bolivia",
        "iso": "bo",
        "region": "Americas",
        "options": [
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Ghana", "iso": "gh"},
            {"name": "Lithuania", "iso": "lt"},
            {"name": "Myanmar", "iso": "mm"},
        ]
    },
    {
        "name": "Bonaire",
        "iso": "bq",
        "region": "Americas",
        "options": [
            {"name": "Bonaire", "iso": "bq"},
            {"name": "Bosnia and Herzegovina", "iso": "ba"},
            {"name": "Tokelau", "iso": "tk"},
            {"name": "Barbados", "iso": "bb"},
        ]
    },
    {
        "name": "Bosnia and Herzegovina",
        "iso": "ba",
        "region": "Europe",
        "options": [
            {"name": "Bosnia and Herzegovina", "iso": "ba"},
            {"name": "Tokelau", "iso": "tk"},
            {"name": "Barbados", "iso": "bb"},
            {"name": "Bahamas", "iso": "bs"},
        ]
    },
    {
        "name": "Botswana",
        "iso": "bw",
        "region": "Africa",
        "options": [
            {"name": "Botswana", "iso": "bw"},
            {"name": "Argentina", "iso": "ar"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "Aruba", "iso": "aw"},
        ]
    },
    {
        "name": "Bouvet Island",
        "iso": "bv",
        "region": "Europe",
        "options": [
            {"name": "Bouvet Island", "iso": "bv"},
            {"name": "Denmark", "iso": "dk"},
            {"name": "Åland Islands", "iso": "ax"},
            {"name": "Iceland", "iso": "is"},
        ]
    },
    {
        "name": "Brazil",
        "iso": "br",
        "region": "Americas",
        "options": [
            {"name": "Brazil", "iso": "br"},
            {"name": "Dominica", "iso": "dm"},
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Macau", "iso": "mo"},
        ]
    },
    {
        "name": "British Indian Ocean Territory",
        "iso": "io",
        "region": "Asia",
        "options": [
            {"name": "British Indian Ocean Territory", "iso": "io"},
            {"name": "Fiji", "iso": "fj"},
            {"name": "Tuvalu", "iso": "tv"},
            {"name": "Cook Islands", "iso": "ck"},
        ]
    },
    {
        "name": "British Virgin Islands",
        "iso": "vg",
        "region": "Americas",
        "options": [
            {"name": "British Virgin Islands", "iso": "vg"},
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Saint Helena, Ascension, and Tristan da Cunha", "iso": "sh"},
            {"name": "Montserrat", "iso": "ms"},
        ]
    },
    {
        "name": "Brunei",
        "iso": "bn",
        "region": "Asia",
        "options": [
            {"name": "Brunei", "iso": "bn"},
            {"name": "Trinidad and Tobago", "iso": "tt"},
            {"name": "Papua New Guinea", "iso": "pg"},
            {"name": "Christmas Island", "iso": "cx"},
        ]
    },
    {
        "name": "Bulgaria",
        "iso": "bg",
        "region": "Europe",
        "options": [
            {"name": "Bulgaria", "iso": "bg"},
            {"name": "Hungary", "iso": "hu"},
            {"name": "Iran", "iso": "ir"},
            {"name": "Tajikistan", "iso": "tj"},
        ]
    },
    {
        "name": "Burkina Faso",
        "iso": "bf",
        "region": "Africa",
        "options": [
            {"name": "Burkina Faso", "iso": "bf"},
            {"name": "Madagascar", "iso": "mg"},
            {"name": "Belarus", "iso": "by"},
            {"name": "Ghana", "iso": "gh"},
        ]
    },
    {
        "name": "Burundi",
        "iso": "bi",
        "region": "Africa",
        "options": [
            {"name": "Burundi", "iso": "bi"},
            {"name": "Jamaica", "iso": "jm"},
            {"name": "Grenada", "iso": "gd"},
            {"name": "French Guiana", "iso": "gf"},
        ]
    },
    {
        "name": "Cabo Verde",
        "iso": "cv",
        "region": "Africa",
        "options": [
            {"name": "Cabo Verde", "iso": "cv"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Aruba", "iso": "aw"},
            {"name": "Cook Islands", "iso": "ck"},
        ]
    },
    {
        "name": "Cambodia",
        "iso": "kh",
        "region": "Asia",
        "options": [
            {"name": "Cambodia", "iso": "kh"},
            {"name": "Belize", "iso": "bz"},
            {"name": "Haiti", "iso": "ht"},
            {"name": "Liechtenstein", "iso": "li"},
        ]
    },
    {
        "name": "Cameroon",
        "iso": "cm",
        "region": "Africa",
        "options": [
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Guinea", "iso": "gn"},
            {"name": "Mali", "iso": "ml"},
            {"name": "Senegal", "iso": "sn"},
        ]
    },
    {
        "name": "Canada",
        "iso": "ca",
        "region": "Americas",
        "options": [
            {"name": "Canada", "iso": "ca"},
            {"name": "Peru", "iso": "pe"},
            {"name": "Lebanon", "iso": "lb"},
            {"name": "French Polynesia", "iso": "pf"},
        ]
    },
    {
        "name": "Cayman Islands",
        "iso": "ky",
        "region": "Americas",
        "options": [
            {"name": "Cayman Islands", "iso": "ky"},
            {"name": "South Georgia and the South Sandwich Islands", "iso": "gs"},
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Saint Helena, Ascension, and Tristan da Cunha", "iso": "sh"},
        ]
    },
    {
        "name": "Central African Republic",
        "iso": "cf",
        "region": "Africa",
        "options": [
            {"name": "Central African Republic", "iso": "cf"},
            {"name": "Mauritius", "iso": "mu"},
            {"name": "Seychelles", "iso": "sc"},
            {"name": "Congo", "iso": "cg"},
        ]
    },
    {
        "name": "Chad",
        "iso": "td",
        "region": "Africa",
        "options": [
            {"name": "Chad", "iso": "td"},
            {"name": "Romania", "iso": "ro"},
            {"name": "Moldova", "iso": "md"},
            {"name": "Andorra", "iso": "ad"},
        ]
    },
    {
        "name": "Chile",
        "iso": "cl",
        "region": "Americas",
        "options": [
            {"name": "Chile", "iso": "cl"},
            {"name": "Dominican Republic", "iso": "do"},
            {"name": "Panama", "iso": "pa"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "China",
        "iso": "cn",
        "region": "Asia",
        "options": [
            {"name": "China", "iso": "cn"},
            {"name": "Vietnam", "iso": "vn"},
            {"name": "Morocco", "iso": "ma"},
            {"name": "Hong Kong", "iso": "hk"},
        ]
    },
    {
        "name": "Christmas Island",
        "iso": "cx",
        "region": "Asia",
        "options": [
            {"name": "Christmas Island", "iso": "cx"},
            {"name": "Papua New Guinea", "iso": "pg"},
            {"name": "Solomon Islands", "iso": "sb"},
            {"name": "Saint Vincent and the Grenadines", "iso": "vc"},
        ]
    },
    {
        "name": "Cocos (Keeling) Islands",
        "iso": "cc",
        "region": "Asia",
        "options": [
            {"name": "Cocos (Keeling) Islands", "iso": "cc"},
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Christmas Island", "iso": "cx"},
            {"name": "Turkmenistan", "iso": "tm"},
        ]
    },
    {
        "name": "Colombia",
        "iso": "co",
        "region": "Americas",
        "options": [
            {"name": "Colombia", "iso": "co"},
            {"name": "Ecuador", "iso": "ec"},
            {"name": "Venezuela", "iso": "ve"},
            {"name": "Armenia", "iso": "am"},
        ]
    },
    {
        "name": "Comoros",
        "iso": "km",
        "region": "Africa",
        "options": [
            {"name": "Comoros", "iso": "km"},
            {"name": "Equatorial Guinea", "iso": "gq"},
            {"name": "Eritrea", "iso": "er"},
            {"name": "Sao Tome and Principe", "iso": "st"},
        ]
    },
    {
        "name": "Congo",
        "iso": "cg",
        "region": "Africa",
        "options": [
            {"name": "Congo", "iso": "cg"},
            {"name": "Saint Kitts and Nevis", "iso": "kn"},
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Ghana", "iso": "gh"},
        ]
    },
    {
        "name": "Cook Islands",
        "iso": "ck",
        "region": "Oceania",
        "options": [
            {"name": "Cook Islands", "iso": "ck"},
            {"name": "Tuvalu", "iso": "tv"},
            {"name": "New Zealand", "iso": "nz"},
            {"name": "Australia", "iso": "au"},
        ]
    },
    {
        "name": "Costa Rica",
        "iso": "cr",
        "region": "Americas",
        "options": [
            {"name": "Costa Rica", "iso": "cr"},
            {"name": "Thailand", "iso": "th"},
            {"name": "North Korea", "iso": "kp"},
            {"name": "Laos", "iso": "la"},
        ]
    },
    {
        "name": "Côte d'Ivoire",
        "iso": "ci",
        "region": "Africa",
        "options": [
            {"name": "Côte d'Ivoire", "iso": "ci"},
            {"name": "Ireland", "iso": "ie"},
            {"name": "India", "iso": "in"},
            {"name": "Niger", "iso": "ne"},
        ]
    },
    {
        "name": "Croatia",
        "iso": "hr",
        "region": "Europe",
        "options": [
            {"name": "Croatia", "iso": "hr"},
            {"name": "Paraguay", "iso": "py"},
            {"name": "Netherlands", "iso": "nl"},
            {"name": "Luxembourg", "iso": "lu"},
        ]
    },
    {
        "name": "Cuba",
        "iso": "cu",
        "region": "Americas",
        "options": [
            {"name": "Cuba", "iso": "cu"},
            {"name": "Puerto Rico", "iso": "pr"},
            {"name": "Philippines", "iso": "ph"},
            {"name": "Czechia", "iso": "cz"},
        ]
    },
    {
        "name": "Curaçao",
        "iso": "cw",
        "region": "Americas",
        "options": [
            {"name": "Curaçao", "iso": "cw"},
            {"name": "Aruba", "iso": "aw"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Cabo Verde", "iso": "cv"},
        ]
    },
    {
        "name": "Cyprus",
        "iso": "cy",
        "region": "Europe",
        "options": [
            {"name": "Cyprus", "iso": "cy"},
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Gibraltar", "iso": "gi"},
            {"name": "Nepal", "iso": "np"},
        ]
    },
    {
        "name": "Czechia",
        "iso": "cz",
        "region": "Europe",
        "options": [
            {"name": "Czechia", "iso": "cz"},
            {"name": "Philippines", "iso": "ph"},
            {"name": "Cuba", "iso": "cu"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "Democratic Republic of the Congo",
        "iso": "cd",
        "region": "Africa",
        "options": [
            {"name": "Democratic Republic of the Congo", "iso": "cd"},
            {"name": "Namibia", "iso": "na"},
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Congo", "iso": "cg"},
        ]
    },
    {
        "name": "Denmark",
        "iso": "dk",
        "region": "Europe",
        "options": [
            {"name": "Denmark", "iso": "dk"},
            {"name": "Norway", "iso": "no"},
            {"name": "Faroe Islands", "iso": "fo"},
            {"name": "Iceland", "iso": "is"},
        ]
    },
    {
        "name": "Djibouti",
        "iso": "dj",
        "region": "Africa",
        "options": [
            {"name": "Djibouti", "iso": "dj"},
            {"name": "Eritrea", "iso": "er"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Guyana", "iso": "gy"},
        ]
    },
    {
        "name": "Dominica",
        "iso": "dm",
        "region": "Americas",
        "options": [
            {"name": "Dominica", "iso": "dm"},
            {"name": "Brazil", "iso": "br"},
            {"name": "Turkmenistan", "iso": "tm"},
            {"name": "Mauritania", "iso": "mr"},
        ]
    },
    {
        "name": "Dominican Republic",
        "iso": "do",
        "region": "Americas",
        "options": [
            {"name": "Dominican Republic", "iso": "do"},
            {"name": "Panama", "iso": "pa"},
            {"name": "Chile", "iso": "cl"},
            {"name": "Sint Maarten", "iso": "sx"},
        ]
    },
    {
        "name": "Ecuador",
        "iso": "ec",
        "region": "Americas",
        "options": [
            {"name": "Ecuador", "iso": "ec"},
            {"name": "Colombia", "iso": "co"},
            {"name": "Venezuela", "iso": "ve"},
            {"name": "Armenia", "iso": "am"},
        ]
    },
    {
        "name": "Egypt",
        "iso": "eg",
        "region": "Africa",
        "options": [
            {"name": "Egypt", "iso": "eg"},
            {"name": "Syria", "iso": "sy"},
            {"name": "Iraq", "iso": "iq"},
            {"name": "Yemen", "iso": "ye"},
        ]
    },
    {
        "name": "El Salvador",
        "iso": "sv",
        "region": "Americas",
        "options": [
            {"name": "El Salvador", "iso": "sv"},
            {"name": "Nicaragua", "iso": "ni"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "Argentina", "iso": "ar"},
        ]
    },
    {
        "name": "Equatorial Guinea",
        "iso": "gq",
        "region": "Africa",
        "options": [
            {"name": "Equatorial Guinea", "iso": "gq"},
            {"name": "Eritrea", "iso": "er"},
            {"name": "Djibouti", "iso": "dj"},
            {"name": "Comoros", "iso": "km"},
        ]
    },
    {
        "name": "Eritrea",
        "iso": "er",
        "region": "Africa",
        "options": [
            {"name": "Eritrea", "iso": "er"},
            {"name": "Equatorial Guinea", "iso": "gq"},
            {"name": "Djibouti", "iso": "dj"},
            {"name": "Comoros", "iso": "km"},
        ]
    },
    {
        "name": "Estonia",
        "iso": "ee",
        "region": "Europe",
        "options": [
            {"name": "Estonia", "iso": "ee"},
            {"name": "Latvia", "iso": "lv"},
            {"name": "Lithuania", "iso": "lt"},
            {"name": "Armenia", "iso": "am"},
        ]
    },
    {
        "name": "Eswatini",
        "iso": "sz",
        "region": "Africa",
        "options": [
            {"name": "Eswatini", "iso": "sz"},
            {"name": "Guam", "iso": "gu"},
            {"name": "Kenya", "iso": "ke"},
            {"name": "Mozambique", "iso": "mz"},
        ]
    },
    {
        "name": "Ethiopia",
        "iso": "et",
        "region": "Africa",
        "options": [
            {"name": "Ethiopia", "iso": "et"},
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Lithuania", "iso": "lt"},
            {"name": "Myanmar", "iso": "mm"},
        ]
    },
    {
        "name": "Falkland Islands",
        "iso": "fk",
        "region": "Americas",
        "options": [
            {"name": "Falkland Islands", "iso": "fk"},
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Anguilla", "iso": "ai"},
            {"name": "Cayman Islands", "iso": "ky"},
        ]
    },
    {
        "name": "Faroe Islands",
        "iso": "fo",
        "region": "Europe",
        "options": [
            {"name": "Faroe Islands", "iso": "fo"},
            {"name": "Finland", "iso": "fi"},
            {"name": "Åland Islands", "iso": "ax"},
            {"name": "Sweden", "iso": "se"},
        ]
    },
    {
        "name": "Fiji",
        "iso": "fj",
        "region": "Oceania",
        "options": [
            {"name": "Fiji", "iso": "fj"},
            {"name": "Tuvalu", "iso": "tv"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Honduras", "iso": "hn"},
        ]
    },
    {
        "name": "Finland",
        "iso": "fi",
        "region": "Europe",
        "options": [
            {"name": "Finland", "iso": "fi"},
            {"name": "Faroe Islands", "iso": "fo"},
            {"name": "Sweden", "iso": "se"},
            {"name": "Iceland", "iso": "is"},
        ]
    },
    {
        "name": "France",
        "iso": "fr",
        "region": "Europe",
        "options": [
            {"name": "France", "iso": "fr"},
            {"name": "Netherlands", "iso": "nl"},
            {"name": "Luxembourg", "iso": "lu"},
            {"name": "Romania", "iso": "ro"},
        ]
    },
    {
        "name": "French Guiana",
        "iso": "gf",
        "region": "Americas",
        "options": [
            {"name": "French Guiana", "iso": "gf"},
            {"name": "Grenada", "iso": "gr"},
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Togo", "iso": "tg"},
        ]
    },
    {
        "name": "French Polynesia",
        "iso": "pf",
        "region": "Oceania",
        "options": [
            {"name": "French Polynesia", "iso": "pf"},
            {"name": "Lebanon", "iso": "lb"},
            {"name": "Latvia", "iso": "lv"},
            {"name": "Austria", "iso": "at"},
        ]
    },
    {
        "name": "French Southern Territories",
        "iso": "tf",
        "region": "Europe",
        "options": [
            {"name": "French Southern Territories", "iso": "tf"},
            {"name": "France", "iso": "fr"},
            {"name": "Saint Pierre and Miquelon", "iso": "pm"},
            {"name": "Serbia", "iso": "rs"},
        ]
    },
    {
        "name": "Gabon",
        "iso": "ga",
        "region": "Africa",
        "options": [
            {"name": "Gabon", "iso": "ga"},
            {"name": "Rwanda", "iso": "rw"},
            {"name": "Saint Vincent and the Grenadines", "iso": "vc"},
            {"name": "Sierra Leone", "iso": "sl"},
        ]
    },
    {
        "name": "Gambia",
        "iso": "gm",
        "region": "Africa",
        "options": [
            {"name": "Gambia", "iso": "gm"},
            {"name": "Mauritius", "iso": "mu"},
            {"name": "Central African Republic", "iso": "cf"},
            {"name": "Comoros", "iso": "km"},
        ]
    },
    {
        "name": "Georgia",
        "iso": "ge",
        "region": "Asia",
        "options": [
            {"name": "Georgia", "iso": "ge"},
            {"name": "Faroe Islands", "iso": "fo"},
            {"name": "Tonga", "iso": "to"},
            {"name": "Malta", "iso": "mt"},
        ]
    },
    {
        "name": "Germany",
        "iso": "de",
        "region": "Europe",
        "options": [
            {"name": "Germany", "iso": "de"},
            {"name": "Belgium", "iso": "be"},
            {"name": "Guinea", "iso": "gn"},
            {"name": "Bolivia", "iso": "bo"},
        ]
    },
    {
        "name": "Ghana",
        "iso": "gh",
        "region": "Africa",
        "options": [
            {"name": "Ghana", "iso": "gh"},
            {"name": "Senegal", "iso": "sn"},
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Myanmar", "iso": "mm"},
        ]
    },
    {
        "name": "Gibraltar",
        "iso": "gi",
        "region": "Europe",
        "options": [
            {"name": "Gibraltar", "iso": "gi"},
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Cyprus", "iso": "cy"},
            {"name": "Nepal", "iso": "np"},
        ]
    },
    {
        "name": "Greece",
        "iso": "gr",
        "region": "Europe",
        "options": [
            {"name": "Greece", "iso": "gr"},
            {"name": "Uruguay", "iso": "uy"},
            {"name": "British Indian Ocean Territory", "iso": "io"},
            {"name": "Cuba", "iso": "cu"},
        ]
    },
    {
        "name": "Greenland",
        "iso": "gl",
        "region": "Americas",
        "options": [
            {"name": "Greenland", "iso": "gl"},
            {"name": "Japan", "iso": "jp"},
            {"name": "Palau", "iso": "pw"},
            {"name": "Bangladesh", "iso": "bd"},
        ]
    },
    {
        "name": "Grenada",
        "iso": "gd",
        "region": "Americas",
        "options": [
            {"name": "Grenada", "iso": "gd"},
            {"name": "French Guiana", "iso": "gf"},
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Togo", "iso": "tg"},
        ]
    },
    {
        "name": "Guadeloupe",
        "iso": "gp",
        "region": "Americas",
        "options": [
            {"name": "Guadeloupe", "iso": "gp"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Saint Lucia", "iso": "lc"},
            {"name": "Tokelau", "iso": "tk"},
        ]
    },
    {
        "name": "Guam",
        "iso": "gu",
        "region": "Oceania",
        "options": [
            {"name": "Guam", "iso": "gu"},
            {"name": "Belize", "iso": "bz"},
            {"name": "Haiti", "iso": "ht"},
            {"name": "Liechtenstein", "iso": "li"},
        ]
    },
    {
        "name": "Guatemala",
        "iso": "gt",
        "region": "Americas",
        "options": [
            {"name": "Guatemala", "iso": "gt"},
            {"name": "Barbados", "iso": "bb"},
            {"name": "Argentina", "iso": "ar"},
            {"name": "Honduras", "iso": "hn"},
        ]
    },
    {
        "name": "Guernsey",
        "iso": "gg",
        "region": "Europe",
        "options": [
            {"name": "Guernsey", "iso": "gg"},
            {"name": "Georgia", "iso": "ge"},
            {"name": "Gibraltar", "iso": "gi"},
            {"name": "Jersey", "iso": "je"},
        ]
    },
    {
        "name": "Guinea",
        "iso": "gn",
        "region": "Africa",
        "options": [
            {"name": "Guinea", "iso": "gn"},
            {"name": "Mali", "iso": "ml"},
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Lithuania", "iso": "lt"},
        ]
    },
    {
        "name": "Guinea-Bissau",
        "iso": "gw",
        "region": "Africa",
        "options": [
            {"name": "Guinea-Bissau", "iso": "gw"},
            {"name": "Benin", "iso": "bj"},
            {"name": "Ghana", "iso": "gh"},
            {"name": "Togo", "iso": "tg"},
        ]
    },
    {
        "name": "Guyana",
        "iso": "gy",
        "region": "Americas",
        "options": [
            {"name": "Guyana", "iso": "gy"},
            {"name": "Sao Tome and Principe", "iso": "st"},
            {"name": "Eritrea", "iso": "er"},
            {"name": "Timor-Leste", "iso": "tl"},
        ]
    },
    {
        "name": "Haiti",
        "iso": "ht",
        "region": "Americas",
        "options": [
            {"name": "Haiti", "iso": "ht"},
            {"name": "Liechtenstein", "iso": "li"},
            {"name": "Laos", "iso": "la"},
            {"name": "Cambodia", "iso": "kh"},
        ]
    },
    {
        "name": "Heard Island and McDonald Islands",
        "iso": "hm",
        "region": "Oceania",
        "options": [
            {"name": "Heard Island and McDonald Islands", "iso": "hm"},
            {"name": "New Zealand", "iso": "nz"},
            {"name": "Cook Islands", "iso": "ck"},
            {"name": "Tuvalu", "iso": "tv"},
        ]
    },
    {
        "name": "Holy See",
        "iso": "va",
        "region": "Europe",
        "options": [
            {"name": "Holy See", "iso": "va"},
            {"name": "Brunei", "iso": "bn"},
            {"name": "Gibraltar", "iso": "gi"},
            {"name": "Malta", "iso": "mt"},
        ]
    },
    {
        "name": "Honduras",
        "iso": "hn",
        "region": "Americas",
        "options": [
            {"name": "Honduras", "iso": "hn"},
            {"name": "Argentina", "iso": "ar"},
            {"name": "El Salvador", "iso": "sv"},
            {"name": "Nicaragua", "iso": "ni"},
        ]
    },
    {
        "name": "Hong Kong",
        "iso": "hk",
        "region": "Asia",
        "options": [
            {"name": "Hong Kong", "iso": "hk"},
            {"name": "Isle of Man", "iso": "im"},
            {"name": "Switzerland", "iso": "ch"},
            {"name": "Tunisia", "iso": "tn"},
        ]
    },
    {
        "name": "Hungary",
        "iso": "hu",
        "region": "Europe",
        "options": [
            {"name": "Hungary", "iso": "hu"},
            {"name": "Bulgaria", "iso": "bg"},
            {"name": "Tajikistan", "iso": "tj"},
            {"name": "Iran", "iso": "ir"},
        ]
    },
    {
        "name": "Iceland",
        "iso": "is",
        "region": "Europe",
        "options": [
            {"name": "Iceland", "iso": "is"},
            {"name": "Åland Islands", "iso": "ax"},
            {"name": "Sweden", "iso": "se"},
            {"name": "Faroe Islands", "iso": "fo"},
        ]
    },
    {
        "name": "India",
        "iso": "in",
        "region": "Asia",
        "options": [
            {"name": "India", "iso": "in"},
            {"name": "Ireland", "iso": "ie"},
            {"name": "Côte d'Ivoire", "iso": "ci"},
            {"name": "Niger", "iso": "ne"},
        ]
    },
    {
        "name": "Indonesia",
        "iso": "id",
        "region": "Asia",
        "options": [
            {"name": "Indonesia", "iso": "id"},
            {"name": "Monaco", "iso": "mc"},
            {"name": "Singapore", "iso": "sg"},
            {"name": "Poland", "iso": "pl"},
        ]
    },
    {
        "name": "Iran",
        "iso": "ir",
        "region": "Asia",
        "options": [
            {"name": "Iran", "iso": "ir"},
            {"name": "Tajikistan", "iso": "tj"},
            {"name": "Bulgaria", "iso": "bg"},
            {"name": "Hungary", "iso": "hu"},
        ]
    },
    {
        "name": "Iraq",
        "iso": "iq",
        "region": "Asia",
        "options": [
            {"name": "Iraq", "iso": "iq"},
            {"name": "Egypt", "iso": "eg"},
            {"name": "Syria", "iso": "sy"},
            {"name": "Yemen", "iso": "ye"},
        ]
    },
    {
        "name": "Ireland",
        "iso": "ie",
        "region": "Europe",
        "options": [
            {"name": "Ireland", "iso": "ie"},
            {"name": "Côte d'Ivoire", "iso": "ci"},
            {"name": "India", "iso": "in"},
            {"name": "Niger", "iso": "ne"},
        ]
    },
    {
        "name": "Isle of Man",
        "iso": "im",
        "region": "Europe",
        "options": [
            {"name": "Isle of Man", "iso": "im"},
            {"name": "Hong Kong", "iso": "hk"},
            {"name": "Albania", "iso": "al"},
            {"name": "Montenegro", "iso": "me"},
        ]
    },
    {
        "name": "Israel",
        "iso": "il",
        "region": "Asia",
        "options": [
            {"name": "Israel", "iso": "il"},
            {"name": "Argentina", "iso": "ar"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "El Salvador", "iso": "sv"},
        ]
    },
    {
        "name": "Italy",
        "iso": "it",
        "region": "Europe",
        "options": [
            {"name": "Italy", "iso": "it"},
            {"name": "Mexico", "iso": "mx"},
            {"name": "Ireland", "iso": "ie"},
            {"name": "Hungary", "iso": "hu"},
        ]
    },
    {
        "name": "Jamaica",
        "iso": "jm",
        "region": "Americas",
        "options": [
            {"name": "Jamaica", "iso": "jm"},
            {"name": "Grenada", "iso": "gd"},
            {"name": "Burundi", "iso": "bi"},
            {"name": "Dominica", "iso": "dm"},
        ]
    },
    {
        "name": "Japan",
        "iso": "jp",
        "region": "Asia",
        "options": [
            {"name": "Japan", "iso": "jp"},
            {"name": "Palau", "iso": "pw"},
            {"name": "Bangladesh", "iso": "bd"},
            {"name": "Greenland", "iso": "gl"},
        ]
    },
    {
        "name": "Jersey",
        "iso": "je",
        "region": "Europe",
        "options": [
            {"name": "Jersey", "iso": "je"},
            {"name": "Guernsey", "iso": "gg"},
            {"name": "Georgia", "iso": "ge"},
            {"name": "Gibraltar", "iso": "gi"},
        ]
    },
    {
        "name": "Jordan",
        "iso": "jo",
        "region": "Asia",
        "options": [
            {"name": "Jordan", "iso": "jo"},
            {"name": "Palestine", "iso": "ps"},
            {"name": "Sudan", "iso": "sd"},
            {"name": "Western Sahara", "iso": "eh"},
        ]
    },
    {
        "name": "Kazakhstan",
        "iso": "kz",
        "region": "Asia",
        "options": [
            {"name": "Kazakhstan", "iso": "kz"},
            {"name": "Bahamas", "iso": "bs"},
            {"name": "Saint Lucia", "iso": "lc"},
            {"name": "Palau", "iso": "pw"},
        ]
    },
    {
        "name": "Kenya",
        "iso": "ke",
        "region": "Africa",
        "options": [
            {"name": "Kenya", "iso": "ke"},
            {"name": "Eswatini", "iso": "sz"},
            {"name": "Libya", "iso": "ly"},
            {"name": "Mozambique", "iso": "mz"},
        ]
    },
    {
        "name": "Kiribati",
        "iso": "ki",
        "region": "Oceania",
        "options": [
            {"name": "Kiribati", "iso": "ki"},
            {"name": "British Indian Ocean Territory", "iso": "io"},
            {"name": "Malaysia", "iso": "my"},
            {"name": "Réunion", "iso": "re"},
        ]
    },
    {
        "name": "Kosovo",
        "iso": "xk",
        "region": "Europe",
        "options": [
            {"name": "Kosovo", "iso": "xk"},
            {"name": "Antarctica", "iso": "aq"},
            {"name": "Kazakhstan", "iso": "kz"},
            {"name": "Palau", "iso": "pw"},
        ]
    },
    {
        "name": "Kuwait",
        "iso": "kw",
        "region": "Asia",
        "options": [
            {"name": "Kuwait", "iso": "kw"},
            {"name": "United Arab Emirates", "iso": "ae"},
            {"name": "Sudan", "iso": "sd"},
            {"name": "Palestine", "iso": "ps"},
        ]
    },
    {
        "name": "Kyrgyzstan",
        "iso": "kg",
        "region": "Asia",
        "options": [
            {"name": "Kyrgyzstan", "iso": "kg"},
            {"name": "Vietnam", "iso": "vn"},
            {"name": "Morocco", "iso": "ma"},
            {"name": "Montenegro", "iso": "me"},
        ]
    },
    {
        "name": "Laos",
        "iso": "la",
        "region": "Asia",
        "options": [
            {"name": "Laos", "iso": "la"},
            {"name": "Thailand", "iso": "th"},
            {"name": "Costa Rica", "iso": "cr"},
            {"name": "North Korea", "iso": "kp"},
        ]
    },
    {
        "name": "Latvia",
        "iso": "lv",
        "region": "Europe",
        "options": [
            {"name": "Latvia", "iso": "lv"},
            {"name": "Austria", "iso": "at"},
            {"name": "French Polynesia", "iso": "pf"},
            {"name": "Lebanon", "iso": "lb"},
        ]
    },
    {
        "name": "Lebanon",
        "iso": "lb",
        "region": "Asia",
        "options": [
            {"name": "Lebanon", "iso": "lb"},
            {"name": "Austria", "iso": "at"},
            {"name": "French Polynesia", "iso": "pf"},
            {"name": "Latvia", "iso": "lv"},
        ]
    },
    {
        "name": "Lesotho",
        "iso": "ls",
        "region": "Africa",
        "options": [
            {"name": "Lesotho", "iso": "ls"},
            {"name": "Sierra Leone", "iso": "sl"},
            {"name": "Gabon", "iso": "ga"},
            {"name": "Rwanda", "iso": "rw"},
        ]
    },
    {
        "name": "Liberia",
        "iso": "lr",
        "region": "Africa",
        "options": [
            {"name": "Liberia", "iso": "lr"},
            {"name": "USA", "iso": "us"},
            {"name": "Malaysia", "iso": "my"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "Libya",
        "iso": "ly",
        "region": "Africa",
        "options": [
            {"name": "Libya", "iso": "ly"},
            {"name": "Azerbaijan", "iso": "az"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Western Sahara", "iso": "eh"},
        ]
    },
    {
        "name": "Liechtenstein",
        "iso": "li",
        "region": "Europe",
        "options": [
            {"name": "Liechtenstein", "iso": "li"},
            {"name": "Haiti", "iso": "ht"},
            {"name": "Laos", "iso": "la"},
            {"name": "Cambodia", "iso": "kh"},
        ]
    },
    {
        "name": "Lithuania",
        "iso": "lt",
        "region": "Europe",
        "options": [
            {"name": "Lithuania", "iso": "lt"},
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Mali", "iso": "ml"},
            {"name": "Guinea", "iso": "gn"},
        ]
    },
    {
        "name": "Luxembourg",
        "iso": "lu",
        "region": "Europe",
        "options": [
            {"name": "Luxembourg", "iso": "lu"},
            {"name": "Netherlands", "iso": "nl"},
            {"name": "Croatia", "iso": "hr"},
            {"name": "Paraguay", "iso": "py"},
        ]
    },
    {
        "name": "Macau",
        "iso": "mo",
        "region": "Asia",
        "options": [
            {"name": "Macau", "iso": "mo"},
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Saudi Arabia", "iso": "sa"},
            {"name": "Pakistan", "iso": "pk"},
        ]
    },
    {
        "name": "Madagascar",
        "iso": "mg",
        "region": "Africa",
        "options": [
            {"name": "Madagascar", "iso": "mg"},
            {"name": "Oman", "iso": "om"},
            {"name": "Belarus", "iso": "by"},
            {"name": "Burkina Faso", "iso": "bf"},
        ]
    },
    {
        "name": "Malawi",
        "iso": "mw",
        "region": "Africa",
        "options": [
            {"name": "Malawi", "iso": "mw"},
            {"name": "Afghanistan", "iso": "af"},
            {"name": "Libya", "iso": "ly"},
            {"name": "United Arab Emirates", "iso": "ae"},
        ]
    },
    {
        "name": "Malaysia",
        "iso": "my",
        "region": "Asia",
        "options": [
            {"name": "Malaysia", "iso": "my"},
            {"name": "USA", "iso": "us"},
            {"name": "Liberia", "iso": "lr"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "Maldives",
        "iso": "mv",
        "region": "Asia",
        "options": [
            {"name": "Maldives", "iso": "mv"},
            {"name": "Belarus", "iso": "by"},
            {"name": "Burkina Faso", "iso": "bf"},
            {"name": "Portugal", "iso": "pt"},
        ]
    },
    {
        "name": "Mali",
        "iso": "ml",
        "region": "Africa",
        "options": [
            {"name": "Mali", "iso": "ml"},
            {"name": "Guinea", "iso": "gn"},
            {"name": "Bolivia", "iso": "bo"},
            {"name": "Lithuania", "iso": "lt"},
        ]
    },
    {
        "name": "Malta",
        "iso": "mt",
        "region": "Europe",
        "options": [
            {"name": "Malta", "iso": "mt"},
            {"name": "Qatar", "iso": "qa"},
            {"name": "Bahrain", "iso": "bh"},
            {"name": "Tonga", "iso": "to"},
        ]
    },
    {
        "name": "Marshall Islands",
        "iso": "mh",
        "region": "Oceania",
        "options": [
            {"name": "Marshall Islands", "iso": "mh"},
            {"name": "Namibia", "iso": "na"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Micronesia", "iso": "fm"},
        ]
    },
    {
        "name": "Martinique",
        "iso": "mq",
        "region": "Americas",
        "options": [
            {"name": "Martinique", "iso": "mq"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "Georgia", "iso": "ge"},
            {"name": "Guernsey", "iso": "gg"},
        ]
    },
    {
        "name": "Mauritania",
        "iso": "mr",
        "region": "Africa",
        "options": [
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Saudi Arabia", "iso": "sa"},
            {"name": "Macau", "iso": "mo"},
            {"name": "Pakistan", "iso": "pk"},
        ]
    },
    {
        "name": "Mauritius",
        "iso": "mu",
        "region": "Africa",
        "options": [
            {"name": "Mauritius", "iso": "mu"},
            {"name": "Central African Republic", "iso": "cf"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Seychelles", "iso": "sc"},
        ]
    },
    {
        "name": "Mayotte",
        "iso": "yt",
        "region": "Africa",
        "options": [
            {"name": "Mayotte", "iso": "yt"},
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Cyprus", "iso": "cy"},
            {"name": "US Virgin Islands", "iso": "vi"},
        ]
    },
    {
        "name": "Mexico",
        "iso": "mx",
        "region": "Americas",
        "options": [
            {"name": "Mexico", "iso": "mx"},
            {"name": "Italy", "iso": "it"},
            {"name": "Ireland", "iso": "ie"},
            {"name": "Hungary", "iso": "hu"},
        ]
    },
    {
        "name": "Micronesia",
        "iso": "fm",
        "region": "Oceania",
        "options": [
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Somalia", "iso": "so"},
            {"name": "Nauru", "iso": "nr"},
            {"name": "Cabo Verde", "iso": "cv"},
        ]
    },
    {
        "name": "Moldova",
        "iso": "md",
        "region": "Europe",
        "options": [
            {"name": "Moldova", "iso": "md"},
            {"name": "Romania", "iso": "ro"},
            {"name": "Chad", "iso": "td"},
            {"name": "Andorra", "iso": "ad"},
        ]
    },
    {
        "name": "Monaco",
        "iso": "mc",
        "region": "Europe",
        "options": [
            {"name": "Monaco", "iso": "mc"},
            {"name": "Indonesia", "iso": "id"},
            {"name": "Singapore", "iso": "sg"},
            {"name": "Poland", "iso": "pl"},
        ]
    },
    {
        "name": "Mongolia",
        "iso": "mn",
        "region": "Asia",
        "options": [
            {"name": "Mongolia", "iso": "mn"},
            {"name": "Canada", "iso": "ca"},
            {"name": "Peru", "iso": "pe"},
            {"name": "Malta", "iso": "mt"},
        ]
    },
    {
        "name": "Montenegro",
        "iso": "me",
        "region": "Europe",
        "options": [
            {"name": "Montenegro", "iso": "me"},
            {"name": "Albania", "iso": "al"},
            {"name": "Isle of Man", "iso": "im"},
            {"name": "Kyrgyzstan", "iso": "kg"},
        ]
    },
    {
        "name": "Montserrat",
        "iso": "ms",
        "region": "Americas",
        "options": [
            {"name": "Montserrat", "iso": "ms"},
            {"name": "Anguilla", "iso": "ai"},
            {"name": "Turks and Caicos", "iso": "tc"},
            {"name": "Saint Helena, Ascension, and Tristan da Cunha", "iso": "sh"},
        ]
    },
    {
        "name": "Morocco",
        "iso": "ma",
        "region": "Africa",
        "options": [
            {"name": "Morocco", "iso": "ma"},
            {"name": "Vietnam", "iso": "vn"},
            {"name": "China", "iso": "cn"},
            {"name": "Kyrgyzstan", "iso": "kg"},
        ]
    },
    {
        "name": "Mozambique",
        "iso": "mz",
        "region": "Africa",
        "options": [
            {"name": "Mozambique", "iso": "mz"},
            {"name": "Zimbabwe", "iso": "zw"},
            {"name": "Guyana", "iso": "gy"},
            {"name": "Sao Tome and Principe", "iso": "st"},
        ]
    },
    {
        "name": "Myanmar",
        "iso": "mm",
        "region": "Asia",
        "options": [
            {"name": "Myanmar", "iso": "mm"},
            {"name": "Ghana", "iso": "gh"},
            {"name": "Lithuania", "iso": "lt"},
            {"name": "Bolivia", "iso": "bo"},
        ]
    },
    {
        "name": "Namibia",
        "iso": "na",
        "region": "Africa",
        "options": [
            {"name": "Namibia", "iso": "na"},
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Saint Kitts and Nevis", "iso": "kn"},
            {"name": "Democratic Republic of the Congo", "iso": "cd"},
        ]
    },
    {
        "name": "Nauru",
        "iso": "nr",
        "region": "Oceania",
        "options": [
            {"name": "Nauru", "iso": "nr"},
            {"name": "Aruba", "iso": "aw"},
            {"name": "Cabo Verde", "iso": "cv"},
            {"name": "Somalia", "iso": "so"},
        ]
    },
    {
        "name": "Nepal",
        "iso": "np",
        "region": "Asia",
        "options": [
            {"name": "Nepal", "iso": "np"},
            {"name": "Cyprus", "iso": "cy"},
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Gibraltar", "iso": "gi"},
        ]
    },
    {
        "name": "Netherlands",
        "iso": "nl",
        "region": "Europe",
        "options": [
            {"name": "Netherlands", "iso": "nl"},
            {"name": "Luxembourg", "iso": "lu"},
            {"name": "Croatia", "iso": "hr"},
            {"name": "Paraguay", "iso": "py"},
        ]
    },
    {
        "name": "New Caledonia",
        "iso": "nc",
        "region": "Oceania",
        "options": [
            {"name": "New Caledonia", "iso": "nc"},
            {"name": "Christmas Island", "iso": "cx"},
            {"name": "Rwanda", "iso": "rw"},
            {"name": "Djibouti", "iso": "dj"},
        ]
    },
    {
        "name": "New Zealand",
        "iso": "nz",
        "region": "Oceania",
        "options": [
            {"name": "New Zealand", "iso": "nz"},
            {"name": "Australia", "iso": "au"},
            {"name": "Cook Islands", "iso": "ck"},
            {"name": "Tuvalu", "iso": "tv"},
        ]
    },
    {
        "name": "Nicaragua",
        "iso": "ni",
        "region": "Americas",
        "options": [
            {"name": "Nicaragua", "iso": "ni"},
            {"name": "El Salvador", "iso": "sv"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "Argentina", "iso": "ar"},
        ]
    },
    {
        "name": "Niger",
        "iso": "ne",
        "region": "Africa",
        "options": [
            {"name": "Niger", "iso": "ne"},
            {"name": "Ireland", "iso": "ie"},
            {"name": "Côte d'Ivoire", "iso": "ci"},
            {"name": "India", "iso": "in"},
        ]
    },
    {
        "name": "Nigeria",
        "iso": "ng",
        "region": "Africa",
        "options": [
            {"name": "Nigeria", "iso": "ng"},
            {"name": "Norfolk Island", "iso": "nf"},
            {"name": "Algeria", "iso": "dz"},
            {"name": "Pakistan", "iso": "pk"},
        ]
    },
    {
        "name": "Niue",
        "iso": "nu",
        "region": "Oceania",
        "options": [
            {"name": "Niue", "iso": "nu"},
            {"name": "Bermuda", "iso": "bm"},
            {"name": "Fiji", "iso": "fj"},
            {"name": "Tuvalu", "iso": "tv"},
        ]
    },
    {
        "name": "Norfolk Island",
        "iso": "nf",
        "region": "Oceania",
        "options": [
            {"name": "Norfolk Island", "iso": "nf"},
            {"name": "Nigeria", "iso": "ng"},
            {"name": "Algeria", "iso": "dz"},
            {"name": "Pakistan", "iso": "pk"},
        ]
    },
    {
        "name": "North Korea",
        "iso": "kp",
        "region": "Asia",
        "options": [
            {"name": "North Korea", "iso": "kp"},
            {"name": "Thailand", "iso": "th"},
            {"name": "Costa Rica", "iso": "cr"},
            {"name": "Laos", "iso": "la"},
        ]
    },
    {
        "name": "North Macedonia",
        "iso": "mk",
        "region": "Europe",
        "options": [
            {"name": "North Macedonia", "iso": "mk"},
            {"name": "Grenada", "iso": "gd"},
            {"name": "Vietnam", "iso": "vn"},
            {"name": "Montenegro", "iso": "me"},
        ]
    },
    {
        "name": "Northern Mariana Islands",
        "iso": "mp",
        "region": "Oceania",
        "options": [
            {"name": "Northern Mariana Islands", "iso": "mp"},
            {"name": "Somalia", "iso": "so"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Saint Lucia", "iso": "lc"},
        ]
    },
    {
        "name": "Norway",
        "iso": "no",
        "region": "Europe",
        "options": [
            {"name": "Norway", "iso": "no"},
            {"name": "Denmark", "iso": "dk"},
            {"name": "Iceland", "iso": "is"},
            {"name": "Faroe Islands", "iso": "fo"},
        ]
    },
    {
        "name": "Oman",
        "iso": "om",
        "region": "Asia",
        "options": [
            {"name": "Oman", "iso": "om"},
            {"name": "Madagascar", "iso": "mg"},
            {"name": "Belarus", "iso": "by"},
            {"name": "Burkina Faso", "iso": "bf"},
        ]
    },
    {
        "name": "Pakistan",
        "iso": "pk",
        "region": "Asia",
        "options": [
            {"name": "Pakistan", "iso": "pk"},
            {"name": "Saudi Arabia", "iso": "sa"},
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Macau", "iso": "mo"},
        ]
    },
    {
        "name": "Palau",
        "iso": "pw",
        "region": "Oceania",
        "options": [
            {"name": "Palau", "iso": "pw"},
            {"name": "Bangladesh", "iso": "bd"},
            {"name": "Japan", "iso": "jp"},
            {"name": "Greenland", "iso": "gl"},
        ]
    },
    {
        "name": "Palestine",
        "iso": "ps",
        "region": "Asia",
        "options": [
            {"name": "Palestine", "iso": "ps"},
            {"name": "Sudan", "iso": "sd"},
            {"name": "Jordan", "iso": "jo"},
            {"name": "Western Sahara", "iso": "eh"},
        ]
    },
    {
        "name": "Panama",
        "iso": "pa",
        "region": "Americas",
        "options": [
            {"name": "Panama", "iso": "pa"},
            {"name": "Dominican Republic", "iso": "do"},
            {"name": "Chile", "iso": "cl"},
            {"name": "Sint Maarten", "iso": "sx"},
        ]
    },
    {
        "name": "Papua New Guinea",
        "iso": "pg",
        "region": "Oceania",
        "options": [
            {"name": "Papua New Guinea", "iso": "pg"},
            {"name": "Trinidad and Tobago", "iso": "tt"},
            {"name": "Christmas Island", "iso": "cx"},
            {"name": "Brunei", "iso": "bn"},
        ]
    },
    {
        "name": "Paraguay",
        "iso": "py",
        "region": "Americas",
        "options": [
            {"name": "Paraguay", "iso": "py"},
            {"name": "Netherlands", "iso": "nl"},
            {"name": "Luxembourg", "iso": "lu"},
            {"name": "Croatia", "iso": "hr"},
        ]
    },
    {
        "name": "Peru",
        "iso": "pe",
        "region": "Americas",
        "options": [
            {"name": "Peru", "iso": "pe"},
            {"name": "Canada", "iso": "ca"},
            {"name": "Mongolia", "iso": "mn"},
            {"name": "Malta", "iso": "mt"},
        ]
    },
    {
        "name": "Philippines",
        "iso": "ph",
        "region": "Asia",
        "options": [
            {"name": "Philippines", "iso": "ph"},
            {"name": "Czechia", "iso": "cz"},
            {"name": "Cuba", "iso": "cu"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "Pitcairn Islands",
        "iso": "pn",
        "region": "Oceania",
        "options": [
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Cayman Islands", "iso": "ky"},
            {"name": "South Georgia and the South Sandwich Islands", "iso": "gs"},
            {"name": "Falkland Islands", "iso": "fk"},
        ]
    },
    {
        "name": "Poland",
        "iso": "pl",
        "region": "Europe",
        "options": [
            {"name": "Poland", "iso": "pl"},
            {"name": "Indonesia", "iso": "id"},
            {"name": "Monaco", "iso": "mc"},
            {"name": "Singapore", "iso": "sg"},
        ]
    },
    {
        "name": "Portugal",
        "iso": "pt",
        "region": "Europe",
        "options": [
            {"name": "Portugal", "iso": "pt"},
            {"name": "Belarus", "iso": "by"},
            {"name": "Burkina Faso", "iso": "bf"},
            {"name": "Maldives", "iso": "mv"},
        ]
    },
    {
        "name": "Puerto Rico",
        "iso": "pr",
        "region": "Americas",
        "options": [
            {"name": "Puerto Rico", "iso": "pr"},
            {"name": "Czechia", "iso": "cz"},
            {"name": "Philippines", "iso": "ph"},
            {"name": "Cuba", "iso": "cu"},
        ]
    },
    {
        "name": "Qatar",
        "iso": "qa",
        "region": "Asia",
        "options": [
            {"name": "Qatar", "iso": "qa"},
            {"name": "Bahrain", "iso": "bh"},
            {"name": "Malta", "iso": "mt"},
            {"name": "Tonga", "iso": "to"},
        ]
    },
    {
        "name": "Réunion",
        "iso": "re",
        "region": "Africa",
        "options": [
            {"name": "Réunion", "iso": "re"},
            {"name": "North Macedonia", "iso": "mk"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Somalia", "iso": "so"},
        ]
    },
    {
        "name": "Romania",
        "iso": "ro",
        "region": "Europe",
        "options": [
            {"name": "Romania", "iso": "ro"},
            {"name": "Chad", "iso": "td"},
            {"name": "Moldova", "iso": "md"},
            {"name": "Andorra", "iso": "ad"},
        ]
    },
    {
        "name": "Russia",
        "iso": "ru",
        "region": "Asia",
        "options": [
            {"name": "Russia", "iso": "ru"},
            {"name": "Serbia", "iso": "rs"},
            {"name": "Slovakia", "iso": "sk"},
            {"name": "Slovenia", "iso": "si"},
        ]
    },
    {
        "name": "Rwanda",
        "iso": "rw",
        "region": "Africa",
        "options": [
            {"name": "Rwanda", "iso": "rw"},
            {"name": "Gabon", "iso": "ga"},
            {"name": "Saint Vincent and the Grenadines", "iso": "vc"},
            {"name": "Sierra Leone", "iso": "sl"},
        ]
    },
    {
        "name": "Saint Barthélemy",
        "iso": "bl",
        "region": "Americas",
        "options": [
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Cyprus", "iso": "cy"},
            {"name": "Mayotte", "iso": "yt"},
            {"name": "US Virgin Islands", "iso": "vi"},
        ]
    },
    {
        "name": "Saint Helena, Ascension, and Tristan da Cunha",
        "iso": "sh",
        "region": "Africa",
        "options": [
            {"name": "Saint Helena, Ascension, and Tristan da Cunha", "iso": "sh"},
            {"name": "Turks and Caicos", "iso": "tc"},
            {"name": "Montserrat", "iso": "ms"},
            {"name": "Anguilla", "iso": "ai"},
        ]
    },
    {
        "name": "Saint Kitts and Nevis",
        "iso": "kn",
        "region": "Americas",
        "options": [
            {"name": "Saint Kitts and Nevis", "iso": "kn"},
            {"name": "Namibia", "iso": "na"},
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Congo", "iso": "cg"},
        ]
    },
    {
        "name": "Saint Lucia",
        "iso": "lc",
        "region": "Americas",
        "options": [
            {"name": "Saint Lucia", "iso": "lc"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Northern Mariana Islands", "iso": "mp"},
            {"name": "Nauru", "iso": "nr"},
        ]
    },
    {
        "name": "Saint Martin",
        "iso": "mf",
        "region": "Americas",
        "options": [
            {"name": "Saint Martin", "iso": "mf"},
            {"name": "Sint Maarten", "iso": "sx"},
            {"name": "Réunion", "iso": "re"},
            {"name": "French Southern Territories", "iso": "tf"},
        ]
    },
    {
        "name": "Saint Pierre and Miquelon",
        "iso": "pm",
        "region": "Americas",
        "options": [
            {"name": "Saint Pierre and Miquelon", "iso": "pm"},
            {"name": "French Southern Territories", "iso": "tf"},
            {"name": "American Samoa", "iso": "as"},
            {"name": "Christmas Island", "iso": "cx"},
        ]
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "iso": "vc",
        "region": "Americas",
        "options": [
            {"name": "Saint Vincent and the Grenadines", "iso": "vc"},
            {"name": "Rwanda", "iso": "rw"},
            {"name": "Gabon", "iso": "ga"},
            {"name": "Sierra Leone", "iso": "sl"},
        ]
    },
    {
        "name": "Samoa",
        "iso": "ws",
        "region": "Oceania",
        "options": [
            {"name": "Samoa", "iso": "ws"},
            {"name": "Taiwan", "iso": "tw"},
            {"name": "Tonga", "iso": "to"},
            {"name": "Haiti", "iso": "ht"},
        ]
    },
    {
        "name": "San Marino",
        "iso": "sm",
        "region": "Europe",
        "options": [
            {"name": "San Marino", "iso": "sm"},
            {"name": "Argentina", "iso": "ar"},
            {"name": "Honduras", "iso": "hn"},
            {"name": "Botswana", "iso": "bw"},
        ]
    },
    {
        "name": "Sao Tome and Principe",
        "iso": "st",
        "region": "Africa",
        "options": [
            {"name": "Sao Tome and Principe", "iso": "st"},
            {"name": "Guyana", "iso": "gy"},
            {"name": "Djibouti", "iso": "dj"},
            {"name": "Equatorial Guinea", "iso": "gq"},
        ]
    },
    {
        "name": "Saudi Arabia",
        "iso": "sa",
        "region": "Asia",
        "options": [
            {"name": "Saudi Arabia", "iso": "sa"},
            {"name": "Mauritania", "iso": "mr"},
            {"name": "Pakistan", "iso": "pk"},
            {"name": "Macau", "iso": "mo"},
        ]
    },
    {
        "name": "Senegal",
        "iso": "sn",
        "region": "Africa",
        "options": [
            {"name": "Senegal", "iso": "sn"},
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Mali", "iso": "ml"},
            {"name": "Guinea", "iso": "gn"},
        ]
    },
    {
        "name": "Serbia",
        "iso": "rs",
        "region": "Europe",
        "options": [
            {"name": "Serbia", "iso": "rs"},
            {"name": "Russia", "iso": "ru"},
            {"name": "Slovakia", "iso": "sk"},
            {"name": "Slovenia", "iso": "si"},
        ]
    },
    {
        "name": "Seychelles",
        "iso": "sc",
        "region": "Africa",
        "options": [
            {"name": "Seychelles", "iso": "sc"},
            {"name": "Central African Republic", "iso": "cf"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Mauritius", "iso": "mu"},
        ]
    },
    {
        "name": "Sierra Leone",
        "iso": "sl",
        "region": "Africa",
        "options": [
            {"name": "Sierra Leone", "iso": "sl"},
            {"name": "Lesotho", "iso": "ls"},
            {"name": "Gabon", "iso": "ga"},
            {"name": "Rwanda", "iso": "rw"},
        ]
    },
    {
        "name": "Singapore",
        "iso": "sg",
        "region": "Asia",
        "options": [
            {"name": "Singapore", "iso": "sg"},
            {"name": "Indonesia", "iso": "id"},
            {"name": "Monaco", "iso": "mc"},
            {"name": "Poland", "iso": "pl"},
        ]
    },
    {
        "name": "Sint Maarten",
        "iso": "sx",
        "region": "Americas",
        "options": [
            {"name": "Sint Maarten", "iso": "sx"},
            {"name": "Philippines", "iso": "ph"},
            {"name": "Czechia", "iso": "cz"},
            {"name": "Cuba", "iso": "cu"},
        ]
    },
    {
        "name": "Slovakia",
        "iso": "sk",
        "region": "Europe",
        "options": [
            {"name": "Slovakia", "iso": "sk"},
            {"name": "Russia", "iso": "ru"},
            {"name": "Serbia", "iso": "rs"},
            {"name": "Slovenia", "iso": "si"},
        ]
    },
    {
        "name": "Slovenia",
        "iso": "si",
        "region": "Europe",
        "options": [
            {"name": "Slovenia", "iso": "si"},
            {"name": "Russia", "iso": "ru"},
            {"name": "Serbia", "iso": "rs"},
            {"name": "Slovakia", "iso": "sk"},
        ]
    },
    {
        "name": "Solomon Islands",
        "iso": "sb",
        "region": "Oceania",
        "options": [
            {"name": "Solomon Islands", "iso": "sb"},
            {"name": "Namibia", "iso": "na"},
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Congo", "iso": "cg"},
        ]
    },
    {
        "name": "Somalia",
        "iso": "so",
        "region": "Africa",
        "options": [
            {"name": "Somalia", "iso": "so"},
            {"name": "Micronesia", "iso": "fm"},
            {"name": "Cabo Verde", "iso": "cv"},
            {"name": "Aruba", "iso": "aw"},
        ]
    },
    {
        "name": "South Africa",
        "iso": "za",
        "region": "Africa",
        "options": [
            {"name": "South Africa", "iso": "za"},
            {"name": "Vanuatu", "iso": "vu"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Zimbabwe", "iso": "zw"},
        ]
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "iso": "gs",
        "region": "Americas",
        "options": [
            {"name": "South Georgia and the South Sandwich Islands", "iso": "gs"},
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Cayman Islands", "iso": "ky"},
            {"name": "Falkland Islands", "iso": "fk"},
        ]
    },
    {
        "name": "South Korea",
        "iso": "kr",
        "region": "Asia",
        "options": [
            {"name": "South Korea", "iso": "kr"},
            {"name": "Japan", "iso": "jp"},
            {"name": "Greenland", "iso": "gl"},
            {"name": "North Korea", "iso": "kp"},
        ]
    },
    {
        "name": "South Sudan",
        "iso": "ss",
        "region": "Africa",
        "options": [
            {"name": "South Sudan", "iso": "ss"},
            {"name": "Palestine", "iso": "ps"},
            {"name": "Jordan", "iso": "jo"},
            {"name": "Vanuatu", "iso": "vu"},
        ]
    },
    {
        "name": "Spain",
        "iso": "es",
        "region": "Europe",
        "options": [
            {"name": "Spain", "iso": "es"},
            {"name": "Bhutan", "iso": "bt"},
            {"name": "North Macedonia", "iso": "mk"},
            {"name": "Sri Lanka", "iso": "lk"},
        ]
    },
    {
        "name": "Sri Lanka",
        "iso": "lk",
        "region": "Asia",
        "options": [
            {"name": "Sri Lanka", "iso": "lk"},
            {"name": "Bhutan", "iso": "bt"},
            {"name": "Spain", "iso": "es"},
            {"name": "Lithuania", "iso": "lt"},
        ]
    },
    {
        "name": "Sudan",
        "iso": "sd",
        "region": "Africa",
        "options": [
            {"name": "Sudan", "iso": "sd"},
            {"name": "Palestine", "iso": "ps"},
            {"name": "Jordan", "iso": "jo"},
            {"name": "Western Sahara", "iso": "eh"},
        ]
    },
    {
        "name": "Suriname",
        "iso": "sr",
        "region": "Americas",
        "options": [
            {"name": "Suriname", "iso": "sr"},
            {"name": "Burkina Faso", "iso": "bf"},
            {"name": "Myanmar", "iso": "mm"},
            {"name": "Ghana", "iso": "gh"},
        ]
    },
    {
        "name": "Svalbard and Jan Mayen",
        "iso": "sj",
        "region": "Europe",
        "options": [
            {"name": "Svalbard and Jan Mayen", "iso": "sj"},
            {"name": "Denmark", "iso": "dk"},
            {"name": "Iceland", "iso": "is"},
            {"name": "Åland Islands", "iso": "ax"},
        ]
    },
    {
        "name": "Sweden",
        "iso": "se",
        "region": "Europe",
        "options": [
            {"name": "Sweden", "iso": "se"},
            {"name": "Åland Islands", "iso": "ax"},
            {"name": "Iceland", "iso": "is"},
            {"name": "Norway", "iso": "no"},
        ]
    },
    {
        "name": "Switzerland",
        "iso": "ch",
        "region": "Europe",
        "options": [
            {"name": "Switzerland", "iso": "ch"},
            {"name": "Tonga", "iso": "to"},
            {"name": "Malta", "iso": "mt"},
            {"name": "Georgia", "iso": "ge"},
        ]
    },
    {
        "name": "Syria",
        "iso": "sy",
        "region": "Asia",
        "options": [
            {"name": "Syria", "iso": "sy"},
            {"name": "Egypt", "iso": "eg"},
            {"name": "Iraq", "iso": "iq"},
            {"name": "Yemen", "iso": "ye"},
        ]
    },
    {
        "name": "Taiwan",
        "iso": "tw",
        "region": "Asia",
        "options": [
            {"name": "Taiwan", "iso": "tw"},
            {"name": "Samoa", "iso": "ws"},
            {"name": "Tonga", "iso": "to"},
            {"name": "Haiti", "iso": "ht"},
        ]
    },
    {
        "name": "Tajikistan",
        "iso": "tj",
        "region": "Asia",
        "options": [
            {"name": "Tajikistan", "iso": "tj"},
            {"name": "Iran", "iso": "ir"},
            {"name": "Bulgaria", "iso": "bg"},
            {"name": "Hungary", "iso": "hu"},
        ]
    },
    {
        "name": "Tanzania",
        "iso": "tz",
        "region": "Africa",
        "options": [
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Namibia", "iso": "na"},
            {"name": "Solomon Islands", "iso": "sb"},
            {"name": "Saint Kitts and Nevis", "iso": "kn"},
        ]
    },
    {
        "name": "Thailand",
        "iso": "th",
        "region": "Asia",
        "options": [
            {"name": "Thailand", "iso": "th"},
            {"name": "Costa Rica", "iso": "cr"},
            {"name": "North Korea", "iso": "kp"},
            {"name": "Laos", "iso": "la"},
        ]
    },
    {
        "name": "Timor-Leste",
        "iso": "tl",
        "region": "Asia",
        "options": [
            {"name": "Timor-Leste", "iso": "tl"},
            {"name": "Guyana", "iso": "gy"},
            {"name": "Sao Tome and Principe", "iso": "st"},
            {"name": "Djibouti", "iso": "dj"},
        ]
    },
    {
        "name": "Togo",
        "iso": "tg",
        "region": "Africa",
        "options": [
            {"name": "Togo", "iso": "tg"},
            {"name": "Guinea-Bissau", "iso": "gw"},
            {"name": "Cameroon", "iso": "cm"},
            {"name": "Senegal", "iso": "sn"},
        ]
    },
    {
        "name": "Tokelau",
        "iso": "tk",
        "region": "Oceania",
        "options": [
            {"name": "Tokelau", "iso": "tk"},
            {"name": "Bosnia and Herzegovina", "iso": "ba"},
            {"name": "Barbados", "iso": "bb"},
            {"name": "Bahamas", "iso": "bs"},
        ]
    },
    {
        "name": "Tonga",
        "iso": "to",
        "region": "Oceania",
        "options": [
            {"name": "Tonga", "iso": "to"},
            {"name": "Samoa", "iso": "ws"},
            {"name": "Taiwan", "iso": "tw"},
            {"name": "Haiti", "iso": "ht"},
        ]
    },
    {
        "name": "Trinidad and Tobago",
        "iso": "tt",
        "region": "Americas",
        "options": [
            {"name": "Trinidad and Tobago", "iso": "tt"},
            {"name": "Papua New Guinea", "iso": "pg"},
            {"name": "Tanzania", "iso": "tz"},
            {"name": "Namibia", "iso": "na"},
        ]
    },
    {
        "name": "Tunisia",
        "iso": "tn",
        "region": "Africa",
        "options": [
            {"name": "Tunisia", "iso": "tn"},
            {"name": "Türkiye", "iso": "tr"},
            {"name": "Hong Kong", "iso": "hk"},
            {"name": "Isle of Man", "iso": "im"},
        ]
    },
    {
        "name": "Türkiye",
        "iso": "tr",
        "region": "Asia",
        "options": [
            {"name": "Türkiye", "iso": "tr"},
            {"name": "Tunisia", "iso": "tn"},
            {"name": "Hong Kong", "iso": "hk"},
            {"name": "Isle of Man", "iso": "im"},
        ]
    },
    {
        "name": "Turkmenistan",
        "iso": "tm",
        "region": "Asia",
        "options": [
            {"name": "Turkmenistan", "iso": "tm"},
            {"name": "Zambia", "iso": "zm"},
            {"name": "Pakistan", "iso": "pk"},
            {"name": "Mauritania", "iso": "mr"},
        ]
    },
    {
        "name": "Turks and Caicos",
        "iso": "tc",
        "region": "Americas",
        "options": [
            {"name": "Turks and Caicos", "iso": "tc"},
            {"name": "Pitcairn Islands", "iso": "pn"},
            {"name": "Montserrat", "iso": "ms"},
            {"name": "Anguilla", "iso": "ai"},
        ]
    },
    {
        "name": "Tuvalu",
        "iso": "tv",
        "region": "Oceania",
        "options": [
            {"name": "Tuvalu", "iso": "tv"},
            {"name": "Fiji", "iso": "fj"},
            {"name": "Niue", "iso": "nu"},
            {"name": "Bermuda", "iso": "bm"},
        ]
    },
    {
        "name": "Uganda",
        "iso": "ug",
        "region": "Africa",
        "options": [
            {"name": "Uganda", "iso": "ug"},
            {"name": "Belgium", "iso": "be"},
            {"name": "Germany", "iso": "de"},
            {"name": "Angola", "iso": "ao"},
        ]
    },
    {
        "name": "Ukraine",
        "iso": "ua",
        "region": "Europe",
        "options": [
            {"name": "Ukraine", "iso": "ua"},
            {"name": "Gabon", "iso": "ga"},
            {"name": "Saint Vincent and the Grenadines", "iso": "vc"},
            {"name": "Rwanda", "iso": "rw"},
        ]
    },
    {
        "name": "United Arab Emirates",
        "iso": "ae",
        "region": "Asia",
        "options": [
            {"name": "United Arab Emirates", "iso": "ae"},
            {"name": "Palestine", "iso": "ps"},
            {"name": "Sudan", "iso": "sd"},
            {"name": "Jordan", "iso": "jo"},
        ]
    },
    {
        "name": "United Kingdom",
        "iso": "gb",
        "region": "Europe",
        "options": [
            {"name": "United Kingdom", "iso": "gb"},
            {"name": "Australia", "iso": "au"},
            {"name": "New Zealand", "iso": "nz"},
            {"name": "Cook Islands", "iso": "ck"},
        ]
    },
    {
        "name": "Uruguay",
        "iso": "uy",
        "region": "Americas",
        "options": [
            {"name": "Uruguay", "iso": "uy"},
            {"name": "Greece", "iso": "gr"},
            {"name": "Cuba", "iso": "cu"},
            {"name": "Honduras", "iso": "hn"},
        ]
    },
    {
        "name": "US Minor Outlying Islands",
        "iso": "um",
        "region": "Oceania",
        "options": [
            {"name": "US Minor Outlying Islands", "iso": "um"},
            {"name": "Liberia", "iso": "lr"},
            {"name": "Malaysia", "iso": "my"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "US Virgin Islands",
        "iso": "vi",
        "region": "Americas",
        "options": [
            {"name": "US Virgin Islands", "iso": "vi"},
            {"name": "Saint Barthélemy", "iso": "bl"},
            {"name": "Mayotte", "iso": "yt"},
            {"name": "Cyprus", "iso": "cy"},
        ]
    },
    {
        "name": "USA",
        "iso": "us",
        "region": "Americas",
        "options": [
            {"name": "USA", "iso": "us"},
            {"name": "Liberia", "iso": "lr"},
            {"name": "Malaysia", "iso": "my"},
            {"name": "Puerto Rico", "iso": "pr"},
        ]
    },
    {
        "name": "Uzbekistan",
        "iso": "uz",
        "region": "Asia",
        "options": [
            {"name": "Uzbekistan", "iso": "uz"},
            {"name": "Sierra Leone", "iso": "sl"},
            {"name": "Lesotho", "iso": "ls"},
            {"name": "Rwanda", "iso": "rw"},
        ]
    },
    {
        "name": "Vanuatu",
        "iso": "vu",
        "region": "Oceania",
        "options": [
            {"name": "Vanuatu", "iso": "vu"},
            {"name": "South Africa", "iso": "za"},
            {"name": "Comoros", "iso": "km"},
            {"name": "Zimbabwe", "iso": "zw"},
        ]
    },
    {
        "name": "Venezuela",
        "iso": "ve",
        "region": "Americas",
        "options": [
            {"name": "Venezuela", "iso": "ve"},
            {"name": "Colombia", "iso": "co"},
            {"name": "Ecuador", "iso": "ec"},
            {"name": "Armenia", "iso": "am"},
        ]
    },
    {
        "name": "Vietnam",
        "iso": "vn",
        "region": "Asia",
        "options": [
            {"name": "Vietnam", "iso": "vn"},
            {"name": "Morocco", "iso": "ma"},
            {"name": "Hong Kong", "iso": "hk"},
            {"name": "Kyrgyzstan", "iso": "kg"},
        ]
    },
    {
        "name": "Wallis and Futuna",
        "iso": "wf",
        "region": "Oceania",
        "options": [
            {"name": "Wallis and Futuna", "iso": "wf"},
            {"name": "French Southern Territories", "iso": "tf"},
            {"name": "France", "iso": "fr"},
            {"name": "Saint Pierre and Miquelon", "iso": "pm"},
        ]
    },
    {
        "name": "Western Sahara",
        "iso": "eh",
        "region": "Africa",
        "options": [
            {"name": "Western Sahara", "iso": "eh"},
            {"name": "Palestine", "iso": "ps"},
            {"name": "Sudan", "iso": "sd"},
            {"name": "Jordan", "iso": "jo"},
        ]
    },
    {
        "name": "Yemen",
        "iso": "ye",
        "region": "Asia",
        "options": [
            {"name": "Yemen", "iso": "ye"},
            {"name": "Egypt", "iso": "eg"},
            {"name": "Syria", "iso": "sy"},
            {"name": "Iraq", "iso": "iq"},
        ]
    },
    {
        "name": "Zambia",
        "iso": "zm",
        "region": "Africa",
        "options": [
            {"name": "Zambia", "iso": "zm"},
            {"name": "Zimbabwe", "iso": "zw"},
            {"name": "Turkmenistan", "iso": "tm"},
            {"name": "Dominica", "iso": "dm"},
        ]
    },
    {
        "name": "Zimbabwe",
        "iso": "zw",
        "region": "Africa",
        "options": [
            {"name": "Zimbabwe", "iso": "zw"},
            {"name": "Mozambique", "iso": "mz"},
            {"name": "Guyana", "iso": "gy"},
            {"name": "Timor-Leste", "iso": "tl"},
        ]
    },
];
