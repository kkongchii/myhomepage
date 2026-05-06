# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

kkongchii의 개인 포트폴리오 홈페이지입니다. 홍익대학교 졸업, 현재 현대HDS 재직 중. 빌드 도구 없이 순수 HTML/CSS/JS로 구성됩니다.

## 실행 방법

별도의 빌드 과정 없이 `index.html`을 브라우저에서 직접 열면 됩니다.

```powershell
Start-Process "chrome.exe" -ArgumentList "C:\pyb\my-first-project\my-homepage\index.html"
```

## 파일 구성

- `index.html` — 전체 마크업. 섹션: Hero → 기술스택 → 경력 → 프로젝트 → 연락처
- `style.css` — CSS 변수 기반 다크/라이트 테마 (`[data-theme]` 속성), 반응형
- `app.js` — 테마 토글(localStorage), 모바일 메뉴, 스크롤 하이라이트, IntersectionObserver 페이드인

## 구현된 구조 (homepage-features.md 기준)

총 5개 섹션으로 구성됩니다.

| 섹션 | 설명 |
|------|------|
| Hero | 이름·역할·소속·소셜 링크 — 첫 인상 |
| 기술 스택 | Java / Python / JS, React, Spring Boot 등 아이콘/배지 |
| 프로젝트 | AI-KIOSK-Spring, front-react 카드 |
| About Me | 배경·관심사·계기 |
| Contact | 이메일·GitHub·Velog |

추가 고려 사항: 반응형 디자인(높음), 네비게이션 바(높음), 다크/라이트 모드(중간), 스크롤 애니메이션(낮음).

## 개인정보 (소셜 링크 등)

- GitHub: https://github.com/kkongchii
- 블로그(Velog): https://velog.io/@kkongchi
- 이메일: smallbean99s@gmail.com

## 미완성 항목 (직접 채워야 함)

- 역할/타이틀 (예: "백엔드 개발자")
- 한 줄 자기소개 문구
- AI-KIOSK-Spring / front-react 프로젝트 설명
- 개발을 시작한 계기 / 관심 분야

## 언어 규칙

- 모든 답변과 코드 주석은 한국어로 작성합니다.
- 작업 완료 시 변경 내용을 이 CLAUDE.md에 반영합니다.
