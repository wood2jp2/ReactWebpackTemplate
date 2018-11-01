var obj = {
    name: "Josh",
    getName() {
        return this.name
    }
}
// the below will return undefined because 'this' is not defined in the context of the function
var getNameCopy = obj.getName

// This will work because we are binding the instance of this to the object itself, making a clear reference.
var getNameWithBindedThis = obj.getName.bind(obj)