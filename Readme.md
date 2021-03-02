JS 1일차.

### **변수**

> 변수란?
>
> > **프로그램을 실행하는 도중에 임의의 값을 저장해 두고 읽을 수 있는 가상의 공간**



>  변수 선언방법
>
> > var 가장 일반적인 변수선언 방법
> >
> > Function scope
>
> > let ES6 부터 도입된 선언 방법
> >
> > Block scope



처음엔 아무 값도 할당되어 있지 않은 undefined상태.



**출력 방법**

> console에 찍기.
>
> > Console.log(contents)
>
> 경고창에 찍기.
>
> > Alert(contents)



### **데이터타입**

> > **숫자형** 
> >
> > > 정수,실수 구분없이 모두 숫자형으로 통일.
> > >
> > > prompt와 같이 문자열로 입력처리 될 경우 parseInt(),parseFloat()와 같이 타입캐스팅.
> > >
> > > 타입 캐스팅시 숫자제외 문자는 제거됨.
>
> 
>
> > **문자형**
>
> > > JS에서는 작은따옴표,큰따옴표 모두 문자열처리 
> > >
> > > 큰 따옴표 안에서 큰 따옴표 사용시 escape문자열   \\   사용.
> >
> > 
>
> 
>
> **타입체크 방법.**
>
> > Typeof(contents)
> >
> > Ex) console.log (typeof(contents));
>
> 
>
> **객체 (Object)**
>
> > Key와 Value가 쌍으로 이루어짐.
> >
> > Ex) var test = {name : "Kim" , age : 30};
> >
> > 접근방법
> >
> > > test.name
> > >
> > > Ex) console.log(test.name);
> > >
> > > test["name"]
> > >
> > > Ex) console.log(test["name"]);



### Null , Undefined

> 변수 선언 후 초기화 하지않고 출력시 undefined 출력.

Undefined

> 변수 선언 후 아예 손 대지 않은 상태.

Null

> 변수 선언 후 값이 비었다고 명시해준 상태.

![post-thumbnail](https://media.vlpt.us/images/soonbee/post/ecf0efc5-3b3a-4bbd-842a-95a25bed8e2e/Screen%20Shot%202020-05-16%20at%208.04.28%20PM.png)





### **함수 (Function)**

> 선언방법.
>
> Function 함수명(파라미터(생략가능)){
>
> 
>
> }



### 연산자

| AND  | &&   |
| ---- | ---- |
| OR   | \|\| |
| NOT  | !    |



### 연산자 우선순위

|  1   |          ++ , --          |
| :--: | :-----------------------: |
|  2   |             !             |
|  3   |     * , / , % , + , -     |
|  4   | > , < , <= , >= , == , != |
|  5   |            &&             |
|  6   |           \|\|            |





### **문자열**



문자열 합치기

> \+ 사용해서 합치기
>
> ```
> let a = "aaaa";
> 
> let b = "bbbb";
> 
> console.log(a+b);
> 
> result : aaaabbbb
> ```
>
> 
>
> concat를 활용해 합치기
>
> ```
> let a = "aaaa";
> 
> let b = "bbbb";
> 
> console.log(a.concat(b));
> 
> result : aaaabbbb
> ```
>
> 
>
> 이중으로 concat활용
>
> ```
> let a = "aaaa";
> 
> let b = "bbbb";
> 
> console.log(a.concat(b).concat(a));
> 
> result : aaaabbbbaaaa
> ```





문자열 다루기

>문자열 길이 구하기
>
>```
>let string = "123456789";
>console.log(string.length)
>
>result : 9
>```
>
>
>
>
>
>한 글자씩 접근하기
>
>```
>let string = "123456789";
>console.log(string.charAt(5));
>result : 6   (index는 0 부터 시작.)
>```
>
>
>
>
>
>인덱스로 접근하기
>
>```
>let string = "123456789";
>console.log(string[3]);
>result : 4   (index는 0 부터 시작.)
>```

