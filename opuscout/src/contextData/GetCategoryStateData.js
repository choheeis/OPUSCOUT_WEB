export function GetCategoryStateData(categorySize) {
    if(categorySize === 'middle') {
        return initMiddleCategory;
    }else if(categorySize === 'large') {
        return initLargeCategory;
    }
}

const initLargeCategory = [
    [
        {
            id: 1,
            name: '패션의류/잡화',
            en_name: 'fashion',
            check: false
        },
        {
            id: 2,
            name: '뷰티',
            en_name: 'beauty',
            check: false
        },
        {
            id: 3,
            name: '출산/유아동',
            en_name: '',
            check: false
        },
        {
            id: 4,
            name: '식품',
            en_name: 'food',
            check: false
        },
        {
            id: 5,
            name: '주방용품',
            en_name: '',
            check: false
        },
        {
            id: 6,
            name: '생활용품',
            en_name: '',
            check: false
        }
    ],
    [
        {
            id: 7,
            name: '홈인테리어',
            en_name: '',
            check: false
        },
        {
            id: 8,
            name: '가전디지털',
            en_name: '',
            check: false
        },
        {
            id: 9,
            name: '스포츠/레저',
            en_name: '',
            check: false
        },
        {
            id: 10,
            name: '자동차용품',
            en_name: '',
            check: false
        },
        {
            id: 11,
            name: '도서/음반/DVD',
            en_name: '',
            check: false
        },
        {
            id: 12,
            name: '완구/취미',
            en_name: '',
            check: false
        }
    ],
    [
        {
            id: 13,
            name: '문구/오피스',
            en_name: '',
            check: false
        },
        {
            id: 14,
            name: '반려동물용품',
            en_name: '',
            check: false
        },
        {
            id: 15,
            name: '헬스/건강식품',
            en_name: '',
            check: false
        }
    ],
]

const initMiddleCategory = {
    fashion : [
        { id: 1, name: '여성패션', en_name: '', check: false },
        { id: 2, name: '남성패션', en_name: '', check: false },
        { id: 3, name: '베이비패션(0~3세)', en_name: '', check: false },
        { id: 4, name: '여아패션(3세 이상)', en_name: '', check: false },
        { id: 5, name: '남아패션(3세 이상)', en_name: '', check: false },
        { id: 6, name: '스포츠패션', en_name: '', check: false },
        { id: 7, name: '신발', en_name: '', check: false },
        { id: 8, name: '가방/잡화', en_name: '', check: false }
    ],
    beauty : [
        { id: 9, name: '스킨케어', en_name: '', check: false },
        { id: 10, name: '클렌징/필링', en_name: '', check: false },
        { id: 11, name: '메이크업', en_name: '', check: false },
        { id: 12, name: '향수', en_name: '', check: false },
        { id: 13, name: '남성화장품', en_name: '', check: false },
        { id: 14, name: '네일', en_name: '', check: false },
        { id: 15, name: '뷰티소품', en_name: '', check: false },
        { id: 16, name: '어린이화장품', en_name: '', check: false },
        { id: 17, name: '로드샵', en_name: '', check: false },
        { id: 18, name: '더모코스메틱', en_name: '', check: false },
        { id: 19, name: '헤어', en_name: '', check: false },
        { id: 20, name: '바디', en_name: '', check: false },
        { id: 21, name: '선물세트/키트', en_name: '', check: false }
    ],
    child : [
        { id: 22, name: '유기농/친환경', en_name: '', check: false },
        { id: 23, name: '베이비패션', en_name: '', check: false },
        { id: 24, name: '여아키즈패션', en_name: '', check: false },
        { id: 25, name: '남아키즈패션', en_name: '', check: false },
        { id: 26, name: '기저귀', en_name: '', check: false },
        { id: 27, name: '물티슈', en_name: '', check: false },
        { id: 28, name: '분유/어린이식품', en_name: '', check: false },
        { id: 29, name: '수유용품', en_name: '', check: false },
        { id: 30, name: '이유용품/유아식기', en_name: '', check: false },
        { id: 31, name: '유모차/웨건', en_name: '', check: false },
        { id: 32, name: '카시트', en_name: '', check: false },
        { id: 33, name: '아기띠/외출용품', en_name: '', check: false },
        { id: 34, name: '유아동침구', en_name: '', check: false },
        { id: 35, name: '놀이매트/안전용품', en_name: '', check: false },
        { id: 36, name: '유아가구/인테리어', en_name: '', check: false },
        { id: 37, name: '욕실용품/스킨케어', en_name: '', check: false },
        { id: 38, name: '위생/건강/세제', en_name: '', check: false },
        { id: 39, name: '완구/교구', en_name: '', check: false },
        { id: 40, name: '유아동도서', en_name: '', check: false },
        { id: 41, name: '출산준비물/선물', en_name: '', check: false },
        { id: 42, name: '임부/태교용품', en_name: '', check: false }
    ],
    food : [
        { id: 43, name: '유기농/친환경', en_name: '', check: false },
        { id: 44, name: '과일', en_name: '', check: false },
        { id: 45, name: '견과/건과', en_name: '', check: false },
        { id: 46, name: '채소', en_name: '', check: false },
        { id: 47, name: '쌀/잡곡', en_name: '', check: false },
        { id: 48, name: '축산/계란', en_name: '', check: false },
        { id: 49, name: '수산물/건어물', en_name: '', check: false },
        { id: 50, name: '생수/음료', en_name: '', check: false },
        { id: 51, name: '커피/원두/차', en_name: '', check: false },
        { id: 52, name: '과자/초콜릿/시리얼', en_name: '', check: false },
        { id: 53, name: '면/통조림/가공식품', en_name: '', check: false },
        { id: 54, name: '가루/조미료/오일', en_name: '', check: false },
        { id: 55, name: '장/소스/드레싱/식초', en_name: '', check: false },
        { id: 56, name: '유제품/아이스크림', en_name: '', check: false },
        { id: 57, name: '냉장/냉동/간편요리', en_name: '', check: false },
        { id: 58, name: '건강식품', en_name: '', check: false },
        { id: 59, name: '분유/어린이식품', en_name: '', check: false },
        { id: 60, name: '선물세트관', en_name: '', check: false },
        { id: 61, name: '수입식품관', en_name: '', check: false },
        { id: 62, name: '반찬/간편식/대용식', en_name: '', check: false },
        { id: 63, name: '저탄고지 키토제닉', en_name: '', check: false }
    ],
    kitchen : [
        { id: 64, name: '주방가전', en_name: '', check: false },
        { id: 65, name: '냄비/프라이팬', en_name: '', check: false },
        { id: 66, name: '칼/도마', en_name: '', check: false },
        { id: 67, name: '주방조리도구', en_name: '', check: false },
        { id: 68, name: '그릇/홈세트', en_name: '', check: false },
        { id: 69, name: '수저/커트러리', en_name: '', check: false },
        { id: 70, name: '컵/잔/텀블러', en_name: '', check: false },
        { id: 71, name: '커피/티/와인', en_name: '', check: false },
        { id: 72, name: '주방수납/정리', en_name: '', check: false },
        { id: 73, name: '밀폐저장/도시락', en_name: '', check: false },
        { id: 74, name: '주방잡화', en_name: '', check: false },
        { id: 75, name: '일회용품/종이컵', en_name: '', check: false },
        { id: 76, name: '보온/보냉용품', en_name: '', check: false },
        { id: 77, name: '이유/유아식기', en_name: '', check: false },
        { id: 78, name: '베이킹용품', en_name: '', check: false },
        { id: 79, name: '교자상/제수용품', en_name: '', check: false },
        { id: 80, name: '소재별 주방용품', en_name: '', check: false },
        { id: 81, name: '환경사랑 주방용품', en_name: '', check: false },
        { id: 82, name: '수입주방', en_name: '', check: false },
        { id: 83, name: '1인가구 주방용품', en_name: '', check: false }
    ],
    life_goods : [
        { id: 84, name: '헤어/바디/세안', en_name: '', check: false },
        { id: 85, name: '구강/면도', en_name: '', check: false },
        { id: 86, name: '화장지/물티슈', en_name: '', check: false },
        { id: 87, name: '생리대/성인기저귀', en_name: '', check: false },
        { id: 88, name: '탈취/방향/살충', en_name: '', check: false },
        { id: 89, name: '세탁세제', en_name: '', check: false },
        { id: 90, name: '청소/주방세제', en_name: '', check: false },
        { id: 91, name: '세탁/청소용품', en_name: '', check: false },
        { id: 92, name: '욕실용품', en_name: '', check: false },
        { id: 93, name: '생활전기용품', en_name: '', check: false },
        { id: 94, name: '수납/정리', en_name: '', check: false },
        { id: 95, name: '주방수납/잡화', en_name: '', check: false },
        { id: 96, name: '생활잡화', en_name: '', check: false },
        { id: 97, name: '공구/철물/DIY', en_name: '', check: false },
        { id: 98, name: '유기농/친환경', en_name: '', check: false },
        { id: 99, name: '안전/호신용품', en_name: '', check: false },
        { id: 100, name: '건강/의료용품', en_name: '', check: false },
        { id: 101, name: '성인용품(19)', en_name: '', check: false },
        { id: 102, name: '쿠팡 Only', en_name: '', check: false }
    ],
    interior : [
        { id: 103, name: '가을 침구샵', en_name: '', check: false },
        { id: 104, name: '싱글하우스', en_name: '', check: false },
        { id: 105, name: '홈데코', en_name: '', check: false },
        { id: 106, name: '가구', en_name: '', check: false },
        { id: 107, name: '수납/정리', en_name: '', check: false },
        { id: 108, name: '침구', en_name: '', check: false },
        { id: 109, name: '커튼/블라인드', en_name: '', check: false },
        { id: 110, name: '카페트/쿠션/거실화', en_name: '', check: false },
        { id: 111, name: '수예/수선', en_name: '', check: false },
        { id: 112, name: '욕실용품', en_name: '', check: false },
        { id: 113, name: '조명/스탠드', en_name: '', check: false },
        { id: 114, name: '셀프인테리어', en_name: '', check: false },
        { id: 115, name: '원예/가드닝', en_name: '', check: false }
    ],
    digital : [
        { id: 116, name: '컴퓨터', en_name: '', check: false },
        { id: 117, name: '휴대폰/엑세서리', en_name: '', check: false },
        { id: 118, name: '음향기기', en_name: '', check: false },
        { id: 119, name: 'TV/영상가전', en_name: '', check: false },
        { id: 120, name: '냉장고', en_name: '', check: false },
        { id: 121, name: '콘솔/게이밍PC', en_name: '', check: false },
        { id: 122, name: '청소기', en_name: '', check: false },
        { id: 123, name: '세탁기/건조기', en_name: '', check: false },
        { id: 124, name: '생활가전', en_name: '', check: false },
        { id: 125, name: '계절가전/에어컨', en_name: '', check: false },
        { id: 126, name: '이미용가전', en_name: '', check: false },
        { id: 127, name: '건강가전', en_name: '', check: false },
        { id: 128, name: '주방가전', en_name: '', check: false },
        { id: 129, name: '1인방송 전문관', en_name: '', check: false },
        { id: 130, name: '카메라', en_name: '', check: false },
        { id: 131, name: '차량용 디지털', en_name: '', check: false }
    ],
    sport : [
        { id: 132, name: '캠핑전문관', en_name: '', check: false },
        { id: 133, name: '홈트레이닝', en_name: '', check: false },
        { id: 134, name: '수영/수상스포츠', en_name: '', check: false },
        { id: 135, name: '골프', en_name: '', check: false },
        { id: 136, name: '자전거', en_name: '', check: false },
        { id: 137, name: '킥보드/스케이트', en_name: '', check: false },
        { id: 138, name: '낚시', en_name: '', check: false },
        { id: 139, name: '등산/아웃도어', en_name: '', check: false },
        { id: 140, name: '스포츠신발', en_name: '', check: false },
        { id: 141, name: '남성스포츠의류', en_name: '', check: false },
        { id: 142, name: '여성스포츠의류', en_name: '', check: false },
        { id: 143, name: '유아스포츠의류', en_name: '', check: false },
        { id: 144, name: '스포츠잡화', en_name: '', check: false },
        { id: 145, name: '구기스포츠', en_name: '', check: false },
        { id: 146, name: '라켓스포츠', en_name: '', check: false },
        { id: 147, name: '헬스/요가/댄스', en_name: '', check: false },
        { id: 148, name: '복싱/검도/태권도', en_name: '', check: false },
        { id: 149, name: '학교 체육 준비관', en_name: '', check: false },
        { id: 150, name: '기타스포츠', en_name: '', check: false },
        { id: 151, name: '스키/겨울스포츠', en_name: '', check: false }
    ],
    car : [
        { id: 152, name: '실내용품', en_name: '', check: false },
        { id: 153, name: '실외용품', en_name: '', check: false },
        { id: 154, name: '세차용품', en_name: '', check: false },
        { id: 155, name: '관리/안전용품', en_name: '', check: false },
        { id: 156, name: '차량용디지털', en_name: '', check: false },
        { id: 157, name: '오일/배터리', en_name: '', check: false },
        { id: 158, name: '부품/튜닝', en_name: '', check: false },
        { id: 159, name: '오토바이/전동킥보드', en_name: '', check: false }
    ],
    book : [
        { id: 160, name: '유아/어린이', en_name: '', check: false },
        { id: 161, name: '소설/에세이/시', en_name: '', check: false },
        { id: 162, name: '초중고참고서', en_name: '', check: false },
        { id: 163, name: '가정 살림', en_name: '', check: false },
        { id: 164, name: '건강 취미', en_name: '', check: false },
        { id: 165, name: '경제 경영', en_name: '', check: false },
        { id: 166, name: '과학/공학', en_name: '', check: false },
        { id: 167, name: '국어/외국어/사전', en_name: '', check: false },
        { id: 168, name: '대학교재', en_name: '', check: false },
        { id: 169, name: '만화/라이트노벨', en_name: '', check: false },
        { id: 170, name: '사회 정치', en_name: '', check: false },
        { id: 171, name: '수험서/자격증', en_name: '', check: false },
        { id: 172, name: '여행', en_name: '', check: false },
        { id: 173, name: '역사', en_name: '', check: false },
        { id: 174, name: '예술', en_name: '', check: false },
        { id: 175, name: '인문', en_name: '', check: false },
        { id: 176, name: '자기계발', en_name: '', check: false },
        { id: 177, name: '잡지', en_name: '', check: false },
        { id: 178, name: '종교', en_name: '', check: false },
        { id: 179, name: '청소년', en_name: '', check: false },
        { id: 180, name: '해외도서', en_name: '', check: false },
        { id: 181, name: 'IT컴퓨터', en_name: '', check: false },
        { id: 182, name: 'CD/LP', en_name: '', check: false },
        { id: 183, name: 'DVD/블루레이', en_name: '', check: false },
        { id: 184, name: 'book for life', en_name: '', check: false },
    ],
    toy : [
        { id: 185, name: '캐릭터별완구', en_name: '', check: false },
        { id: 186, name: '신생아/영아완구', en_name: '', check: false },
        { id: 187, name: '로봇/작동완구', en_name: '', check: false },
        { id: 188, name: '역할놀이', en_name: '', check: false },
        { id: 189, name: '블록놀이', en_name: '', check: false },
        { id: 190, name: '인형', en_name: '', check: false },
        { id: 191, name: '물놀이/계절완구', en_name: '', check: false },
        { id: 192, name: '승용완구', en_name: '', check: false },
        { id: 193, name: '스포츠/야외완구', en_name: '', check: false },
        { id: 194, name: '실내대형완구', en_name: '', check: false },
        { id: 195, name: 'STEAM완구', en_name: '', check: false },
        { id: 196, name: '학습완구/교구', en_name: '', check: false },
        { id: 197, name: '보드게임', en_name: '', check: false },
        { id: 198, name: 'RC완구/부품', en_name: '', check: false },
        { id: 199, name: '퍼즐/큐브/피젯토이', en_name: '', check: false },
        { id: 200, name: '프라모델', en_name: '', check: false },
        { id: 201, name: '피규어/다이캐스트', en_name: '', check: false },
        { id: 202, name: '콘솔/휴대용게임기', en_name: '', check: false },
        { id: 203, name: '파티/마술용품', en_name: '', check: false },
        { id: 204, name: 'DIY', en_name: '', check: false },
        { id: 205, name: '악기/음향기기', en_name: '', check: false },
        { id: 206, name: '원예/가드닝', en_name: '', check: false },
        { id: 207, name: '수집품', en_name: '', check: false },
        { id: 208, name: '연령별완구', en_name: '', check: false },
        { id: 209, name: '키덜트샵', en_name: '', check: false }
    ],
    office : [
        { id: 210, name: '사무용품 전문관', en_name: '', check: false },
        { id: 211, name: '미술/화방용품', en_name: '', check: false },
        { id: 212, name: '캐릭터 문구', en_name: '', check: false },
        { id: 213, name: '학용품/수업준비', en_name: '', check: false },
        { id: 214, name: '필기류', en_name: '', check: false },
        { id: 215, name: '노트/메모지', en_name: '', check: false },
        { id: 216, name: '다이어리/플래너', en_name: '', check: false },
        { id: 217, name: '바인더/파일', en_name: '', check: false },
        { id: 218, name: '파티/이벤트', en_name: '', check: false },
        { id: 219, name: '데코/포장용품', en_name: '', check: false },
        { id: 220, name: '카드/엽서/봉투', en_name: '', check: false },
        { id: 221, name: '앨범', en_name: '', check: false },
        { id: 222, name: '복사용품/라벨지', en_name: '', check: false },
        { id: 223, name: '보드/칠판/광고', en_name: '', check: false }
    ],
    pet : [
        { id: 224, name: '강아지 사료', en_name: '', check: false },
        { id: 225, name: '강아지 간식', en_name: '', check: false },
        { id: 226, name: '강아지 영양제', en_name: '', check: false },
        { id: 227, name: '강아지 용품', en_name: '', check: false },
        { id: 228, name: '고양이 사료', en_name: '', check: false },
        { id: 229, name: '고양이 간식', en_name: '', check: false },
        { id: 230, name: '고양이 영양제', en_name: '', check: false },
        { id: 231, name: '고양이 용품', en_name: '', check: false },
        { id: 232, name: '펫프리미엄', en_name: '', check: false },
        { id: 233, name: '펫티켓 산책용품', en_name: '', check: false },
        { id: 234, name: '관상어 용품', en_name: '', check: false },
        { id: 235, name: '소동물/가축용품', en_name: '', check: false }
    ],
    health : [
        { id: 236, name: '비타민/미네랄', en_name: '', check: false },
        { id: 237, name: '영양제', en_name: '', check: false },
        { id: 238, name: '허브/자연추출물', en_name: '', check: false },
        { id: 239, name: '홍삼/인삼', en_name: '', check: false },
        { id: 240, name: '건강즙', en_name: '', check: false },
        { id: 241, name: '헬스보충식품', en_name: '', check: false },
        { id: 242, name: '다이어트식품', en_name: '', check: false },
        { id: 243, name: '헬스/요가용품', en_name: '', check: false },
        { id: 244, name: '건강가전', en_name: '', check: false },
        { id: 245, name: '건강도서', en_name: '', check: false },
        { id: 246, name: '건강/의료용품', en_name: '', check: false }
    ]
}