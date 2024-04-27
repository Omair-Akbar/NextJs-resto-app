import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
const FooditemsList = () => {

  const [foodItems, setFoodItems] = useState();
  const router = useRouter();
  useEffect(() => {
    loadFooditems();
  }, []);


  const loadFooditems = async () => {

    const restaurantData = await JSON.parse(localStorage.getItem("restaurantUser"))
    const resto_id = restaurantData._id;
    let response = await fetch(`http://localhost:3000/api/restaurant/foods/${resto_id}`)
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result)
    } else {
      alert("Something went wrong")
    }
  }
  const deleteItem = async (itemId) => {

    let response = await fetch(`http://localhost:3000/api/restaurant/foods/${itemId}`, {
      method: "delete"
    })
    response = await response.json();
    if (response.success) {
      loadFooditems();
    } else {
      alert("Something went wrong")
    }
  }
  return (
    <div className='wrap-items-list'>
      <h1 className='login-page-heading'>Food items list</h1>
      <table>
        <thead>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operation</td>
          </tr>
        </thead>
        <tbody>
          {
            foodItems && foodItems.map((item, key) => (
              <tr key={key}>
                <td className='tr-id'>{key + 1}.</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td><img src={item.path}></img></td>
                <td><button onClick={() => { router.push(`/restaurant/dashboard/${item._id}`) }}>Edit</button><button onClick={() => { deleteItem(item._id) }}>Delete</button></td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default FooditemsList;
