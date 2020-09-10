/* External dependencies */
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
    // 카테고리 체크되면 true, 체크 안되면 false
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
]

// reducer 함수에서는 init으로 정한 상태의 값만 업데이트 해준다.
function MainReducer(state, action) {
    switch (action.type) {
        // 카테고리 체크 박스 토글 액션
        case 'TOGGLE' : 
            state[3][action.id-1] = !state[3][action.id-1];
            return state.map(
                checkbox => checkbox.map( box =>
                    box.id === action.id ? { ...box, check: !box.check } : box
                )
            )
        default:
            throw new Error('Unhandled action type');
    }
}

const CategoryStateContext = createContext();
const CategoryDispatchContext = createContext();

function MainProvider({ children }) {
    const [state, dispatch] = useReducer(MainReducer, initCategory);
    return(
        <CategoryStateContext.Provider value={state}>
            <CategoryDispatchContext.Provider value={dispatch}>
                {children}
            </CategoryDispatchContext.Provider>
        </CategoryStateContext.Provider>
    )
}

function useCategoryState() {
    const context = useContext(CategoryStateContext);
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

/* export로 내보내면 다른 파일에서도 아래 함수들을 호출할 수 있음 */
export {
    MainProvider,
    useCategoryState,
    useCategoryDispatch
}