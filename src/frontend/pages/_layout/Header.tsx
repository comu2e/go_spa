import Link from 'next/link';
import layout from '../../styles/layout.module.scss';
export default function Header() {
  return (

    <ul className={layout.header}>
      <li>

        <Link href="/">
          <a>Home</a>
        </Link>
      </li>


    </ul>
  )
}