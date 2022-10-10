function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin)
    { if ((sharkDistance / sharkSpeed * 2) > (pontoonDistance / youSpeed) && dolphin === true)
        {return "Alive!"
    } else if ((sharkDistance / sharkSpeed) > (pontoonDistance / youSpeed)) 
        {return "Alive!"
    } else 
        {return "Shark Bait!"
    }
    };

    //tested in CW - pass
    console.log(shark(38, 157, 3, 19, false))