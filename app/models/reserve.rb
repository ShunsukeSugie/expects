class Reserve < ApplicationRecord
  has_one :purchase,dependent: :destroy
  belongs_to :product,optional:true
  has_one :chat_room,dependent: :destroy
end
