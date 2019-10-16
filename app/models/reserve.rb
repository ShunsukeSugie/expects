class Reserve < ApplicationRecord
  has_one :purchase,dependent: :destroy
  belongs_to :product,optional:true
  @reserves=Reserve.where(status:1)
  @reserves.each do |reserve|
  if reserve.date<Time.now
     reserve.update(status:2)
  end
end
end