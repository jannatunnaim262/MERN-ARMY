// Javascript String Methods

/*
* String Length
* String charAt()
* String charCodeAt()
* String at()
* String []
* String slice()
* String substring()
* String substr()
* String Search Methods *
* String Templates *
* String toUpperCase()
* String toLowerCase()
* String concat()
* String trim()
* String trimStart()
* String trimEnd()
* String padStart()
* String padEnd()
* String repeat()
* String replace()
* String replaceAll()
* String split()
*/


// String length
// The length property returns the length of string
// The space will be counted as a length

var text = "Jannatun Naim";
  console.log(text.length);
  

// String charAt()
// The charAt() method returns the character at a specified index(position) in a string

 var text = "Jannatun Naim";
 console.log(text.charAt(0));
 

// String charCodeAt()
// The charCodeAt() method returns the ASCII value of the character at a specified index in a string

var text = "Jannatun Naim";
console.log(text.charCodeAt(0));


// String At ()
// ES2022 introduced the string method at ()
// It will help to locate the specified letter

var text = "Jannatun Naim";
console.log(text.charAt(0));


// String []
// Property Access in a string
// It makes strings look like arrays(but they are not)
// If nno character is found, [] returns undefined, while charAt() returns an empty string
// It is read only, str[0] = "A" gives no error(but does not work) 

var text = "Jannatun Naim";
console.log(text[0]);


/*
String Slice()
There are 3 types of string slice.
slice(start,end)
substrings(start, end)
substr(start, length)

* slice() extracts a part of a string and returns the extracted part in a new string
* This method takes 2 parameter: start position and end position(end not included)
*/

// slice()
var text = "Jannatun,Naim,Munna";
console.log(text.slice(0,10)); //'Jannatun,N'

// If a parameter is negative, the position is counted from the end of the string:
console.log(text.slice(-7)); // 'm,Munna'

 // This example slices out a portion of a string from position -12 to position -6:
console.log(text.slice(-12, -6)); // 'n,Naim'


// String substring()
// The difference is that start and end values less than 0 are treated as 0 in substring()
// If you omit the second parameter, substring() will slice out the rest of the string

var str = "Apple, Banana, Kiwi";
console.log(str.substring(7,13)); // 'Banana'



// String substr()
// The difference is that the second parameter specifies the length of the extracted part
// If you omit the second parameter, substr() will slice out the rest of the string.

var str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 6)); // 'Banana'

var str = "Apple, Banana, Kiwi";
console.log(str.substr(7)); // 'Banana, Kiwi'


// String toUpperCase()
// A string is converted to upper case with toUpperCase();

var text1 = "Hello World";
console.log(text1.toUpperCase()); // 'HELLO WORLD'


// String toLowerCase()
// A string is converted to upper case with toLowerCase();

var text1 = "Hello World";
console.log(text1.toLowerCase()); // 'hello world'


// String concat()
// concat() joins two or more strings

var text1 = "Hello";
var text2 = "World";
console.log(text1.concat(" ",text2)); // 'Hello World'


// String trim()
// The trim() method removes whitespace from both sides of a string

var text1 = "    Hello World     ";
console.log(text1.trim()); // 'Hello World'


// String trimStart()
// The trimStart() method removes whitespace from start of a string

var text1 = "    Hello World     ";
console.log(text1.trimStart()); // 'Hello World   '


// String trimEnd()
// The trimEnd() method removes whitespace from end of a string

var text1 = "    Hello World     ";
console.log(text1.trimEnd()); // '  Hello World'


// String padStart()
// The padStart() method pad a string from the start
 var text = "32";
 console.log(text.padStart(11, "*")); // '*********32'


// String padEnd()
// The padEnd() method pad a string from the end
 var text = "01";
 console.log(text.padEnd(9, "*")); // '01*********'



var text1 = "01";
var text6 = text1.padEnd(9, "*");
console.log(text6);
var text2 = "32";
console.log(text6.concat(text2));


// String Repeat()
// The repeat() method returns a string with a number of copies of a string
// The repeat() method returns a new string
// The repeat() method does not change the original string

var text = "Hello World ";
console.log(text.repeat(2)); // 'Hello worldHello World'


// String Replace()
// The replace() method replaces a specified value with another value in a string
// By default, the replace() method replaces only the first match

var text = "Please,visit,Microsoft";
console.log(text.replace("Microsoft", "W3School"));