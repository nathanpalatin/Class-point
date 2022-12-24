import './style.css';

export type Cardprops = {
  name: string;
  time: string;
}

export function Card(props: Cardprops){

  return (
    <div className="card">
      <span>{props.name}</span>
      <span>{props.time}</span>
    </div>
  )
}