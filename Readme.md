

**변수**

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
> <br>
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
> <br>
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
><br>
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
><br>
>
>인덱스로 접근하기
>
>```
>let string = "123456789";
>console.log(string[3]);
>result : 4   (index는 0 부터 시작.)
>```
>
>
>
>
>
><br>특정 인덱스 범위 추출
>
><br>
>
>substring()
>
>```
>let string = "123456789";
>console.log(string.substring(2,5));
>
>result : 345
>```
>
><br>substr()
>
><br>
>
>```
>let string = "123456789";
>console.log(string.substr(2,5));
>
>result : 34567
>```
>
>substring은 시작 index~ 종료 index를 파라미터로 받지만
>
>substr은 두번째 인자값을 시작 index를 기준으로 잡고 잘라낸다. 
>
>고로 두 함수 모두 인자를 하나만 주었을때는 시작 index부터 끝까지 잘라내는 기능은 일치한다.

<br><br>

```
string.substring(string.length-3)
```

이런 식으로 뒤를 기준으로 잘라낼 수 있다.

<br><br><br>

문자열 찾기

> ```indexOf , lastIndexOf  ``` 를 활용하면 해당 문자(열)의 시작 index 또는 마지막 index를 구할 수 있다.
>
> 찾을 수 없다면 -1을 리턴한다.
>
> Ex ) 
>
> ```
> let string = "123456789";
> console.log(string.indexOf('4'));
> 
> result : 3
> ```
>
> ```
> let string = "123456789123456789";
> console.log(string.lastIndexOf('4'));
> 
> result : 12
> ```
>
> ```
> let string = "123456789123456789";
> console.log(string.indexOf('abc'));
> 
> result : -1                                 
> ```



<br><br><br>

# 배열 생성방법

```javascript
var a = [];
var b = [1,2,3,4,5];
var c = [1.1 , true , 'a',];  // 이렇게 맨 마지막 값을 undefined로 삽입 가능.
var d = [a,b,c];
var e = new Array();
var f = [{x:1},{x:2}];
var g = [1, , ,3];  // 중간에 공백으로 undefined를 줄 수 있음.
```





<br><br><br>



# **new Array()와 리터럴([]) 선언 방식의 차이점?**

```javascript
1.    var arr = new Array(3);
 
2.    var arr = [];
```

​      

 **(1) 와 같은 방법으로 처음부터 Size를 정해서 배열을 생성할 수 있지만 (2) 처럼 리터럴을 사용하여 생성하는 것을 권장한다.**

 **리터럴을 사용하여 배열을 생성하더라도 내부적으로 Array() 생성자 함수를 사용하여 생성하므로 기능상의 차이는 없고,** 

**(2)와 같은 방법이 간소화된 문법이라고 한다.**



<br><br><br>



# :thinking: **직관적인거 말고 둘의 차이점이 더 있진 않을까?**

**구글링 결과 new Array의 파라미터에 인자를 하나만 주면 배열의 크기로 인식을 하지만 두 개이상 넣으면 배열의 초기값으로 지정한다.**

**무슨 소리인고 하니**

```javascript
let a = new Array(3);
console.log(a);
 
 
 
내가 원하는 값 : [3]
실제 출력 값 : [empty * 3]
 
let b = new Array(3,2);
 
 
내가 원하는 값 : ['2','','']
실제 출력 값 : [3,2]
 
let test = new Array(3,1,2,3);
console.log(test);
 
내가 원하는 값: [1,2,3]
실제 출력 값: [3,1,2,3]
```



**그러니까 나는 첫 번째 파라미터의 값 만큼 배열의 크기를 지정하고 두 번째 파라미터부터는 첫 번째 index값 부터 집어넣고 싶은데 생각처럼 되지 않는다.**

**결국 Array()를 사용해서는 한 칸짜리 배열에 (숫자)값을 바로 할당할 수 없다는 것!**

**하지만 리터럴 ([]) 을 이용하면 해당 문제가 사라진다!**





```javascript
let arr = [3];
console.log(arr);
 
 
내가 원하는 값: [3]
실제 출력 값: [3]
```

이렇게 한칸짜리 배열에 초기화까지 바로 진행할 수 있다.

**실무에서 이게 크게 의미가 있을진 겪어봐야 알겠지만!**



<br><br><br>

#  :thinking: 기능상의 차이가 없다는데 결국 []를 쓰면 Array()를 호출 하는 것 인데 속도가 저하되진 않을까?

```javascript
console.time('using Array');
for(let i=0; i<10000;i++){ let arr = new Array();}
console.timeEnd('using Array');                                     //using Array: 0.374267578125 ms
 
console.time('using []');
for(let i=0;i<10000;i++) {let arr = [];}
console.timeEnd('using []');                                        //using []: 0.239013671875 ms
   
console.time('using Array');
for(let i=0; i<100000;i++){ let arr = new Array();}
console.timeEnd('using Array');                                     //using Array: 5.383056640625 ms
   
console.time('using []');
for(let i=0;i<100000;i++) {let arr = [];}
console.timeEnd('using []');                                        //using []: 3.022705078125 ms
```

### **위 결과는 크롬에서 돌렸을 때 결과고 Safari에서는 매번 다른 결과가 나왔다.** 

아마 브라우저엔진의 해석 방식이 달라서 그런 거 같다.

<br><br>

#### **크롬에서 1억번 배열을 생성했을때 시간**

| Using new Array() | Using []      |
| ----------------- | ------------- |
| **94.361 ms**     | **77.613 ms** |
| **99.846 ms**     | **77.564 ms** |
| **104.616 ms**    | **80.981 ms** |

# <br><br>

# **확실히 크롬에서는 <span style="color:red">리터럴([])이 성능이 더 우수</span>하다고 결론지었다.**



<br><br>



# :thinking: **근데 왜 []가 더 빠르지...??**







브라우저 엔진 관점에서 생각해보면 리터럴은 [ 가 시작되는 것만 보고 바로 Array리터럴인걸 알지만, 

new Array()에 new만 봐서는 어떤 타입의 객체를 생성하는건지 다음 인자를 받아봐야 알 수 있기 때문에 과정이 하나 더 생겨서  느리다고 한다.



 [참고](https://stackoverflow.com/questions/7375120/why-is-arr-faster-than-arr-new-array)





유사한(?) 사례로 [객체 리터럴보다 JSON.parse로 파싱하는 것이 더 빠른이유](https://wormwlrm.github.io/2019/12/04/Why-JSON-parse-is-faster-than-object-literal.html)를 참고하면 좋을 듯 하다.

<br>





# forEach

```
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```

 함수를 배열 요소 각각에 대해 실행하는 메서드인데 한번 써보니 엄청 편하다.

인자 값으로 1.요소값, 2.인덱스, 3.순회중인 배열   이렇게 세가지를 입력받는다.(필수는 아니다.)

map과 동일하게 배열을 순회하는걸 중간에 break; 불가능하다.

<span style="color:red"> map과 유사한데 forEach는 새로운 배열을 반환하지 않는다.</span>



간략한 예시를 짜보았다.

![](https://cdn.discordapp.com/attachments/799514329912705064/816959403974197298/unknown.png)





이건 for과 forEach가 동일한 동작을 하는 예시코드.

아마 게시판 작성시 요긴하게 써 먹을 수 있을 듯하다.

![](https://cdn.discordapp.com/attachments/799514329912705064/817209299876970506/unknown.png)



<br>

<br>

# For in   VS   For of

<br>

<center>

우선 코드를 한번 보자.

​	



for in

```javascript
  Object.prototype.hello = 'hellowwwwwww';
  Object.prototype.bye = "Byeeeeeeeee";
  let iterable = [3,5,7];
  iterable.mmmm = "mmmmmmmmm";

	for(let key in iterable) console.log(key);
  
  result
  -------------------------------------------------------------
 [0,1,2,'mmm','hello','bye']
```



<br><br>for of

```javascript
  Object.prototype.hello = 'hellowwwwwww';
  Object.prototype.bye = "Byeeeeeeeee";
  let iterable = [3,5,7];
  iterable.mmmm = "mmmmmmmmm";
  
  for(let value of iterable) console.log(value);

  result
  -------------------------------------------------------------
 [3,5,7]
```

<br><br>



for of는 ES6에 추가된 문법으로 프로토타입이 Symbol.iterable한 타입에만 사용이 가능하다.

위 for of 예제를 보면 iterable에 값을 추가했음에도 [3,5,7]만 출력되었다.

이는 우리가 알게모르게 Symbol이 iterable속성을 가지고 있는 Array를 사용했기 때문이다. <br>

![](https://cdn.discordapp.com/attachments/799514329912705064/816616338235588638/unknown.png)



Symbol.iterable한 속성을 가지고 있는 타입은 Array,String,Map/Set 등이 있다. (IE 지원 X)

그래서 뒤 늦게 . 을 사용해서 객체 프로퍼티로 추가한 hello , bye ,mmmm는 출력되지 않았다.

<br><br>

# 😱 [Symbol.iterator]...? 

<br>

배열은 Symbol.iterator 메소드를 소유한다. 따라서 배열은 이터러블 프로토콜을 준수한 이터러블이다.

일반 객체는 이터레이션 프로토콜을 준수(Symbol.iterator 메소드를 소유)하지 않기 때문에 이터러블이 아니다. 

따라서 일반 객체는 for…of 문에서 순회할 수 없으며 Spread 문법의 대상으로 사용할 수도 없다. 

하지만 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다. 

<br>

<br>

<br>

# 😤 그럼 이터러블 프로토콜은 또 뭔데?

<br>

> Array, String, Map, Set, TypedArray(Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array), DOM data structure(NodeList, HTMLCollection), Arguments

<br>

<br>

위 데이터 소스는 모두 이터레이션 프로토콜을 준수하는 이터러블이다. 즉, 이터러블은 데이터 공급자(Data provider)의 역할을 한다.

만약 이처럼 다양한 데이터 소스가 각자의 순회 방식을 갖는다면 데이터 소비자는 다양한 데이터 소스의 순회 방식을 모두 지원해야 한다. 

이는 효율적이지 않다. 하지만 다양한 데이터 소스가 이터레이션 프로토콜을 준수하도록 규정하면 

<span style="color:red"> **데이터 소비자는 이터레이션 프로토콜만을 지원하도록 구현하면 된다.**</span>

![출처:poiemaweb](https://poiemaweb.com/img/iteration-protocol-interface.png)



즉, 이터레이션 프로토콜은 다양한 데이터 소스가 하나의 순회 방식을 갖도록 규정하여 데이터 소비자가 효율적으로 다양한 데이터 소스를 사용할 수 있도록 <span style="color:red">**데이터 소비자와 데이터 소스를 연결하는 인터페이스의 역할을 한다.**</span>





# :thinking: 그렇다면 Object에 강제로 for of를 사용하면 어떻게 될까?



```javascript
  let test = {
    aaa:222,
    bbb:333
  };

 for(let value of test) console.log(value);




result
--------------------------------------------------------
Uncaught TypeError: test is not iterable

```

<br>

**iterable하지 않다고 에러난다.**

물론 직접 Custom해서 사용해 iterable속성을 구현해주면 Object에서도 사용이 가능하다!





# 🖥Console 관련 명령어



> 로그찍기
>
> ```javascript
> console.log("HelloWorld!");
> console.error("HelloWorld!");
> console.warn("HelloWorld!");
> ```
>
> 펼쳐보기
>
> ```javascript
> console.dir(doc);
> ```
>
> 타임체크
>
> ```javascript
> console.time('test');
> ~~~~ Code. ~~~~
> console.timeEnd('test');
> ```
>
> 그룹으로 묶기
>
> ```javascript
> console.group(); 
> console.log('첫번째 메세지'); 
> console.log('두번째 메세지'); 
> console.groupEnd();
> 
> 
> //중첩도 가능
> console.group('A 그룹'); 
> console.log('첫번째 메세지'); 
> console.group('B 그룹'); 
> console.log('하위 메세지 a'); 
> console.log('하위 메세지 b'); 
> console.groupEnd(); 
> console.log('두번째 메세지'); 
> console.groupEnd();
> ```
>
> <p>
>   <img src="https://cdn.discordapp.com/attachments/799514329912705064/817258791900282920/unknown.png" width="300px;" height="200px;"/>
>   <img src="https://cdn.discordapp.com/attachments/799514329912705064/817259342293762058/unknown.png" width="300px;" height="200px;"/>
> </p>
>
> 
>
> 
>
> 스타일 입히기
>
> ```javascript
> console.log("%cHello","background-color:Brown; font-size:100px;");
> console.log("%cHEBEES","background-color:White;color:Purple;font-size:100px;");
> ```
>
> 위 와같이 %c 플래그를 맨 앞에 먹이고 두번째 인자로 CSS를 주면 끝.
>
> ![](https://cdn.discordapp.com/attachments/799514329912705064/816951123356418058/unknown.png)



> <p>
>   <img src="https://cdn.discordapp.com/attachments/799514329912705064/817255557765136404/unknown.png" width="500px; height="400px;""/>
> </p>
>
> 

이 처럼 Style을 배열에 넣어두고 인자로 배열을 넘겨서 한번에 호출해서 사용할 수 있고,

```
console.log('%c HEB%cEES ', 'background-color:#000000; color:#ffffff; font-size:50px;', 
'background-color:red; color:#ffffff; font-size:50px;');
```

<p>
  <img src="https://cdn.discordapp.com/attachments/799514329912705064/817256351515672586/unknown.png" width="500px;" height="100px;"
</p>



<span style="color:red"> 이렇게 %c를 구분자로 주면 각각 다른 Style을 적용할 수 있다!</span>

















# 스크립트의 실행 시점을 조절하는 Async와 Defer속성

이게 무슨 말인지부터 해석 할 필요가 있는 거 같다.

내가 기존에 알고있는 건 브라우저가  HTML 파일을 읽어온 후, 위에서 부터 아래로 한 줄씩 (인터프리터(?)) 방식으로 해석을 시작하고

그러다가 중간에 스크립트 로드 코드를 만나게 되면, 해당 코드의 내용을 모두 해석하기 전까지 나머지 아래의 HTML 렌더를 일시적으로 멈춘다는 것.

그래서 로드하는 스크립트 파일의 용량이 크거나 한다면 사용자 입장에서는 페이지가 빠르게 완전히 불러와지지 않아 불만이 생길 수 있다.



<p>
  <img src="https://wormwlrm.github.io/img/posts/2021-02-28/3.png" width="800px"/>
</p>



​																										일반적인 스크립트 로드 방식.





그래서 지금까지 작성했던 코드들은 큰 용량을 딱히 불러올 일도 없었고 있더라도 

최적화가 잘 된 스크립트 파일을 사용해서 딱히 문제를 마주할 일이 없었다.

혹시 몰라 이러한 상황을 대비했던 방안이 스크립트 파일을 \<Body>태그 맨 마지막에 넣어서 UI를 구성하는 코드들을 모두 

해석 한 후에 스크립트 코드를 로드하게 했었다.





일단 이 방법도 이상적인 방법이라 생각하긴 했지만 치명적인 문제가 있다.

사용자에게 먼저 UI를 렌더시키고 JS를 불러온다면 로드가 완료된 시점에서 사용자가 특정 이벤트를 실행했고 

그 이벤트를 담당하는 JS가 아직 불러와지지 않은 상태라면 당연히 예기치 못한 에러를 뱉을 것이다.

네트워크 연결이 원활하지 않은 황경에서는 더더욱 이런 상황에 놓일 가능성이 커진다.





# 🤬 그래서 Async와 Defer가 뭐냐고!



위 와 같은 상황을 막고자 스크립트 파일을 병렬로 불러오는 방식으로 DOM의 렌더 과정을 막지 않게 선언해주는 키워드가 바로

Async와 defer 라는것!



<p float="left">
 	<img src="https://wormwlrm.github.io/img/posts/2021-02-28/4.png" width="500px"/>
  <img src="https://wormwlrm.github.io/img/posts/2021-02-28/5.png" width="500px"/>
</p>



차이점을 간단하게 요약하자면 Async는 스크립트 파일을 <span style="color:red"> 로드하는 시간만 병렬처리</span>하고 

<span style="color:red">로드가 완료되면 렌더링 과정을 스톱</span>s시키고 스크립트 파일을 해석한다. 

또한 먼저 로드가 완료된 스크립트부터 해석하므로 실행 순서가 보장되지 않는다.

반면에 defer의 경우 스크립트의 로드를 병렬처리하고 <span style="color:red">스크립트 파일을 해석하는건 렌더링이 끝나고 처리 </span>하는 것. 

또한 <span style="color:red">스크립트의 해석 실행순서가 보장된다.</span>





## 결론

> 스크립트 파일끼리의 실행 순서 의존성이 없다면 Async를 사용하면 좋을 듯 하다.
>
> 의존성이 있다면 Defer를 이용하자.

 







# 📖 다음에는 무엇을 공부할까?



- 발표때 문제점 보완하기.
- Symbol 이해하기.
- Chrome 디버거 공부하고 활용해보기

- window안에 어떤 속성들이 있는지 까보기.
- Jquery 공부하기.

- [W3C](https://www.w3schools.com/jsref/jsref_constructor_class.asp)에서 책에서 놓친 JS 메소드들과 익숙하지 않은 HTML태그들 써보기.

- 클로저에 대한 이해.