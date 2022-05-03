import dayjs from 'dayjs';

export function getReamainingTimeUntilMstimestamp(timestampMs){
  const timestampDayJs = dayjs(timestampMs)
  const nowDayjs = dayjs();
    return{
    seconds: getRemainingSeconds(nowDayjs, timestampDayJs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayJs),
    hours: getRemainingHours(nowDayjs, timestampDayJs),
    days: getRemainingDays(nowDayjs, timestampDayJs)
    };
}

function getRemainingSeconds(nowDayjs, timestampDayJs){
const seconds = timestampDayJs.diff(nowDayjs, 'seconds') % 60;
return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayJs){
    const minutes = timestampDayJs.diff(nowDayjs, 'minutes') % 60;
return minutes;
}


function getRemainingHours(nowDayjs, timestampDayJs){
    const hours = timestampDayJs.diff(nowDayjs, 'hours') % 24;
return hours;

}

function getRemainingDays(nowDayjs, timestampDayJs){
    const days = timestampDayJs.diff(nowDayjs, 'days');
return days;

}