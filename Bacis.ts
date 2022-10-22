// 타입스크립트를 지웠을 때 자바스크립트로 말이 되야 한다.
// 타입스크립트는 변수, 매개변수, 리턴값에 타입을 매긴 것.

//## 1(변수) (타입이 추론 가능하면 굳이 string 같이 안 써주는 걸 추천. 5,6 라인 비교)
const a: string = '1';
// const a = '1';
const b: number = 2;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

const f: true = true; (이런 식으로 값 타입, 값 고정도 가능)
const g: 5 = 5; (...);

//#

//# 2,3(매개변수, 리턴값) <기본 함수>
function bdd(x: number, y: number): number {
  return x + y;
};
bdd(3,4)
//-> functiong의 매개변수, 리턴값 어디에 타입을 위치시키는지 알 것. : 이 부분

//# 위와 같은 함수지만 x+y= number라는 타입추론이 명확히 되므로 이런 경우에 return 타입을 제외시켜도 된다.
function qdd(x: number, y: number) {
  return x + y;
};

//@@

//# <화살표 함수>
const add: (x: number, y: number) => number = (x, y) => x + y;

//# <화살표 함수 type 버전>
type Cdd = (x: number, y: number) => number;
const cdd: Cdd = (x, y) => x + y;

//# <interface로 함수 만든 버젼>
interface Ddd {
  (x: number, y: number): number;
}
const ddd: Ddd = (x, y) => x + y;

//# <객체 타입스크립트>
const obj: { q: number; w: number } = { q: 1, w: 3 };

//# <배열 ...>
const arr: string[] = ['123', '23'];

//# <generic 배열 ...>
const arr2: Array<number> = [123, 456];

//## <tuple 배열 ...> (배열 안의 값의 타입과 갯수가 정해진다.)
const arr3: [number, number, string] = [123, 123, '444'];

