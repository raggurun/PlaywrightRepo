/* PrintDuplicate [56,78,90,23,90,76,43,56]
data ["chrome",true,132.8]
add index 5 -> webkit
pop->
use push -> firefox
use shift ->
use for..of to print value */

// PrintDuplicate [56,78,90,23,90,76,43,56] 
import { test, expect } from '@playwright/test';
test.only('Print duplicate values from an array', async ({}) => {
    const numbers: number[] = [56,78,90,23,90,76,43,56,23];
    const duplicates: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
                duplicates.push(numbers[i]);
            }
        }
    }
    console.log('Duplicate values in the array:', duplicates);
    expect(duplicates).toEqual([56,90,23]);
});

// data ["chrome",true,132.8]
test.only('Array with mixed data types', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8];
    console.log('Array with mixed data types:', data);
    expect(data).toEqual(["chrome", true, 132.8]);
});
// add index 5 -> webkit
test.only('Add element at index 5', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8];
    data[5] = 'webkit';
    console.log('Array after adding element at index 5:', data);
    expect(data[5]).toBe('webkit');
});
// pop->
test.only('Remove last element using pop', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8, 'webkit'];
    const removedElement = data.pop();
    console.log('Array after pop:', data);
    expect(removedElement).toBe('webkit');
});
// use push -> firefox
test.only('Add element using push', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8];
    data.push('firefox');
    console.log('Array after push:', data);
    expect(data[data.length - 1]).toBe('firefox');
});
// use shift ->
test.only('Remove first element using shift', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8];   
    const removedElement = data.shift();
    console.log('Array after shift:', data);
    expect(removedElement).toBe('chrome');
});
// use for..of to print value
test.only('Print values using for..of loop', async ({}) => {
    const data: (string | boolean | number)[] = ["chrome", true, 132.8];
    const values: (string | boolean | number)[] = [];
    for (const item of data) {
        values.push(item);
    }
    console.log('Values printed using for..of loop:', values);
    expect(values).toEqual(["chrome", true, 132.8]);
});
