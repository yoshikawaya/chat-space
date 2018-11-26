$(function(){
  function buildHTML(message){
     var imageUrl = (message.image) ?`<img class="date__text__image" src="${message.image}">` : "";
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="message-top__name">
                      ${message.name}
                    </div>
                    <div class="message-top__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="message-bottom">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                  </div>
                    ${imageUrl}
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.chat-body').append(html)
      $('.chat-body').animate({scrollTop: $('.chat-body')[0].scrollHeight}, 'fast');
      $("#new_message")[0].reset();
    })

    .fail(function(){
      alert('メッセージを入力してください');
    })

    .always(function(){
      $('.form__send-btn').prop('disabled',false);
    })
  })
});
