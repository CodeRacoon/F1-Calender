
import moment from "moment-timezone";


// gets start and end of GP weekend
export const gpCardHeader = (time) => {


    let p1 = moment(time.p1).format("DD");
    let race = moment(time.race).format("DD")
    let mm = moment(time.p1).format("MMM");
    return mm + " " + p1 + "-" + race;

}

// TODO: repurpose for next live session
export const nextRace = (races) => {

    let d;
    const today = new Date();
    let ret;
    
    for(let i = 0; i< races.length; i++){
        d = new Date(races[i].sessions.race.split("/")[0]);
        if(today < d){
            ret = races[i];
            break;
        }
    }
    return ret
}

// returns GMT timezone
export const timeOffset = (zone) => {
    let t = moment().tz(zone).utcOffset()/60;
    if(t > 0){
        return " GMT +"+ t;
    }
    else if(t === 0){
        return "GMT";
    }
    else{
        return  "GMT " + t;
    }

}

// Converts raw time data from json to momentjs obj
export const convertTime = (data, zone) => {
    
    let races = data;
    let tmp = {};
    
    
    let n = data.length;

    for(let c = 0; c < n; c++){
        tmp = races[c];
        //console.log(moment(reformatZulu(tmp.sessions.p1)).tz(zone));
        tmp.sessions.p1 = moment(reformatZulu(tmp.sessions.p1)).tz(zone);
        tmp.sessions.p2 = moment(reformatZulu(tmp.sessions.p2)).tz(zone);
        tmp.sessions.p3 = moment(reformatZulu(tmp.sessions.p3)).tz(zone);
        tmp.sessions.qualy = moment(reformatZulu(tmp.sessions.qualy)).tz(zone);
        tmp.sessions.race = moment(reformatZulu(tmp.sessions.race)).tz(zone);
        races[c] = tmp;
        
    }
    return races;
}

// changes timestring fram dataset
const reformatZulu = (zulu) => {

    if(zulu instanceof Object){
        return zulu;
    }
    let x = zulu.split("/");
    return x[0] + " " + x[1];
}


// Converts MomentJs obj to readable string
export const formatToDisplay = (time) => {

    return moment(time).format("HH:mm / MMM DD");
}



// returns countdown text based on time until next session
export const countdown = (time) => {

    let now = moment().valueOf();
    let next = "";
    let times = [time.p1, time.p2, time.p3, time.qualy, time.race];

    for(let i = 0; i < times.length; i++){
        if(times[i].valueOf() > now){
            next = times[i];
            break;
        }
    }

    if(next === ""){
        return "Completed";
    }

    let days = next.diff(moment(), 'days');
    let hours = next.diff(moment(), 'hours') - (days * 24);
    let minutes = next.diff(moment(), 'minutes') - ((days * 24 + hours) * 60);

    return "Session Start "+ days + "D:" + hours + "H:" + minutes + "M";
}