function sendNotification(email)
{
    if(!email.includes("@") || email.indexOf("@") !== email.lastIndexOf("@"))
    {
        return `Invalid Email`
    }

    const parts = email.split("@");

    const userName = parts[0];
    const domainName = parts[1];

    if(parts.length !== 2 || parts[0] === "" || parts[1] === "")
    {
        return `Invalid Email`;
    }
    else if(domainName !== "gmail.com")
    {
        return "Only gmail.com is available";
    }
    else{
        return `${userName} sent you an email from ${domainName}`;
    }

    
}

const msg = sendNotification("moin@gmail.com");
console.log(msg);



