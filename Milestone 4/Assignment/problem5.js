function  waitingTime(waitingTimes  , serialNumber) {
    
    let totalInterviewedTime = 0;
    const arrySize =waitingTimes.length;

    if(!Array.isArray(waitingTimes) || typeof(serialNumber) !== 'number')
    {
        return `Invalid Input`;
    }
    else{
        
        if(serialNumber <= arrySize)
        {
            return 0;
        }
        else
        {
            for(const times of waitingTimes)
            {
                totalInterviewedTime += times;

            }

            const averageTime = Math.round(totalInterviewedTime / arrySize);

            const remainingCandidates = (serialNumber - 1) - arrySize;

            const waitingPeriod = remainingCandidates * averageTime;

            return waitingPeriod;
        }
        
    }
}

const interviewTime = [13, 2, 6, 7, 10];
const serialNumber = 15;

console.log(waitingTime(interviewTime, serialNumber));
