var board = document.createElement("div");
board.classList.add("board");
var container = document.getElementsByClassName("container")[0];
container.appendChild(board);
var num;
var cell;
var symbolWhite = [`&#9814;`, `&#9816;`, `&#9815;`, `&#9812;`, `&#9813;`, `&#9815;`, `&#9816;`, `&#9814;`];
var symbolBlack = [`&#9820;`, `&#9822;`, `&#9821;`, `&#9818;`, `&#9819;`, `&#9821;`, `&#9822;`, `&#9820;`];
for (let i = 8; i > 0; i--) {
    num = document.createElement("div");
    num.classList.add("num");
    num.innerText = i;
    board.appendChild(num);
    for (let j = 1; j < 9; j++) {
        cell = document.createElement("div");
        cell.classList.add("cell");
        if ((i + j) % 2 == 0) {
            cell.classList.add("cell-black");
        }
        if (i === 8) {
            cell.innerHTML = symbolBlack[j - 1];
        }
        if (i === 7) {
            cell.innerHTML = `&#9823;`;
        }
        if (i === 2) {
            cell.innerHTML = `&#9817;`;
        }
        if (i === 1) {
            cell.innerHTML = symbolWhite[j - 1];
        }
        board.appendChild(cell);
    }
}
var letter;
var oneLetter = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
for (let i = 0; i < oneLetter.length; i++) {
    letter = document.createElement("div");
    letter.classList.add("letter");
    letter.innerText = oneLetter[i];
    board.appendChild(letter);
}