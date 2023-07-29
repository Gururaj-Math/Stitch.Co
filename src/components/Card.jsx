
const Card = (props) => {
  return (
    <div class="bg-white p-4 text-center rounded-xl shadow-sm shadow-offset">
      {props.children}
    </div>
  )
}

export default Card
