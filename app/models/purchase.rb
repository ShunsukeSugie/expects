class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :reserve
  has_one  :product,through: :reserve
  has_one :chat_room
  with_options presence: true do
    validates :member,:price
  end
end
