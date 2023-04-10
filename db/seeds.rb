require "faker"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Listing.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!("users")
  # ApplicationRecord.connection.reset_pk_sequence!("listings")

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    username: "Demo-lition",
    email: "demo@user.io",
    password: "password",
  )

  puts "Creating listings..."

  descriptions = [
    "This cozy home is perfect for anyone who loves natural light. It has large windows throughout that let in plenty of sunshine. The open-concept living and dining area is perfect for hosting guests, and the spacious kitchen has plenty of storage and counter space. With two bedrooms and a home office, this home is perfect for a small family or someone who works from home.",
    "This modern home features sleek, minimalist design with high-end finishes and appliances. The open-concept living area is perfect for entertaining guests, and the large windows provide plenty of natural light. With three bedrooms and a spacious backyard, this home is perfect for a family looking for a modern, stylish home in a quiet neighborhood.",
    "This charming home has a large, fenced-in backyard that's perfect for outdoor entertaining. The open-concept living area features beautiful hardwood floors and a fireplace, creating a warm and inviting atmosphere. With three bedrooms and a spacious kitchen, this home is perfect for a family looking for a cozy, welcoming home in a great location.",
    "This spacious home has an open-concept layout, making it perfect for hosting gatherings with family and friends. The large windows throughout provide plenty of natural light, and the fireplace in the living room creates a cozy atmosphere. With four bedrooms and a large backyard, this home is perfect for a family looking for plenty of space and comfort.",
    "This classic home has beautiful hardwood floors throughout and plenty of character. The formal dining room and spacious living area provide plenty of space for hosting guests, and the cozy den is perfect for relaxing with a book. With three bedrooms and a large backyard, this home is perfect for a family looking for a charming, historic home in a great location.",
    "This newly renovated home features brand-new appliances and finishes, giving it a fresh, modern look. The open-concept living area is perfect for entertaining guests, and the large backyard is perfect for outdoor activities. With three bedrooms and a home office, this home is perfect for a family looking for a modern, stylish home with plenty of space.",
    "This home is located in a quiet neighborhood and features a large, private backyard with plenty of trees and greenery. The spacious living area features high ceilings and large windows that provide plenty of natural light. With three bedrooms and a modern kitchen, this home is perfect for a family looking for a quiet, peaceful home in a great location.",
    "This bright and airy home features high ceilings and large windows that make it feel open and spacious. The formal dining room and cozy den provide plenty of space for hosting guests, and the spacious backyard is perfect for outdoor activities. With four bedrooms and a modern kitchen, this home is perfect for a family looking for a bright, spacious home with plenty of character.",
    "This cozy cottage-style home has plenty of character, with unique architectural details and a warm, inviting feel. The formal dining room and cozy living area provide plenty of space for hosting guests, and the large backyard is perfect for outdoor activities. With two bedrooms and a home office, this home is perfect for a small family or someone who works from home.",
    "This modern townhouse features a sleek, contemporary design with high-end finishes and plenty of natural light. The open-concept living area is perfect for entertaining guests, and the spacious backyard is perfect for outdoor activities. With three bedrooms and a home office, this home is perfect for a family looking for a stylish, modern home in a great location.",
    "This stunning home boasts breathtaking views of the city skyline from every room, with floor-to-ceiling windows and a spacious balcony.",
    "This charming farmhouse-style home has plenty of room for outdoor activities, with a large front porch and a sprawling backyard.",
    "This cozy cottage-style home has a rustic, cabin-like feel with wood paneling and a wood-burning fireplace.",
    "This elegant home features luxurious amenities such as a private pool, a gourmet kitchen, and a spacious master suite.",
    "This modern apartment has a sleek, industrial design with exposed ductwork and high ceilings.",
    "This spacious ranch-style home is perfect for those who love to entertain, with a large outdoor patio and a fully equipped bar.",
    "This cozy bungalow is nestled in a quiet, tree-lined neighborhood and features a beautifully landscaped front yard.",
    "This classic colonial-style home features a grand staircase and elegant moldings, with plenty of space for a growing family.",
    "This luxurious penthouse offers stunning panoramic views of the city and features high-end finishes and appliances.",
  ]

  titles = [
    "Sunny and Spacious Home",
    "Modern Luxury Home",
    "Charming Home with Large Backyard",
    "Open-Concept Family Home",
    "Classic Home with Beautiful Hardwood Floors",
    "Newly Renovated Modern Home",
    "Quiet and Private Home with Large Backyard",
    "Bright and Airy Home with High Ceilings",
    "Cozy Cottage-Style Home",
    "Sleek and Contemporary Townhouse",
    "Pet-Friendly Home with Fenced-in Backyard",
    "Charming Apartment with Unique Features",
    "Modern Loft-Style Home with Natural Light",
    "Cozy Bungalow with Character",
    "Brand-New Construction Home",
    "Spacious Family Home with Multiple Bedrooms",
    "Beautifully Restored Historic Home",
    "Bright and Open-Concept Home",
    "Rustic Cabin-Style Home in Nature",
    "High-End Home for Entertaining",
  ]

  Listing.create!(
    title: "Beautiful Home",
    description: "Enjoy peace and quiet at this humble abode",
    address: "123 Main Street",
    city: "Austin",
    country: "USA",
    longitude: 0,
    latitude: 0,
    price: 300,
    num_beds: 3,
    num_rooms: 3,
    num_bathrooms: 2,
    host_id: 1,
  )

  #More listings
  19.times do |i|
    num_beds = rand(3...8)
    num_rooms = rand(num_beds+1..9)
    num_bathrooms = rand(1..num_rooms)
    Listing.create!({
      title: titles[i],
      description: descriptions[i],
      address: Faker::Address.street_address,
      city: Faker::Address.city,
      country: Faker::Address.country,
      longitude: Faker::Address.longitude,
      latitude: Faker::Address.latitude,
      price: Faker::Number.between(from: 200, to: 1000),
      num_beds: num_beds,
      num_rooms: num_rooms,
      num_bathrooms: num_bathrooms,
      host_id: 1,
    })
  end


  # More users
  10.times do
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: "password",
    })
  end

  puts "Done!"
end
