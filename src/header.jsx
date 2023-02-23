export default function Header(){
   return( <div style={{
  border:'1px solid',
   display:'fixed',
   margin:'0',
   padding:'0',}}>
       <ul style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'0',
        padding:'0',
        position:'relative',
        listStyle:'none',
       }}>
        <li>
            <input type="search" name="Que pokemon buscas?" id="" />
        </li>
        <li>
            <button style={{
                background:'blue'
            }}></button>
        </li>
        <li>
            <input type="color" name="" id="" />
        </li>
        <li>
            <input type="color" name="" id="" />
        </li>
        <li>
            <input type="color" name="" id="" />
        </li>
       </ul>
    </div>
    )
}