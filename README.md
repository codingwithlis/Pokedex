# Pokédex

[Pokédex Demo](http://ec2-18-188-68-239.us-east-2.compute.amazonaws.com:3004/)

## What it is:
"Pokédex" is a single page web application built using react, that resembles the functinality of a pokédex device. A pokédex device is an electronic device designed to catalogue and provide information regarding the various species of Pokémon. This pokédex uses the [pokémon API](https://pokeapi.co/docs/v2.html/) to help you search for your favorite pokémons and add them to your pokémon collection. 

## What it looks like:
![Image description](https://github.com/codingwithlis/US-states-mortality-rates-map/blob/master/image.png)

## How it works:
- Users will be prompted to a main page that includes a single `Render Map!` button.
- Once this button is clicked a US states map will be rendered.
- Each state will be colored in orange, with a specific shade, the least intense the color orange is the lower the mortality rate for that state is and the more intense it is the higher the mortality rate for that state is.
- When the mouse hovers over the states it displays the mortality rate for that specific state.

## How it was built:
###### API Integration
- Signed up for an account with [Data.Medicare.gov](https://data.medicare.gov/login) so that I could use the [*Hospital Compare* API](https://dev.socrata.com/foundry/data.medicare.gov/ukfj-tt6v).
- Created a configuration file similar called `config.js` to store my App Token.

###### Data Acquisition
- In `App.jsx`, sent a GET request to the `/api/heartFailures` endpoint in my web server when the component mounts.
- In `server/index.js`, built out the request handler that responds to GET requests to my `/api/heartFailures` endpoint.

###### Data Wrangling/Munging
- The response from the `/api/heartFailures` endpoint are formatted the same as in `client/src/dummyData.js`, that I included as an example.
- In particular, the request handler does the following:
    - Cleans the dataset to remove all unnecessary data, such as the data associated with US Territories (AS, DC, GU, MP, PR, VI).
    - Processes the dataset by determining the average score for each state.
        - To get a single Mortality Rate score for each state, I had to determine the average of all 30-Day Post-Discharge Mortality Rates across all hospitals in a given state, per state.
    - Reformat the data shape so that it is in an appropriate format.

###### Data Visualization:
- Populated and rendered the US Map Data Visualization by passing the new, tidy dataset into the instance of the MapView.jsx component instantiated within `App.jsx` via `props`.

## Future Plans:
- Include more medical details about the specific state when a user clicks on that state.

## Technologies used:
- Javascript
- Html
- Css
- React
- Node
- Express
- Docker
- AWS
- EC2