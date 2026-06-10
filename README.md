

# 📄 [LG전자 산학협력] 비전 AI 기반의 레이아웃 보존형 문서-Markdown 자동 변환 에이전트 (Frontend)

## 📌 프로젝트 소개

본 레포지토리는 '레이아웃 보존형 문서-Markdown 자동 변환 AI 에이전트'의 사용자 인터페이스(Web UI)를 담당하는 프론트엔드 애플리케이션입니다.
사용자가 PDF 문서를 손쉽게 업로드하고, AI 파이프라인의 변환 진행 상황을 직관적으로 확인하며, 최종적으로 생성된 Markdown 결과를 브라우저 상에서 미리보기 및 수정할 수 있는 환경을 제공합니다.

## 🛠 기술 스택 (Tech Stack)

* **Framework & Library:** React 19, TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (v4), PostCSS
* **State Management:** Zustand
* **Network:** Axios
* **Markdown Parsing:** React Markdown, Remark GFM
* **Code Quality:** ESLint, Prettier, Husky, lint-staged

## 📂 디렉토리 구조 (Directory Structure)

프로젝트는 역할과 기능에 따라 컴포넌트와 페이지가 모듈화되어 있습니다.

```text
doc2markdown_FE/
│
├── public/                     # 정적 에셋 (favicon.svg, icons.svg 등)
│
├── src/                        # 메인 웹 소스 코드
│   ├── api/                    # 백엔드 API 통신 모듈 (instance.ts, documents.ts 등)
│   ├── components/             # 도메인 및 기능별 UI 컴포넌트
│   │   ├── common/             # 공통 컴포넌트 (Button.tsx 등)
│   │   ├── home/               # 메인 화면 관련 (FileUpload.tsx, FormatSelector.tsx)
│   │   ├── progress/           # 변환 상태 트래킹 (ProgressBar.tsx, StepList.tsx)
│   │   └── result/             # 마크다운 뷰어 및 에디터 (MarkdownEditor.tsx, MarkdownPreview.tsx)
│   ├── pages/                  # 라우팅되는 페이지 (Home.tsx, ConversionProgress.tsx, Result.tsx)
│   ├── App.tsx                 # 메인 애플리케이션 및 라우팅 설정
│   ├── main.tsx                # React 진입점
│   └── index.css               # 글로벌 스타일 및 Tailwind CSS
│
├── .husky/                     # Git 훅 설정 (pre-commit)
├── .env                        # 환경 변수 (Git 추적 제외)
├── package.json                # 의존성 패키지 및 스크립트 관리
├── vite.config.ts              # Vite 빌드 설정
└── eslint.config.js / tsconfig.json # 린터 및 타입스크립트 환경 설정

```

## 🚀 시작하기 (Getting Started)

### 1. 환경 설정

원활한 패키지 설치와 실행을 위해 **Node.js** 환경이 필요합니다. NVM(Node Version Manager)을 활용하여 적절한 Node.js 버전을 설치 및 관리하는 것을 권장합니다.
원하시는 디렉토리에서 프로젝트 폴더를 열고 터미널 환경을 준비합니다.

```bash
# 패키지 의존성 설치
npm install

```

### 2. 환경 변수 설정

프로젝트 루트 디렉토리의 `.env` 파일(없을 경우 생성)에 AI 백엔드 서버와 통신하기 위한 환경 변수를 설정합니다.

```env
# 백엔드 API 서버 기본 주소
VITE_API_BASE_URL="http://127.0.0.1:8000"

```

### 3. 개발 서버 실행

아래 명령어를 통해 로컬 개발 서버를 구동합니다.

```bash
npm run dev

```

서버가 실행되면 브라우저에서 `http://localhost:5173` (Vite 기본 포트)로 접속하여 UI 애플리케이션을 확인할 수 있습니다.

### 4. 빌드 및 기타 스크립트

* **프로덕션 빌드:** `npm run build` (TypeScript 컴파일 후 Vite 빌드 수행)
* **빌드 프리뷰:** `npm run preview`
* **코드 린트 검사:** `npm run lint`

이 프로젝트는 `Husky`와 `lint-staged`가 설정되어 있습니다. Git 커밋을 생성할 때마다 변경된 파일에 대해 자동으로 Prettier 포맷팅과 ESLint 검사가 실행되어 일관된 코드 품질을 유지합니다.
