function stringConverter(number) {
    
    if (typeof number !== 'number') {
        return 'Error, please enter a number';
    }

    if (number < 0 || number > 1000) {
        return 'Error, number out of range. Please enter a number between 0 and 1000';
    }

    const zero_to_nine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const ten_to_nineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const multiples_of_ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 1000) {
        return 'one thousand'
    };

    if (number === 0) {
        return 'zero';
    }

    let words = '';

    if (number >= 100) {
        words += zero_to_nine[Math.floor(number / 100)] + ' hundred';
        number %= 100;
        if (number > 0) {
            words += ' and ';
        }
    }

    if (number >= 20) {
        words += multiples_of_ten[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
            words += '-' + zero_to_nine[number]
        };
    } else if (number >= 10) {
        words += ten_to_nineteen[number - 10];
    } else if (number > 0) {
        words += zero_to_nine[number];
    }

    return words;
}

module.exports = stringConverter;
