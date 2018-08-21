function myFunction()
{
	x=document.getElementById("demo") // 找到元素
	x.style.color="#ff0000";          // 改变样式
}

function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("2F201611_18_16%2Fa3j76x7109268865855.jpeg"))
    {
        element.src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534139278308&di=4cc21837fb7f531c3fd562b3237e8706&imgtype=0&src=http%3A%2F%2Fimg1qn.moko.cc%2F2016-07-26%2F79726bdb-2247-4db6-ac16-6d170dc48982.jpg%3FimageView2%2F2%2Fw%2F915%2Fh%2F915";
    }
    else
    {
        element.src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534139379469&di=38beaf654641e8e8ed1fa2d8b48ce021&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F201611_18_16%2Fa3j76x7109268865855.jpeg";
    }
}

function myFunction1()
{
	var x=document.getElementById("demo1").value;
	if(isNaN(x)||x.replace(/(^\s*)|(\s*$)/g,"")==""){
		alert("不是数字");
	}
}
var person = {
    firstName : "John",
    lastName : "Doe",
    id : 5566
};

