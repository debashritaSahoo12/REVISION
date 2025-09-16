## Q6. The getTotal() should return total of all numbers but it returns undefined. Fix it using closures or this correctly.
# Answer:
- In this case,the arrow function are created inside the calculator obj so they automatically use the calculator object's this.
- Because of that this.total always points to the same calculator object and give the total amount correctly


## Q7. Predict the output and explain why each value is logged at each level.
# Answer:
- At first the local data exists but not assigned yet so it give undefined
- Then same thing happens with inner() so it also give undefined
- Then deep() there is no local data so it go inside inner() and print that data value.

## Q8. Identify why the first log is undefined and the second works. Rewrite code so both work.
# Answer:
- At first arrow function doesn't have their own this so it give undefined
- Then function this pointing towards the user so it give name "Alice".

## Q9. The counter should increase inside the object but it doesn’t. Debug and fix so this.count works as intended.
# Answer:
- At first arrow function doesn't have their own this 
- So this refers to obj and give the correct count value. 