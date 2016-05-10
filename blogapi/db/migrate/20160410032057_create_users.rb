class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :handle
      t.string :email
      t.string :created_at

      t.timestamps
    end
  end
end
