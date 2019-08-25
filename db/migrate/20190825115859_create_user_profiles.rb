class CreateUserProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_profiles do |t|
      t.string      :last_name, null: false
      t.string      :first_name, null: false
      t.string      :last_name_kata, null: false
      t.string      :first_name_kata, null: false
      t.date        :birth, null: false
      t.string      :tel, null: false
      t.string      :avatar, null: true
      t.text        :introduction, null: true
      t.references  :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
