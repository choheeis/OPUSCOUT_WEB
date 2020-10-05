/* Internal Dependencies */
import { useMiddleCategoryState, useRightItemState } from "../../provider/MainProvider";

export function GetKeywordFilterData() {
    // state, dispatch scope
    const middleCategoryState = useMiddleCategoryState();
    const rightItemState = useRightItemState();

    const checkedCategoies = []; 
    Object.keys(middleCategoryState).map(largeCategory => {
        middleCategoryState[largeCategory].map(middleCategory => {
            if(middleCategory.check === true) {
                checkedCategoies.push(middleCategory.id);
            }
        })
    });

    const keywords = [];
    keywords.push(rightItemState.keyword.mustKeword)

    const keywordFilterBodyData = {
        // "category" : checkedCategories,
        // "keyword" : rightItemState.keyword.mustKeword, 로 바꿔야함
        "category" : ["shoes", "nail"],
        "keyword" : ["running", "small"],
        "sales" : {
            "min" : rightItemState.keyword.minSales,
            "max" : rightItemState.keyword.maxSales
        },
        "revenue" : {
            "min" : rightItemState.keyword.minRevenue,
            "max" : rightItemState.keyword.maxRevenue
        },
        "price" : {
            "min" : rightItemState.keyword.minPrice,
            "max" : rightItemState.keyword.maxPrice
        },
        "seller" : {
            "min" : rightItemState.keyword.minSeller,
            "max" : rightItemState.keyword.maxSeller
        },
        "review" : {
            "min" : rightItemState.keyword.minReview,
            "max" : rightItemState.keyword.maxReview
        },
        "opportunity_score" : {
            "min" : rightItemState.keyword.minOpportunity,
            "max" : rightItemState.keyword.maxOpportunity
        }
    }

    return keywordFilterBodyData;
}