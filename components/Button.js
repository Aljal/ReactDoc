import Link from 'next/link'
import '../style/button.scss';

export default function Button(props) {
  return (
    <div className={"alignCenter " + props.className}>
      <Link href={props.link}>
        <a className="button">{props.text}</a>
      </Link>
    </div>
  )
}