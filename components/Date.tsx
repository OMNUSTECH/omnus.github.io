import {parseISO, format} from 'date-fns';

type Props = {
    dateString: string
    className?: string
}

export default function Date( { dateString, className: css } : Props  ){
    const date = parseISO(dateString);
    return <time dateTime={dateString} className={css}>{format(date, 'LLLL d, yyyy')}</time>
}