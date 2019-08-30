class RemoveAncestryToCategories < ActiveRecord::Migration[5.2]
  def up
    remove_column :categories, :ancestry
      end

  def down
    add_column :categoriies, :ancestry, :string
  end
end
