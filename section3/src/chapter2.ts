// Unknow 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
}

// Never 타입
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("h1");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefindVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefindVar = anyVar;

  //   neverVar = anyVar;
}
