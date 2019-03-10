# Notes from the TypeScript repo

## [lib/lib.es5.d.ts](https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es5.d.ts)

Getters and setters:
```typescript
interface PropertyDescriptor {
    get?(): any;
    set?(v: any): void;
```

Map interfaces:
```typescript
interface PropertyDescriptorMap {
    [s: string]: PropertyDescriptor;
}
```

Perhaps the quintessential type constructors without classes:
```typescript
interface ObjectConstructor {
    new(value?: any): Object;
    (): any;
    (value: any): any;
```

Many definitions of the same thing, to match the possible behaviors it can have:
```typescript
bind<T>(this: T, thisArg: any): T;
bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R;
bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R;
bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R;
bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R;
bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;
```

## lib/lib.es*

All the ES5 and ES6 new syntax, properly defined.
