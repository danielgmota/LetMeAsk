type ButtonProps = {
  children?: string;
  type?: string;
}

export function Button(props: ButtonProps) {
  return(
    <button className={props.type}>{props.children || "Novo Botão"}</button>
  )
}
