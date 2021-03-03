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

#  :thinking:  **기능상의 차이가 없다는데 결국 []를 쓰면 Array()를 ** 호출 하는 것 인데 속도가 저하되진 않을까?

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



<br><br>

#### **크롬에서 1억번 배열을 생성했을때 시간**

| Using Array()  | Using []      |
| -------------- | ------------- |
| **94.361 ms**  | **77.613 ms** |
| **99.846 ms**  | **77.564 ms** |
| **104.616 ms** | **80.981 ms** |

# <br><br>

# **확실히 크롬에서는 리터럴([])이 성능이 더 우수하다고 결론지었다.**



<br><br>



# :thinking: **근데 왜 []가 더 빠르지...??**





<br><br>



준비중.

<br><br>



<br>



# for in   VS for of

<br>

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



Symbol.iterable한 속성을 가지고 있는 타입은 Array,String,Map/Set 등이 있다.

그래서 뒤 늦게 **. **을 사용해서 프로퍼티를 추가한 hello , bye ,mmmm는 출력되지 않았다.

<br><br>



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

iterable하지 않다고 에러난다.

