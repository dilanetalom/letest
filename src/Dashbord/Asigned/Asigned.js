import React, { useState } from 'react'
import './asigned.css'
import Layout from '../Layout/Layout'
import img from '../../assets/images/🦆 search.png'
import user from '../../assets/images/adduser.png'
import icon from '../../assets/images/🦆 icon _arrow.png'
import modal from '../../assets/images/modal.png'
import { Link } from 'react-router-dom'
function Asigned() {

    const [changes, setChanges] = useState(false)

    const element = [
        {
            id: 1,
            matricule: "1",
            code: "Mary Doe ",
            name: "Analysis",
        },
        {
            id: 2,
            matricule: "2",
            code: "John Doe",
            name: "Algorithm",

        },
        {
            id: 3,
            matricule: "3",
            code: "Jeane Doe",
            name: "Database",
        },
    ]
  return (
    <Layout>
    <div className='container_element'>
        <div className='pathname'>{window.location.pathname}</div>
        <div className='content_table'>
            <div className='content_input'>
                <img src={img} alt='' />
                <input type='text' placeholder='Search Here' />
                <button>Search</button>
            </div>
        
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>
                            <div className='heade'>
                            Student
                            <img src={icon} alt='' />
                            </div>
                        
                        </th>
                        <th>
                        <div className='heade'>
                        Course
                            <img src={icon} alt='' />
                        </div>
                        
                        </th>
                       
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <div className='space'></div>
                    {
                        element.map((item) => {
                            return (

                                <tr>
                                    <td><div className='heades'>{item.matricule}</div></td>
                                    <td><div className='heades'>{item.code}</div></td>
                                    <td><div className='heades'>{item.name}</div></td>
                                    <td className='action'>
                                        <span onClick={() => setChanges(!changes)}>...</span>
                                       
                                           {
                                            changes?
                                                <div className='modal'>
                                                    <img src={modal} alt='' />
                                                    <div className='modal_element'>
                                                        <Link to="">Edit</Link>
                                                        <Link to="">Suspend</Link>
                                                        <Link to="">Delete</Link>
                                                    </div>
                                                </div>:null
                                               }                                            
                                    </td>
                                </tr>

                            )
                        })
                    }
                    <div className='space'></div>
                </tbody>
            </table>
            <div className='content_pagination'>
                <ul class="pagination">
                    <li class="pagination-item"><a href="#" class="pagination-link activeone">Prev</a></li>
                    <li class="pagination-item"><a href="#" class="pagination-link">1</a></li>
                    <li class="pagination-item"><a href="#" class="pagination-link">2</a></li>
                    <li class="pagination-item"><a href="#" class="pagination-link">3</a></li>
                    <li class="pagination-item"><a href="#" class="pagination-link activetwo">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</Layout>
  )
}

export default Asigned