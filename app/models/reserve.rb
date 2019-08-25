class Reserve < ApplicationRecord
  has_one :purchase,dependent: :destroy
  belongs_to :product,optional:true
  
end
