import { TestClass } from "../src/main";

test('TestClass should have a testProperty with value "test"', () => {
    const instance = new TestClass();
    expect(instance.getTestProperty()).toBe('test');
});