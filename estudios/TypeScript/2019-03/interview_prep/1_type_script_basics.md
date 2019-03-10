# TypeScript basics

## Installing TypeScript

Run: `npm i -g typescript`

Notes:
- How to client-side here:
  <https://www.typescriptlang.org/docs/handbook/gulp.html>. Not doing
  that at the moment.

## Notes about the language itself

(nothing so far)

## Types and Interfaces

Declaring strings:

    let a: string = "blue"
    let b: string = 'blue'
    let c: string = `blue` // This one allows multi-strings

Declaring arrays:

    let a: number[] = [1, 2, 3]
    let b: Array<number> = [1, 2, 3]

Now, types that are not in JavaScript

Tuples:

    let x: [string, number]
    x = ["hello", 10] // Ok
    x = [10, "hello"] // Not ok
    x[3] = 'word'     // Elements outside known bounds can be of either type
    x[5] = true       // Not ok

Enum:

    enum Color {Red = 1, Green = 2}
    let c: Color = Color.Green       // I can get a number (2)
    let colorName: string = Color[2] // I can get a name ("Green")

Object

> Object is a type that represents the non-primitive type, i.e. any
> thing that is not number, string, boolean, symbol, null, or
> undefined.

Interfaces:

    function printLabel(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }
    let myObj = {size: 10, label: "My Label"};
    printLabel(myObj);

Optional:

    interface SquareConfig {
        color?: string;
        readonly width: number;
    }
    let sq: SquareConfig = { color: 'black' }

Readonly:

    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    p1.x = 5; // error!

Indexed things (and errors):

    interface NumberDictionary {
        [index: string]: number;
        length: number;    // ok, length is a number
        name: string;      // error, the type of 'name' is not a subtype of the indexer
    }

Class

    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }
    
    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }

Static alternative to a variable Class definition,
by overwriting `new` with an interface:

    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    let digital = createClock(DigitalClock, 12, 17)

Extending interfaces:

    interface Shape {
        color: string;
    }
    interface Square extends Shape { // Can do more than once, like extends A, B, ... {
        sideLength: number;
    }

Interfaces extendiendo Classes:

> When an interface type extends a class type it inherits the members
> of the class but not their implementations.

Notes:
- When a class implements an interface, only the instance side of the
  class is checked.

Links:
- [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
