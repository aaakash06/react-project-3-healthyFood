
export default function Buttons()
{
let keys= ["c",1,2,3,4,5,6,7,8,9,0]
return(

  <div className="buttons-container">
    {
keys.map(el => (
  <button className= 'btn'>{el}</button>


))
}
  
  
        </div>
);


}