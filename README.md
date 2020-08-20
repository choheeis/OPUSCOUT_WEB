# OPUS Web Site

## 커밋 메시지 형식

* Add Codes - 새로운 코드를 추가했을 경우

* Implement Features - 새로운 기능을 추가하거나 완성했을 경우

* Refactor Codes - 기존에 작성한 코드를 수정했을 경우

* Fix Bugs - 오류를 해결했을 경우

* Create (file name) file - 새로운 파일을 생성했을 경우

<br>

## 파일 구성
* index.html
* css/main.css
* css/reset.css - 크롬에서 미리 초기화 시켜놓은 css를 리셋시키기 위한 용도

<br>

## 개발일지

### 2020/08/20 목

* 스터디 내용
    ~~~html
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    ~~~

    html 페이지가 인터넷 익스플로러에서 렌더링 될 때 최신의 인터넷 익스플로러 렌더링 방식으로 화면에 출력이 되게 하는 코드이다.

    만약 구축하려는 웹 사이트가 인터넷 익스플로러에서도 동작하게 하려면 위 코드 추가해야 좋다.

    <br>

    ~~~html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimum-scale=1">
    ~~~

    name속성의 속성값 중 하나인 viewport는 반응형 웹 사이트 구축을 하겠다는 의미이다.

    content에 width=device-width 라는 것은 웹 사이트의 가로 너비가 PC 화면이든 모바일 화면이든 어떤 디바이스의 가로 너비에 대응하겠다 라는 것이다.

    initial-scale=1.0은 초기 화면의 확대/축소 비율을 정해주는 것인데 보통 맨 처음 사이트에 접속하면 화면이 확대되어있거나 축소되어 있지 않으므로 1.0으로 설정한다.

    user-scalable=no 는 사용자가 화면을 임의로 확대하거나 축소하는 것을 금지한다는 의미이다.

    maximum-scale=1, minimum-scale=1 를 통해 사용자의 확대, 축소를 원천봉쇄한다.

    <br>

    ~~~html
    <!-- http://ogp.me/ 참고해서 추가 가능 -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="OPUSCOUT">
    <meta property="og:title" content="Welcome, We are OPUSCOUT!">
    <meta property="og:description" content="This is a OPUSCOUT homepage.">
    <meta property="og:image" content="https://heropcode.github.io/GitHub-Responsive/img/logo.svg">
    ~~~    

    외부에 우리 사이트에 대한 정보를 줘야하는 경우, 우리 사이트의 type, name, title, description, image 등에 대한 정보를 content의 속성값으로 명시해두는 코드이다.

    ogp 를 통해 외부에 우리 사이트 정보를 주는 방식을 카카오톡이 사용하고 있어서 만약 카톡 메시지로 상대방에게 우리 사이트 링크를 보내면 og:~에 명시되어 있는 내용들이 카카오톡 링크와 함께 전달될 것이다.