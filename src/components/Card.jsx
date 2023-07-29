
const Card = (props) => {
  return (
    <div class="bg-white p-4 text-center rounded-sm shadow-sm shadow-offset">
      {props.children}
    </div>
  )
}

export default Card
