function hascollided(lbullet,lwall){
    lbulletRightEdge=lbullet.x + lbullet.width;
    lwallLeftEdge = lwall.x;
        if(lbulletRightEdge>=lwallLeftEdge){
            return true;
            } 
            else{
            return false;
            }
      
    }
    