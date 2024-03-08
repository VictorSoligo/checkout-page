async function fetchAdressData() {
    const cep = document.getElementById('cep').value

    if (!cep) {
        return
    }

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const data = await response.json()

    return {
        street: data.logradouro,
        neighborhood: data.bairro,
        fu: data.uf,
        city: data.localidade,
    }   
}

async function fillAdressInputs() {
    const cityInput = document.getElementById('city')
    const fuInput = document.getElementById('fu')
    const streetInput = document.getElementById('street')
    const neighborhoodInput = document.getElementById('neighborhood')
    const numberInput = document.getElementById('number')
    
    const { city, fu, neighborhood, street }  = await fetchAdressData()

    cityInput.value = city
    fuInput.value = fu
    streetInput.value = street
    neighborhoodInput.value = neighborhood

    numberInput.focus()
}