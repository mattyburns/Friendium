class Interaction < ApplicationRecord
  belongs_to :friend

  validates :interaction_type, presence: true
  validates :date_of_interaction, presence: true

end
