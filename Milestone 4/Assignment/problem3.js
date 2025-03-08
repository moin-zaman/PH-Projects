function checkDigitsInName(name)
{
    let count = 0;
    if(typeof(name) !== 'string')
    {
        return `Invalid Input`;
    }
    else{
        for(const key of name)
            {
                // if('0123456789'.includes(key))
                // {
                //     count++;
                // }

                if (key >= '0' && key <= '9') {  // More efficient check for digits
                    count++;
                }
                
            }
        
            // if(count !== 0)
            // {
            //     return true;
            // }
            // else{
            //     return false;
            // }

            return count !== 0;
    }
}

const name1 = checkDigitsInName("Moin");
console.log(name1);

// const name2 = checkDigitsInName("!@#");
// console.log(name2);

// const name3 = checkDigitsInName(["Raj"]);
// console.log(name2);

