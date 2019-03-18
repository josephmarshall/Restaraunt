  Menu.create(name: "Breakfast", id: 1)
  Menu.create(name: "Lunch", id: 2)
  Menu.create(name: "Dinner", id: 3)

[1,2,3].each do |menu|
  10.times do |item|
    Item.create(name: Faker::Food.dish, description: Faker::Food.description, price: rand(1..50), menu_id: menu)
  end
end

puts "seeded"