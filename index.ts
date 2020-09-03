import moment, { Moment } from 'jalali-moment'

moment.locale('fa')

function pad(num: number): string {
   const s = '0' + num
   return s.substr(s.length - 2)
}

export function momentToString(m: Moment): string {
   moment.locale('fa')
   return [
      moment.weekdays(m.weekday()),
      m.date(),
      moment.localeData().jMonths()[m.month()],
      m.year(),
      'ساعت:',
      `${m.hour()}:${pad(m.minute())}`,
   ].join(' ')
}
