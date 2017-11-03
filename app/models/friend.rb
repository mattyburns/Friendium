class Friend < ApplicationRecord
  belongs_to :user
  has_many :interactions

  validates :full_name, presence: true
end
