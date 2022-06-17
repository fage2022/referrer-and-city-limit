function show404HTML() {
  document.title = "404 页面未找到";
  var body = document.querySelector("body");
  var html = `
  <div style="width: 50%;  height: 300px;  line-height: 300px;  font-size: 35px;  text-align: center;  display: block;  overflow: hidden;  clear: both;  border-radius: 1%;
  background-color: #b9e8ff;  margin: 10% auto; border: 1px solid #9fd9f5;">404 页面未找到</div>
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
  if (
    s.indexOf("google") == -1 &&
    s.indexOf("baidu") == -1 &&
    s.indexOf("sogou") == -1 &&
    s.indexOf("360") == -1 &&
    s.indexOf(host) == -1
  ) {
    show404HTML();
  }
  try {
    checkCity(function (isEnable) {
      if (!isEnable) {
        return show404HTML();
      }
    });
  } catch (e) {
    console.log(e);
  }
}

function checkCity(cb) {
  jQuery.getScript("https://pv.sohu.com/cityjson?ie=utf-8", function () {
    var city = returnCitySN["cname"];
    var cid = returnCitySN["cid"];
    console.log("returnCitySN=", returnCitySN);
    var isEnable = true;
    if (!cid || city.indexOf("北京") != -1) {
      isEnable = false;
    }
    cb(isEnable);
  });
}
function addScript(url) {
  var bp = document.createElement("script");
  var curProtocol = window.location.protocol.split(":")[0];
  if (curProtocol === "https") {
    bp.src = "https://" + url;
  } else {
    bp.src = "http://" + url;
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
}
try {
  if (!jQuery) {
    addScript("cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js");
  }
} catch (e) {
  console.log("jquery未加载，现在加载");
  addScript("cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js");
}

setTimeout(checkfun, 200);
