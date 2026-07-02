let string = "gabriel";

string = string.charAt(0).toUpperCase() + string.substring(1); // I concatenated or added the remaining characters of gabriel apart from the 'g'

//2nd Solution
string = string[0].toUpperCase() + string.substring(1); //Using the brackets


//3rd Solution
string = `${string[0].toUpperCase()}${string.substring(1)}`; //Using template literals

string = `${string[0].toUpperCase()}${string.substring(1)}`; //Using template literals


console.log(string);
