json.extract! user, :id, :name, :bio, :profile_pic, :follower_id, :created_at, :updated_at
json.url user_url(user, format: :json)
