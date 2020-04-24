output_info = [0,0];

page = 0;
isNext = true;
isPrev = false;

template_XY=[[102,36],[30,36]];

font_array = [["ver_1","ver_2"],["ver_3","ver_4"]];
selected_font = ["ver_1","ver_2", 0];

let _upper = [
  ["А",     "F"],
  ["Б",     ","],
  ["В",     "D"],
  ["Г",     "U"],
  ["Д",     "L"],
  ["Е",     "T"],
  ["Ё",     "T"],
  ["Ж",     ";"],
  ["З",     "P"],
  ["И",     "B"],
  ["Й",     "Q"],
  ["К",     "R"],
  ["Л",     "K"],
  ["М",     "V"],
  ["Н",     "Y"],
  ["О",     "J"],
  ["П",     "G"],
  ["Р",     "H"],
  ["С",     "C"],
  ["Т",     "N"],
  ["У",     "E"],
  ["Ф",     "A"],
  ["Х",     "["],
  ["Ц",     "W"],
  ["Ч",     "X"],
  ["Щ",     "O"],
  ["Ш",     "I"],
  ["Ь",     "M"],
  ["Ъ",     "M"],
  ["Ы",     "S"],
  ["Э",     "'"],
  ["Ю",     "."],
  ["Я",     "Z"]
];
let _lower = [
  ["а",     "f"],
  ["б",     ","],
  ["в",     "d"],
  ["г",     "u"],
  ["д",     "l"],
  ["е",     "t"],
  ["ё",     "t"],
  ["ж",     ";"],
  ["з",     "p"],
  ["и",     "b"],
  ["й",     "q"],
  ["к",     "r"],
  ["л",     "k"],
  ["м",     "v"],
  ["н",     "y"],
  ["о",     "j"],
  ["п",     "g"],
  ["р",     "h"],
  ["с",     "c"],
  ["т",     "n"],
  ["у",     "e"],
  ["ф",     "a"],
  ["х",     "["],
  ["ц",     "w"],
  ["ч",     "x"],
  ["ш",     "i"],
  ["щ",     "o"],
  ["ы",     "s"],
  ["ь",     "m"],
  ["ъ",     "m"],
  ["э",     "'"],
  ["ю",     "."],
  ["я",     "z"],
];
let _symbols = 
[   
  [" ",     "`"],
  [",",     "<"],
  [".",     ">"],
  [":",     ":"],
  [";",     ";"],
  ["\'",    "\""],
  ["\"",    "\""],
  ["-",     "-"],
  ["0",     "0"],
  ["1",     "1"],
  ["2",     "2"],
  ["3",     "3"],
  ["4",     "4"],
  ["5",     "5"],
  ["6",     "6"],
  ["7",     "7"],
  ["8",     "8"],
  ["9",     "9"],
  ["=",     "="],
  ["+",     "+"],
  ["(",     "("],
  [")",     ")"],
  ["#",     "#"],
  ["!",     "!"],
  ["?",     "?"],
  ["|",     "|"]
  ["%",     "%"],
  ["/",     "/"],
  ["@",     "@"]
];

let mistakes_ver_1= 
[  [
    ';',
    '-',
    ')',
    "c",
    "m",
    "p",
    "e",
    "t",
    "Y",
    "L",
    "B",
    "D",
    "I"],
   
   ['>',
    'm',
    'A',
    'M',
    '1',
    '8',
    '*'
   ]
]
let mistakes_ver_2= 
[  
   ['>',
    ':',
    '+',
    '=',
    "y",
    "h",
    "s",
    "T",
    "Z",
    "Q",
    "H",
    "M"],
    
    ['d',
    'q',
    'J',
    'S',
    '-',
    '<',
   ]
];
