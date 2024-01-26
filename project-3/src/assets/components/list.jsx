

import 'bootstrap/dist/css/bootstrap.css'
import styles from './list.module.css'
import Button from './button'

export default function List({list})
{




return(
  <>
<ul class="list-group">

{
  list.map(el => (
    <li class={` list-group-item  ${styles.listGroupItem} `} >{el} <Button></Button></li>

  ))
}

  
</ul>
  
  
  
  </>
)


}