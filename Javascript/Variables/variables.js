let firstName,lastName;

firstName= 'Hamed';
lastName='Hossainy'
// alert(firstName);

console.log("My name is :" + firstName+ " " + lastName);
// typeof() is using to know the type of the Variable
console.log(typeof(firstName));


let x=10;
// document.write(x%4);
document.write(x*5);
document.write('<br>');
document.write(x/5);
// document.write('<div style="background:red;height:250px;" > new div </div>');
linebreak='<br>';
document.write(linebreak);
let y= x+ 'string text';
document.write(y);
x=5;
document.write(linebreak);
document.write('x = ')
document.write(x);
result=x--;
document.write(linebreak);
document.write('x--= ')
document.write(result);

document.write(linebreak);
document.write('result = ')
document.write(result);

// comparison operators
document.write(linebreak);
let age=19;
let minAge=18;
document.write(age=minAge);

if(age==minAge){
    alert('You are '+ age );
}
document.write(linebreak);
document.write(age>=minAge);
if(age >=minAge){
    alert('You are'+ minAge + 'or older ');
}
document.write(linebreak);
document.write('age <= minAge = ');
document.write(age <= minAge);
document.write(linebreak);

age=15;
minAge=18;
document.write('age=15 , minAge=18 then age < minAge = ');
document.write(age < minAge);
document.write(linebreak);

document.write('age=15 , minAge=18 then age > minAge = ');
document.write(age > minAge);

document.write(linebreak);
age='15';
document.write('age===15 is ');
document.write(age===15);

document.write(linebreak);
age=14;
document.write('age != 15 is ');
document.write(age != 15);

