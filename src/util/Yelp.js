const apiKey = 'krjAd6Ac9Ts53GuAPlBMld3MNsvH3JDQXPExdC9tX1cZ4q5Yy3tVbUagd2bWXX7VdKq2XFpN9T2aBJcs4e3xz687amz0gJWbzUdq7_iOQK_6VcXLU9T1SV3pxChrY3Yx';

const Yelp = {
    search(term, location, sortBy) {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Access-Control-Allow-Origin": "https://api.yelp.com"
                }
            })
        .then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0],
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }

        });

    }

}

export default Yelp;

