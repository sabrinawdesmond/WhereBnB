class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @reviews = Review.where(listing_id: params[:listing_id]).includes(:reviewer)

    @users = []
    
    @reviews.each do |review|
      @users << review.reviewer
    end
    render :index
  end

  def show
    # @listing = Listing.find(params[:listing_id])

    # puts "Listing: #{@listing}"

    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review.user_id == current_user.id
      if @review.update(review_params)
        render :show
      else
        render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: ["You must be the author of the review to edit"] }
    end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if current_user.id == @review.user_id
      @review.delete
      render json: { message: ["Review Deleted"] }
    else
      render json: { errors: ["You must be the author of the review to delete"] }
    end
  end

  private

  def review_params
    params.require(:review).permit(:reviewer_id, :listing_id, :body, :overall, :cleanliness, :accuracy, :communication, :location, :check_in, :value)
  end
end
