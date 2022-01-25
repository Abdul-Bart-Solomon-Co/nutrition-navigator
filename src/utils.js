export const filterByTagId = (arrayToFilter) => {
    const tempArray = [];
    const filteredArray = arrayToFilter.filter((individualFood) => {

        if (!tempArray.includes(individualFood.tag_id)) {
            tempArray.push(individualFood.tag_id);
            return individualFood
        }

        return false;

    })
    return filteredArray
}

// this is an array of the attr_id that we need
const attrObj = {
    318: "vitamin A",
    324: "vitamin D",
    415: "vitamin B-6",
    401: "vitamin C",
    573: "vitamin E",
    304: "Magnesium",
    309: "Zinc",
    303: "Iron",
    320: "vitamin A"
}

// This is an object of unit values that we need
const unitObj = {
    318: "IU",
    324: "IU",
    415: "mg",
    401: "mg",
    573: "mg",
    304: "mg",
    309: "mg",
    303: "mg",
    320: "mcg"
}

// A function that will return a new nutrients array with attribute id's changed to names
export const filteredNutrients = (nutrientsArray) => {
    const newArr = nutrientsArray.filter((individualNutrientAttribute) => {
        if(attrObj.hasOwnProperty(individualNutrientAttribute.attr_id)) {
            return true;
        }
        return false;
    }).map((individualNutrientObject) => {
        individualNutrientObject.name = attrObj[individualNutrientObject.attr_id];
        individualNutrientObject.unit = unitObj[individualNutrientObject.attr_id];

        return individualNutrientObject;
    })

    return newArr;

};


// const comparisonObj = { 
// brand_name: "N/A",
// food_name: "burger",
// full_nutrients: 'someArr',
// nf_calories: 540.14,
// nf_dietary_fiber: "N/A",
// nf_protein: 34.28,
// nf_saturated_fat: 10.52,
// nf_sodium: 791,
// nf_sugars: "N/A",
// nf_total_carbohydrate: 40.27,
// nf_total_fat: 26.56}
// a function to rename keys and add units (primarily for comparisons object to be used with chart.js)
export const exchangeObject = (comparisonObj) => {
    const newComparisonObj = {
        food_name: comparisonObj.food_name,
        'Full Nutrients': comparisonObj.full_nutrients,
        'Calories (kcal)': comparisonObj.nf_calories,
        'Dietary Fiber (grams)': comparisonObj.nf_dietary_fiber,
        'Protein (grams)': comparisonObj.nf_protein,
        'Saturated Fat (grams)': comparisonObj.nf_saturated_fat,
        'Sodium (mg)': comparisonObj.nf_sodium,
        'Sugars (grams)': comparisonObj.nf_sugars,
        'Total Carbohydrates (grams)': comparisonObj.nf_total_carbohydrate,
        'Total Fat (grams)': comparisonObj.nf_total_fat
    }

    return newComparisonObj
}