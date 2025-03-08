function calculateFinalScore(obj)
{
    let finalScore = 0;
    if(typeof(obj) !== 'object' || Array.isArray(obj) )
    {
        return `Invalid Input`;
    }
    else{
        if(typeof(obj.name) !== 'string' || typeof(obj.testScore) !== 'number' || typeof(obj.schoolGrade) !== 'number' || typeof(obj.isFFamily) !== 'boolean')
        {
            return `Invalid Object Propertie value`;
        }
        else{
            if(!obj.isFFamily)
            {
                finalScore = obj.testScore + obj.schoolGrade;
            }
            else{
                const bonusPoint = 20;
                finalScore = obj.testScore + obj.schoolGrade + bonusPoint;
            }
        }
    }
    return finalScore;
}

const s1 = {
    name: "Rajib", 
    testScore: 45,
    schoolGrade: 25,
    isFFamily : true
}

const s2 = {
    name: "Rakib", 
    testScore: 45,
    schoolGrade: 25,
    isFFamily : false
}

const s3 = {
    name: 1234, 
    testScore: 15,
    schoolGrade: 25,
    isFFamily : true
}

console.log(calculateFinalScore([1,2,3,4]));



// || !(Array.isArray(obj)