class FriendSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :preferred_name, :preferred_pronouns, :email, :phone_number, :street_address, :city, :state, :zip_code, :user_id
  belongs_to :user
  has_many :interactions
end
