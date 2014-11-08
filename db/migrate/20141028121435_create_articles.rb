class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.text :title
      t.float :price
      t.text :description
      t.string :email
      t.integer :category_id
      t.string :key
      t.timestamps
    end
  end
end
