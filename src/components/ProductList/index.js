import {Component} from 'react'
import {Link} from 'react-router-dom'
class ProductList extends Component {
  state = {livedata: []}

  componentDidMount() {
    this.getdata()
  }
  getdata = async () => {
    const url = 'https://ecomersebackend-7.onrender.com/products/'
    const response = await fetch(url)
    //console.log(response)
    const data = await response.json()
    console.log(data)
    const odata = data.data.map(each => ({
      id: each.productid,
      name: each.productname,
      img: each.productimg,
      descrption: each.productdescription,
      price: each.productimg,
      brand: each.productbrand,
    }))

    //console.log(odata)
    this.setState({livedata: odata})
  }

  render() {
    const {livedata} = this.state
    console.log(livedata)

    return (
      <div>
        <h1>ProductList</h1>
        {livedata.map(each => (
          <Link to={`/singleproduct/${each.id}`}>
            <h2>{each.name}</h2>
          </Link>
        ))}
      </div>
    )
  }
}
export default ProductList
