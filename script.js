let prms=0 ,nrms=0,trms=0,p=0,n=0,t=0
function calculate()
{
    vals=document.getElementById("vals").value
    x=vals.split(",")

    // console.log(x)


    x.forEach((v,i,o) => 
    {
        num=parseInt(v)
        
        if(num<0)
        nrms=nrms+num*num
        else
        prms=prms+num*num

    });

    trms=nrms+prms;
    nrms=Math.sqrt(nrms)
    prms=Math.sqrt(prms)
    trms=Math.sqrt(trms)
    document.getElementById("pRMS").innerHTML=prms
    document.getElementById("nRMS").innerHTML=nrms
    document.getElementById("tRMS").innerHTML=trms
}