class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.integer  :member,null:false
      t.integer  :price,null:false
      t.references :reserve,foreign_key:true
      t.references :user,foreign_key:true
      t.timestamps
    end
  end
end
