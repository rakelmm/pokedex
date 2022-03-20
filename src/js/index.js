const listingSelectionPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.card-pokemon');

listingSelectionPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {  
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open')

        const idPokemonSelection = pokemon.attributes.id.value

        const pokemonCardIdToOpen = 'card-' + idPokemonSelection
        const cardPokemonToOpen = document.getElementById(pokemonCardIdToOpen) 
        cardPokemonToOpen.classList.add('open')

        const activePokemonInListing = document.querySelector('.active')
        activePokemonInListing.classList.remove('active')

        const pokemonSelectedInListing = document.getElementById(idPokemonSelection)
        pokemonSelectedInListing.classList.add('active')
    })
    
})