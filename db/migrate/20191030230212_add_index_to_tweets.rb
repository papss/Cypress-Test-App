class AddIndexToTweets < ActiveRecord::Migration[6.0]
  def change
    add_index :tweets, [:user_id, :created_at]
  end
end
