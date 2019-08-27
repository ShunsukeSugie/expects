class CreateChatMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_members do |t|
      t.references :user,foreign_key:true
      t.references :chat_room,foreign_key:true
      t.timestamps
    end
  end
end
