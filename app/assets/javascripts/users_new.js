$(function() {
  $(document).on('turbolinks:load', function() {
    $('#user_nickname').blur(function(){
      if($(this).val() == "") {
        if($('.nickname p').hasClass('wrong-message')){
          return
        }else{
          $('.form-user__text.nickname').append('<p class="wrong-message nickname-message">ニックネームを入力してください</p>');
        }
      }else{
        $('.nickname-message').remove();
      }
    });
    $('#user_email').blur(function() {
      if($(this).val() == "" ||
      !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)
      ) {
        if($('.email p').hasClass('wrong-message')) {
          return
        } else {
          $('.email').append('<p class="wrong-message mail-message">メールアドレスを入力してください</p>');
        }
      } else {
        $('.mail-message').remove();
      }
    });
    $('#user_password').blur(function() {
      if($(this).val() == "" ||
        !$(this).val().match(/^[a-zA-Z0-9]+$/)||
        $(this).val().length < 6
      ) {
        if($('.password p').hasClass('wrong-message')) {
          return
        } else {
          $('.password').append('<p class="wrong-message password-message">パスワードを入力してください<br>パスワードは6文字以上128文字以下で入力してください</p>');
        }
      } else {
        $('.password-message').remove();
      }
    });
    $('#user_password_confirmation').blur(function() {
      if($(this).val() != $('#user_password').val()) {
        if($('.password-confirmation p').hasClass('wrong-message')) {
          return
        } else {
          $('.password-confirmation').append('<p class="wrong-message password_confirmation-message">パスワード (確認) を入力してください</p>');
        }
      } else {
        $('.password_confirmation-message').remove();
      }
    });
    $('#user_user_profile_attributes_last_name').blur(function() {
      if($(this).val() == "" ||
        !$(this).val().match(/^[^\x01-\x7E\xA1-\xDF]+$/)
      ) {
        if($('.last_name p').hasClass('wrong-message')) {
          return
        } else {
          $('.last_name').append('<p class="wrong-message last_name-message">姓 を入力してください</p>');
        }
      } else {
        $('.last_name-message').remove();
      }
    });
  
    $('#user_user_profile_attributes_first_name').blur(function() {
      if($(this).val() == "" ||
        !$(this).val().match(/^[^\x01-\x7E\xA1-\xDF]+$/)
      ) {
        if($('.first_name p').hasClass('wrong-message')) {
          return
        } else {
          $('.first_name').append('<p class="wrong-message first_name-message">名 を入力してください</p>');
        }
      } else {
        $('.first_name-message').remove();
      }
    });
    $('#user_user_profile_attributes_last_name_kata').blur(function() {
      if($(this).val() == "" ||
        !$(this).val().match(/^[\u30a1-\u30f6]+$/)
      ) {
        if($('.last_kata p').hasClass('wrong-message')) {
          return
        } else {
          $('.last_kata').append('<p class="wrong-message last_name_kata-message">姓カナ を入力してください</p>');
        }
      } else {
        $('.last_name_kata-message').remove();
      }
    });
  
    $('#user_user_profile_attributes_first_name_kata').blur(function() {
      if($(this).val() == "" ||
        !$(this).val().match(/^[\u30a1-\u30f6]+$/)
      ) {
        if($('.first_kata p').hasClass('wrong-message')) {
          return
        } else {
          $('.first_kata').append('<p class="wrong-message first_name_kata-message">姓カナ を入力してください</p>');
        }
      } else {
        $('.first_name_kata-message').remove();
      }
    });
    $('#user_user_profile_attributes_tel').blur( function() {
      // $('#user_user_profile_attributes_tel').val()
  
      if($('#user_user_profile_attributes_tel').val() == "" ||
        !$('#user_user_profile_attributes_tel').val().match(/^0\d{9,10}$/)
      ) {
        if($('.phone p').hasClass('wrong-message')) {
          return
        } else {
          $('.phone').append('<p class="wrong-message tel-message">電話番号の書式を確認してください</p>');
        }
      
      } else {
        $('.tel-message').remove();
      }
    });
  });
});
