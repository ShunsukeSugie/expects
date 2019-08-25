class Map < ApplicationRecord
  delegate :name, to: :prefecture
  belongs_to :product,optional:true
  geocoded_by :address
  after_validation :geocode
end
