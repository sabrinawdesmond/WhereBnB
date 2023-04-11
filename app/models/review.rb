class Review < ApplicationRecord
  validates :reviewer_id, :listing_id, :body, :overall, :cleanliness, :accuracy, :communication, :location, :check_in, :value, presence: true

  belongs_to :listing,
  primary_key: :id,
  foreign_key: :listing_id,
  class_name: :Listing

  belongs_to :reviewer,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :User
end
