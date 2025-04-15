// task-5
function func1(n) {
    let len = n.length
    const x = [...n].sort((a, b) => a - b)
    const y = n.sort((a, b) => b - a)
    console.log(x);
    console.log(y);
    min = x[0];
    max = y[0]
    return (m) => {
        for (let i = 1; i < len; i++){
            if (n[i] > n[i - 1] && n[i] < m) {
                min=n[i]
            }
        }
        console.log("Eng yaqin son: "+min);
    };
}
func1([16, 8, 2, 1, 5, 9, 3]),(10)