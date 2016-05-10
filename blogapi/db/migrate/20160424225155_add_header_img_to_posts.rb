class AddHeaderImgToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :header, :string
  end
end
