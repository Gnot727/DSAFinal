const geojson_to_db_map = {
    "China": "Mainland China",
    "El Salvador": "El Salvador",
    "Eq. Guinea": "Equatorial Guinea",
    "Eritrea": "Eritrea",
    "Estonia": "Estonia",
    "eSwatini": "Eswatini",
    "Ethiopia": "Ethiopia",
    "Fiji": "Fiji",
    "Finland": "Finland",
    "France": "France",
    "Gabon": "Gabon",
    "Gambia": "Gambia",
    "Georgia": "Georgia",
    "Germany": "Germany",
    "Ghana": "Ghana",
    "Greece": "Greece",
    "Grenada": "Grenada",
    "Guatemala": "Guatemala",
    "Guinea": "Guinea",
    "Guinea-Bissau": "Guinea-Bissau",
    "Guyana": "Guyana",
    "Haiti": "Haiti",
    "Vatican": "Holy See",
    "Honduras": "Honduras",
    "Hungary": "Hungary",
    "Iceland": "Iceland",
    "India": "India",
    "Indonesia": "Indonesia",
    "Iran": "Iran",
    "Iraq": "Iraq",
    "Ireland": "Ireland",
    "Israel": "Israel",
    "Italy": "Italy",
    "Côte d'Ivoire": "Ivory Coast",
    "Jamaica": "Jamaica",
    "Japan": "Japan",
    "Jordan": "Jordan",
    "Kazakhstan": "Kazakhstan",
    "Kenya": "Kenya",
    "Kiribati": "Kiribati",
    "Kosovo": "Kosovo",
    "Kuwait": "Kuwait",
    "Kyrgyzstan": "Kyrgyzstan",
    "Laos": "Laos",
    "Latvia": "Latvia",
    "Lebanon": "Lebanon",
    "Liberia": "Liberia",
    "Libya": "Libya",
    "Liechtenstein": "Liechtenstein",
    "Lithuania": "Lithuania",
    "Luxembourg": "Luxembourg",
    "Madagascar": "Madagascar",
    "Malaysia": "Malaysia",
    "Maldives": "Maldives",
    "Mali": "Mali",
    "Malta": "Malta",
    "Mauritania": "Mauritania",
    "Mauritius": "Mauritius",
    "Mexico": "Mexico",
    "Moldova": "Moldova",
    "Monaco": "Monaco",
    "Mongolia": "Mongolia",
    "Montenegro": "Montenegro",
    "Morocco": "Morocco",
    "Mozambique": "Mozambique",
    "Namibia": "Namibia",
    "Nepal": "Nepal",
    "Netherlands": "Netherlands",
    "New Zealand": "New Zealand",
    "Nicaragua": "Nicaragua",
    "Niger": "Niger",
    "Nigeria": "Nigeria",
    "North Macedonia": "North Macedonia",
    "Norway": "Norway",
    "Oman": "Oman",
    "Pakistan": "Pakistan",
    "Panama": "Panama",
    "Papua New Guinea": "Papua New Guinea",
    "Paraguay": "Paraguay",
    "Peru": "Peru",
    "Philippines": "Philippines",
    "Poland": "Poland",
    "Portugal": "Portugal",
    "Qatar": "Qatar",
    "Romania": "Romania",
    "Russia": "Russia",
    "Rwanda": "Rwanda",
    "St. Kitts and Nevis": "Saint Kitts and Nevis",
    "Saint Lucia": "Saint Lucia",
    "St. Vin. and Gren.": "Saint Vincent and the Grenadines",
    "Samoa": "Samoa",
    "San Marino": "San Marino",
    "Saudi Arabia": "Saudi Arabia",
    "Senegal": "Senegal",
    "Serbia": "Serbia",
    "Seychelles": "Seychelles",
    "Singapore": "Singapore",
    "Slovakia": "Slovakia",
    "Slovenia": "Slovenia",
    "Somalia": "Somalia",
    "South Africa": "South Africa",
    "South Korea": "South Korea",
    "Spain": "Spain",
    "Sri Lanka": "Sri Lanka",
    "Sudan": "Sudan",
    "Suriname": "Suriname",
    "Sweden": "Sweden",
    "Switzerland": "Switzerland",
    "Syria": "Syria",
    "Taiwan": "Taiwan",
    "Tanzania": "Tanzania",
    "Thailand": "Thailand",
    "Timor-Leste": "Timor-Leste",
    "Togo": "Togo",
    "Trinidad and Tobago": "Trinidad and Tobago",
    "Tunisia": "Tunisia",
    "Turkey": "Turkey",
    "United Kingdom": "UK",
    "Uganda": "Uganda",
    "Ukraine": "Ukraine",
    "United Arab Emirates": "United Arab Emirates",
    "Uruguay": "Uruguay",
    "Uzbekistan": "Uzbekistan",
    "Venezuela": "Venezuela",
    "Vietnam": "Vietnam",
    "Palestine": "West Bank and Gaza",
    "Zambia": "Zambia",
    "Zimbabwe": "Zimbabwe",
    "United States of America": "US",
    "Canada": "Canada",
    "Australia": "Australia",
    "Denmark": "Denmark",
    "Hong Kong": "Hong Kong",
    "Macao": "Macau",
    "Afghanistan": "Afghanistan",
    "Albania": "Albania",
    "Algeria": "Algeria",
    "Andorra": "Andorra",
    "Angola": "Angola",
    "Antigua and Barb.": "Antigua and Barbuda",
    "Argentina": "Argentina",
    "Armenia": "Armenia",
    "Austria": "Austria",
    "Azerbaijan": "Azerbaijan",
    "Bahamas": "Bahamas",
    "Bahrain": "Bahrain",
    "Bangladesh": "Bangladesh",
    "Barbados": "Barbados",
    "Belarus": "Belarus",
    "Belgium": "Belgium",
    "Belize": "Belize",
    "Benin": "Benin",
    "Bhutan": "Bhutan",
    "Bolivia": "Bolivia",
    "Bosnia and Herz.": "Bosnia and Herzegovina",
    "Brazil": "Brazil",
    "Brunei": "Brunei",
    "Bulgaria": "Bulgaria",
    "Burkina Faso": "Burkina Faso",
    "Myanmar": "Burma",
    "Cabo Verde": "Cabo Verde",
    "Cambodia": "Cambodia",
    "Cameroon": "Cameroon",
    "Central African Rep.": "Central African Republic",
    "Chad": "Chad",
    "Chile": "Chile",
    "Colombia": "Colombia",
    "Congo": "Congo (Brazzaville)",
    "Dem. Rep. Congo": "Congo (Kinshasa)",
    "Costa Rica": "Costa Rica",
    "Croatia": "Croatia",
    "Cuba": "Cuba",
    "Cyprus": "Cyprus",
    "Czechia": "Czech Republic",
    "Djibouti": "Djibouti",
    "Dominica": "Dominica",
    "Dominican Rep.": "Dominican Republic",
    "Ecuador": "Ecuador",
    "Egypt": "Egypt",
    "Botswana": "Botswana",
    "Burundi": "Burundi",
    "Sierra Leone": "Sierra Leone",
    "Malawi": "Malawi",
    "South Sudan": "South Sudan",
    "São Tomé and Príncipe": "Sao Tome and Principe",
    "Yemen": "Yemen",
    "Comoros": "Comoros",
    "Tajikistan": "Tajikistan",
    "Lesotho": "Lesotho",
    "Solomon Is.": "Solomon Islands",
    "Marshall Is.": "Marshall Islands",
    "Vanuatu": "Vanuatu",
    "Micronesia": "Micronesia"
}

export default geojson_to_db_map;