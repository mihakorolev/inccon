let index = 5;

if (index) {
    console.log("Index is truthy"); // This will be printed because 5 is a truthy value.
}

index = 0;

if (index) {
    console.log("This will not be printed because index is 0, which is falsy.");
}
