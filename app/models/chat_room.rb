class ChatRoom < ApplicationRecord
  has_many :chat_members
  has_many :users, through: :chat_members
  has_many :messages
  belongs_to :purchase 
  def show_last_message
  if (last_message = messages.last).present?
    last_message.content? ? last_message.content : '画像が投稿されています'
  else
    'まだメッセージはありません。'
  end
end

end
