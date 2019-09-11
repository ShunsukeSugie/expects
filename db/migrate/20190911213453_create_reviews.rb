class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :review,null:false
      t.integer :grade,null:false
      t.references :purchase,foreign_key:true
      t.references :product,foreign_key:true
      t.timestamps
    end
  end
end
