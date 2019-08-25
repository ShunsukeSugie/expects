class CreateMaps < ActiveRecord::Migration[5.2]
  def change
    create_table :maps do |t|
      t.string :address, null:false
      t.float  :latitude, index:true
      t.float  :longitude,index:true
      t.references :product,foreign_key:true
      t.timestamps
    end
  end
end
