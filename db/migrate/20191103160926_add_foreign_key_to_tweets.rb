class AddForeignKeyToTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :tweets, :user_id
    add_reference :tweets, :user, index: true, foreign_key: true
  end
end
