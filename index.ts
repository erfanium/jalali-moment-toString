import moment, { Moment } from 'jalali-moment'

moment.locale('fa')

function pad(num: number): string {
   const s = num.toString()
   return s.length === 1 ? '0' + s : s
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
