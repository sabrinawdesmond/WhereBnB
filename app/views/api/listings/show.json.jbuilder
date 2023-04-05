json.listing do
  json.extract! @listing, :id, :host_id, :title, :description, :address, :city, :country, :price, :num_beds, :num_rooms, :num_bathrooms, :longitude, :latitude
end