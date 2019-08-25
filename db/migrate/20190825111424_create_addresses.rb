class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.integer :prefecture_id,null:false
      t.string  :town,null:false
      t.string  :town_number,null:false
      t.references :product,null:false,foreign_key:true
      t.timestamps
    end
  end
end
