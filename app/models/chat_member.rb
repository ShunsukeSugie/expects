class ChatMember < ApplicationRecord
  belongs_to :chat_room ,dependent: :delete
  belongs_to :user
end
