import { useCategoryState, useRightItemState } from "../../provider/MainProvider";

export function GetKeywordFilterData() {
    const categoryState = useCategoryState();
    const rightItemState = useRightItemState();

    const checkedCategories = [];
    categoryState.map( section => 
        section.map( category =>{
            if(category.check === true) {
                checkedCategories.push(category.en_name);
            }
        })
    );

    // 서버 호출시 같이 보낼 바디 데이터 (수정 필요)
    const itemFilterBodyData = {
        "category" : checkedCategories,
        "keyword" : rightItemState.keyword.mustKeword,
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
            "min" : rightItemState.keyword.minReview,
            "max" : rightItemState.keyword.maxReview
        },
        "opportunity_score" : {
            "min" : rightItemState.keyword.minInvest,
            "max" : rightItemState.keyword.maxInvest
        }
    }

    return itemFilterBodyData;
}