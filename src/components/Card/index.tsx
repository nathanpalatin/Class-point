import './style.css';

export type Cardprops = {
  name: string;
}

export function Card(props: Cardprops){

  return (
    <div className="card">
      <span>{props.name}</span>
    </div>
  )
}