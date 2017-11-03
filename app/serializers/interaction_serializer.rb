class InteractionSerializer < ActiveModel::Serializer
  attributes :friend_id, :interaction_type, :notes, :date_of_interaction
  # belongs_to :friend
end
