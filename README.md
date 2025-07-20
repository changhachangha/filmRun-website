# Film Run - 영화사 달리기

Film Run 공식 웹사이트입니다. 감정을 움직이는 이야기로 세상과 소통하는 영화를 만드는 영화사 달리기의 포트폴리오와 최신 소식을 만나보세요.

## 🎬 프로젝트 개요

- **목적**: 영화사 달리기의 공식 웹사이트
- **도메인**: [www.filmrun.co.kr](https://www.filmrun.co.kr)
- **타겟**: 영화 관계자, 언론, 영화 팬

## 🚀 기술 스택

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

### Development Tools

- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Package Manager**: npm
- **IDE**: VS Code (설정 포함)

## 📁 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── about/             # 회사 소개 페이지
│   ├── films/             # 작품 포트폴리오
│   ├── directors/         # 감독 소개
│   ├── news/              # 뉴스 및 공지사항
│   ├── contact/           # 연락처
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── sections/         # 페이지 섹션 컴포넌트
├── lib/                  # 유틸리티 및 설정
│   ├── stores/          # Zustand 스토어
│   └── utils/           # 헬퍼 함수
├── public/              # 정적 에셋
└── assets/              # 이미지, 폰트, 아이콘
```

## 🛠️ 설치 및 실행

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd new-project

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 📋 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format

# 포맷팅 검사
npm run format:check

# 타입 체크
npm run type-check
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary Blue**: `#0066FF` (브랜드 시그니처 컬러)
- **Pure White**: `#FFFFFF`
- **Deep Black**: `#000000`
- **Light Gray**: `#E8E8F0`

### 타이포그래피

- **Primary Font**: Inter (영문), Noto Sans KR (한글)
- **Responsive**: 모바일 우선 반응형 디자인

## 🔧 개발 환경 설정

### VS Code 설정

프로젝트에는 VS Code 설정이 포함되어 있습니다:

- 저장 시 자동 포맷팅
- ESLint 자동 수정
- Tailwind CSS IntelliSense
- 추천 확장 프로그램 목록

### Git Hooks

- **pre-commit**: 커밋 전 자동 린트 및 포맷팅
- **lint-staged**: 스테이징된 파일만 검사

## 🌍 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

## 📱 반응형 지원

- **Desktop**: 1920px (기준)
- **Laptop**: 1440px
- **Tablet**: 768px
- **Mobile**: 375px

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

### 다른 플랫폼

프로젝트는 Next.js 기반이므로 Netlify, AWS, Docker 등 다양한 플랫폼에 배포 가능합니다.

## 📊 성능 목표

- **Lighthouse 점수**: 90+ (모든 카테고리)
- **첫 화면 로딩**: 3초 이내
- **이미지 최적화**: WebP 포맷 사용
- **코드 스플리팅**: 페이지별 번들 최적화

## 🤝 기여하기

1. 이슈 생성 또는 기존 이슈 확인
2. 브랜치 생성 (`feature/new-feature`)
3. 변경사항 커밋
4. 풀 리퀘스트 생성

## 📄 라이선스

이 프로젝트는 Film Run의 소유입니다.

## 📞 문의

- **웹사이트**: [www.filmrun.co.kr](https://www.filmrun.co.kr)
- **이메일**: contact@filmrun.co.kr

---

© 2025 Film Run. All rights reserved.
