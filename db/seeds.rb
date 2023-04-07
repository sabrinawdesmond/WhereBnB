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
    "This cozy home is perfect for anyone who loves natural light. It has large windows throughout that let in plenty of sunshine.",
    "This modern home features sleek, minimalist design with high-end finishes and appliances.",
    "This charming home has a large, fenced-in backyard that's perfect for outdoor entertaining.",
    "This spacious home has an open-concept layout, making it perfect for hosting gatherings with family and friends.",
    "This classic home has beautiful hardwood floors throughout and plenty of character.",
    "This newly renovated home features brand-new appliances and finishes, giving it a fresh, modern look.",
    "This home is located in a quiet neighborhood and features a large, private backyard with plenty of trees and greenery.",
    "This bright and airy home features high ceilings and large windows that make it feel open and spacious.",
    "This cozy cottage-style home has plenty of character, with unique architectural details and a warm, inviting feel.",
    "This modern townhouse features a sleek, contemporary design with high-end finishes and plenty of natural light.",
    "This spacious home has a large, fenced-in backyard that's perfect for pets or children to play.",
    "This cozy apartment has plenty of charm, with unique features like exposed brick and hardwood floors.",
    "This modern loft-style home features an open-concept layout and plenty of natural light.",
    "This charming bungalow features a cozy, cottage-style feel with plenty of character",
    "This newly constructed home has never been lived in and features brand-new appliances and finishes.",
    "This spacious home has plenty of room for a growing family, with multiple bedrooms and plenty of storage space.",
    "This historic home has been beautifully restored to its original glory, with modern amenities and finishes.",
    "This bright and airy home features a large, open-concept living area and plenty of natural light.",
    "This cozy cabin-style home is perfect for anyone who loves spending time in nature, with a large backyard and plenty of trees.",
    "This spacious home features high-end finishes and appliances, making it perfect for anyone who loves to cook and entertain.",
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
  20.times do |i|
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
