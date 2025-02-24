export function getTimeDifference(dateString: string): string {
    const receivedDate = new Date(dateString);
    const currentDate = new Date();
  
    const diffMs = currentDate.getTime() - receivedDate.getTime();

    let timeDifference = Math.floor(diffMs / 1000);
    if(timeDifference < 60) {
        return  timeDifference + ' seconds age' ;
    };

    timeDifference = Math.floor(diffMs / (1000 * 60));
    if(timeDifference < 60) {
        return  timeDifference + ' minutes age' ;
    };

    timeDifference = Math.floor(diffMs / (1000 * 60 * 60));
    if(timeDifference < 24) {
        return timeDifference + ' hours age';
    };
  
    return receivedDate.toString().slice(0, 15);
  }