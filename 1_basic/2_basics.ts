//Types

let helloText: string = "Hello";

// JS에 존재하는 7개의 타입
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

// TS에만 존재하는 타입
// any - 아무 타입이나 입력할 수 있는 치트키같은 타입
// 다른 어떤 타입의 변수에도 값을 저장해 줄 수가 있다
let anyVar: any = "loveyou";
anyVar = 100;
anyVar = true;
anyVar = undefined;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입 (any랑 비슷하지만 다름. 비교적 최근 생긴 type)
let unknownType: unknown;
unknownType = 100;
unknownType = "박원빈";
unknownType = true;

// 다른 타입의 변수에다 할당을 하는 것은 불가능하다(any와의 다른 점)
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;

//아래는 가능함
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떠한 값도 저장되거나 반환되지 않을 떄 사용하는 타입;
// let neverType: never = null;
// let neverType2: never = undefined;
// let neverType3: never = "test";

// 리스트 타입
const kPopGroup: string[] = ["RIIZE", "TWICE"];
const booleanList: boolean[] = [true, false, false];
