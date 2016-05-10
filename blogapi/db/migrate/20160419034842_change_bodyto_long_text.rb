class ChangeBodytoLongText < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :body, :text
  end
end
