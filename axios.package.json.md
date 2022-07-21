# 속성

## name

URL이나 Command Line의 일부로 사용될 소문자로 표기된 214자 이내의 패키지(모듈) 이름으로, 간결하고 직관적인 이름으로 설정하되 다른 모듈과 중복되지 않도록 고유한 이름을 설정합니다.

```json
{
	"name": "axios"
}
```

## version

- 최초 공개 - 1.0.0으로 시작
- 이전 버전과 호환되는 버그 수정 - 세 번째 숫자 증가 (1.0.1)
- 이전 버전과 호환되는 새로운 기능 - 중간 자릿수를 증가시키고 마지막 자릿수를 0으로 재설정 (1.0.1)
- 이전 버전과의 호환성을 깨는 변경 사항 - 첫 번째 숫자를 증가시키고 중간 및 마지막 숫자를 0으로 재설정 (2.0.0)

```json
{
	"version": "0.19.0-beta.1"
}
```

## description

프로젝트(패키지)의 설명을 지정합니다.
(npm search 사용 시 도움이 됩니다.)

```json
{
	"description": "Promise based HTTP client for the browser and node.js"
}
```

## keywords

프로젝트(패키지)의 키워드를 배열로 지정합니다.
(npm search 사용 시 도움이 됩니다.)

```json
{
	"keywords": ["xhr", "http", "ajax", "promise", "node"]
}
```

## homepage

다음과 같이 프로젝트 홈페이지로 연결되는 URL을 지정합니다.

```json
{
	"homepage": "https://github.com/axios/axios"
}
```

## bugs

패키지에 문제가 있을 때 보고될 이슈 트래커(추적시스템) 및 이메일 주소 등에 대한 URL을 지정합니다.

```json
{
	"bugs": {
		"url": "https://github.com/axios/axios/issues",
		"email": "issues@axios.com"
	}
}
```

## license

패키지 사용을 허용하는 방법과 제한 사항을 알 수 있도록 라이센스를 지정합니다.

```json
{
	"license": "MIT"
}
```

```json
{
	"license": "(MIT OR Apache-2.0)"
}
```

## author

제작자의 이름을 지정합니다.

```json
{
	"author": {
		"name": "Steven Wanderski",
		"email": "steven@bxcreative.com",
		"url": "http://stevenwanderski.com"
	}
}
```

```json
{
	"author": "Steven Wanderski <steven@bxcreative.com> (http://stevenwanderski.com)"
}
```

## contributors

제작자가 여러 명일 경우 author 옵션(field) 대신에 사용할 수 있습니다.

```json
{
	"contributors": [
		"Evan <evan@zillinks.com> (https://zillinks.com)",
		"Lewis <lewis@zillinks.com> (https://zillinks.com)",
		"Neo <neo@zillinks.com> (https://zillinks.com)"
	]
}
```

## main

프로그램의 기본 진입 점(entry point)를 지정합니다.
패키지의 이름이 axios이고, 사용자가 require('axios') or import 'axios'를 사용하면 진입 점의 메인 모듈에서 exports object가 반환(return)됩니다.

```json
{
	"main": "dist/my_module.min.js"
}
```

## repository

코드가 존재하는 장소(주소)를 지정합니다.
npm docs 명령을 사용하여 패키지 저장소를 쉽게 찾을 수 있습니다.

```json
{
	"repository": {
		"type": "git",
		"url": "https://github.com/axios/axios.git"
	}
}
```

## files

패키지가 의존성으로 설치될 때 같이 포함될 파일(디렉터리)들의 배열입니다.
생략하면 자동 제외로 설정된 파일을 제외한 모든 파일이 포함됩니다

```json
{
	"files": ["dist", "lib", "!dist/test"]
}
```

## browser

클라이언트(client-side) 사용을 위하는 경우 자바스크립트 번들러 또는 구성 요소 도구에 대한 힌트로 제공하기 위해 main 옵션(field) 대신에 사용해야 합니다.

```json
{
	"browser": "./browser/specific/main.js"
}
```

## dependencies

패키지의 배포 시 포함될 의존성 모듈을 지정합니다.

```json
{
	"dependencies": {
		"follow-redirects": "^1.4.1",
		"is-buffer": "^2.0.2"
	}
}
```

## peerDependencies

패키지의 호환성 모듈을 지정합니다.
(npm@3 이후로 배포 시 포함되지 않습니다, 대신 호환성 모듈이 없으면 경고 메시지가 표시됩니다)

```json
{
	"name": "bootstrap",
	"peerDependencies": {
		"jquery": "1.9.1 - 3",
		"popper.js": "^1.12.9"
	}
}
```

## engines

패키지가 작동하는 Node 버전을 지정합니다.

```json
{
	"engines": {
		"node": ">=0.10.3 <0.12",
		"npm": "~1.0.20"
	}
}
```

## .npmignore

패키지에서 배포하지 않을 파일이나 디렉터리를 지정합니다.
.npmignore 없이 .gitignore 파일만 사용할 수도 있습니다.

단, 빠른 패키지 배포와 효율적인 프로젝트 저장소 관리를 위해 각 파일을 따로 분리해서 작성하는 것이 좋습니다.

gitignore.io Template Source를 사용하면 쉽고 빠르게 .npmignore 혹은 .gitignore 파일을 생성할 수 있습니다.

```css
**/.*
*.iml
coverage/
examples/
node_modules/
typings/
sandbox/
test/
bower.json
CODE_OF_CONDUCT.md
COLLABORATOR_GUIDE.md
CONTRIBUTING.md
COOKBOOK.md
ECOSYSTEM.md
Gruntfile.js
karma.conf.js
webpack.*.js
sauce_connect.log
```

# 예제

```json
{
	"name": "npm-react-native",
	"version": "0.0.1",
	"description": "Template for custom library in npm",
	"main": "index.js",
	"types": "index.d.ts",
	"scripts": {},
	"repository": {
		"type": "git",
		"url": "https://github.com/ux-monster/npm-react-native.git"
	},
	"keywords": ["Search Keyword"],
	"author": "ux-monster",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/ux-monster/npm-react-native/issues"
	},
	"homepage": "https://ux-monster.github.io/",
	"devDependencies": {},
	"dependencies": {},
	"browser": {},
	"jsdelivr": "dist/npm-react-native.min.js",
	"unpkg": "dist/npm-react-native.min.js",
	"typings": "./index.d.ts",
	"bundlesize": [
		{
			"path": "./dist/npm-react-native.min.js",
			"threshold": "5kB"
		}
	]
}
```
