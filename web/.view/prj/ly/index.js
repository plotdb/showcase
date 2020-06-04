 (function() { function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fcodeorigin.jquery.com\u002Fjquery-1.10.2.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Flib\u002Fd3\u002Fd3.v3.min.js\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u002F\u002F- for topojson render issue\u003C\u002Fscript\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fcss\u002Fsemantic.min.css\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"Text\u002Fjavascript\" src=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fjavascript\u002Fsemantic.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fcss\u002Fprj\u002Fly\u002F50_icons.css\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fcss\u002Fprj\u002Fly\u002Findex.css\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fcrossfilter.v1.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fprelude-browser-min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Ftopojson.v1.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fmd5.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fd3.layout.cloud.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fjs\u002Fprj\u002Fly\u002Findex.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "立委們都質詢了什麼樣的東西呢？\u003C\u002Fh2\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"reset\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui button\" onclick=\"reset()\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "重新開始所有選擇\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"gender\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "性別比例\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"block\" id=\"female\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fnoun_project_117.svg\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "女性立委\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"count\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "50%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"block\" id=\"male\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fnoun_project_129.svg\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "男性立委\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"count\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "50%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"party\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "政黨比例\u003C\u002Fdiv\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Csvg width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cg transform=\"translate(50 50)\"\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flags\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"county\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "地區比例\u003C\u002Fdiv\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Csvg width=\"200px\" height=\"250px\" viewBox=\"0 0 800 600\" preserveAspectRatio=\"xMidYMid\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"asked-by\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "參與質詢的立委們\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"topic\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "質詢的主題\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Csvg width=\"100%\" height=\"200px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"category\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "質詢的類別\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Csvg width=\"100%\" height=\"200px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dim\" id=\"keywords\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"title\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "質詢內容的關鍵字\u003C\u002Fdiv\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Csvg width=\"100%\" height=\"400px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"reset\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui button\" onclick=\"reset()\"\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "重新開始所有選擇\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cbr style=\"clear:both\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ui divider\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"help\"\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "FAQ\u003C\u002Fh2\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這是在幹嘛？\u003C\u002Fh3\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這邊將立法院第八屆所有的立委質詢資訊統整分析，分別就「性別」、「黨派」、「選區」、「姓名」、「類別」、「主題」及「關鍵字」作統計。";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 63;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "你可以透過這裡稍微瞭解不同條件下立委所關注的議題，例如，高雄市選區的立委都在關心什麼？美牛相關的議題哪個政黨比較關心？各政黨中質詢次數最多的立委又是誰？\u003C\u002Fp\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "如何使用這個網頁？\u003C\u002Fh3\u003E";
;pug_debug_line = 65;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fhelp1.png\" style=\"float:right;border: 1px solid #999;border-radius: 5px;margin-left: 10px\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 67;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "上述的七項分類中的項目都可以點選。先想好你想要瞭解的區間，比方說，若你想瞭解國民黨在新北市的女性立委都在關注什麼議題，那就依序點擊「性別比例」中的「女性立委」、「政黨比例」中的「國民黨徽」及「地區比例」中的新北市色塊，點擊後你就可以看到我們濾出了江惠貞委員。";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 68;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "接著，往下拉到質詢的主題、類別區，其中比較大的字塊代表他較為關注的議題，我們可以看到他主要是關注交通、醫政及勞工相關的議題。\u003C\u002Fp\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這時在性別、政黨等各項的類別中，仍會列出不計該項條件時的統計比例。例如，性別比例中顯示女性為 50%，這代表若我們不設定性別條件，則國民黨在新北市選區的立委提出的質詢中，女性立委提出的佔了一半。同樣的，在政黨比例處可看到民進黨尚有 9% 的比例，代表在新北市的女性立委提出的質詢中，民進黨佔了近一成。\u003C\u002Fp\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "地區比例的色塊則以顏色表示各地區間質詢數的比較，越亮橙的顏色代表比例越高，暗灰色代表幾乎或根本沒有。至於立委頭像下方的數字代表該立委在當前條件下提出的質詢數，這個數字同時也反映在頭像的大小上。\u003C\u002Fp\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 74;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "最後，下方主題、類別跟關鍵字因為顯示空間的關係，只照關注度列出前一百高的項目。也許將來可以加入關鍵字搜尋或展開全部項目的功能。\u003C\u002Fp\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 75;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "我要怎麼取消剛剛設立的過濾條件？\u003C\u002Fh3\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fhelp2.png\" style=\"float:right;border: 1px solid #999;border-radius: 5px;margin-left: 10px\"\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "當你指定了特定條件時，該項目中其他的選項會變灰變淡；比方說，當你按了親民黨黨徽，其他黨的黨徽顏色會變得很淡。";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 79;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這時若想取消這個選取，再按一次剛剛選取的項目即可 ( 以剛剛的例子來說就是再按一次親民黨黨徽 ) 。";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "你也可以按網頁上下方都有的「重新開始所有選擇」按鈕把所有條件都清除，重新開始設定你的條件。\u003C\u002Fp\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "有什麼例子可以讓我很快的試試看的嗎？\u003C\u002Fh3\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這裡提出幾個過濾條件給你參考。";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊親民黨 + 林正二：你可以看到他很關心原住民。相當合理，因為他代表平地原住民。 ( 注意在地區比例項目中此時每個區塊都是暗的 )\u003C\u002Fli\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊民進黨：看看性別比例，陽剛味好重！ ( 主要是因為男性立委的質詢量比較多 )\u003C\u002Fli\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊桃園縣 + 逃避刑責(關鍵字)，接著點擊酒醉駕車(主題) 再取消選取桃園縣。看看質詢主題，關心酒駕逃避刑責的立委似乎也關心食品安全呢！\u003C\u002Fli\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊高雄市：高雄人似乎比較擔心中國大陸的威脅。\u003C\u002Fli\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "分別點擊台中市及台北市，這兩區的立委都關心食品議題，但注意看關鍵字，台北的立委關心的是美牛，台中的立委則關心毒澱粉。\u003C\u002Fli\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊顏清標，其關鍵字含有台中各區，相當地為當地民眾喉舌。各別去點大肚、龍井、烏日等項目，發現都跟受刑人或獄政有關？\u003C\u002Fli\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "點擊男性 + 民進黨 + 台南 ＋ 陳水扁(關鍵字)，發現在主題與分類中有有獄政、人權、保外就醫等字樣。過陣子可能還會多出特赦？仔細一看，特赦已經在裡面了。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "這樣看有什麼意義嗎？\u003C\u002Fh3\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "民眾往往在選完立委之後就很少再去關心他們的工作，即便想要關心，又不知道從何關心起。會議影片落落長，公報讀不完，媒體偏頗正確性堪慮。";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "在這裡你可以過濾出你有興趣的區域、主題，找到你選出的立委，先瞭解他關心的公眾事務包含哪些，再搭配公報、影城等等的系統來作進一步的了解。";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "礙於網頁空間及開發時間的限制，這裡並沒有完整地呈現質詢該有的資訊，例如質詢內容的摘要或會議屆次、時間等等的資訊；有機會可以再補上。\u003C\u002Fp\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Fprj\u002Fly\u002Findex.pug";
pug_html = pug_html + "\u003Cbr style=\"clear:both\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 