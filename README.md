# Dasar Pemrograman dengan Javascript

Repo ini berisi resource Bicara Dasar Pemrograman dengan Javascript.
[Youtube Series untuk belajar Javascript](https://www.youtube.com/watch?v=RUTV_5m4VeI&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w)

## 1. Dasar Pemrograman dengan Javascript : INTRO

|     | Javascript | 
| --- | ---------- | 
| 1   | undefined  | 
| 2   | boolean    | 
| 3   | number     | 
| 4   | string     |
| 5   | bigint     |
| 6   | symbol     |
| 7   | null       |
| 8   | object     |
| 9   | function   |

**Notes :**

- 1-6 are Primitive Data Types
- All primitives are immutable. A primitive is not an object and has no methods of its own.
- Null is special primitive
- All types in TypeScript are subtypes of a single top type called the Any type.


# 2. POPUP BOX

```javascript

alert("Hello World!");

prompt("masukan nama");

confirm("kamu yakin?");

```

# 3. PENGULANGAN : WHILE

The `while` loop loops through a block of code as long as a specified condition is true.

**Syntax**

```javascript
while (condition) {
  // code block to be executed
}
```

# 4. PENGULANGAN : FOR

The `for` loop has the following syntax:

```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

# 5. PENGKONDISIAN : IF ELSE

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false
- Use `else if` to specify a new condition to test, if the first condition is false

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
}
```

Use the `else` statement to specify a block of code to be executed if the condition is false.

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

Use the `else if` statement to specify a new condition if the first condition is false.

```javascript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

# 6. PENGKONDISIAN : SWITCH

The `switch` statement is used to perform different actions based on different conditions.

Use the `switch` statement to select one of many code blocks to be executed.

```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

**Begini Cara kerjanya:**

- Ekspresi switch dievaluasi sekali.
- Nilai ekspresi dibandingkan dengan nilai setiap kasus.
- Jika ada kecocokan, blok kode yang terkait akan dieksekusi.
- Jika tidak ada kecocokan, blok kode default dijalankan.

# 7. FUNCTION pada JAVASCRIPT

JavaScript function adalah blok kode yang dirancang untuk melakukan tugas tertentu.

JavaScript function dijalankan ketika "sesuatu" memanggilnya (memanggilnya).

```javascript
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```