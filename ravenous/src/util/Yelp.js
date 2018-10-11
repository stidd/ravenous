const apiKey =
  "GKySTHxwFHmMAjT98N8g3f-Qsf5GRlrCVHQSudKVbFg4j0owhgUs_F35DfLgjohpiWWqc2CS66RQI8UiwPUR-zOyjiz56LOeO175J1ljPKNM3hl15-2Xw2DCFqS-W3Yx";

export const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0]["alias"],
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
