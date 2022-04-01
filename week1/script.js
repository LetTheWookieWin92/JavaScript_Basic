/*
// Object
let person = 
{
  name: "Geoff",
  age: 27,
  getWage: function() {
    return this.age * 1000;
  }
};

//console.log("Geoff's wage is: $" + person.getWage())

// Array
let colours = ["Red", "Blue", "Green"];
console.log("Geoff's favourite colour is: " + colours[2])

*/

// For of and for in
function loopOverArray(directions) {
    // Create empty object
    object = {};

    // For each entry of directions
    for(let entry of directions) {

        //If the key for a certain direction already exists in the object, add 1 to value
        if(entry in object)
        {
            object[entry]++;
        }
        //Else create the key for the direction with 1 as value
        else
        {
           object[entry] = 1;
        }
    }
    //Return object
    console.log(object);
}

loopOverArray(["n", "s", "e", "e"])





// Finds the 2 numbers in array that add to target

/*
function twoSum(nums, target) {
    
    let remaining = 0;

    for(let i=0; i<nums.length; i++)
    {

        remaining = target - nums[i];
        
        if(nums.includes(remaining))
        {
            yPosition = nums.indexOf(remaining);

            if(i != yPosition)
            {
                let x = i;
                let y = nums.indexOf(remaining);

                let number = [x,y];
                return number;
            }  
        }
    }

    
};

twoSum([2,7,11,15], 9);
*/