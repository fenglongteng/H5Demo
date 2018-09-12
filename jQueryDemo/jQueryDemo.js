$(document).ready(function () {
    $("button").click(function () {
        $("b").hide();
        $("#test").hide();
        $(".test1").hide();
        $("a[target='_blank']").hide();
    });
});

$(document).ready(function () {
    $(".ableClick").click(function () {
        alert('p段落的点击事件' + add(3));
        $(".test1").show();
        $("#test").toggle();
        $("a[target='_blank']").css("color", "red")
            .slideDown(2000)
            .slideUp(2000);
    });
})
//获取文本、html
$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
    $("#showInputVual").click(function () {
        alert("值为: " + $("#inputVal").val());
    });
    $("#btn3").click(function () {
        alert($("#runoob").attr("href"));
    });
});

//修改
$(document).ready(function () {
    $("#btn4").click(function () {
        $("#test1").text(function (i, origText) {
            return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")";
        });
    });

    $("#btn5").click(function () {
        $("#test2").html(function (i, origText) {
            return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")";
        });
    });
    $("#btn6").click(function () {
        $("#runoob").attr("href", "https://www.baidu.com");
    });

});