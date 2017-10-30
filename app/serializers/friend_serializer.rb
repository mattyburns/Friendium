class FriendSerializer < ActiveModel::Serializer

  # belongs_to :user
  has_many :interactions
end
