class CreateChatRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_rooms do |t|
      t.references :purchase,null:false,foreign_key:true
      t.timestamps
    end
  end
end
