//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Codon	Protein
// AUG	Methionine
// UUU, UUC	Phenylalanine
// UUA, UUG	Leucine
// UCU, UCC, UCA, UCG	Serine
// UAU, UAC	Tyrosine
// UGU, UGC	Cysteine
// UGG	Tryptophan
// UAA, UAG, UGA	STOP

const table = { 
	AUG: 'Methionine',
	UUU: 'Phenylalanine',
	UUC: 'Phenylalanine',
	UUA: 'Leucine',
	UUG: 'Leucine',
	UCU: 'Serine',
	UCC: 'Serine',
	UCA: 'Serine',
	UCG: 'Serine',
	UAU: 'Tyrosine',
	UAC: 'Tyrosine',
	UGU: 'Cysteine',
	UGC: 'Cysteine',
	UGG: 'Tryptophan',
	UAA: 'STOP',
	UAG: 'STOP',
	UGA: 'STOP',
};
export const translate = (RNA) => {

	if (!RNA) return []; // error checking

	let output = [];
	for (let i = 0; i < RNA.length; i += 3) {
		let protein = table[RNA.substring(i, i + 3)]; // starts at i which equals 0 and continues to the 3rd index

		if (!protein) { 
			throw new Error('Invalid codon'); // error checking
		} else if (protein === 'STOP') {
			break; 
		} else {
			output.push(protein);
		}
	}

	return output;
}


// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
// str.substring(indexStart[, indexEnd])
// translate('AAA');
// // => Error: Invalid codon