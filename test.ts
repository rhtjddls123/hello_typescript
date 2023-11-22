class Base {
  isPublicImplicit = 0;
  public isPublicExplicit = 1;
  protected isProtected = 2;
  private isPrivate = 3;
  #truePrivate = 4;
}

class Subclass extends Base {
  example() {
    this.isPublicImplicit; // OK
    this.isPublicExplicit; // OK
    this.isProtected; // OK
    // this.isPrivate;
    // Error : Property 'isPrivate' is private and only accessible within class 'Base'.
    console.log("123");
  }
}

const a = new Subclass();
a.example();
