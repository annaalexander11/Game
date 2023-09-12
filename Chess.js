<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(8, 50px);
        }
        .square {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }
        .white {
            background-color: #f0d9b5;
        }
        .black {
            background-color: #b58863;
        }
    </style>
</head>
<body>
    <div class="board" id="board"></div>
    <script>
        const board = document.getElementById('board');
        const pieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

        function createBoard() {
            let isWhite = true;

            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    const square = document.createElement('div');
                    square.classList.add('square', isWhite ? 'white' : 'black');
                    square.dataset.row = i;
                    square.dataset.col = j;
                    square.innerText = pieces[j];
                    board.appendChild(square);
                    isWhite = !isWhite;
                }
                isWhite = !isWhite;
            }
        }

        createBoard();

        let selectedPiece = null;

        board.addEventListener('click', (e) => {
            const square = e.target;
            const row = square.dataset.row;
            const col = square.dataset.col;

            if (!selectedPiece) {
                if (square.innerText !== "") {
                    selectedPiece = square;
                    square.classList.add('selected');
                }
            } else {
                if (square.classList.contains('selected')) {
                    selectedPiece.classList.remove('selected');
                    selectedPiece = null;
                } else {
                    square.innerText = selectedPiece.innerText;
                    selectedPiece.innerText = "";
                    selectedPiece.classList.remove('selected');
                    selectedPiece = null;
                }
            }
        });
    </script>
</body>
</html>
