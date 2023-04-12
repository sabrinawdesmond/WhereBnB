json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :reviewer_id, :listing_id, :body, :overall, :cleanliness, :accuracy, :communication, :location, :check_in, :value
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do 
      json.extract! user, :id, :username
    end
  end
end