const arg = process.argv[2];
const size = parseInt(arg);
if (isNaN(size) || size < 1) {
    console.log("Missing size");
 } else {
 const  rowOFXs = 'X' .repeat(size);
for (let i = 0; i < size; i++) {
    console.log(rowOFXs);
 }
}
