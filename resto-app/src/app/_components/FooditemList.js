import React from 'react'

const FooditemList = () => {
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
            <tr>
                <td className='tr-id'>1.</td>
                <td>Pizza</td>
                <td>300</td>
                <td>Best seller pizza</td>
                <td>Image</td>
                <td><button >Delete</button><button>Edit</button></td>
            </tr>
            <tr>
                <td className='tr-id'>2.</td>
                <td>Pizza</td>
                <td>300</td>
                <td>Best seller pizza</td>
                <td>Image</td>
                <td><button >Delete</button><button>Edit</button></td>
            </tr>
            <tr>
                <td className='tr-id'>3.</td>
                <td>Pizza</td>
                <td>300</td>
                <td>Best seller pizza</td>
                <td>Image</td>
                <td><button >Delete</button><button>Edit</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FooditemList;
