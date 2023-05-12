 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (libLoader, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}























































































pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002F\u002Fcodeorigin.jquery.com\u002Fjquery-1.10.2.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Flib\u002Fd3\u002Fd3.v3.min.js\"\u003E\u002F\u002F- for topojson render issue\u003C\u002Fscript\u003E\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fcss\u002Fsemantic.min.css\"\u003E\u003Cscript type=\"Text\u002Fjavascript\" src=\"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fsemantic-ui\u002F0.9.3\u002Fjavascript\u002Fsemantic.min.js\"\u003E\u003C\u002Fscript\u003E\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fcss\u002Fprj\u002Fly\u002F50_icons.css\"\u003E\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fcss\u002Fprj\u002Fly\u002Findex.css\"\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fcrossfilter.v1.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fprelude-browser-min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Ftopojson.v1.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fmd5.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fassets\u002Fprj\u002Fly\u002Fd3.layout.cloud.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript type=\"text\u002Fjavascript\" src=\"\u002Fjs\u002Fprj\u002Fly\u002Findex.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"content\"\u003E\u003Ch2\u003E立委們都質詢了什麼樣的東西呢？\u003C\u002Fh2\u003E\u003Cdiv class=\"reset\"\u003E\u003Cdiv class=\"ui button\" onclick=\"reset()\"\u003E重新開始所有選擇\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"gender\"\u003E\u003Cdiv class=\"title\"\u003E性別比例\u003C\u002Fdiv\u003E\u003Cdiv class=\"block\" id=\"female\"\u003E\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fnoun_project_117.svg\"\u003E\u003Cdiv class=\"title\"\u003E女性立委\u003C\u002Fdiv\u003E\u003Cdiv class=\"count\"\u003E50%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"block\" id=\"male\"\u003E\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fnoun_project_129.svg\"\u003E\u003Cdiv class=\"title\"\u003E男性立委\u003C\u002Fdiv\u003E\u003Cdiv class=\"count\"\u003E50%\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"party\"\u003E\u003Cdiv class=\"title\"\u003E政黨比例\u003C\u002Fdiv\u003E\u003Csvg width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\"\u003E\u003Cg transform=\"translate(50 50)\"\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003Cdiv class=\"flags\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"county\"\u003E\u003Cdiv class=\"title\"\u003E地區比例\u003C\u002Fdiv\u003E\u003Csvg width=\"200px\" height=\"250px\" viewBox=\"0 0 800 600\" preserveAspectRatio=\"xMidYMid\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"asked-by\"\u003E\u003Cdiv class=\"title\"\u003E參與質詢的立委們\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"topic\"\u003E\u003Cdiv class=\"title\"\u003E質詢的主題\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E\u003Csvg width=\"100%\" height=\"200px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"category\"\u003E\u003Cdiv class=\"title\"\u003E質詢的類別\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E\u003Csvg width=\"100%\" height=\"200px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dim\" id=\"keywords\"\u003E\u003Cdiv class=\"title\"\u003E質詢內容的關鍵字\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E\u003C\u002Fdiv\u003E\u003Csvg width=\"100%\" height=\"400px\" viewBox=\"0 0 500 200\"\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"reset\"\u003E\u003Cdiv class=\"ui button\" onclick=\"reset()\"\u003E重新開始所有選擇\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cbr style=\"clear:both\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"ui divider\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"help\"\u003E\u003Ch2\u003EFAQ\u003C\u002Fh2\u003E\u003Ch3\u003E這是在幹嘛？\u003C\u002Fh3\u003E\u003Cp\u003E這邊將立法院第八屆所有的立委質詢資訊統整分析，分別就「性別」、「黨派」、「選區」、「姓名」、「類別」、「主題」及「關鍵字」作統計。\n你可以透過這裡稍微瞭解不同條件下立委所關注的議題，例如，高雄市選區的立委都在關心什麼？美牛相關的議題哪個政黨比較關心？各政黨中質詢次數最多的立委又是誰？\u003C\u002Fp\u003E\u003Ch3\u003E如何使用這個網頁？\u003C\u002Fh3\u003E\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fhelp1.png\" style=\"float:right;border: 1px solid #999;border-radius: 5px;margin-left: 10px\"\u003E\u003Cp\u003E 上述的七項分類中的項目都可以點選。先想好你想要瞭解的區間，比方說，若你想瞭解國民黨在新北市的女性立委都在關注什麼議題，那就依序點擊「性別比例」中的「女性立委」、「政黨比例」中的「國民黨徽」及「地區比例」中的新北市色塊，點擊後你就可以看到我們濾出了江惠貞委員。\n接著，往下拉到質詢的主題、類別區，其中比較大的字塊代表他較為關注的議題，我們可以看到他主要是關注交通、醫政及勞工相關的議題。\u003C\u002Fp\u003E\u003Cp\u003E這時在性別、政黨等各項的類別中，仍會列出不計該項條件時的統計比例。例如，性別比例中顯示女性為 50%，這代表若我們不設定性別條件，則國民黨在新北市選區的立委提出的質詢中，女性立委提出的佔了一半。同樣的，在政黨比例處可看到民進黨尚有 9% 的比例，代表在新北市的女性立委提出的質詢中，民進黨佔了近一成。\u003C\u002Fp\u003E\u003Cp\u003E地區比例的色塊則以顏色表示各地區間質詢數的比較，越亮橙的顏色代表比例越高，暗灰色代表幾乎或根本沒有。至於立委頭像下方的數字代表該立委在當前條件下提出的質詢數，這個數字同時也反映在頭像的大小上。\u003C\u002Fp\u003E\u003Cp\u003E 最後，下方主題、類別跟關鍵字因為顯示空間的關係，只照關注度列出前一百高的項目。也許將來可以加入關鍵字搜尋或展開全部項目的功能。\u003C\u002Fp\u003E\u003Ch3\u003E我要怎麼取消剛剛設立的過濾條件？\u003C\u002Fh3\u003E\u003Cimg src=\"\u002Fassets\u002Fprj\u002Fly\u002Fhelp2.png\" style=\"float:right;border: 1px solid #999;border-radius: 5px;margin-left: 10px\"\u003E\u003Cp\u003E當你指定了特定條件時，該項目中其他的選項會變灰變淡；比方說，當你按了親民黨黨徽，其他黨的黨徽顏色會變得很淡。\n這時若想取消這個選取，再按一次剛剛選取的項目即可 ( 以剛剛的例子來說就是再按一次親民黨黨徽 ) 。\n你也可以按網頁上下方都有的「重新開始所有選擇」按鈕把所有條件都清除，重新開始設定你的條件。\u003C\u002Fp\u003E\u003Ch3\u003E有什麼例子可以讓我很快的試試看的嗎？\u003C\u002Fh3\u003E\u003Cp\u003E這裡提出幾個過濾條件給你參考。\u003Cul\u003E\u003Cli\u003E點擊親民黨 + 林正二：你可以看到他很關心原住民。相當合理，因為他代表平地原住民。 ( 注意在地區比例項目中此時每個區塊都是暗的 )\u003C\u002Fli\u003E\u003Cli\u003E點擊民進黨：看看性別比例，陽剛味好重！ ( 主要是因為男性立委的質詢量比較多 )\u003C\u002Fli\u003E\u003Cli\u003E點擊桃園縣 + 逃避刑責(關鍵字)，接著點擊酒醉駕車(主題) 再取消選取桃園縣。看看質詢主題，關心酒駕逃避刑責的立委似乎也關心食品安全呢！\u003C\u002Fli\u003E\u003Cli\u003E點擊高雄市：高雄人似乎比較擔心中國大陸的威脅。\u003C\u002Fli\u003E\u003Cli\u003E分別點擊台中市及台北市，這兩區的立委都關心食品議題，但注意看關鍵字，台北的立委關心的是美牛，台中的立委則關心毒澱粉。\u003C\u002Fli\u003E\u003Cli\u003E點擊顏清標，其關鍵字含有台中各區，相當地為當地民眾喉舌。各別去點大肚、龍井、烏日等項目，發現都跟受刑人或獄政有關？\u003C\u002Fli\u003E\u003Cli\u003E點擊男性 + 民進黨 + 台南 ＋ 陳水扁(關鍵字)，發現在主題與分類中有有獄政、人權、保外就醫等字樣。過陣子可能還會多出特赦？仔細一看，特赦已經在裡面了。\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E\u003Ch3\u003E這樣看有什麼意義嗎？\u003C\u002Fh3\u003E\u003Cp\u003E民眾往往在選完立委之後就很少再去關心他們的工作，即便想要關心，又不知道從何關心起。會議影片落落長，公報讀不完，媒體偏頗正確性堪慮。\n在這裡你可以過濾出你有興趣的區域、主題，找到你選出的立委，先瞭解他關心的公眾事務包含哪些，再搭配公報、影城等等的系統來作進一步的了解。\n礙於網頁空間及開發時間的限制，這裡並沒有完整地呈現質詢該有的資訊，例如質詢內容的摘要或會議屆次、時間等等的資訊；有機會可以再補上。\u003C\u002Fp\u003E\u003Cbr style=\"clear:both\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 