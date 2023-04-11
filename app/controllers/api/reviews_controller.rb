class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :update, :destroy]

  def index
    @reviews = current_user.reviews
    render :index
  end

  def show
    @reviews = @listing.reviews
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
