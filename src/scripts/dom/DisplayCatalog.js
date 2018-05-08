// Purpose: Display HTML representations of all animals in API
const APIManager = require("../api/APIManager")
const $ = require("jquery")
s
const animalList = function () {
    // Get the animals
    APIManager.getAllAnimals()
        .then(allAnimals => {
            // Iterate over animal list
            allAnimals.forEach(animal => {
                // Build HTML representation for each animal
                $("#animal-list").append(
                    `
                    <div class="catalogItem" id="${animal.id}">
                    <section>
                    ${animal.species}
                    </section>

                    <button>Purchase<button>
                    </div>
                    `
                )
            })
            // Button click grabs animal id
            $(".catalogItem").on("click", function () {
                console.log(event.currentTarget.id)
                // Display order form for this animal
            })
        })
            }

module.exports = animalList