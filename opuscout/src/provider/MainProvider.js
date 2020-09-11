/* External Dependencies */
import React, { useReducer, createContext, useContext } from 'react';

const initCategory = [
    [
        {
            id: 1,
            name: '패션의류/잡화',
            check: false
        },
        {
            id: 2,
            name: '뷰티',
            check: false
        },
        {
            id: 3,
            name: '출산/유아동',
            check: false
        },
        {
            id: 4,
            name: '식품',
            check: false
        },
        {
            id: 5,
            name: '주방용품',
            check: false
        },
        {
            id: 6,
            name: '생활용품',
            check: false
        }
    ],
    [
        {
            id: 7,
            name: '홈인테리어',
            check: false
        },
        {
            id: 8,
            name: '가전디지털',
            check: false
        },
        {
            id: 9,
            name: '스포츠/레저',
            check: false
        },
        {
            id: 10,
            name: '자동차용품',
            check: false
        },
        {
            id: 11,
            name: '도서/음반/DVD',
            check: false
        },
        {
            id: 12,
            name: '완구/취미',
            check: false
        }
    ],
    [
        {
            id: 13,
            name: '문구/오피스',
            check: false
        },
        {
            id: 14,
            name: '반려동물용품',
            check: false
        },
        {
            id: 15,
            name: '헬스/건강식품',
            check: false
        }
    ],
]

const initRightFilterValue = {
    item: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        minInvest: 0,
        maxInvest: 0
    },
    keyword: {
        minSales: 0,
        maxSales: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minPrice: 0,
        maxPrice: 0,
        minReview: 0,
        maxReview: 0,
        mustKeword: ''
    },
    category: {
        minPrice: 0,
        maxPrice: 0,
        minRevenue: 0,
        maxRevenue: 0,
        minOpportunity: 0,
        maxOpportunity: 0
    },
    hot:{
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: []
    }
}

const initResetState = {
    homePage: false,
    itemPage: false,
    kewordPage: false,
    categoryPage: false,
    hotPage: false
}

// 카테고리 상태값 업데이트 리듀서
function CategoryCheckReducer(state, action) {
    switch (action.type) {
        // 카테고리 체크 박스 토글될 때 check 상태 업데이트 액션
        case 'TOGGLE' : 
            return state.map(
                checkbox => checkbox.map( box =>
                    box.id === action.id ? { ...box, check: !box.check } : box
                )
            )
        case 'TEST' :
            state = initCategory;
            console.log('메인 프로바이더')
            console.log(state);
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

// 카테고리 제외한 필터 상태값 업데이트 리듀서
function RightItemReducer(state, action) {
    switch (action.type) {
        
        // input 박스 onChange될 때 입력된 값 상태 업데이트 액션
        case 'INPUT_CHANGE' :
            if (action.id === "1") {
                state.item.minSales = action.value;
            }
            if (action.id === "2") {
                state.item.maxSales = action.value;
            }
            if (action.id === "3") {
                state.item.minRevenue = action.value;
            }
            if (action.id === "4") {
                state.item.maxRevenue = action.value;
            }
            if (action.id === "5") {
                state.item.minPrice = action.value;
            }
            if (action.id === "6") {
                state.item.maxPrice = action.value;
            }
            if (action.id === "7") {
                state.item.minReview = action.value;
            }
            if (action.id === "8") {
                state.item.maxReview = action.value;
            }
            if (action.id === "8") {
                state.item.minInvest = action.value;
            }
            if (action.id === "8") {
                state.item.maxInvest = action.value;
            }
            return state;
        default:
            throw new Error('Unhandled action type');
    }
}

// 다른 메뉴로 넘길 때 상태 초기화 하는 리듀서
// function ResetReducer(state, action) {
//     switch (action.type) {
//         case 'TEST' :
//             return alert('테스트 성공');
//         default:
//             throw new Error('failed InitReducer');
//     }
// }

const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();
const RightItemStateContext = createContext();
const RightItemDispatchContext = createContext();
// const ResetStateContext = createContext();
// const ResetDispatchContext = createContext();


function MainProvider({ children }) {
    const [categoryState, categoryDispatch] = useReducer(CategoryCheckReducer, initCategory);
    const [rightItemState, rightItemDispatch] = useReducer(RightItemReducer, initRightFilterValue);
    //const [resetState, resetDispatch] = useReducer(ResetReducer, initResetState)

    return(
        <CategoryStateContext.Provider value={categoryState}>
            <CategoryDispatchContext.Provider value={categoryDispatch}>
                <RightItemStateContext.Provider value={rightItemState}>
                    <RightItemDispatchContext.Provider value={rightItemDispatch}>
                        {children}
                    </RightItemDispatchContext.Provider>
                </RightItemStateContext.Provider>
            </CategoryDispatchContext.Provider>
        </CategoryStateContext.Provider>
    )
}

function useCategoryState() {
    const context = useContext(CategoryStateContext);
    console.log('useCategory');
    console.log(context);
    // 예외처리
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

function useCategoryDispatch() {
    const context = useContext(CategoryDispatchContext);
    // 예외처리
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

function useRightItemState() {
    const context = useContext(RightItemStateContext);
    // 예외처리
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

function useRightItemDispatch() {
    const context = useContext(RightItemDispatchContext);
    // 예외처리
    if(!context) {
        throw new Error('Cannot find MainProvider');
    }
    return context;
}

// function useResetState() {
//     const context = useContext(ResetStateContext);
//     if(!context) {
//         throw new Error('Cannot find MainProvider');
//     }
//     return context;
// }

// function useResetDispatch() {
//     const context = useContext(ResetDispatchContext);
//     if(!context) {
//         throw new Error('Cannot find MainProvider');
//     }
//     return context;
// }

/* export로 내보내면 다른 파일에서도 아래 함수들을 호출할 수 있음 */
export {
    MainProvider,
    useCategoryState,
    useCategoryDispatch,
    useRightItemState,
    useRightItemDispatch
    // useResetState,
    // useResetDispatch
}