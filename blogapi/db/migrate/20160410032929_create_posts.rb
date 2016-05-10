class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.references :user, foreign_key: true
      t.string :created_at
      t.string :updated_at
      t.string :views
      t.string :votes

      t.timestamps
    end
  end
end
