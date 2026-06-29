import requests


def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if country_name:

            # Fetch country details from the REST Countries API

            # Check if the response status code is 200

            # If the response status code is 200, get the first matching country result
            
            import requests
            response = requests.get(
            'https://api.restcountries.com/countries/v5?q=canada',
            headers={'Authorization': 'Bearer rc_live_5b0ad9c0946f4b0f9e41347b2176ed12'}
            )
            data = response.json()

            # Get the common name and population of the country

            # Print the country name and population

            # If the response status code is not 200, print an error message

            break
        else:
            print("Invalid input. Please enter a valid country name.")


if __name__ == "__main__":
    main()
 