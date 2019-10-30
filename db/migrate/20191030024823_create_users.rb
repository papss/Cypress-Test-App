class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :bio
      t.string :profile_pic
      t.integer :follower_id

      t.timestamps
    end
  end
end
