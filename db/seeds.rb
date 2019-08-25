parent_id1 = Category.create!(name:"体験教室")
parent_id2 = Category.create!(name:"ツアー")
parent_id3 = Category.create!(name:"セミナー")
parent_id4 = Category.create!(name:"その他")
parent_id5 = %w{工芸品 語学 スポーツ IT 音楽 美容 農業 暮し 料理 食品}
parent_id6 = %w{ショッピング 食 工場見学 鑑賞}
parent_id7 =%w{起業 就職 ビジネス 資格 IT 著名人}
parent_id5.each do |category|

 parent_id1.children.create!(name:category)
end

parent_id6.each do |category|
  parent_id2.children.create!(name:category)
end

parent_id7.each do |category|
  parent_id3.children.create!(name:category)
end