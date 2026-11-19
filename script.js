// studio.04 ご提案用見本：予約ボタンのみ実際の予約ページへリンク。その他のボタン・フォームは表示のみ。
(function () {
  var toast = document.getElementById('toast');
  var timer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-show');
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove('is-show');
    }, 2600);
  }

  // LINE・Instagram・口コミなどのボタン
  document.querySelectorAll('.js-dummy').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('見本のためリンクしていません');
    });
  });

  // 問診フォーム：送信しない
  var form = document.getElementById('qform');
  var formMsg = document.getElementById('form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMsg.textContent = '見本のため送信されません';
    showToast('見本のため送信されません');
  });
})();
