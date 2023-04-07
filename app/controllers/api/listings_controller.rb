class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find_by(params[:id])
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(:host_id, :title, :description, :address, :city, :country, :price, :num_beds, :num_rooms, :num_bathrooms, :longitude, :latitude)
  end
end
