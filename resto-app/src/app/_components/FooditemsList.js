import { useEffect, useState } from 'react'

const FooditemsList = () => {

  const [foodItems, setFoodItems] = useState();

  useEffect(() => {
    loadFooditems();
  }, []);


  const loadFooditems = async () => {
    let response = await fetch("http://localhost:3000/api/restaurant/foods/662b8a593e5016b89339c98e")
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result)
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
                <td className='tr-id'>{key+1}.</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td><img className='dashboard-img' src={item.path}></img></td>
                <td><button >Delete</button><button>Edit</button></td>
              </tr>

            ))
          }

         
        </tbody>
      </table>
    </div>
  )
}

export default FooditemsList;
