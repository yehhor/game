// import React, { Component } from 'react';
// import './App.css';
// import {Square} from './Square';
// import {elems,value} from './App';


export class WhoWin extends Component {
    constructor(props) {
        super(props);
    };

    matrix = (rows, cols, defaultValue) => {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            arr.push([]);
            arr[i].push(new Array(cols));
            for (let j = 0; j < cols; j++) {
                arr[i][j] = defaultValue[(rows * i) + j];
            }
        }
        return arr;
    };

    checkDirection = (y, x, direction, n, arr, value) => {
        const nY = direction[0] + y;
        const nX = direction[1] + x;
        let nextCoordinate = null;

        // -------if no neighb---------
        try {
            nextCoordinate = arr[nY][nX];
        }catch(e){
            return false;
        }
        // -------if no neighb---------
        if (nextCoordinate === value) {
            if (n === 1) {
                return true;
            }
            return this.checkDirection(nY, nX, direction, n - 1, arr, value);
        }
        return false;
    };

    checkWinner = (elems) => {
        let matrixArray = this.matrix(3, 3, elems);
        let direction = {
            0 : [-1,-1],
            1 : [-1,0],
            2 : [-1,1],
            3 : [0,-1],
            4 : [0,+1],
            5 : [+1,-1],
            6 : [+1,0],
            7 : [+1,+1]
        };

        for (let y = 0; y < matrixArray.length; y++) {
            for (let x = 0; x < matrixArray[y].length; x++) {
                if (matrixArray[y][x] === value) {
                    for (let n in direction) {
                        if (this.checkDirection(y, x, direction[n], 2, matrixArray, value)) {
                            console.log(`WIN - ${value}`);
                            break;
                        }
                    }
                }
            }
        }
    };
}


