# json.review do
  json.extract! @review, :id, :reviewer_id, :listing_id, :body, :overall, :cleanliness, :accuracy, :communication, :location, :check_in, :value
# end