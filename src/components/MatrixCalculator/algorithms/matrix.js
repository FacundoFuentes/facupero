import FractionClass from "./fraction.js";

export class FloatMatrix{
    constructor([...rows] = []) {
		this.rows = [...rows];
		this.numberOf = {
			columns: rows[0].length,
			rows: rows.length,
		};
	}

	static add(m1, m2) {
		if (this.checkDimensions(m1, m2)) {
			let sum = new FloatMatrix();
			for (let i = 0; i < m1.numberOf.rows; i++) {
				sum.rows.push(m1.rows[i].map((e, index) => e + m2.rows[i][index]));
			}
			return sum;
		} else throw Error('Las matrices no tienen igual dimension.');
    }

    static product(m1, m2) {
        if (m1.numberOf.columns === m2.numberOf.rows) {
            let product_rows = [];
            for (let i = 0; i < m1.numberOf.columns; i++){
                let row = [];
                for (let j = 0; j < m2.numberOf.rows; j++){
                    let entry = 0;
                    for (let n = 0; n < m1.numberOf.columns; n++){
                        entry += m1.rows[i][n] * m2.rows[n][j];
                    }
                    row.push(entry);
                }
                product_rows.push(row);
            }
            return new FloatMatrix(product_rows);
        }
    }
    
    multiplyConstant(k) {
        for (let i = 0; i < this.numberOf.columns; i++){
            for (let j = 0; j < this.numberOf.rows; j++) {
                this.rows[i][j] *= k;
            }
        }
        return this
    }

    iterate(cb) {
        for (let i = 0; i < this.numberOf.columns; i++){
            for (let j = 0; j < this.numberOf.rows; j++) {
                this.rows[i][j] = cb(this.rows[i][j]);
            }
        }
        return this
    }

	static substract(m1, m2) {
		if (this.checkDimensions(m1, m2)) {
			let subs = new FloatMatrix();
			for (let i = 0; i < m1.numberOf.rows; i++) {
				subs.rows.push(m1.rows[i].map((e, index) => e - m2.rows[i][index]));
			}
			return subs;
		} else throw Error('Las matrices no tienen igual dimension.');
	}

	static checkDimensions(m1, m2) {
        if (m1.numberOf.columns === m2.numberOf.columns && m1.numberOf.rows === m2.numberOf.rows) return true;
        return false;
	}

	static determinant(matrix, determinant = 0) {
		if (matrix.rows.length === 2) {
			return matrix.rows[0][0] * matrix.rows[1][1] - matrix.rows[0][1] * matrix.rows[1][0];
		} else {
			for (let i = 0; i < matrix.numberOf.rows; i++) {
				determinant += matrix.rows[i][0] * matrix.cofactor(i, 0);
			}
			return determinant;
		}
    }

	cofactor(row, column) {
		return (-1) ** (row + column) * FloatMatrix.determinant(this.reduce(row, column));
	}

	reduce(row, column) {
		let reduced_rows = [];
		for (let i = 0; i < this.numberOf.rows; i++) {
			if (i !== row) {
				let reduced_row = [];
				for (let j = 0; j < this.numberOf.columns; j++) {
					if (j !== column) reduced_row.push(this.rows[i][j]);
				}
				reduced_rows.push(reduced_row);
			}
		}
		return new FloatMatrix(reduced_rows);
    }

    transpose() {
        let columns = [];
        for (let i = 0; i < this.numberOf.rows; i++){
            let column = [];
            for (let j = 0; j < this.numberOf.columns; j++){
                column.push(this.rows[j][i]);
            }
            columns.push(column);
        }
        return new FloatMatrix(columns);
    }

    cofactorMatrix() {
        let cof_mat_rows = [];
        for (let i = 0; i < this.numberOf.rows; i++){
            let row = [];
            for (let j = 0; j < this.numberOf.columns; j++){
                row.push(this.cofactor(i, j));
            }
            cof_mat_rows.push(row);
        }
        return new FloatMatrix(cof_mat_rows);
    }

    inverse() {
        return this.cofactorMatrix().transpose().multiplyConstant(1/FloatMatrix.determinant(this))
    }

	print() {
        let output = '';
        this.rows.forEach((row) => (output += '|' + row.toString().replace(/,/g, ' ') + '|\n'));
        console.log(output);
	}
}

export class FracMatrix{
    constructor([...rows] = []) {
        this.rows = rows.map(row => row.map(e => {
            if (!e.hasOwnProperty('den')) return new FractionClass(e, 1)
            else return e;
        }));
		this.numberOf = {
			columns: rows[0] ? rows[0].length : 0,
			rows: rows.length,
        };
        this.isSquare = (this.numberOf.columns === this.numberOf.rows) ? true : false;
    }

    static checkDimensions(m1, m2) {
        if (m1.numberOf.columns === m2.numberOf.columns && m1.numberOf.rows === m2.numberOf.rows) return true;
        return false;
    }
    
    static add(m1, m2) {
		if (this.checkDimensions(m1, m2)) {
			let sum_rows = []
			for (let i = 0; i < m1.numberOf.rows; i++) {
				sum_rows.push(m1.rows[i].map((e, index) => FractionClass.add(e,m2.rows[i][index])));
			}
			return new FracMatrix(sum_rows);
		} else throw Error('Las matrices no tienen igual dimension.');
    }

    static product(m1, m2) {
        if (m1.numberOf.columns === m2.numberOf.rows) {
            let product_rows = [];
            for (let i = 0; i < m1.numberOf.rows; i++){
                let row = [];
                for (let j = 0; j < m2.numberOf.columns; j++){
                    let entry = new FractionClass(0);
                    for (let n = 0; n < m1.numberOf.columns; n++){
                        entry = FractionClass.add(entry, FractionClass.product(m1.rows[i][n],m2.rows[n][j]));
                    }
                    row.push(entry);
                }
                product_rows.push(row);
            }
            return new FracMatrix(product_rows);
        }
    }

    reduce(row, column) {
		let reduced_rows = [];
		for (let i = 0; i < this.numberOf.rows; i++) {
			if (i !== row) {
				let reduced_row = [];
				for (let j = 0; j < this.numberOf.columns; j++) {
					if (j !== column) reduced_row.push(this.rows[i][j]);
				}
				reduced_rows.push(reduced_row);
			}
		}
		return new FracMatrix(reduced_rows);
    }

    transpose() {
        let columns = [];
        for (let i = 0; i < this.numberOf.rows; i++){
            let column = [];
            for (let j = 0; j < this.numberOf.columns; j++){
                column.push(this.rows[j][i]);
            }
            columns.push(column);
        }
        return new FracMatrix(columns);
    }

    determinant(determinant = new FractionClass(0)) {
        if (this.isSquare) {
            if (this.numberOf.columns === 2 && this.numberOf.rows === 2) {
                return FractionClass.substract(
                    FractionClass.product(this.rows[0][0], this.rows[1][1]),
                    FractionClass.product(this.rows[0][1], this.rows[1][0])
                )
            } else {
                for (let i = 0; i < this.numberOf.rows; i++) {
                    determinant = FractionClass.add(determinant, FractionClass.product(this.rows[i][0], this.cofactor(i, 0)));
                }
                return determinant;
            }
        } else throw Error('La matriz no es cuadrada.')
    }

    cofactor(row, column) {
		return FractionClass.product(new FractionClass((-1) ** (row + column)), this.reduce(row, column).determinant());
    }
    
    cofactorMatrix() {
        let cof_mat_rows = [];
        for (let i = 0; i < this.numberOf.rows; i++){
            let row = [];
            for (let j = 0; j < this.numberOf.columns; j++){
                row.push(this.cofactor(i, j));
            }
            cof_mat_rows.push(row);
        }
        return new FracMatrix(cof_mat_rows);
    }

    inverse() {
        return this.cofactorMatrix().transpose().multiplyConstant(new FractionClass(this.determinant().den,this.determinant().num))
    }

    static LUdecomp(matrix) {
        
    }

    iterate(cb) {
        for (let i = 0; i < this.numberOf.rows; i++){
            for (let j = 0; j < this.numberOf.columns; j++) {
                this.rows[i][j] = cb(this.rows[i][j]);
            }
        }
        return this
    }

    multiplyConstant(k) {
        if (!k.hasOwnProperty('den')) k = new FractionClass(k);
        this.iterate(e => FractionClass.product(e, k))
        return this;
    }

    static areEqual(m1, m2) {
        if (!this.checkDimensions(m1,m2)) return false;
        for (const i in m1) {
            for (const j in m1) {
                if (m1[i][j] !== m2[i][j]) return false;
            }
        }
        return true;
    }
    
    print() {
        let output = '';
        if (this.rows[0][0].hasOwnProperty('num') && this.rows[0][0].hasOwnProperty('den')) {
            for (let i = 0; i < this.numberOf.rows; i++) {
                for (let j = 0; j < this.numberOf.columns; j++) {
                    output += this.rows[i][j].string + ' ';
                }
                output += '\n';
            }
        } else {
            for (let i = 0; i < this.numberOf.rows; i++) {
                for (let j = 0; j < this.numberOf.columns; j++) {
                    output += this.rows[i][j] + ' ';
                }
                output += '\n';
            }
        }
        console.log(output);
    }
}