$(function () {
  // 動態嵌入程式碼複製按鈕
  $(".highlight")
    .find(".code")
    .append('<td class="copy-button" onclick="copyCode()">Copy</td>');

  $("a").click(function () {
    const $target = $($(this).attr("href"));
    $("html,body").animate(
      {
        scrollTop: $target.offset().top - 60
      },
      "fast", "swing"
    );
    // TODO GET focus
    return false;
  });
});

// 閱讀更多效果
function readMore() {
  $(event.target)
    .parents(".post-inner")
    .find(".hidden-content")
    .slideDown();
  $(event.target)
    .parent()
    .remove();
}

// 程式碼複製效果
function copyCode() {
  var code = "";
  $(event.target)
    .parent()
    .find(".line")
    .each(function () {
      code += $(this)[0].innerText + "\n";
    });
  Copy(code);
}

// 複製到剪貼簿
function Copy(text) {
  var tmp = document.createElement("textarea");
  tmp.value = text;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand("Copy");
  tmp.remove();
  showMessage("複製成功");
}
