(function () {
  let adWords = [
    "خرید",
    "قیمت",
    "فروش",
    "محصول",
    "تخفیف",
    "کالا",
    "kala",
    "file",
    "shop",
    "سریال",
    "فیلم",
    "آهنگ",
    "شعر",
    "دانلود",
    "هزینه",
    "معرفی",
    "آشنایی",
    "بازار",
    "مزایا",
    "معایب",
    "مشکلات",
    "ویژگی",
    "نکات",
    "بهترین",
    "کاربرد",
    "راهنما",
    "آموزش",
    "رایگان",
    "تبلیغ",
    "برند",
    "سئو",
    "سایت",
    "وردپرس",
    "بک لینک",
    "بک‌لینک",
    "استخدام",
    "شرکت",
    "اینستاگرام",
    "فالوور",
    "ios",
    "اپل",
    "آیفون",
    "دلار",
    "ارز دیجیتال",
    "ارزدیجیتال",
    "cryptocurrency",
    "دیجیتال",
    "صرافی",
    "مسافرت",
    "اقامت",
    "مهاجرت",
    "ویزا",
    "پاسپورت",
    "ترکیه",
    "download",
    "مبلمان",
    "رژیم",
    "آهن",
    "کارتریج",
    "پاورپوینت",
    "پاور پوینت",
    "جزوه",
    "دکتر ",
    "درمان",
    "پزشک",
    "نمایندگی",
    "تعمیر",
    "فلزیاب",
    "شامپو",
    "تشک",
    "مداربسته",
    "مدار بسته",
    "چمدان",
    "استوک",
    "قابلمه",
    "electric",
    "electero",
    "الکتریک",
    "گیربکس",
    "ایزوگام",
    "اتوبار",
    "باربری",
    "جوجه کشی",
    "یخچال",
    "سامسونک",
    "ال جی",
    "الجی",
    "ال‌جی",
    "کراتریج",
    "آسانسور",
  ];

  let kpopWords = [
    "youtube",
    "bts",
    "army",
    "آرمی",
    "kpop",
    "بلک پینک",
    "blackpink",
    "لیریک",
    "lyric",
    "viviz",
    "blink",
    "seventeen",
    "kep1er",
    "aespa",
    "lapillus",
    "ateez",
    "ive",
    "xdinary heroes",
    "straykids",
    "nmixx",
    "itzy",
    "تهیونگ",
    "مینگی",
    "یوجین",
    "niziu",
    "Vetr",
    "new jeans",
    "chan",
    "𝙆𝙞𝙢",
    "𝓚𝓲𝓶",
    "kim",
    "𝘤𝘩𝘢𝘯",
    "chan",
    "fan",
    "aespa",
    "فن فیک",
    "وب های منتخب بیان",
    "southkorea",
    "کره ",  
    "𝑅𝓎𝓊𝓃𝑔𝒿𝒾𝓃 🦊𝐿𝒾𝓉𝓉𝓁𝑒 𝐹𝑜𝓍",
    "𝙌𝙪𝙚𝙚𝙣 𝙮𝙚𝙜𝙞𝙨𝙖",
  ]
  let kpopGroups = [
    //en.wikipedia.org/wiki/List_of_South_Korean_idol_groups_(2020s)
    "astro",
    "bae173",
    "blackswan",
    "botopass",
    "btob 4u",
    "cignature",
    "cravity",
    "dkb",
    "drippin",
    "e'last",
    "enhypen",
    "even of day",
    "ghost9",
    "h&d",
    "lunarsolar",
    "mcnd",
    "p1harmony",
    "redsquare",
    "red velvet",
    "refund sisters",
    "secret number",
    "ssak3",
    "stayc",
    "to1",
    "treasure",
    "unvs",
    "weeekly",
    "wei",
    "woo!ah!",
    "billlie",
    "blitzers",
    "bugaboo",
    "ciipher",
    "epex",
    "hot issue",
    "ive",
    "just b",
    "kingdom",
    "lightsum",
    "mirae",
    "ntx",
    "omega x",
    "pixy",
    "purple kiss",
    "t1419",
    "tri.be",
    "astro",
    "atbo",
    "blank2y",
    "classy",
    "csr",
    "got the beat",
    "h1-key",
    "ily:1",
    "irris",
    "kep1er",
    "lapillus",
    "le sserafim",
    "newjeans",
    "nmixx",
    "tempest",
    "trendz",
    "viviz",
    "wsg wannabe",
    "younite",
    ]
  let KpopArtists = [
    //https://en.wikipedia.org/wiki/List_of_K-pop_artists
    "zhou jieqiong",
    "zhang liyin",
    "zhang bichen",
    "z.hera",
    "yuri",
    "yura",
    "yukika teramoto",
    "yūka kato",
    "yuju",
    "yua mikami",
    "yoon mi-rae",
    "yoon eun-hye",
    "yoon chae-kyung",
    "yoon bo-ra",
    "yoon bo-mi",
    "yooa",
    "yoo yeon-jung",
    "yoo so-young",
    "yoo chae-yeong",
    "yoo ara",
    "yezi",
    "yerin",
    "yeri",
    "yeonwoo",
    "yebin",
    "yang yoo-jin",
    "yang hye-sun",
    "xu ziyin",
    "xiyeon",
    "wu xuanyi",
    "woo hye-rim",
    "woo hye-mi",
    "wheein",
    "wendy",
    "viki",
    "victoria song",
    "umji",
    "uhm jung-hwa",
    "u;nee",
    "u sung-eun",
    "tzuyu",
    "tomu muto",
    "tiffany young",
    "tasha low",
    "taeyeon",
    "sunye",
    "sunny",
    "sunmi",
    "sung yu-ri",
    "sunday",
    "sulli",
    "stephanie",
    "stella jang",
    "soyou",
    "soya",
    "soy kim",
    "sorn",
    "sori",
    "soojin",
    "song yuqi",
    "song ji-eun",
    "son seung-yeon",
    "son na-eun",
    "son ji-hyun",
    "son dam-bi",
    "somin",
    "solbi",
    "solar",
    "sinb",
    "shin ji-min",
    "shin ji-hoon",
    "shin ji",
    "shin hye-jeong",
    "shim mina",
    "shim eun-jin",
    "shannon",
    "seunghee",
    "seulgi",
    "seola",
    "seohyun",
    "seo yu-na",
    "seo ji-young",
    "seo in-young",
    "seo hyun-jin",
    "seo hye-lin",
    "sandara park",
    "sakura miyawaki",
    "sae murase",
    "ryu su-jeong",
    "ryu se-ra",
    "ryu hyo-young",
    "ryu hwa-young",
    "rumble fish",
    "rothy",
    "rosé",
    "rena hasegawa",
    "reina kubo",
    "raina",
    "ra mi-ran",
    "pearl",
    "park yoon-ha",
    "park ye-eun",
    "park subin",
    "park soo-jin",
    "park soo-ah",
    "park so-yeon",
    "park so-jin",
    "park si-eun",
    "park jung-ah",
    "park ji-yoon",
    "park ji-yeon",
    "park jeong-hwa",
    "park hye-su",
    "park hee-von",
    "park gyu-ri",
    "park gyeong-ree",
    "park cho-rong",
    "park cho-a",
    "park bom",
    "park bo-ram",
    "oh yeon-seo",
    "oh seung-ah",
    "oh ha-young",
    "ock joo-hyun",
    "nicole jung",
    "nc.a",
    "nayeon",
    "natty",
    "narsha",
    "nancy",
    "nana",
    "nam gyu-ri",
    "nako yabuki",
    "nada",
    "na hae-ryung",
    "moonbyul",
    "momo hirai",
    "miyu takeuchi",
    "miryo",
    "miru shiroma",
    "minzy",
    "minnie",
    "min hyo-rin",
    "min hae-kyung",
    "min do-hee",
    "mijoo",
    "miho miyazaki",
    "michelle lee",
    "meng meiqi",
    "mako kojima",
    "luna",
    "luda",
    "liu xiening",
    "lisa",
    "lina",
    "lim na-young",
    "lim kim",
    "lim jeong-hee",
    "lexy",
    "lexie liu",
    "lena park",
    "lee yu-ri",
    "lee young-yoo",
    "lee sun-bin",
    "lee su-ji",
    "lee su-hyun",
    "lee soo-young",
    "lee soo-min",
    "lee soo-mi",
    "lee soo-jung",
    "lee so-jung",
    "lee na-eun",
    "lee jung-hyun",
    "lee ju-eun",
    "lee joo-yeon",
    "lee jin-ah",
    "lee jin",
    "lee ji-hyun",
    "lee ji-hye",
    "lee hyun-joo",
    "lee hyori",
    "lee hye-ri",
    "lee hwa-kyum",
    "lee hi",
    "lee hee-jin",
    "lee hae-ri",
    "lee hae-na",
    "lee hae-in",
    "lee hae-in",
    "lee bo-ram",
    "lee ahyumi",
    "kwon yu-ri",
    "kwon so-hyun",
    "kwon ri-se",
    "kwon nara",
    "kwon mina",
    "kwon jin-ah",
    "kwon eun-bin",
    "kwon eun-bi",
    "krystal jung",
    "kriesha chu",
    /*"kim yu-bin",
    "kim yoon-ji",
    "kim yoon-ah",
    "kim yeon-ji",
    "kim ye-won",
    "kim wan-sun",
    "kim sook",
    "kim so-jung",
    "kim so-hye",
    "kim so-hee",
    "kim so-hee",
    "kim si-hyeon",
    "kim seol-hyun",
    "kim se-jeong",
    "kim nam-joo",
    "kim min-seo",
    "kim min-ju",
    "kim jung-ah",
    "kim ju-na",
    "kim ji-hyun",
    "kim jae-kyung",
    "kim isak",
    "kim hyo-yeon",
    "kim greem",
    "kim ga-young",
    "kim e-z",
    "kim do-yeon",
    "kim do-ah",
    "kim da-som",
    "kim chanmi",
    "kim ah-joong",*/
    "kim ",
    "ki hui-hyeon",
    "katie kim",
    "kang ye-won",
    "kang ye-seo",
    "kang si-ra",
    "kang se-jung",
    "kang min-kyung",
    "kang min-hee",
    "kang mi-na",
    "kang ji-young",
    "kan mi-youn",
    "kahi",
    "jurina matsui",
    "juri takahashi",
    "juniel",
    "jung ryeo-won",
    "jung ha-na",
    "jung da-eun",
    "jung chae-yeon",
    "jun hyo-seong",
    "johyun",
    "jo yu-ri",
    "jo eun-byul",
    "jiyul",
    "jisoo",
    "jihyo",
    "jessica jung",
    "jessi",
    "jeongyeon",
    "jeong eun-ji",
    "jeon somi",
    "jeon so-yeon",
    "jeon ji-yoon",
    "jeon hye-bin",
    "jeon boram",
    "jennie",
    "jang ye-eun",
    "jang won-young",
    "jang na-ra",
    "jang jae-in",
    "jamie",
    "irene",
    "im yoon-ah",
    "hyuna",
    "hyomin",
    "hyolyn",
    "hyojung",
    "hynn",
    "hwayobi",
    "hwasa",
    "hwang jung-eum",
    "hwang in-sun",
    "hwangbo",
    "huh chan-mi",
    "horan",
    "hong jin-young",
    "hong jin-kyung",
    "hitomi honda",
    "heo young-ji",
    "heo sol-ji",
    "heo ga-yoon",
    "harisu",
    "hani",
    "hana",
    "han sun-hwa",
    "han seung-yeon",
    "han hye-ri",
    "han chae-young",
    "hahm eun-jung",
    "gummy",
    "goo hara",
    "go woo-ri",
    "gilme",
    "gil hak-mi",
    "gain",
    "g.na",
    "ferlyn wong",
    "fat cat",
    "eyedi",
    "exy",
    "eunwoo",
    "eunha",
    "euna kim",
    "eugene",
    "esna",
    "elkie chong",
    "dawon",
    "dahyun",
    "chungha",
    "chu ye-jin",
    /*"choi yu-jin",
    "choi yoo-jung",
    "choi ye-na",
    "choi soo-young",
    "choi soo-eun",
    "choi jung-in",
    "choi han-bit",*/
    "choi ",
    "cho seung-hee",
    "cho mi-yeon",
    "cheris lee",
    "cheng xiao",
    "chaeyoung",
    "chae yeon",
    "chae ri-na",
    "chae jung-an",
    "cao lu",
    "byul",
    "bona",
    "bang min-ah",
    "baek ye-rin",
    "baek ji-young",
    "baek a-yeon",
    "bae woo-hee",
    "bae suzy",
    "bae seul-ki",
    "anda",
    "an yu-jin",
    "an ye-seul",
    "amber liu",
    "alexandra reid",
    "alexa",
    "ailee",
    "ahn sol-bin",
    "ahn so-hee",
    "ahn ji-young",
    "ah young",
    "zico",
    "zick jasper",
    "zhu zhengting",
    "zhou yixuan",
    "zhou mi",
    "zhong chenle",
    "zelo",
    "yuto adachi",
    "yuta nakamoto",
    "yunho",
    "yugyeom",
    "youngjun",
    "young k",
    /*"yoon san-ha",
    "yoon min-soo",
    "yoon kye-sang",
    "yoon jong-shin",
    "yoon ji-sung",
    "yoon hyun-sang",
    "yoon doo-joon",
    "yoon do-hyun",*/
    "yoon",
    "yook sung-jae",
    "yoo young-jae",
    "yoo seung-woo",
    "yoo seung-jun",
    "yoo seon-ho",
    "yoo jae-suk",
    "yoo il",
    "yong jun-hyung",
    "yesung",
    "yeo one",
    "yeo hoon-min",
    "yang yo-seob",
    "yang seung-ho",
    "yang hyun-suk",
    "xiumin",
    "wuno",
    "woozi",
    "wooseok",
    "woody",
    "wonho",
    "wen junhui",
    "wang yibo",
    "u-kwon",
    "tony ahn",
    "tiger jk",
    "thunder",
    "the8",
    "teddy park",
    "takuya terada",
    "taeyang",
    "taebin",
    "tablo",
    "t.o.p",
    "swings",
    "sung hoon",
    "suho",
    "suga",
    "song yuvin",
    "song seung-hyun",
    "son ho-young",
    "son ho-jun",
    "son dong-woon",
    "sleepy",
    "shownu",
    "shindong",
    "shin won-ho",
    "shin seung-hun",
    "shin jung-hwan",
    "shin jong-kook",
    "shin hye-sung",
    "shin dong-ho",
    "seven",
    "seungri",
    /*"seo taiji",
    "seo min-woo",
    "seo kang-joon",
    "seo in-guk",
    "seo eun-kwang",*/
    "sandeul",
    "sanchez",
    "san e",
    "samuel",
    "sam kim",
    "roy kim",
    "rowoon",
    "roh tae-hyun",
    "roh ji-hoon",
    "rocky",
    "ravi",
    "rain",
    "qin fen",
    "peniel shin",
    "park yoo-chun",
    "park yong-ha",
    "park woo-jin",
    "park sung-hoon",
    "park sun-ho",
    "park si-hwan",
    "park kyung",
    "park jung-min",
    "park jin-young",
    "park ji-hoon",
    "park hyung-sik",
    "park geon-il",
    "park chanyeol",
    "parc jae-jung",
    "ong seong-wu",
    "onew",
    "ok taec-yeon",
    "oh se-hun",
    "oh jong-hyuk",
    "no min-woo",
    "niel",
    "nichkhun",
    "naul",
    "nam woo-hyun",
    "nam tae-hyun",
    "na jae-min",
    "moon tae-il",
    "moon joon-young",
    "moon jong-up",
    "moon ji-hoo",
    "moon hee-joon",
    "moon bin",
    "mithra jin",
    "minos",
    "mino",
    "min kyung-hoon",
    "mikey",
    "mark tuan",
    "mark lee",
    "lucas wong",
    "lu han",
    "louie",
    "lim seul-ong",
    "lil boi",
    "li wenhan",
    "leeteuk",
/*    "lee you-jin",
    "lee tae-yong",
    "lee tae-min",
    "lee tae-il",
    "lee tae-hwan",
    "lee sung-yeol",
    "lee sung-min",
    "lee sung-jong",
    "lee seung-hyub",
    "lee seung-hoon",
    "lee seung-gi",
    "lee seok-hoon",
    "lee sang-min",
    "lee min-woo",
    "lee min-hyuk",
    "lee min-hyuk",
    "lee ki-seop",
    "lee jung-shin",
    "lee jung",
    "lee jun-young",
    "lee jun-ho",
    "lee joon",
    "lee jong-hyun",
    "lee jong-hwa",
    "lee jin-hyuk",
    "lee je-no",
    "lee jai-jin",
    "lee jae-won",
    "lee jae-jin",
    "lee jae-hoon",
    "lee hyun",
    "lee hong-gi",
    "lee hong-bin",
    "lee gun-woo",
    "lee gi-kwang",
    "lee eun-sang",
    "lee donghae",
    "lee dae-hwi",
    "lee chang-sub",
    "lee chang-min",
    "lee chan-hyuk",*/
    "lee ",
    "lay zhang",
    "lai kuan-lin",
    "kwon hyun-bin",
    "kwak jin-eon",
    "kris wu",
    "koo jun-hoe",
    "ko ji-yong",
    "kino",
    /*"kim yong-jun",
    "kim yo-han",
    "kim woo-sung",
    "kim woo-seok",
    "kim woo-jin",
    "kim tae-woo",
    "kim sung-kyu",
    "kim sung-joo",
    "kim sung-jae",
    "kim sun-woong",
    "kim seok-jin",
    "kim se-yong",
    "kim ryeo-wook",
    "kim min-kyu",
    "kim kyu-jong",
    "kim ki-bum",
    "kim junsu",
    "kim jung-woo",
    "kim jung-mo",
    "kim joon",
    "kim jong-min",
    "kim jong-kook",
    "kim jong-hyun",
    "kim jin-woo",
    "kim jin-ho",
    "kim ji-soo",
    "kim ji-hoon",
    "kim ji-hoon",
    "kim jeong-hoon",
    "kim jae-yong",
    "kim jae-joong",
    "kim jae-hyun",
    "kim jae-hwan",
    "kim jae-duck",
    "kim hyung-jun",
    "kim hyun-joong",
    "kim hee-chul",
    "kim feel",
    "kim dong-wan",
    "kim dong-jun",
    "kim dong-hyun",
    "kim dong-hyun",
    "kim dong-han",
    "kim c",*/
    "kim",
    "kihyun",
    "kiggen",
    "kidoh",
    "kevin woo",
    "kevin oh",
    "kevin moon",
    "kebee",
    "kasper",
    "kanto",
    "kangta",
    "kangnam",
    "kangin",
    /*"kang tae-oh",
    "kang sung-hoon",
    "kang seung-yoon",
    "kang min-hyuk",
    "kang kyun-sung",
    "kang in-soo",
    "kang doo",
    "kang daniel",
    "kang chan-hee",*/
    "kang ",
    "k.will",
    "justin",
    "jungyup",
    "jungkook",
    "junggigo",
    "jung ",
/*    "jung yoon-hak",
    "jung yong-hwa",
    "jung seung-hwan",
    "jung joon-young",
    "jung jin-young",
    "jung il-hoon",
    "jung dae-hyun",
    "jung chan-woo",
    */
    "jun.q",
    "jun. k",
    "jun jin",
    "joon park",
    "joohoney",
    "joo jong-hyuk",
    "john park",
    "jo young-min",
    "jo kwon",
    "jo kwang-min",
    "jinyoung",
    "jinu",
    "jinjin",
    "jinho",
    "jin longguo",
    "jimin",
    "jero",
    "jeong se-woon",
    "jeong jinwoon",
    "jeong jin-hwan",
    "jay park",
    "jay b",
    "jang ",
/*  "jang wooyoung",
    "jang woo-hyuk",
    "jang su-won",
    "jang minho",
    "jang jin-young",
    "jang hyun-seung",
    "jang han-byul",
    "jang dong-woo",
    "jang dae-hyeon",
    "jang beom-june",*/
    "jaehyun",
    "jae park",
    "jackson wang",
    "j-hope",
    "im si-wan",
    "im hyun-sik",
    "i'll",
    "hyungwon",
    "hyun jin-young",
    "hyuk",
    "hwanhee",
    "hwang min-hyun",
    "hwang kwang-hee",
    "hwang chi-yeul",
    "hwang chan-sung",
    "huh gak",
    "huang zitao",
    "hoya",
    "hongseok",
    "heo young-saeng",
    "heo jung-min",
    "henry lau",
    "hanhae",
    "hangzoo",
    "han seung-woo",
    "han hee-jun",
    "han geng",
    "ha sung-woon",
    "ha sebin",
    "ha dong-kyun",
    "h-eugene",
    "gongchan",
    "gong myung",
    "gill",
    "gary",
    "gaho",
    "gaeko",
    "g.soul",
    "g-dragon",
    "eunhyuk",
    "eun ji-won",
    "eric nam",
    "eric mun",
    "eli kim",
    "eddy kim",
    "doyoung",
    "do han-se",
    "dj shine",
    "dj clazzi",
    "dawn",
    "david oh",
    "danny ahn",
    "daesung",
    "crush",
    "cream",
    "chun myung-hoon",
    "choiza",
    "choi young-jae",
    "choi sung-min",
    "choi si-won",
    "choi min-hwan",
    "choi min-ho",
    "choi jung-won",
    "choi jong-hoon",
    "choi hyun-suk",
    "choi byung-chan",
    "choi bo-min",
    "cho seung-youn",
    "cho kyu-hyun",
    "chen",
    "changmin",
    "changjo",
    "chancellor",
    "chan",
    "chae bo-hun",
    "cha eun-woo",
    "byung hun",
    "bumzu",
    "bumkey",
    "brian joo",
    "boo seung-kwan",
    "boi b",
    "bobby",
    "bernard park",
    "baro",
    "bang yong-guk",
    "bang ye-dam",
    "bambam",
    "baekhyun",
    "baekho",
    "bae ki-sung",
    "bae jin-young",
    "babylon",
    "b-bomb",
    "aron",
    "andy lee",
    "andrew choi",
    "allen kim",
    "alexander lee",
    "alex chu",
    "ajoo",
    "ahn jae-hyo",
  ];
//lina-monde.blog.ir/1401/05/26-1
let kpopBlogs = [
"aespa2.blog.ir",
"blackpink-lovers1.blog.ir",
"httpsblackpinknews.blog.ir",
"aespa2.blog.ir",
"jeon-somi.blog.ir",
"lina-monde.blog.ir",
"nmixx-ir.blog.ir",
"twice-land7.blog.ir",
"iu-uaena.blog.ir",
"fanfictionkpop.blog.ir",
"baemon-land1.blog.ir",
"purple-defend.blog.ir",
"2ne1xblackjack.blog.ir",
"2ne1-news.blog.ir",
"blackpink-world.blog.ir",
"classyir.blog.ir",
"dreamcatcher2.blog.ir",
"itzyfans.blog.ir",
"ive-ir.blog.ir",
"kepler.blog.ir",
"lapillus-ir.blog.ir",
"le-sserafim-ir.blog.ir",
"traineeairan.blog.ir",
"tribe7.blog.ir",
"xg-ir.blog.ir",
"kpop-leaked.blog.ir",
"xdinaryheroesofficial.blog.ir",
"fatalsub-world3.blog.ir",
"newjeanslove.blog.ir",
"viviz-world.blog.ir",
"edit-officiall.blog.ir",
"stayc-land.blog.ir",
"ptguniverse.blog.ir",
"niziuwithu.blog.ir",
"newjeansir5.blog.ir",
"superjuniorir5.blog.ir",
"wjsnir.blog.ir",
"jessifans.blog.ir",
"allkpop2021.blog.ir",
"txtlove.blog.ir",
"art-edit.blog.ir",
"aylin123.blog.ir",
"shadow-night.blog.ir",
]
  let badWords = Array.prototype.concat(adWords,kpopWords,kpopGroups,KpopArtists,kpopBlogs);

  function remove() {
    for (let a of document.querySelectorAll(".post,.postside")) {
      for (w of badWords) {
        if (a.innerText.toLowerCase().includes(w)) {
          a.style.display = "none";
          break;
        }
      }
    }
  }
  remove();
})();
