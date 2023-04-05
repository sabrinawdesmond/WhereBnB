json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :host_id, :title, :description, :address, :city, :country, :price, :num_beds, :num_rooms, :num_bathrooms, :longitude, :latitude
    end
  end
end
