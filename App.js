//CHAPTER 1

// Task 1
// var a="welcome to javascript website"
// alert(a)

//Task 2
// var b="Error!please enter a valid password"
// alert(b)

//Task 3
// var c='Welcome to Javascript\nHappy coding! '
// alert(c)

//Task 4
// var d='welcome to js land'
// var e=confirm('Happy coding')
// alert(d)
// alert(e)

//Task 5 (write this in console with alert call)
// var f='Hello... i can run javascript through console'
// console.log(f)

//Chapter 2 

//Task 1
// var username=''

//Task 2
// var myname ='Muhammad Faizan'

//Task 3
// var message='Hello world'
// alert(message)


//Task 4
// var age=20
// var certificate='CNC'
// alert(myname)
// alert(age)
// alert(certificate)

//Task 5
// var food='PIZZA'
// alert(food.slice(0,5))
// alert(food.slice(0,4))
// alert(food.slice(0,3))
// alert(food.slice(0,2))
// alert(food.slice(0,1))

//Task 6
// var mail ='faizansohail077@gmail.com'
// var email='my emai is '+ mail
// alert(email)

//Task 7

// var book='A smarter way to learn JavaScript';
// var learn='I am learn from'+book+' book'
// alert(learn)

//Task 8
// document.write('Yeah i can write HTML through javascript')

//Task 9

// var art= '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ '
// alert(art)

//CHAPTER 3


//Task 1
// var age=20
// var myage='i am '+age+' year old'
// alert(myage)

//Task 3

// var year=1999
// var birthyear='my birth year is '+year
// alert(birthyear)


//Task 4
// var visitor=prompt('Enter name')
// var order =prompt('Enter order')
// var site=prompt('Enter site')
// var print=visitor+' ordered '+order+' from '+site
// document.write(print)


//Chapter 5

//Task 1

// var a=5
// var b=5
// document.write(a+b)

//Task 2

// var a=5
// var b=5
// document.write(a-b)


// var a=5
// var b=5
// document.write(a*b)


// var a=5
// var b=5
// document.write(a/b)

//Task 3
// var value=''
// var declare='value after declarize is :'+ value
// document.write(declare,'<br>') 


// value=5
// document.write('initial value'+value,'<br/>')
// value +=1
// document.write('value after increament'+value,'<br/>')

// var num=7
// num=num+value
// document.write('value after addition is:'+num,'<br/>')

// num -=1
// document.write('value after decrement is:'+num,'<br/>')

// var reminder =num%3
// document.write('the reminder is:'+reminder)


//Task 4

// var ticket=600
// var total=600 *5
// document.write('the price of buying 5 tickets is :'+total)

//Task 5
// var a =4;
// var b='';
// for (var i=1;i<=10;i++){
//     b=a*i;
//     document.write(a+'*'+i+'='+b+'<br/>')
// }

//Task 6
// var C=25
// var F=70

// var formula_C =(F-32)*5/9
// var formula_F=(C*9/5)+32


// document.write(C +' is '+ formula_C,'<br/>')
// document.write(F +' is '+ formula_F)

//Task 7

// var item1=200
// var item2=300
// var order1=2
// var order2=3
// var shipping=100
// var total=item1+item2+order1+order2+shipping

// document.write('price of item 1 is :'+item1,'<br/>')
// document.write('quantity of item 1 is :'+order1,'<br/>')

// document.write('price of item 2 is :'+item2,'<br/>')
// document.write('quantity of item 2 is :'+order2,'<br/>')
// document.write('Shipping charge will be :'+shipping,'<br/>','<br/>','<br/>')

// document.write('Your total amount will be '+total)


//Task 8

// var marks_obtained=680
// var total=980
// var percent=marks_obtained/total * 100
// document.write('Marks obtained by studen : '+marks_obtained,'<br/>')
// document.write(' Total marks are : '+total,"<br/>")
// document.write('Percentage : ',percent+'%')

//Task 10

// var num=5
// var express=(num + 5) * 10 / 2
// alert(express)

//Task 11

// var year = 2020;
// var birthyear=1999;
// var age = year - birthyear
// document.write('Your age is :'+age)



//Task 12


// var r=20;
// var circle=2*3.14*r
// var area=3.14*r**2

// document.write('Radius of a circle :'+r,'<br/>')
// document.write('The circumference is :'+circle,'<br />')
// document.write('the area is :'+area)



//Task 13

// var snacks= 'Lays';
// var age=21;
// var max_Age=95;
// var snacks_per_day=3;
// var total=(max_Age - age) * snacks_per_day

// document.write('your favourite chips :'+snacks,'<br/>')
// document.write('Your courrent age :'+age,'<br/>')
// document.write('your max age : '+max_Age,'<br/>')
// document.write('your sancks per day : '+snacks_per_day,'<br/>')
// document.write('you will need '+total+' lays to last you until the rip age of '+max_Age)




//Chapter 6 - 9

//Task 1

// var a =10

// document.write('The value of a is '+a,'<br/>');
// document.write('The value of ++a is '+ ++a,'<br/>');
// document.write('The value of a++ is '+a++,'<br/>');
// document.write('now the value of a is :'+a,'<br/>')
// document.write('The value of --a is '+ --a,'<br/>');
// document.write('The value of a-- is '+a--,'<br/>');
// document.write('The value of a-- is '+a,'<br/>');

//Task 2

// var a =2
// var b=1
// var result= --a - --b + ++b + b--;
// alert()

// --a ('its a pre decrement : so the value of a is 1')
// --a - --b("in b its also pre decrement so the value of b is 0 so 1-0 =1 ")
// --a - --b + ++b('in here the value of pre increment(b)is now 1 ,so 1 +1 =2 ')
// --a - --b + ++b + b-- ("in here there is post derement in b but the value before decrement of b is 1 and the value will decrese afte sum so the answer is 3 and thhe value of b is after sum 0")


//Task 3
// var name=prompt('Enter name')
// alert('hello '+name)



//Task 4,5

// var number = prompt('Enter number')
// var b = ''

// for (var i = 1; i <= 10; i++){
//    if(number==number){
//        b=number*i
//    }
//    else {

//     b = 5 * i
//    }
//    document.write(number +" * "+  i +" = "+b ,'<br/>')
// }



//TAsk 6

// var subject1 = prompt('Enter subject')
// subject1 = subject1
// var obtained = prompt('Enter marks')

// var subject2 = prompt('Enter subject')
// subject2 = subject2
// var obtained2 = prompt('Enter marks')

// var subject3 = prompt('Enter subject')
// subject3 = subject3
// var obtained3 = prompt('Enter marks')

// var total = 100

// obtained=  obtained / 100 * 100
// obtained2= obtained2 / 100 * 100
// obtained3= obtained3 / 100 * 100


// document.write(subject1 + ' ' + total+' '+obtained, '<br/>')
// document.write(subject2 + ' ' + total+' '+obtained2, '<br/>')
// document.write(subject3 + ' ' + total+' '+obtained3, '<br/>')


//Chapter 9-11
 
//Task 1

// var city=prompt('Enter city');
// if(city=='Karachi'){
//     document.write('Welcome to the city of light')
// }
// else{
//     document.write('sorry wrong city')
// }



//Task 2
// var gender=prompt('Enter gender')
// if (gender=='male'){
//     document.write('Good moring sir')
// }
// else if(gender=="female"){
//     document.write("Good morning mam")
// }
// else{
//  document.write('good morning')
// }


//Task 3

// var color=prompt("Enter color")
// if (color =='red'){
//     alert('must stop')
// }
// else if(color=='yellow'){
//     alert('start your vehical')
// }
// else if(color=='green'){
//     alert('YOU CAN GO')
// }


//Task 4

// var fuel=prompt('Enter fuel')
// if(fuel < 0.25){
//     alert('please refil the fuel in car')
// }

//Task 5(a)

// var a =4
// if(++a===5){
//     alert('given condition for variable is true')
// }

//Task 5(b)

// var b =82
// if(b++===83){
//     alert('given condition for variable is true')
// }

// Task 5(c)

// var c =12
// if(c++===13){
//     alert('condition 1 is true')
// }

// if(c===13){
//     alert('condition 2 is true')
// }
// if(++c<13){
//     alert('condition 3 is true')
// }
// if(c===14){
//     alert('condition 4 is true')
// }
// condition 2 and 4 is true

// Task 5(e)
// if(true){
//     alert(true)
// }
// if(false){
//     alert(false)
// }

// if ('car'<"cat"){
//     alert("car is smaller than cat")
// }


//Task 7

// var num =3
// var num1=prompt('enter number')
// if(num==num1){
//     alert("bingo")
// }
// else if(num1 < num){
// alert('close enoguh')
// }
// else{
//     alert('try again')
// }



//Task 8

// var num = prompt('enter number')
// if (num % 3 ==0){
//     alert('number is divisible by 3')
// }
// else{
//     alert ("not divisible")
// }


//Task 9

// var num=prompt('Enter number')
// if(num %2==0){
//     alert('Even number')
// }
// else if(num %2 !==0){
//     alert('odd number')
// }


//Task 10

// var T =prompt('Enter number')

// if(T > 40){
//     alert('its to hot outside')
// }


// if(T > 30){
//     alert('the wether is ok')
// }

// if(T > 20){
//     alert('Today\'s wether in cold')
// }

// if(T > 10){
//     alert('OMG today\'s wether is so cool')
// }


//TAsk 11

// var firstnumber=prompt('Enter number')
// var first=Number(firstnumber)
// var secondnumber=prompt('Enter number')
// var second = Number(secondnumber)
// var operator=prompt('Enter number')


// if (operator =='+'){
//     document.write(first + second)
// }

// else if (operator =='-'){
//     document.write(first - second)
// }
// else if (operator =='*'){
//     document.write(first * second)
// }
// else if (operator =='%'){
//     document.write(first % second)
// }


//Chapter 12-13
//TAsk 2
// var a =prompt('enter number')
// var b =prompt('enter number') 
// if (a>b){
//     alert(a+ ' is greater ')
// }
// else if (b>a){
//     alert(b+' is greater')
// }

//Task 3

// var a=prompt('Enter number')
// var b=Number(a)
// if (b>0){
//     alert("positive number")
// }

// else if (b<0){
//     alert("neagtive number")
// }
// else if (b==0){
//     alert("zero")
// }

//TAsk 4

// var value=prompt('Enter a singal letter')

// if (value=="a" || value=="e" || value=="i" || value=="o" || value=="u"){
//     alert('its a vowel')
// }
// else{
//     alert('its not a vowel')
// }


//Task 5 

// var password='123456'
// var input_password=prompt('Input password')
// if(input_password !== password){
//     alert('wrong password')
// }

// else if(input_password == password){
//     alert('correct password')
// }



//TAsk 6

var greeting;
var hour = 13;
if (hour < 18) {
alert(greeting = "Good day");}
else{
alert(greeting = "Good evening");
}