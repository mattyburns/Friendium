class Friend < ApplicationRecord
  belongs_to :user
  has_many :interactions

  validates :first_name, presence: true
end
