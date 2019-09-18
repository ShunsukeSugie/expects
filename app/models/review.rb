class Review < ApplicationRecord
  belongs_to :purchase
  belongs_to :product

  enum grade:{"5:とても良かった":5,"良かった":4,"普通":3,"あまり良くなかった":2,"良くなかった":1}
end
