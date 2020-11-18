/* Internal Dependencies */
import { useMiddleCategoryState, useRightItemState } from "../../provider/MainProvider";

export function GetCategoryFilterData() {
    const middleCategoryState = useMiddleCategoryState();
    const rightItemState = useRightItemState();

    const checkedCategories = [];
    Object.keys(middleCategoryState).map(largeCategory => {
        middleCategoryState[largeCategory].map(middleCategory => {
            if(middleCategory.check === true) {
                checkedCategories.push(middleCategory.id);
            }
        })
    });

    // 서버 호출시 같이 보낼 바디 데이터 (수정 필요)
    const categoryFilterBodyData = {
        // "Mcategory" : checkedCategories 로 바꿔야함
        "Mcategory" : ["shoes", "nail", "outer", "pants", "top"],
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