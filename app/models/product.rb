class Product < ApplicationRecord
  has_one  :address,dependent: :destroy
  has_many :product_images,dependent: :delete_all
  accepts_nested_attributes_for :address,:product_images
  belongs_to :category,optional:true
  has_one :map,dependent: :destroy
  geocoded_by :address
  enum amount_of_time:{"1時間":1,"2時間":2,"3時間":3,"4時間":4,"5時間":5,"6時間":6,"7時間":7,"8時間":8,"9時間":9,"10時間以上":10}
  enum maximum_occupancy:{"1人":1,"2人":2,"3人":3,"4人":4,"5人":5,"6人":6,"7人":7,"8人":8,"9人":9,"10人以上":10}
end
