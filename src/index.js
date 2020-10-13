module.exports = function toReadable(number) {
            var arr_numbers = new Array();
            arr_numbers[1] = new Array('', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen');
            arr_numbers[2] = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
            arr_numbers[3] = new Array('', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred');
            function number_parser(num) {
                var string = '';
                var num_hundred = '';
                    if (num.length == 3) {
                            num_hundred = num.substr(0, 1);
                            num = num.substr(1, 3);
                            string = arr_numbers[3][num_hundred] + ' ';
                    } 
                    if (num < 20)string += arr_numbers[1][parseFloat(num)];
                    else {
                            
                        var first_num = num.substr(0, 1);
                        var second_num = num.substr(1, 2);
                            string += arr_numbers[2][first_num] + ' ' + arr_numbers[1][second_num];
                    }             
                    return string;
            }
            
            if (!number || number == 0) return 'zero';
            
           
            number = number.toFixed(2);
            if(number.indexOf('.') != -1) {
                var number_arr = number.split('.');
                var number = number_arr[0];
        }
        var number_length = number.length;
        var string = '';
        var num_parser = '';
        var count = 0;
            for (var p = (number_length - 1); p >= 0; p--) {
                var num_digit = number.substr(p, 1);
                    num_parser = num_digit +  num_parser;
                    if ((num_parser.length == 3 || p == 0) && !isNaN(parseFloat(num_parser))) {
                            string = number_parser(num_parser, count) + string;
                            num_parser = '';
                            count++;
                    }
            }
            
            return string.trim();
    }
