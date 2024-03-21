// Step 1: Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Step 2: Get countries from Asia continent/region using Filter function
    const countriesInAsia = data.filter(country => country.region === 'Asia');

    console.log("Countries in Asia:");
    console.log(countriesInAsia);

    // Step 2: Get countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);

    console.log("\nCountries with population less than 2 lakhs:");
    console.log(countriesWithPopulationLessThan2Lakhs);

    // Step 3: Print name, capital, and flag using forEach function
    console.log("\nDetails of countries:");
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });

    // Step 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);

    console.log("\nTotal population of countries:", totalPopulation);

    // Step 5: Print the country that uses US dollars as currency
    const countryWithUSDollarCurrency = data.find(country => country.currencies && country.currencies.USD);

    console.log("\nCountry that uses US dollars as currency:");
    console.log(countryWithUSDollarCurrency);
  })
  .catch(error => console.error('Error fetching data:', error));
