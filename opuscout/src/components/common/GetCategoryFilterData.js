import { useCategoryState, useRightItemState } from "../../provider/MainProvider";

export function GetCategoryFilterData() {
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
    const categoryFilterBodyData = {
        // "Mcategory" : checkedCategories 로 바꿔야함
        "Mcategory" : ["shoes", "nail"],
        "sales" : {
            "min" : rightItemState.category.minSales,
            "max" : rightItemState.category.maxSales
        },
        "revenue" : {
            "min" : rightItemState.category.minRevenue,
            "max" : rightItemState.category.maxRevenue
        },
        "price" : {
            "min" : rightItemState.category.minPrice,
            "max" : rightItemState.category.maxPrice
        },
        "seller" : {
            "min" : rightItemState.category.minSeller,
            "max" : rightItemState.category.maxSeller
        },
        "opportunity_score" : {
            "min" : rightItemState.category.minOpportunity,
            "max" : rightItemState.category.maxOpportunity
        }
    }

    return categoryFilterBodyData;
}