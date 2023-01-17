//Store Tom & Jerry's mass and height as variables.

const tom = {mass: 8, height: 9};
const jerry = {mass: 45, height: 10};


const tomBMI = (tom.mass / (tom.height * tom.height)) * 703;
const jerryBMI = (jerry.mass / (jerry.height * jerry.height)) * 703;



const isTomHigherBMI = tomBMI > jerryBMI;





console.log(`Is Tom's BMI higher than Jerry's? ${isTomHigherBMI}`);
white_check_mark
eyes
raised_hands











