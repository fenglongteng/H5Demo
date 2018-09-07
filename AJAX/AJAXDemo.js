// get

function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("myDiv").innerHTML = "访问失败";
		}
		xmlhttp.open("GET", "http://www.runoob.com/try/ajax/demo_get.php?t=" + Math.random(), true);
		xmlhttp.send();
	}
}

// post
function loadXMLDoc1() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		} else {
			document.getElementById("myDiv").innerHTML = "访问失败";
		}
	}
	xmlhttp.open("POST", "http://www.runoob.com/try/ajax/demo_post2.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("fname=Henry&lname=Ford");
}

//同步方法
function loadXMLDoc2() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET", "http://www.runoob.com/try/ajax/ajax_info.txt", false);
	xmlhttp.send();
	document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
}

//responseXML xml响应
function loadXMLDoc3() {
	var xmlhttp;
	var txt, x, i;
	if (window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			xmlDoc = xmlhttp.responseXML;
			txt = "";
			x = xmlDoc.getElementsByTagName("ARTIST");
			for (i = 0; i < x.length; i++) {
				txt = txt + x[i].childNodes[0].nodeValue + "<br>";
			}
			document.getElementById("myDiv").innerHTML = txt;
		}
	}
	xmlhttp.open("GET", "http://www.runoob.com/try/ajax/cd_catalog.xml", true);
	xmlhttp.send();
}

//多个请求任务封装请求
var xmlhttp;

function loadXMLDoc(url, cfunc) {
	if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari 代码
		xmlhttp = new XMLHttpRequest();
	} else { // IE6, IE5 代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function myFunction() {
	loadXMLDoc("http://www.runoob.com/try/ajax/ajax_info.txt", function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	});
}

//AJAX ASP/PHP 实例
function showHint(str)
{
  var xmlhttp;
  if (str.length==0)
  { 
    document.getElementById("txtHint").innerHTML="";
    return;
  }
  if (window.XMLHttpRequest)
  {
    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
  }
  else
  {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET","http://www.runoob.com/try/ajax/gethint.php?q="+str,true);
  xmlhttp.send();
}