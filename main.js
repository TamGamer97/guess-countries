// const allCountries = [
//     ['Country', 'Found'],
//     ["Bhutan",1],                           
// ["Democratic Republic of the Congo",1], 
// ["Liechtenstein",1],                    
// ["Maldives",1],                         
// ["Sudan",1],                            
// ["Zimbabwe",1],                         
// ["Mauritania",1],                       
// ["Mozambique",1],                       
// ["Nigeria",1],                          
// ["Swaziland",1],                        
// ["Tanzania",1],                         
// ["Iraq",1],                             
// ["Guyana",1],                           
// ["Namibia",1],                          
// ["Senegal",1],                          
// ["Turkmenistan",1],                     
// ["Afghanistan",1],                      
// ["Andorra",1],                          
// ["Fiji",1],                             
// ["Gabon",1],                            
// ["Uzbekistan",1],                       
// ["Cameroon",1],                         
// ["Cuba",1],                             
// ["Faroe Islands",1],                    
// ["El Salvador",1],                      
// ["Caribbean",1],                        
// ["Ethiopia",1],                         
// ["Mongolia",1],                         
// ["Puerto Rico",1],                      
// ["Samoa",1],                            
// ["Myanmar",1],                          
// ["Nicaragua",1],                        
// ["Seychelles",1],                       
// ["Tajikistan",1],                       
// ["Dominican Republic",1],               
// ["Guinea",1],                           
// ["Barbados",1],                         
// ["CI",1],                               
// ["Laos",1],                             
// ["Libya",1],                            
// ["Panama",1],                           
// ["Bahrain",1],                          
// ["Benin",1],                            
// ["Ghana",1],                            
// ["Haiti",1],                            
// ["Montenegro",1],                       
// ["Somalia",1],                          
// ["Syria",1],                            
// ["Ecuador",1],                          
// ["Honduras",1],                         
// ["Madagascar",1],                       
// ["Papua New Guinea",1],                 
// ["Tunisia",1],                          
// ["Angola",1],                           
// ["Botswana",1],                         
// ["Cyprus",1],                           
// ["Algeria",1],                          
// ["Bahamas",1],                          
// ["New Caledonia",1],                    
// ["Uganda",1],                           
// ["Yemen",1],                            
// ["Zambia",2],                           
// ["Antarctica",2],                       
// ["Paraguay",2],                         
// ["Jamaica",2],                          
// ["Palestine",2],                        
// ["Bolivia",2],                          
// ["Bosnia and Herzegovina",2],           
// ["Vietnam",2],                          
// ["Kenya",2],                            
// ["Luxembourg",2],                       
// ["Niger",2],                            
// ["Kuwait",2],                           
// ["Hawaii",2],                           
// ["Scotland",2],                         
// ["Cambodia",2],                         
// ["Uruguay",2],                          
// ["Kyrgyzstan",2],                       
// ["Saudi Arabia",2],                     
// ["Indonesia",2],                        
// ["Azerbaijan",2],                       
// ["United Arab Emirates",2],             
// ["Mauritius",2],                        
// ["Morocco",2],                          
// ["Albania",3],                          
// ["South Korea",3],                      
// ["Kazakhstan",3],                       
// ["Macedonia",3],                        
// ["Venezuela",3],                        
// ["Taiwan",3],                           
// ["Qatar",3],                            
// ["Jordan",3],                           
// ["Iceland",3],                          
// ["Guatemala",3],                        
// ["Costa Rica",3],                       
// ["Hong Kong",3],                        
// ["San Marino",3],                       
// ["Colombia",4],                         
// ["Moldova",4],                          
// ["Armenia",4],                          
// ["Malta",4],                            
// ["Nepal",5],                            
// ["Lebanon",5],                          
// ["Malaysia",5],                         
// ["Serbia",5],                           
// ["Peru",5],                             
// ["Trinidad and Tobago",5],              
// ["Lithuania",5],                        
// ["Estonia",6],                          
// ["Georgia",6],                          
// ["Iran",7],                             
// ["Chile",7],                            
// ["Latvia",7],                           
// ["Thailand",7],                         
// ["Egypt",7],                            
// ["Slovenia",8],                         
// ["Mexico",8],                           
// ["Belarus",8],                          
// ["Slovakia",9],                         
// ["Sri Lanka",9],                        
// ["Croatia",9],                          
// ["Philippines",9],                      
// ["Bangladesh",10],                      
// ["Turkey",10],                          
// ["Romania",13],                         
// ["Italy",14],                           
// ["South Africa",15],                    
// ["Hungary",15],                         
// ["Pakistan",16],                        
// ["Portugal",16],                        
// ["Ukraine",19],                         
// ["Greece",19],                          
// ["Oman",19],                            
// ["Argentina",19],                       
// ["Singapore",20],                       
// ["Bulgaria",20],                        
// ["Japan",25],                           
// ["Czech Republic ",26],                 
// ["Ireland",26],                         
// ["China",27],                           
// ["Finland",32],                         
// ["Brazil",33],                          
// ["Norway",34],                          
// ["Austria",35],                         
// ["Denmark",40],                         
// ["Belgium",41],                         
// ["New Zealand",42],                     
// ["Spain",43],                           
// ["Switzerland",57],                     
// ["Russia",62],                          
// ["Poland",65],                          
// ["Israel",73],                          
// ["Sweden",91],                          
// ["Netherlands",118],                    
// ["France",119],                         
// ["Australia",158],                      
// ["Canada",206],                         
// ["India",234],                          
// ["Germany",308],                        
// ["United Kingdom",614],                 
// ["United States",983],                  
// ["Unknown",1050],   
//     ]

// let newCountryList = []

// for (var x = 0; x < allCountries.length; x++)
// {
//     var country = allCountries[x][0]

//     var element = [country, x]

//     newCountryList.push(element)
// }

// const util = require('util');
// require('child_process').spawn('clip').stdin.end(util.inspect(JSON.stringify(newCountryList)));
// '[["Country",0],["Bhutan",1],["Democratic Republic of the Congo",2],["Liechtenstein",3],["Maldives",4],["Sudan",5],["Zimbabwe",6],["Mauritania",7],["Mozambique",8],["Nigeria",9],["Swaziland",10],["Tanzania",11],["Iraq",12],["Guyana",13],["Namibia",14],["Senegal",15],["Turkmenistan",16],["Afghanistan",17],["Andorra",18],["Fiji",19],["Gabon",20],["Uzbekistan",21],["Cameroon",22],["Cuba",23],["Faroe Islands",24],["El Salvador",25],["Caribbean",26],["Ethiopia",27],["Mongolia",28],["Puerto Rico",29],["Samoa",30],["Myanmar",31],["Nicaragua",32],["Seychelles",33],["Tajikistan",34],["Dominican Republic",35],["Guinea",36],["Barbados",37],["CI",38],["Laos",39],["Libya",40],["Panama",41],["Bahrain",42],["Benin",43],["Ghana",44],["Haiti",45],["Montenegro",46],["Somalia",47],["Syria",48],["Ecuador",49],["Honduras",50],["Madagascar",51],["Papua New Guinea",52],["Tunisia",53],["Angola",54],["Botswana",55],["Cyprus",56],["Algeria",57],["Bahamas",58],["New Caledonia",59],["Uganda",60],["Yemen",61],["Zambia",62],["Antarctica",63],["Paraguay",64],["Jamaica",65],["Palestine",66],["Bolivia",67],["Bosnia and Herzegovina",68],["Vietnam",69],["Kenya",70],["Luxembourg",71],["Niger",72],["Kuwait",73],["Hawaii",74],["Scotland",75],["Cambodia",76],["Uruguay",77],["Kyrgyzstan",78],["Saudi Arabia",79],["Indonesia",80],["Azerbaijan",81],["United Arab Emirates",82],["Mauritius",83],["Morocco",84],["Albania",85],["South Korea",86],["Kazakhstan",87],["Macedonia",88],["Venezuela",89],["Taiwan",90],["Qatar",91],["Jordan",92],["Iceland",93],["Guatemala",94],["Costa Rica",95],["Hong Kong",96],["San Marino",97],["Colombia",98],["Moldova",99],["Armenia",100],["Malta",101],["Nepal",102],["Lebanon",103],["Malaysia",104],["Serbia",105],["Peru",106],["Trinidad and Tobago",107],["Lithuania",108],["Estonia",109],["Georgia",110],["Iran",111],["Chile",112],["Latvia",113],["Thailand",114],["Egypt",115],["Slovenia",116],["Mexico",117],["Belarus",118],["Slovakia",119],["Sri Lanka",120],["Croatia",121],["Philippines",122],["Bangladesh",123],["Turkey",124],["Romania",125],["Italy",126],["South Africa",127],["Hungary",128],["Pakistan",129],["Portugal",130],["Ukraine",131],["Greece",132],["Oman",133],["Argentina",134],["Singapore",135],["Bulgaria",136],["Japan",137],["Czech Republic ",138],["Ireland",139],["China",140],["Finland",141],["Brazil",142],["Norway",143],["Austria",144],["Denmark",145],["Belgium",146],["New Zealand",147],["Spain",148],["Switzerland",149],["Russia",150],["Poland",151],["Israel",152],["Sweden",153],["Netherlands",154],["France",155],["Australia",156],["Canada",157],["India",158],["Germany",159],["United Kingdom",160],["United States",161],["Unknown",162]]'


const AllCountrywithCodes = [
	{"code": "AF", "name": "Afghanistan"},
	{"code": "AL", "name": "Albania"},
	{"code": "DZ", "name": "Algeria"},
	{"code": "AD", "name": "Andorra"},
	{"code": "AO", "name": "Angola"},
	{"code": "AI", "name": "Anguilla"},
	{"code": "AG", "name": "Antigua and Barbuda"},
	{"code": "AR", "name": "Argentina"},
	{"code": "AM", "name": "Armenia"},
	{"code": "AW", "name": "Aruba"},
	{"code": "AU", "name": "Australia"},
	{"code": "AT", "name": "Austria"},
	{"code": "AZ", "name": "Azerbaijan"},
	{"code": "BS", "name": "Bahamas"},
	{"code": "BH", "name": "Bahrain"},
	{"code": "BD", "name": "Bangladesh"},
	{"code": "BB", "name": "Barbados"},
	{"code": "BY", "name": "Belarus"},
	{"code": "BE", "name": "Belgium"},
	{"code": "BZ", "name": "Belize"},
	{"code": "BJ", "name": "Benin"},
	{"code": "BT", "name": "Bhutan"},
	{"code": "BO", "name": "Bolivia"},
	{"code": "BA", "name": "Bosnia and Herzegovina"},
	{"code": "BW", "name": "Botswana"},
	{"code": "BR", "name": "Brazil"},
	{"code": "BN", "name": "Brunei"},
	{"code": "BG", "name": "Bulgaria"},
	{"code": "BF", "name": "Burkina Faso"},
	{"code": "BI", "name": "Burundi"},
	{"code": "CV", "name": "Cabo Verde"},
	{"code": "KH", "name": "Cambodia"},
	{"code": "CM", "name": "Cameroon"},
	{"code": "CA", "name": "Canada"},
	{"code": "CF", "name": "Central African Republic"},
	{"code": "TD", "name": "Chad"},
	{"code": "CL", "name": "Chile"},
	{"code": "CN", "name": "China"},
	{"code": "CO", "name": "Colombia"},
	{"code": "KM", "name": "Comoros"},
	{"code": "CG", "name": "Congo"},
	{"code": "CR", "name": "Costa Rica"},
	{"code": "HR", "name": "Croatia"},
	{"code": "CU", "name": "Cuba"},
	{"code": "CY", "name": "Cyprus"},
	{"code": "CZ", "name": "Czechia"},
	{"code": "CI", "name": "Cote d'Ivoire"},
	{"code": "DK", "name": "Denmark"},
	{"code": "DJ", "name": "Djibouti"},
	{"code": "DM", "name": "Dominica"},
	{"code": "DO", "name": "Dominican Republic"},
	{"code": "EC", "name": "Ecuador"},
	{"code": "EG", "name": "Egypt"},
	{"code": "SV", "name": "El Salvador"},
	{"code": "GQ", "name": "Equatorial Guinea"},
	{"code": "ER", "name": "Eritrea"},
	{"code": "EE", "name": "Estonia"},
	{"code": "SZ", "name": "Eswatini"},
	{"code": "ET", "name": "Ethiopia"},
	{"code": "FJ", "name": "Fiji"},
	{"code": "FI", "name": "Finland"},
	{"code": "FR", "name": "France"},
	{"code": "GA", "name": "Gabon"},
	{"code": "GM", "name": "Gambia"},
	{"code": "GE", "name": "Georgia"},
	{"code": "DE", "name": "Germany"},
	{"code": "GH", "name": "Ghana"},
	{"code": "GR", "name": "Greece"},
	{"code": "GL", "name": "Greenland"},
	{"code": "GD", "name": "Grenada"},
	{"code": "GT", "name": "Guatemala"},
	{"code": "GY", "name": "Guyana"},
	{"code": "HT", "name": "Haiti"},
	{"code": "VA", "name": "Holy See"},
	{"code": "HN", "name": "Honduras"},
	{"code": "HK", "name": "Hong Kong"},
	{"code": "HU", "name": "Hungary"},
	{"code": "IS", "name": "Iceland"},
	{"code": "IN", "name": "India"},
	{"code": "ID", "name": "Indonesia"},
	{"code": "IR", "name": "Iran"},
	{"code": "IQ", "name": "Iraq"},
	{"code": "IE", "name": "Ireland"},
	{"code": "IL", "name": "Palestine"},
	{"code": "IT", "name": "Italy"},
	{"code": "JM", "name": "Jamaica"},
	{"code": "JP", "name": "Japan"},
	{"code": "JO", "name": "Jordan"},
	{"code": "KZ", "name": "Kazakhstan"},
	{"code": "KE", "name": "Kenya"},
	{"code": "KI", "name": "Kiribati"},
	{"code": "KP", "name": "North Korea"},
	{"code": "KR", "name": "South Korea"},
	{"code": "KW", "name": "Kuwait"},
	{"code": "KG", "name": "Kyrgyzstan"},
	{"code": "LA", "name": "Lao"},
	{"code": "LV", "name": "Latvia"},
	{"code": "LB", "name": "Lebanon"},
	{"code": "LS", "name": "Lesotho"},
	{"code": "LR", "name": "Liberia"},
	{"code": "LY", "name": "Libya"},
	{"code": "LI", "name": "Liechtenstein"},
	{"code": "LT", "name": "Lithuania"},
	{"code": "LU", "name": "Luxembourg"},
	{"code": "MG", "name": "Madagascar"},
	{"code": "MW", "name": "Malawi"},
	{"code": "MY", "name": "Malaysia"},
	{"code": "MV", "name": "Maldives"},
	{"code": "ML", "name": "Mali"},
	{"code": "MT", "name": "Malta"},
	{"code": "MH", "name": "Marshall Islands"},
	{"code": "MR", "name": "Mauritania"},
	{"code": "MU", "name": "Mauritius"},
	{"code": "MX", "name": "Mexico"},
	{"code": "FM", "name": "Micronesia"},
	{"code": "MD", "name": "Moldova"},
	{"code": "MC", "name": "Monaco"},
	{"code": "MN", "name": "Mongolia"},
	{"code": "ME", "name": "Montenegro"},
	{"code": "MA", "name": "Morocco"},
	{"code": "MZ", "name": "Mozambique"},
	{"code": "MM", "name": "Myanmar"},
	{"code": "NA", "name": "Namibia"},
	{"code": "NR", "name": "Nauru"},
	{"code": "NP", "name": "Nepal"},
	{"code": "NL", "name": "Netherlands"},
	{"code": "NZ", "name": "New Zealand"},
	{"code": "NI", "name": "Nicaragua"},
	{"code": "NE", "name": "Niger"},
	{"code": "NG", "name": "Nigeria"},
	{"code": "NO", "name": "Norway"},
	{"code": "OM", "name": "Oman"},
	{"code": "PK", "name": "Pakistan"},
	{"code": "PW", "name": "Palau"},
	{"code": "PS", "name": "Palestine"},
	{"code": "PA", "name": "Panama"},
	{"code": "PG", "name": "Papua New Guinea"},
	{"code": "PY", "name": "Paraguay"},
	{"code": "PE", "name": "Peru"},
	{"code": "PH", "name": "Philippines"},
	{"code": "PL", "name": "Poland"},
	{"code": "PT", "name": "Portugal"},
	{"code": "QA", "name": "Qatar"},
	{"code": "MK", "name": "North Macedonia"},
	{"code": "RO", "name": "Romania"},
	{"code": "RU", "name": "Russia"},
	{"code": "RW", "name": "Rwanda"},
	{"code": "LC", "name": "Saint Lucia"},
	{"code": "WS", "name": "Samoa"},
	{"code": "SM", "name": "San Marino"},
	{"code": "ST", "name": "Sao Tome and Principe"},
	{"code": "SA", "name": "Saudi Arabia"},
	{"code": "SN", "name": "Senegal"},
	{"code": "RS", "name": "Serbia"},
	{"code": "SC", "name": "Seychelles"},
	{"code": "SL", "name": "Sierra Leone"},
	{"code": "SG", "name": "Singapore"},
	{"code": "SX", "name": "Sint Maarten"},
	{"code": "SK", "name": "Slovakia"},
	{"code": "SI", "name": "Slovenia"},
	{"code": "SB", "name": "Solomon Islands"},
	{"code": "SO", "name": "Somalia"},
	{"code": "ZA", "name": "South Africa"},
	{"code": "SS", "name": "South Sudan"},
	{"code": "ES", "name": "Spain"},
	{"code": "LK", "name": "Sri Lanka"},
	{"code": "SD", "name": "Sudan"},
	{"code": "SR", "name": "Suriname"},
	{"code": "SE", "name": "Sweden"},
	{"code": "CH", "name": "Switzerland"},
	{"code": "SY", "name": "Syria"},
	{"code": "TW", "name": "Taiwan"},
	{"code": "TJ", "name": "Tajikistan"},
	{"code": "TZ", "name": "Tanzania"},
	{"code": "TH", "name": "Thailand"},
	{"code": "TL", "name": "Timor-Leste"},
	{"code": "TG", "name": "Togo"},
	{"code": "TO", "name": "Tonga"},
	{"code": "TT", "name": "Trinidad"},
	{"code": "TN", "name": "Tunisia"},
	{"code": "TR", "name": "Turkey"},
	{"code": "TM", "name": "Turkmenistan"},
	{"code": "TV", "name": "Tuvalu"},
	{"code": "UG", "name": "Uganda"},
	{"code": "UA", "name": "Ukraine"},
	{"code": "AE", "name": "United Arab Emirates"},
	{"code": "GB", "name": "United Kingdom"},
	{"code": "US", "name": "United States"},
	{"code": "UY", "name": "Uruguay"},
	{"code": "UZ", "name": "Uzbekistan"},
	{"code": "VU", "name": "Vanuatu"},
	{"code": "VE", "name": "Venezuela"},
	{"code": "VN", "name": "Vietnam"},
	{"code": "YE", "name": "Yemen"},
	{"code": "ZM", "name": "Zambia"},
	{"code": "ZW", "name": "Zimbabwe"},

    {"code": "GN", "name": "Guinea"},
    {"code": "CD", "name": "Democratic Republic of Congo"},
];

// let newL = {

// }

// for (var x = 0; x < AllCountrywithCodes.length; x++)
// {
//     newL[AllCountrywithCodes[x].code] = 100
// }

// console.log(newL)


function checkWords(guesedName, actualName)
{
    guesedName = guesedName.toLowerCase()
    actualName = actualName.toLowerCase()

    if(countWords(guesedName) > 1)
    {
        var gottenWords = 0
        var amountOfWords = guesedName.split(' ').length

        var shortWordInd = []
    
        for (var x = 0; x < (guesedName.split(' ').length); x++)
        {
            oneWordInGuess = guesedName.split(' ')[x]


            if(oneWordInGuess.length > 2)
            {
                if(actualName.includes(oneWordInGuess))
                {
                    gottenWords += 1
                }
            }else{
                amountOfWords -= 1
                shortWordInd.push(x)

            }
    
        }
    
        gottenWords = gottenWords / amountOfWords
        
        if(amountOfWords != 1)
        {
            if(gottenWords >= 0.5) // if you got alteast half of the words correct
            {
                return true
            }
        }else{
            var guessedWords = guesedName.split(' ')

            for (var y = 0; y < shortWordInd.length; y++)
            {
                var indShortforShortword = shortWordInd[y]

                guessedWords.splice(indShortforShortword, 1)

            }

            guesedName = guessedWords[0]

        }

    }
    
    if(actualName.includes(guesedName))
    {
        if(countWords(guesedName) >= (countWords(actualName)) / 3 )
        {
            return true
        }
    }
    
    return false





    function countWords(str) {
        const arr = str.split(' ');

        return arr.filter(word => word !== '').length;
        }
}

console.log(checkWords('Republic Republic', 'Democratic Republic of Congo'))