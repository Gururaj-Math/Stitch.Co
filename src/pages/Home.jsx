import Card from "../components/Card"

const Home = (props) => {
  return (
    <div>
      <div class="grid grid-cols-4 gap-10 m-auto my-4">
        <Card>
            <h2>Card Component</h2>
            <p>this is Card Component</p>
            <button class="btn">Click</button>
        </Card>
        <Card>
            <h2>Card Component</h2>
            <p>this is Card Component</p>
            <button class="btn">Click</button>
        </Card>
        <Card>
            <h2>Card Component</h2>
            <p>this is Card Component</p>
            <button class="btn">Click</button>
        </Card>
        <Card>
            <h2>Card Component</h2>
            <p>this is Card Component</p>
            <button class="btn">Click</button>
        </Card>
      </div>
    </div>
  )
}

export default Home
