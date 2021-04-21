const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const colors = ['#eb4034', '#eb8f34', '#b1eb34', '#34eb40', '#34b1eb', '#345feb', '#9334eb', '#eb3493'];
let index = 0;

function rainbowLetter(letter) {
    return `<span style="color: ${colors[index++ % colors.length]}">${letter}</span>`;
};

rl.question("Enter comment:\n", function(input) {
    // input = `-'"-._,-    ${input}   -'"-._,-`; // Add wave effect

    let output = '';
    input.split('').forEach(l => {
        output += rainbowLetter(l);
    });

    console.log(output);
    process.exit(0);
});
