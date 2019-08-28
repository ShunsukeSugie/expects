class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chat_room 
  mount_uploader :image,UploadFileUploader
  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
      'まだメッセージはありません。'
    end
  end
end
