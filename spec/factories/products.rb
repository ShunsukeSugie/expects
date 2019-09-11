FactoryBot.define do
  factory :product do
    name {"test"}
    price {"3455"}
    amount_of_time {1}
    description {"test"}
    maximum_occupancy {2}
    category_id {2}
    user
    
  end
end