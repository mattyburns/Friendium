class Interaction < ApplicationRecord
  belongs_to :friend

  validates :interaction_type, presence: true
  validates :date_of_interaction, presence: true


  def self.by_date
    self.all.sort_by{|interaction| interaction.date_of_interaction}.reverse
  end

end
