function ExampleConstructor() {
}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor\'s prototype:', typeof ExampleConstructor.prototype);

const exConstructor = new ExampleConstructor();
console.log('result of calling ExampleConstructor with new keyword:', exConstructor);

const isInstanceOf = exConstructor instanceof ExampleConstructor;
console.log('exConstructor instanceof ExampleConstructor? :', isInstanceOf);
