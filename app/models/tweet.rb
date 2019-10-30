class Tweet < ApplicationRecord

  belongs_to :user

  # order tweets chronologically:
  default_scope -> { order('created_at DESC') }

  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 255 }

  # has_many :likes



end
