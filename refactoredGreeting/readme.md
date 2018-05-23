## Objective

Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

## Example:

var joe = new Person('Joe');
joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
joe.name           // should == 'Joe'
