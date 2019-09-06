class AddCountToReserve < ActiveRecord::Migration[5.2]
  def change
    add_column :reserves,:count,:integer,null:false
  end
end
