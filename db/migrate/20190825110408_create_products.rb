class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string   :name,null:false,index:true
      t.integer  :price,null:false
      t.integer  :amount_of_time
      t.text   :description
      t.integer  :maximum_occupancy,null:false
      t.timestamps
    end
  end
end
