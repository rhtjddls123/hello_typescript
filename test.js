"use strict";
var _Base_truePrivate;
class Base {
    constructor() {
        this.isPublicImplicit = 0;
        this.isPublicExplicit = 1;
        this.isProtected = 2;
        this.isPrivate = 3;
        _Base_truePrivate.set(this, 4);
    }
}
_Base_truePrivate = new WeakMap();
class Subclass extends Base {
    example() {
        this.isPublicImplicit; // OK
        this.isPublicExplicit; // OK
        this.isProtected; // OK
        this.isPrivate;
        // Error : Property 'isPrivate' is private and only accessible within class 'Base'.
        console.log("123");
    }
}
const a = new Subclass();
a.example();
