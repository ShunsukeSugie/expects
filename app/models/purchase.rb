class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :reserve
  with_options presence: true do
    validates :member,:price
  end
end
