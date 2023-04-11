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
    "This stunning home is a perfect blend of modern architecture and breathtaking city views. The floor-to-ceiling windows offer an unobstructed panoramic view of the city skyline from every room. The spacious balcony is an excellent spot to unwind after a long day and take in the stunning views. The interior design of the home is equally impressive, with contemporary furniture and decor that complements the stunning views. This home is a perfect fit for those who value luxury and style.",
    "This charming farmhouse-style home offers the perfect blend of comfort and country living. The large front porch is an ideal spot to enjoy the fresh air, while the sprawling backyard offers ample space for outdoor activities. The home features a cozy living room with a wood-burning fireplace and wood paneling that adds to the rustic, cabin-like feel of the space. The kitchen is spacious and well-equipped, making it perfect for hosting family and friends.",
    "This cozy cottage-style home is perfect for those who love the feel of a mountain cabin. The wood paneling and wood-burning fireplace create a cozy and inviting atmosphere. The interior design is tasteful and simple, with comfortable furniture and rustic decor. The home has everything you need for a comfortable stay, including a well-equipped kitchen, a comfortable bedroom, and a cozy living area.",
    "This elegant home is a perfect blend of luxury and style. The private pool is a great spot to relax and cool off, while the gourmet kitchen is perfect for preparing delicious meals. The spacious master suite is the ultimate retreat, with a comfortable bed and a luxurious bathroom. The interior design of the home is impeccable, with high-end finishes and stylish decor throughout.",
    "This modern apartment offers a sleek, industrial design that is perfect for those who love contemporary style. The exposed ductwork and high ceilings add to the industrial feel of the space. The apartment is well-equipped, with all the modern amenities you need for a comfortable stay. The location is perfect for those who want to be in the heart of the city, with easy access to shopping, dining, and entertainment.",
    "This spacious ranch-style home is perfect for those who love to entertain. The large outdoor patio is an ideal spot for hosting barbecues and outdoor gatherings. The fully equipped bar is perfect for serving up your favorite drinks. The interior of the home is equally impressive, with comfortable furniture and tasteful decor throughout. The bedrooms are spacious and comfortable, making it the perfect place to relax after a long day.",
    "This cozy bungalow is a perfect spot for those who want to escape the hustle and bustle of the city. The quiet, tree-lined neighborhood is perfect for those who value peace and tranquility. The beautifully landscaped front yard is a great spot to enjoy a morning cup of coffee or an evening glass of wine. The interior of the home is tastefully decorated, with comfortable furniture and rustic accents throughout.",
    "This classic colonial-style home is perfect for those who love traditional architecture. The grand staircase and elegant moldings are a nod to the home's historic roots. The home is spacious and well-appointed, with plenty of room for a growing family. The backyard is large and perfect for outdoor activities, while the interior of the home is tastefully decorated and comfortable.",
    "This luxurious penthouse is the ultimate in style and sophistication. The stunning panoramic views of the city are breathtaking, and the high-end finishes and appliances are second to none. The penthouse is spacious and well-appointed, with all the modern amenities you need for a comfortable stay. The location is perfect for those who want to be in the heart of the city, with easy access to shopping, dining, and entertainment. The penthouse is truly a one-of-a-kind experience.",
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
