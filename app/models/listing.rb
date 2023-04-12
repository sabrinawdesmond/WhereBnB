class Listing < ApplicationRecord
  validates :host_id, :title, :description, :address, :city, :country, :price, :num_beds, :num_rooms, :num_bathrooms, :longitude, :latitude, presence: true

  belongs_to :host,
  primary_key: :id, 
  foreign_key: :host_id,
  class_name: :User

  has_many :reviews,
  dependent: :destroy

  # has_many :reservations,
  # dependent: :destroy
end
