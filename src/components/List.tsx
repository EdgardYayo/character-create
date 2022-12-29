import {Sub} from '../types'
import sty from './List.module.css';

interface Props {
    subs: Array <Sub>
}

export default function List ({subs} : Props) {
    return (
    <ul>
      {
        subs.map( sub => {
          return (
            <li className={sty.cont} key={sub.nick}>
              <img className={sty.img} src={sub.avatar} alt={`Avatar for ${sub.nick}`}/>
              <h4 className={sty.name}>{sub.nick} (<small>{sub.subMonth}</small>)</h4>
              <p className={sty.description}>{sub.description?.substring(0, 100)}</p>
            </li>
          )
        })
      }
    </ul>
    )
}