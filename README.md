# Doc2Markdown - Frontend

이 프로젝트는 문서(Doc)를 마크다운(Markdown)으로 변환하는 서비스의 프론트엔드 애플리케이션입니다.

## 🛠 Tech Stack

- **Framework & Library**: React 19, TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Markdown Handling**: react-markdown, remark-gfm

## 📜 Code Convention

일관된 코드 스타일을 유지하기 위해 ESLint와 Prettier를 사용하며, Husky와 lint-staged를 통해 커밋 전 자동으로 포맷팅 및 린트 검사를 수행합니다.

### Prettier 설정
- **세미콜론(Semi)**: 사용 (`true`)
- **따옴표(Quotes)**: 홑따옴표 사용 (`singleQuote: true`)
- **들여쓰기(Tab Width)**: 2 spaces
- **후행 쉼표(Trailing Comma)**: 모든 배열 및 객체에 후행 쉼표 사용 (`all`)
- **줄 바꿈(Print Width)**: 100자 기준

## 🚀 Getting Started

### 설치 (Installation)
bash
npm install


### 실행 (Development)
```bash
npm run dev
```

### 빌드 (Build)
```bash
npm run build
```

### 린트 검사 (Lint)
```bash
npm run lint
```

---

## 📝 Pull Request Convention & Template

프로젝트 기여 시 아래의 PR 양식을 준수하여 작성해 주세요. 

### PR 양식
PR 생성 시 본문 내용에 아래 템플릿을 복사하여 사용합니다.

```markdown
## 📌 작업 요약
## 📌 구현 기능 (변경 사항)
- 
- 

## 🧐 구현 방식 & 이유
## 📸 스크린샷 (선택 사항)
## 🔗 관련 이슈
- Close #

## ✅ 체크리스트
- [ ] 코딩 컨벤션에 맞게 코드를 작성했나요?
- [ ] 관련된 기능에 버그가 없는지 직접 테스트했나요?
- [ ] 불필요한 콘솔 로그(\`console.log\`)나 주석을 제거했나요?

## 📝 추가 필요 작업
- 
```
