export class TestClass {
    private testProperty: string = 'test';
    changeTestProperty(newValue: string): void {
        this.testProperty = newValue;
    }
    getTestProperty(): string {
        return this.testProperty;
    }
}