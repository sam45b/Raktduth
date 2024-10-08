const genders = [
  {value:"Male",label:"Male"},
  {value:"Female",label:"Female"},
  {value:"Other",label:"Other"}
]
const states = [
    { value: "35", label: "Andaman & Nicobar Islands" },
    { value: "28", label: "Andhra Pradesh" },
    { value: "12", label: "Arunachal Pradesh" },
    { value: "18", label: "Assam" },
    { value: "10", label: "Bihar" },
    { value: "94", label: "Chandigarh" },
    { value: "22", label: "Chhattisgarh" },
    { value: "26", label: "Dadra & Nagar Haveli" },
    { value: "25", label: "Daman & Diu" },
    { value: "97", label: "Delhi" },
    { value: "30", label: "Goa" },
    { value: "24", label: "Gujarat" },
    { value: "96", label: "Haryana" },
    { value: "92", label: "Himachal Pradesh" },
    { value: "91", label: "Jammu and Kashmir" },
    { value: "20", label: "Jharkhand" },
    { value: "29", label: "Karnataka" },
    { value: "32", label: "Kerala" },
    { value: "37", label: "Ladakh" },
    { value: "31", label: "Lakshadweep" },
    { value: "23", label: "Madhya Pradesh" },
    { value: "27", label: "Maharashtra" },
    { value: "14", label: "Manipur" },
    { value: "17", label: "Meghalaya" },
    { value: "15", label: "Mizoram" },
    { value: "13", label: "Nagaland" },
    { value: "21", label: "Odisha" },
    { value: "34", label: "Puducherry" },
    { value: "93", label: "Punjab" },
    { value: "98", label: "Rajasthan" },
    { value: "11", label: "Sikkim" },
    { value: "33", label: "Tamil Nadu" },
    { value: "36", label: "Telangana" },
    { value: "16", label: "Tripura" },
    { value: "95", label: "Uttarakhand" },
    { value: "99", label: "Uttar Pradesh" },
    { value: "19", label: "West Bengal" },
  ];
  
  const Districts = {
    35: [
      { label: "Nicobars", value: "638" },
      { label: "North  & Middle Andaman", value: "639" },
      { label: "South Andaman", value: "640" },
    ],
    28: [
      { label: "Alluri Sitharama Raju", value: "679" },
      { label: "Anakapalli", value: "680" },
      { label: "Anantapur", value: "553" },
      { label: "Annamayya", value: "753" },
      { label: "Bapatla", value: "750" },
      { label: "Chittoor", value: "554" },
      { label: "East Godavari", value: "545" },
      { label: "Eluru", value: "748" },
      { label: "Guntur", value: "548" },
      { label: "Kakinada", value: "681" },
      { label: "Konaseema", value: "682" },
      { label: "Krishna", value: "547" },
      { label: "Kurnool", value: "552" },
      { label: "Nandyal", value: "755" },
      { label: "NTR", value: "749" },
      { label: "Palnadu", value: "751" },
      { label: "Parvathipuram Manyam", value: "743" },
      { label: "Prakasam", value: "549" },
      { label: "Srikakulam", value: "542" },
      { label: "Sri Potti Sriramulu Nellore", value: "550" },
      { label: "Sri Sathya Sai", value: "754" },
      { label: "Tirupati", value: "752" },
      { label: "Visakhapatnam", value: "544" },
      { label: "Vizianagaram", value: "543" },
      { label: "West Godavari", value: "546" },
      { label: "Y.S.R.", value: "551" },
    ],
    12: [
      { label: "Anjaw", value: "260" },
      { label: "Changlang", value: "253" },
      { label: "Dibang Valley", value: "257" },
      { label: "East Kameng", value: "247" },
      { label: "East Siang", value: "251" },
      { label: "Itanagar Capital Complex", value: "299" },
      { label: "Kamle", value: "701" },
      { label: "Kra Daadi", value: "702" },
      { label: "Kurung Kumey", value: "256" },
      { label: "Lepa-Rada", value: "703" },
      { label: "Lohit", value: "259" },
      { label: "Longding", value: "642" },
      { label: "Lower Dibang Valley", value: "258" },
      { label: "Lower Siang", value: "704" },
      { label: "Lower Subansiri", value: "255" },
      { label: "Namsai", value: "678" },
      { label: "Pakke-Kessang", value: "706" },
      { label: "Papum Pare", value: "248" },
      { label: "Shi Yomi", value: "707" },
      { label: "Siang", value: "709" },
      { label: "Tawang", value: "245" },
      { label: "Tirap", value: "254" },
      { label: "Upper Siang", value: "252" },
      { label: "Upper Subansiri", value: "249" },
      { label: "West Kameng", value: "246" },
      { label: "West Siang", value: "250" },
    ],
    18: [
      { label: "Baksa", value: "324" },
      { label: "Barpeta", value: "303" },
      { label: "Bishwanath", value: "710" },
      { label: "Bongaigaon", value: "319" },
      { label: "Cachar", value: "316" },
      { label: "Charaideo", value: "711" },
      { label: "Chirang", value: "320" },
      { label: "Darrang", value: "325" },
      { label: "Dhemaji", value: "308" },
      { label: "Dhubri", value: "301" },
      { label: "Dibrugarh", value: "310" },
      { label: "Dima Hasao", value: "315" },
      { label: "Goalpara", value: "302" },
      { label: "Golaghat", value: "313" },
      { label: "Hailakandi", value: "318" },
      { label: "Hojai", value: "712" },
      { label: "Jorhat", value: "312" },
      { label: "Kamrup", value: "321" },
      { label: "Kamrup Metropolitan", value: "322" },
      { label: "Karbi Anglong", value: "314" },
      { label: "Karimganj", value: "317" },
      { label: "Kokrajhar", value: "300" },
      { label: "Lakhimpur", value: "307" },
      { label: "Majuli", value: "746" },
      { label: "Majuli", value: "713" },
      { label: "Morigaon", value: "304" },
      { label: "Nagaon", value: "305" },
      { label: "Nalbari", value: "323" },
      { label: "Sivasagar", value: "311" },
      { label: "Sonitpur", value: "306" },
      { label: "South Salmara", value: "714" },
      { label: "Tinsukia", value: "309" },
      { label: "Udalguri", value: "326" },
      { label: "West Karbi Anglong", value: "715" },
    ],
    10: [
      { label: "Araria", value: "209" },
      { label: "Arwal", value: "240" },
      { label: "Aurangabad", value: "235" },
      { label: "Banka", value: "225" },
      { label: "Begusarai", value: "222" },
      { label: "Bhagalpur", value: "224" },
      { label: "Bhojpur", value: "231" },
      { label: "Buxar", value: "232" },
      { label: "Darbhanga", value: "215" },
      { label: "Gaya", value: "236" },
      { label: "Gopalganj", value: "217" },
      { label: "Jamui", value: "238" },
      { label: "Jehanabad", value: "239" },
      { label: "Kaimur (Bhabua)", value: "233" },
      { label: "Katihar", value: "212" },
      { label: "Khagaria", value: "223" },
      { label: "Kishanganj", value: "210" },
      { label: "Lakhisarai", value: "227" },
      { label: "Madhepura", value: "213" },
      { label: "Madhubani", value: "207" },
      { label: "Munger", value: "226" },
      { label: "Muzaffarpur", value: "216" },
      { label: "Nalanda", value: "229" },
      { label: "Nawada", value: "237" },
      { label: "Pashchim Champaran", value: "203" },
      { label: "Patna", value: "230" },
      { label: "Purba Champaran", value: "204" },
      { label: "Purnia", value: "211" },
      { label: "Rohtas", value: "234" },
      { label: "Saharsa", value: "214" },
      { label: "Samastipur", value: "221" },
      { label: "Saran", value: "219" },
      { label: "Sheikhpura", value: "228" },
      { label: "Sheohar", value: "205" },
      { label: "Sitamarhi", value: "206" },
      { label: "Siwan", value: "218" },
      { label: "Supaul", value: "208" },
      { label: "Vaishali", value: "220" },
    ],
    94: [{ label: "Chandigarh", value: "55" }],
    22: [
      { label: "Alluri Sitharama Raju", value: "679" },
      { label: "Anakapalli", value: "680" },
      { label: "Anantapur", value: "553" },
      { label: "Annamayya", value: "753" },
      { label: "Bapatla", value: "750" },
      { label: "Chittoor", value: "554" },
      { label: "East Godavari", value: "545" },
      { label: "Eluru", value: "748" },
      { label: "Guntur", value: "548" },
      { label: "Kakinada", value: "681" },
      { label: "Konaseema", value: "682" },
      { label: "Krishna", value: "547" },
      { label: "Kurnool", value: "552" },
      { label: "Nandyal", value: "755" },
      { label: "NTR", value: "749" },
      { label: "Palnadu", value: "751" },
      { label: "Parvathipuram Manyam", value: "743" },
      { label: "Prakasam", value: "549" },
      { label: "Srikakulam", value: "542" },
      { label: "Sri Potti Sriramulu Nellore", value: "550" },
      { label: "Sri Sathya Sai", value: "754" },
      { label: "Tirupati", value: "752" },
      { label: "Visakhapatnam", value: "544" },
      { label: "Vizianagaram", value: "543" },
      { label: "West Godavari", value: "546" },
      { label: "Y.S.R.", value: "551" },
    ],
    25: [
      { label: "Daman", value: "495" },
      { label: "Diu", value: "494" },
    ],
    26: [{ label: "Dadra & Nagar Haveli", value: "496" }],
    97: [
      { label: "Central", value: "95" },
      { label: "East", value: "93" },
      { label: "New Delhi", value: "94" },
      { label: "North", value: "91" },
      { label: "North East", value: "92" },
      { label: "North West", value: "90" },
      { label: "Shahdara", value: "653" },
      { label: "South", value: "98" },
      { label: "South East", value: "652" },
      { label: "South West", value: "97" },
      { label: "West", value: "96" },
    ],
    30: [
      { label: "North Goa", value: "585" },
      { id: "south Goa", value: "586" },
    ],
    24: [
      { label: "Ahmedabad", value: "474" },
      { label: "Amreli", value: "480" },
      { label: "Anand", value: "482" },
      { label: "Aravalli", value: "656" },
      { label: "Banas Kantha", value: "469" },
      { label: "Bharuch", value: "488" },
      { label: "Bhavnagar", value: "481" },
      { label: "Botad", value: "803" },
      { label: "Chhotaudepur", value: "655" },
      { label: "Dahod", value: "485" },
      { label: "Dang", value: "654" },
      { label: "Devbhoomi Dwarka", value: "717" },
      { label: "Gandhinagar", value: "473" },
      { label: "Gir Somnath", value: "718" },
      { label: "Jamnagar", value: "477" },
      { label: "Junagadh", value: "479" },
      { label: "Kachchh", value: "468" },
      { label: "Kheda", value: "483" },
      { label: "Mahesana", value: "471" },
      { label: "Mahisagar", value: "657" },
      { label: "Morbi", value: "676" },
      { label: "Narmada", value: "487" },
      { label: "Navsari", value: "490" },
      { label: "Panch Mahals", value: "484" },
      { label: "Patan", value: "470" },
      { label: "Porbandar", value: "478" },
      { label: "Rajkot", value: "476" },
      { label: "Sabar Kantha", value: "472" },
      { label: "Surat", value: "492" },
      { label: "Surendranagar", value: "475" },
      { label: "Tapi", value: "493" },
      { label: "Vadodara", value: "486" },
      { label: "Valsad", value: "491" },
    ],
    96: [
      { label: "Ambala", value: "70" },
      { label: "Bhiwani", value: "81" },
      { label: "Charkhi Dadri", value: "719" },
      { label: "Faridabad", value: "88" },
      { label: "Fatehabad", value: "78" },
      { label: "Gurgaon", value: "86" },
      { label: "Hisar", value: "80" },
      { label: "Jhajjar", value: "83" },
      { label: "Jind", value: "77" },
      { label: "Kaithal", value: "73" },
      { label: "Karnal", value: "74" },
      { label: "Kurukshetra", value: "72" },
      { label: "Mahendragarh", value: "84" },
      { label: "Nuh", value: "720" },
      { label: "Palwal", value: "89" },
      { label: "Panchkula", value: "69" },
      { label: "Panipat", value: "75" },
      { label: "Rewari", value: "85" },
      { label: "Rohtak", value: "82" },
      { label: "Sirsa", value: "79" },
      { label: "Sonipat", value: "76" },
      { label: "Yamunanagar", value: "71" },
    ],
    91: [
      { label: "Anantnag", value: "14" },
      { label: "Badgam", value: "2" },
      { label: "Bandipore", value: "9" },
      { label: "Baramula", value: "8" },
      { label: "Doda", value: "16" },
      { label: "Ganderbal", value: "11" },
      { label: "Jammu", value: "21" },
      { label: "Kathua", value: "7" },
      { label: "Kishtwar", value: "18" },
      { label: "Kulgam", value: "15" },
      { label: "Kupwara", value: "1" },
      { label: "Poonch", value: "5" },
      { label: "Pulwama", value: "12" },
      { label: "Rajouri", value: "6" },
      { label: "Ramban", value: "17" },
      { label: "Reasi", value: "20" },
      { label: "Samba", value: "22" },
      { label: "Shopian", value: "13" },
      { label: "Srinagar", value: "10" },
      { label: "Udhampur", value: "19" },
    ],
    92: [
      { label: "Bilaspur", value: "30" },
      { label: "Chamba", value: "23" },
      { label: "Hamirpur", value: "28" },
      { label: "Kangra", value: "24" },
      { label: "Kinnaur", value: "34" },
      { label: "Kullu", value: "26" },
      { label: "Lahul & Spiti", value: "25" },
      { label: "Mandi", value: "27" },
      { label: "Shimla", value: "33" },
      { label: "Sirmaur", value: "32" },
      { label: "Solan", value: "31" },
      { label: "Una", value: "29" },
    ],
    20: [
      { label: "Bokaro", value: "355" },
      { label: "Chatra", value: "347" },
      { label: "Deoghar", value: "350" },
      { label: "Dhanbad", value: "354" },
      { label: "Dumka", value: "362" },
      { label: "Garhwa", value: "346" },
      { label: "Giridih", value: "349" },
      { label: "Godda", value: "351" },
      { label: "Gumla", value: "366" },
      { label: "Hazaribagh", value: "360" },
      { label: "Jamtara", value: "363" },
      { label: "Khunti", value: "365" },
      { label: "Kodarma", value: "348" },
      { label: "Latehar", value: "359" },
      { label: "Lohardaga", value: "356" },
      { label: "Pakur", value: "353" },
      { label: "Palamu", value: "358" },
      { label: "Pashchimi Singhbhum", value: "368" },
      { label: "Purbi Singhbhum", value: "357" },
      { label: "Ramgarh", value: "361" },
      { label: "Ranchi", value: "364" },
      { label: "Sahibganj", value: "352" },
      { label: "Saraikela-Kharsawan", value: "369" },
      { label: "Simdega", value: "367" },
    ],
    29: [
      { label: "Bagalkot", value: "556" },
      { label: "Ballari", value: "565" },
      { label: "Bangalore Rural", value: "583" },
      { label: "Bangalore Urban", value: "572" },
      { label: "Belagavi", value: "555" },
      { label: "Bidar", value: "558" },
      { label: "Chamarajanagar", value: "578" },
      { label: "Chikkaballapura", value: "582" },
      { label: "Chikmagalur", value: "570" },
      { label: "Chitradurga", value: "566" },
      { label: "Dakshina Kannada", value: "575" },
      { label: "Davanagere", value: "567" },
      { label: "Dharwad", value: "562" },
      { label: "Gadag", value: "561" },
      { label: "Hassan", value: "574" },
      { label: "Haveri", value: "564" },
      { label: "Kalaburagi", value: "721" },
      { label: "Kodagu", value: "576" },
      { label: "Kolar", value: "581" },
      { label: "Koppal", value: "560" },
      { label: "Mandya", value: "573" },
      { label: "Mysore", value: "577" },
      { label: "Raichur", value: "559" },
      { label: "Ramanagara", value: "584" },
      { label: "Shimoga", value: "568" },
      { label: "Tumkur", value: "571" },
      { label: "Udupi", value: "569" },
      { label: "Uttara Kannada", value: "563" },
      { label: "Vijayapura", value: "722" },
      { label: "Yadgir", value: "580" },
    ],
    32: [
      { label: "Alappuzha", value: "598" },
      { label: "Ernakulam", value: "595" },
      { label: "Idukki", value: "596" },
      { label: "Kannur", value: "589" },
      { label: "Kasaragod", value: "588" },
      { label: "Kollam", value: "600" },
      { label: "Kottayam", value: "597" },
      { label: "Kozhikode", value: "591" },
      { label: "Malappuram", value: "592" },
      { label: "Palakkad", value: "593" },
      { label: "Pathanamthitta", value: "599" },
      { label: "Thiruvananthapuram", value: "601" },
      { label: "Thrissur", value: "594" },
      { label: "Wayanad", value: "590" },
    ],
    37: [
      { label: "Kargil", value: "4" },
      { label: "Leh (Ladakh)", value: "3" },
    ],
    31: [{ label: "Lakshadweep", value: "587" }],
    23: [{ label: "Agar Malwa", value: "641" },
    { label: "Alirajpur", value: "465" },
    { label: "Anuppur", value: "461" },
    { label: "Ashoknagar", value: "459" },
    { label: "Balaghat", value: "457" },
    { label: "Barwani", value: "441" },
    { label: "Betul", value: "447" },
    { label: "Bhind", value: "420" },
    { label: "Bhopal", value: "444" },
    { label: "Burhanpur", value: "467" },
    { label: "Chhatarpur", value: "425" },
    { label: "Chhindwara", value: "455" },
    { label: "Damoh", value: "428" },
    { label: "Datia", value: "422" },
    { label: "Dewas", value: "437" },
    { label: "Dhar", value: "438" },
    { label: "Dindori", value: "453" },
    { label: "Guna", value: "458" },
    { label: "Gwalior", value: "421" },
    { label: "Harda", value: "448" },
    { label: "Hoshangabad", value: "449" },
    { label: "Indore", value: "439" },
    { label: "Jabalpur", value: "451" },
    { label: "Jhabua", value: "464" },
    { label: "Katni", value: "450" },
    { label: "Khandwa (East Nimar)", value: "466" },
    { label: "Khargone (West Nimar)", value: "440" },
    { label: "Mandla", value: "454" },
    { label: "Mandsaur", value: "433" },
    { label: "Morena", value: "419" },
    { label: "Narsimhapur", value: "452" },
    { label: "Neemuch", value: "432" },
    { label: "Niwari", value: "723" },
    { label: "Panna", value: "426" },
    { label: "Raisen", value: "446" },
    { label: "Rajgarh", value: "442" },
    { label: "Ratlam", value: "434" },
    { label: "Rewa", value: "430" },
    { label: "Sagar", value: "427" },
    { label: "Satna", value: "429" },
    { label: "Sehore", value: "445" },
    { label: "Seoni", value: "456" },
    { label: "Shahdol", value: "460" },
    { label: "Shajapur", value: "436" },
    { label: "Sheopur", value: "418" },
    { label: "Shivpuri", value: "423" },
    { label: "Sidhi", value: "462" },
    { label: "Singrauli", value: "463" },
    { label: "Tikamgarh", value: "424" },
    { label: "Ujjain", value: "435" },
    { label: "Umaria", value: "431" },
    { label: "Vidisha", value: "443" },],
    27: [{ label: "Ahmadnagar", value: "522" },
    { label: "Akola", value: "501" },
    { label: "Amravati", value: "503" },
    { label: "Aurangabad", value: "515" },
    { label: "Bhandara", value: "506" },
    { label: "Bid", value: "523" },
    { label: "Buldana", value: "500" },
    { label: "Chandrapur", value: "509" },
    { label: "Dhule", value: "498" },
    { label: "Gadchiroli", value: "508" },
    { label: "Gondiya", value: "507" },
    { label: "Hingoli", value: "512" },
    { label: "Jalgaon", value: "499" },
    { label: "Jalna", value: "514" },
    { label: "Kolhapur", value: "530" },
    { label: "Latur", value: "524" },
    { label: "Mumbai", value: "519" },
    { label: "Mumbai Suburban", value: "518" },
    { label: "Nagpur", value: "505" },
    { label: "Nanded", value: "511" },
    { label: "Nandurbar", value: "497" },
    { label: "Nashik", value: "516" },
    { label: "Osmanabad", value: "525" },
    { label: "Palghar", value: "669" },
    { label: "Parbhani", value: "513" },
    { label: "Pune", value: "521" },
    { label: "Raigarh", value: "520" },
    { label: "Ratnagiri", value: "528" },
    { label: "Sangli", value: "531" },
    { label: "Satara", value: "527" },
    { label: "Sindhudurg", value: "529" },
    { label: "Solapur", value: "526" },
    { label: "Thane", value: "517" },
    { label: "Wardha", value: "504" },
    { label: "Washim", value: "502" },
    { label: "Yavatmal", value: "510" },],
    14: [{ label: "Bishnupur", value: "275" },
    { label: "Chandel", value: "280" },
    { label: "Churachandpur", value: "274" },
    { label: "Imphal East", value: "278" },
    { label: "Imphal West", value: "277" },
    { label: "Jiribam", value: "724" },
    { label: "Kakching", value: "725" },
    { label: "Kamjong", value: "726" },
    { label: "Kangpokpi", value: "727" },
    { label: "Noney", value: "728" },
    { label: "Pherzawl", value: "729" },
    { label: "Senapati", value: "272" },
    { label: "Tamenglong", value: "273" },
    { label: "Tengnoupal", value: "730" },
    { label: "Thoubal", value: "276" },
    { label: "Ukhrul", value: "279" },],
    17: [{ label: "East Garo Hills", value: "294" },
    { label: "East Jaintia Hills", value: "660" },
    { label: "East Khasi Hills", value: "298" },
    { label: "North Garo Hills", value: "659" },
    { label: "Ribhoi", value: "297" },
    { label: "South Garo Hills", value: "295" },
    { label: "South West Garo Hills", value: "662" },
    { label: "South West Khasi Hills", value: "661" },
    { label: "West Garo Hills", value: "293" },
    { label: "West Jaintia Hills", value: "658" },
    { label: "West Khasi Hills", value: "296" },],
    15: [{ label: "Aizawl", value: "283" },
    { label: "Champhai", value: "284" },
    { label: "Kolasib", value: "282" },
    { label: "Lawngtlai", value: "287" },
    { label: "Lunglei", value: "286" },
    { label: "Mamit", value: "281" },
    { label: "Saiha", value: "288" },
    { label: "Serchhip", value: "285" },],
    13: [{ label: "Dimapur", value: "265" },
    { label: "Kiphire", value: "269" },
    { label: "Kohima", value: "270" },
    { label: "Longleng", value: "268" },
    { label: "Mokokchung", value: "262" },
    { label: "Mon", value: "261" },
    { label: "Noklak", value: "736" },
    { label: "Peren", value: "271" },
    { label: "Phek", value: "266" },
    { label: "Tuensang", value: "267" },
    { label: "Wokha", value: "264" },
    { label: "Zunheboto", value: "263" },],
    21: [{ label: "Angul", value: "384" },
    { label: "Balangir", value: "393" },
    { label: "Baleshwar", value: "377" },
    { label: "Bargarh", value: "382" },
    { label: "Baudh", value: "391" },
    { label: "Bhadrak", value: "378" },
    { label: "Cuttack", value: "381" },
    { label: "Debagarh", value: "373" },
    { label: "Dhenkanal", value: "383" },
    { label: "Gajapati", value: "389" },
    { label: "Ganjam", value: "388" },
    { label: "Jagatsinghapur", value: "380" },
    { label: "Jajapur", value: "370" },
    { label: "Jharsuguda", value: "371" },
    { label: "Kalahandi", value: "395" },
    { label: "Kandhamal", value: "390" },
    { label: "Kendrapara", value: "379" },
    { label: "Kendujhar", value: "375" },
    { label: "Khordha", value: "386" },
    { label: "Koraput", value: "398" },
    { label: "Malkangiri", value: "399" },
    { label: "Mayurbhanj", value: "376" },
    { label: "Nabarangapur", value: "397" },
    { label: "Nayagarh", value: "385" },
    { label: "Nuapada", value: "394" },
    { label: "Puri", value: "387" },
    { label: "Rayagada", value: "396" },
    { label: "Sambalpur", value: "372" },
    { label: "Subarnapur", value: "392" },
    { label: "Sundargarh", value: "374" },],
    34: [{ label: "Karaikal", value: "637" },
    { label: "Mahe", value: "636" },
    { label: "Puducherry", value: "635" },
    { label: "Yanam", value: "634" }],
    93: [{ label: "Amritsar", value: "49" },
    { label: "Barnala", value: "54" },
    { label: "Bathinda", value: "46" },
    { label: "Faridkot", value: "45" },
    { label: "Fatehgarh Sahib", value: "40" },
    { label: "Fazilka", value: "663" },
    { label: "Firozpur", value: "43" },
    { label: "Gurdaspur", value: "35" },
    { label: "Hoshiarpur", value: "38" },
    { label: "Jalandhar", value: "37" },
    { label: "Kapurthala", value: "36" },
    { label: "Ludhiana", value: "41" },
    { label: "Mansa", value: "47" },
    { label: "Moga", value: "42" },
    { label: "Muktsar", value: "44" },
    { label: "Pathankot", value: "664" },
    { label: "Patiala", value: "48" },
    { label: "Rupnagar", value: "51" },
    { label: "Sahibzada Ajit Singh Nagar", value: "52" },
    { label: "Sangrur", value: "53" },
    { label: "Shahid Bhagat Singh Nagar", value: "39" },
    { label: "Tarn Taran", value: "50" },],
    98: [{ label: "Ajmer", value: "119" },
    { label: "Alwar", value: "104" },
    { label: "Anoopgarh", value: "683" },
    { label: "Balotara", value: "684" },
    { label: "Banswara", value: "125" },
    { label: "Baran", value: "128" },
    { label: "Barmer", value: "115" },
    { label: "Beawar", value: "688" },
    { label: "Bharatpur", value: "105" },
    { label: "Bhilwara", value: "122" },
    { label: "Bikaner", value: "101" },
    { label: "Bundi", value: "121" },
    { label: "Chittaurgarh", value: "126" },
    { label: "Churu", value: "102" },
    { label: "Dausa", value: "109" },
    { label: "Deeg", value: "685" },
    { label: "Dhaulpur", value: "106" },
    { label: "Didwana-Kuchaman", value: "687" },
    { label: "Dudu", value: "686" },
    { label: "Dungarpur", value: "124" },
    { label: "Ganganagar", value: "99" },
    { label: "Gangapur City", value: "689" },
    { label: "Hanumangarh", value: "100" },
    { label: "Jaipur", value: "110" },
    { label: "Jaipur(Rural)", value: "690" },
    { label: "Jaisalmer", value: "114" },
    { label: "Jalor", value: "116" },
    { label: "Jhalawar", value: "129" },
    { label: "Jhunjhunun", value: "103" },
    { label: "Jodhpur", value: "113" },
    { label: "Jodhpur (Rural)", value: "699" },
    { label: "Karauli", value: "107" },
    { label: "Kekri", value: "692" },
    { label: "Khairthal-Tijara", value: "693" },
    { label: "Kota", value: "127" },
    { label: "Kotputli-Behror", value: "691" },
    { label: "Nagaur", value: "112" },
    { label: "Neem ka Thana", value: "694" },
    { label: "Pali", value: "118" },
    { label: "Phalodi", value: "695" },
    { label: "Pratapgarh", value: "131" },
    { label: "Rajsamand", value: "123" },
    { label: "Salumbar", value: "696" },
    { label: "Sanchore", value: "697" },
    { label: "Sawai Madhopur", value: "108" },
    { label: "Shahpura", value: "698" },
    { label: "Sikar", value: "111" },
    { label: "Sirohi", value: "117" },
    { label: "Tonk", value: "120" },
    { label: "Udaipur", value: "130" },],
    11: [{ label: "East District", value: "244" },
    { label: "North District", value: "241" },
    { label: "South District", value: "243" },
    { label: "West District", value: "242" },],
    33: [{ label: "Nicobars", value: "638" },
    { label: "North & Middle Andaman", value: "639" },
    { label: "South Andaman", value: "640" },],
    36: [{ label: "Adilabad", value: "901" },
    { label: "Bhadradri Kothagudem", value: "911" },
    { label: "Hanumakonda", value: "677" },
    { label: "Hyderabad", value: "902" },
    { label: "Jagtial", value: "912" },
    { label: "Jangaon", value: "913" },
    { label: "Jayashankar Bhupalpally", value: "914" },
    { label: "Jogulamba Gadwal", value: "915" },
    { label: "Kamareddy", value: "916" },
    { label: "Karimnagar", value: "903" },
    { label: "Khammam", value: "904" },
    { label: "Kumaram Bheem Asifabad", value: "917" },
    { label: "Mahabubabad", value: "918" },
    { label: "Mahbubnagar", value: "905" },
    { label: "Mancherial", value: "919" },
    { label: "Medak", value: "906" },
    { label: "Medchal Malkajgiri", value: "920" },
    { label: "Mulugu", value: "998" },
    { label: "Nagarkurnool", value: "921" },
    { label: "Nalgonda", value: "999" },
    { label: "Nirmal", value: "922" },
    { label: "Nizamabad", value: "907" },
    { label: "Peddapalli", value: "923" },
    { label: "Rajanna Sircilla", value: "924" },
    { label: "Rangareddy", value: "908" },
    { label: "Sangareddy", value: "925" },
    { label: "Siddipet", value: "926" },
    { label: "Suryapet", value: "927" },
    { label: "Vikarabad", value: "931" },
    { label: "Wanaparthy", value: "928" },
    { label: "Warangal (Rural)", value: "909" },
    { label: "Warangal (Urban)", value: "910" },
    { label: "Yadadri Bhuvanagiri", value: "930" },],
    16: [{ label: "Dhalai", value: "291" },
    { label: "Gomati", value: "667" },
    { label: "Khowai", value: "665" },
    { label: "North Tripura", value: "292" },
    { label: "Sepahijala", value: "666" },
    { label: "South Tripura", value: "290" },
    { label: "Unakoti", value: "668" },
    { label: "West Tripura", value: "289" },],
    95: [{ label: "Almora", value: "64" },
    { label: "Bageshwar", value: "63" },
    { label: "Chamoli", value: "57" },
    { label: "Champawat", value: "65" },
    { label: "Dehradun", value: "60" },
    { label: "Haridwar", value: "68" },
    { label: "Nainital", value: "66" },
    { label: "Pauri Garhwal", value: "61" },
    { label: "Pithoragarh", value: "62" },
    { label: "Rudraprayag", value: "58" },
    { label: "Tehri Garhwal", value: "59" },
    { label: "Udham Singh Nagar", value: "67" },
    { label: "Uttarkashi", value: "56" },],
    99: [
      { label: "Agra", value: "146" },
      { label: "Aligarh", value: "143" },
      { label: "Ambedkar Nagar", value: "178" },
      { label: "Amethi", value: "734" },
      { label: "Amroha", value: "670" },
      { label: "Auraiya", value: "162" },
      { label: "Ayodhya", value: "177" },
      { label: "Azamgarh", value: "191" },
      { label: "Baghpat", value: "139" },
      { label: "Bahraich", value: "180" },
      { label: "Ballia", value: "193" },
      { label: "Balrampur", value: "182" },
      { label: "Banda", value: "170" },
      { label: "Bara Banki", value: "176" },
      { label: "Bareilly", value: "150" },
      { label: "Basti", value: "185" },
      { label: "Bhadohi", value: "198" },
      { label: "Bijnor", value: "134" },
      { label: "Budaun", value: "149" },
      { label: "Bulandshahr", value: "142" },
      { label: "Chandauli", value: "196" },
      { label: "Chitrakoot", value: "171" },
      { label: "Deoria", value: "190" },
      { label: "Etah", value: "201" },
      { label: "Etawah", value: "161" },
      { label: "Farrukhabad", value: "159" },
      { label: "Fatehpur", value: "172" },
      { label: "Firozabad", value: "147" },
      { label: "Gautam Buddha Nagar", value: "141" },
      { label: "Ghaziabad", value: "140" },
      { label: "Ghazipur", value: "195" },
      { label: "Gonda", value: "183" },
      { label: "Gorakhpur", value: "188" },
      { label: "Hamirpur", value: "168" },
      { label: "Hapur", value: "801" },
      { label: "Hardoi", value: "155" },
      { label: "Hathras", value: "675" },
      { label: "Jalaun", value: "165" },
      { label: "Jaunpur", value: "194" },
      { label: "Jhansi", value: "166" },
      { label: "Kannauj", value: "160" },
      { label: "Kanpur Dehat", value: "163" },
      { label: "Kanpur Nagar", value: "164" },
      { label: "Kasganj", value: "202" },
      { label: "Kaushambi", value: "174" },
      { label: "Kushinagar", value: "189" },
      { label: "Lakhimpur Kheri", value: "153" },
      { label: "Lalitpur", value: "167" },
      { label: "Lucknow", value: "157" },
      { label: "Maharajganj", value: "187" },
      { label: "Mahoba", value: "169" },
      { label: "Mainpuri", value: "148" },
      { label: "Mathura", value: "145" },
      { label: "Mau", value: "192" },
      { label: "Meerut", value: "138" },
      { label: "Mirzapur", value: "199" },
      { label: "Moradabad", value: "135" },
      { label: "Muzaffarnagar", value: "133" },
      { label: "Pilibhit", value: "151" },
      { label: "Pratapgarh", value: "173" },
      { label: "Prayagraj", value: "175" },
      { label: "Raebareli", value: "158" },
      { label: "Rampur", value: "136" },
      { label: "Saharanpur", value: "132" },
      { label: "Sambhal", value: "802" },
      { label: "Sant Kabir Nagar", value: "186" },
      { label: "Shahjahanpur", value: "152" },
      { label: "Shamli", value: "672"},
      {"label": "Shravasti", "value": "181"},
    {"label": "Siddharthnagar", "value": "184"},
    {"label": "Sitapur", "value": "154"},
    {"label": "Sonbhadra", "value": "200"},
    {"label": "Sultanpur", "value": "179"},
    {"label": "Unnao", "value": "156"},
    {"label": "Varanasi", "value": "197"}
    ],
    19: [{"label": "Alipurduar", "value": "737"},
    {"label": "Bankura", "value": "339"},
    {"label": "Birbhum", "value": "334"},
    {"label": "Cooch Behar", "value": "741"},
    {"label": "Dakshin Dinajpur", "value": "331"},
    {"label": "Darjeeling", "value": "327"},
    {"label": "Hooghly", "value": "338"},
    {"label": "Howrah", "value": "341"},
    {"label": "Jalpaiguri", "value": "328"},
    {"label": "Jhargram", "value": "744"},
    {"label": "Kalimpong", "value": "745"},
    {"label": "Kolkata", "value": "342"},
    {"label": "Maldah", "value": "332"},
    {"label": "Murshidabad", "value": "333"},
    {"label": "Nadia", "value": "336"},
    {"label": "North Twenty Four Parganas", "value": "337"},
    {"label": "Paschim Bardhaman", "value": "739"},
    {"label": "Paschim Medinipur", "value": "344"},
    {"label": "Purba Bardhaman", "value": "740"},
    {"label": "Purba Medinipur", "value": "345"},
    {"label": "Purulia", "value": "340"},
    {"label": "South Twenty Four Parganas", "value": "343"},
    {"label": "Uttar Dinajpur", "value": "330"}],
  };
  const bloodGroup = [
    { value: "17", label: "AB+" },
    { value: "12", label: "A-" },
    { value: "11", label: "A+" },
    { value: "14", label: "B-" },
    { value: "13", label: "B+" },
    { value: "23", label: "Oh-" },
    { value: "22", label: "Oh+" },
    { value: "16", label: "O-" },
    { value: "15", label: "O+" },
    { value: "all", label: "All Blood Groups" },
  ];

  const bloodGroupPerson = [
    { value: "17", label: "AB+" },
    { value: "12", label: "A-" },
    { value: "11", label: "A+" },
    { value: "14", label: "B-" },
    { value: "13", label: "B+" },
    { value: "23", label: "Oh-" },
    { value: "22", label: "Oh+" },
    { value: "16", label: "O-" },
    { value: "15", label: "O+" }
    ];

  const bloodComponent = [
    {value:"11", label : "Whole Blood"},
    { value: "14", label: "Single Donar Platelet" },
    { value: "18", label: "Single Donar Plasma" },
    { value: "28", label: "Sagm Packed Red Blood" },
    { value: "23", label: "Random Donar Platelets" },
    { value: "24", label: "Platelets addictive solutions" },
    { value: "16", label: "Platelets Rich Plasma" },
    { value: "20", label: "Platelets Concentrate" },
    { value: "19", label: "Plasma" },
    { value: "12", label: "Packed Red Blood Cells" },
    { value: "30", label: "Leukoreduced RBC" },
    { value: "29", label: "Irradiated RBC" },
    { value: "13", label: "Fresh Frozen Plasma" },
    { value: "17", label: "Cryoprecipitate" },
    { value: "21", label: "Cryo Poor Plasma" },
  ];
  export { states,Districts,bloodGroup,bloodGroupPerson,bloodComponent,genders}

