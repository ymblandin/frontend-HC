# Documentation of the fridge challenge!

## What did I do

1. Initialize a react project with Vite
2. Create 3 folders: components, contexts and pages
3. Create the pages Fridge and AddFood
4. Create the routes to the above pages within the App file
5. Create some mock data within the file MOCK_DATA.json
6. Create the FridgeContext file and declare some states for the search query and the fridge
7. Declare the query state and initialize it to '', declare the fridge state and initialize it to the mock data
8. Within the Fridge page, map the fridge array and display the different food, their respective quantity and the 3 buttons: delete the food, '+' and '-'
9. Create the component SearchBar in order to set the query to the input of the user
10. Within the Fridge page create the functions handleDelete, handleIncrement and handleDecrement to remove a food from the fridge, to increase/decrease the quantity of a food
11. Within the Fridge page set a filter function to take into account the search query that the user typed
12. Install the react hook form and yup resolver packages
13. Within the AddFood page create the schema for the validation of the entered data (type, values...)
14. Within the AddFood page create the function onSubmit. It checks if the food already exist in the fridge. If it's the case only increase the quantity, if not add the food to the fridge with the corresponding quantity
15. Within the AddFood page, add the reset function to reset the input fields after the user clicked on add a food

## Problems encountered

1. At first, the functions handleIncrement and handleDecrement were not working properly (Fridge page)
2. I realized that the quantity of a food could be negative, so I tried to modify handleDecrement to remove a food when its quantity is zero (Fridge page)
3. At first, the function onSubmit were not working properly (AddFood page). The fridge array was set to a number as I was setting the fridge to addFood/push(data)

## Choices made and why

1. I decided to use a context rather than doing some props drilling as it seems more appropriate
2.
