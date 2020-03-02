
import moment from "moment-timezone";



 /**
 * @param time races.sessions
 * @return "MM DD-DD"
 */
export const gpCardHeader = (time) => {

    if(!time.p1 || !time.race){
        return "NaN";
    }

    let p1 = moment(time.p1).format("DD");
    let race = moment(time.race).format("DD")
    let mm = moment(time.p1).format("MMM");
    return mm + " " + p1 + "-" + race;

}

/* *
* TODO: repurpose for next live session

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
*/

/**
 * 
 * @param zone Timezone
 * @return "GMT +/- X | Timezone"
 */
export const timeOffset = (zone) => {
    let t = moment().tz(zone).utcOffset()/60;
    if(t > 0){
        if(Number.isInteger(t)){
            return " GMT +"+ t + " | " + zone;
        }
        return " GMT +"+ Math.trunc(t) + ":30 | " + zone;
       
    }
    else if(t === 0){
        return "GMT | " + zone;
    }
    else{
        if(Number.isInteger(t)){
            return " GMT "+ t + " | " + zone;
        }
        return " GMT "+ Math.trunc(t) + ":30 | " + zone ;
    }

}

/**
 * Modifies given clock depending on timezone
 * Note: time string will be converted to Moment obj
 * @param data Races obj
 * @param zone Timezone
 */
export const convertTime = (data, zone) => {
    
    let races = data;
    let tmp = {};
    
    if(!(races instanceof Object)){
        return data;
    }
    
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

/**
 * Converts standard timestring to readable for Moment.js
 * @param zulu Timestring
 */
const reformatZulu = (zulu) => {

    if(zulu instanceof Object){
        return zulu;
    }
    let x = zulu.split("/");
    return x[0] + " " + x[1];
}


// Converts Moment.js obj to readable string
export const formatToDisplay = (time) => {
    return moment(time).format("HH:mm  -  DD/MM");
}



/**
 * Countdown to next session for race weekend
 * @param time: races.sessions
 */
export const countdown = (time) => {

    if(!time.p1 || !time.p2 || !time.p3 || !time.qualy || !time.race){
        return "Nan"
    }
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