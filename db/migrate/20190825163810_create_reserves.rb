class CreateReserves < ActiveRecord::Migration[5.2]
  def change
    create_table :reserves do |t|
      t.integer :status,null:false,default:1
      t.references :product,null:false,
      foreign_key:true
      t.date :date,null:false,index:true
      t.timestamps
    end
  end
end
