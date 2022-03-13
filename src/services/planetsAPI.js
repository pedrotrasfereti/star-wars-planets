const getPlanetsData = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  try {
    const response = await fetch(URL);

    const { results } = await response.json();

    // Remove propriedade desnecessária dos planetas
    results.forEach((planet) => delete planet.residents);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export default getPlanetsData;
