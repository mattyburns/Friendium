class Interaction < ApplicationRecord
  belongs_to :friend

  validates :type, presence: true
  validates :date, presence: true

end
