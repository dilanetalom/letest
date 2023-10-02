import React, { useState } from 'react'
import './student.css'
import Layout from '../Layout/Layout'
import img from '../../assets/images/🦆 search.png'
import user from '../../assets/images/adduser.png'
import icon from '../../assets/images/🦆 icon _arrow.png'
import modal from '../../assets/images/modal.png'
import { Link } from 'react-router-dom'

function Student() {
    const [changes, setChanges] = useState(false)
    const [element, setElement] = useState( [
        {
            id: 1,
            matricule: "SE0001",
            name: "Mary Doe",
            town: "Yaounde",
            date: "1998/02/02"
        },
        {
            id: 2,
            matricule: "SE0002",
            name: "John Doe",
            town: "Bafoussam ",
            date: "1998/02/02"
        },
        {
            id: 3,
            matricule: "SE0003",
            name: "Jean Doe",
            town: "Bamenda",
            date: "1998/02/02"
        },
    ])


    const [searchTerm, setSearchTerm] = useState('');


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredData = element.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const searchs = ()=>{
        setElement(filteredData);
      }
    return (
        <Layout>
            <div className='container_element'>
                <div className='pathname'>{window.location.pathname}</div>
                <div className='content_table'>
                    <div className='content_input'>
                        <img src={img} alt='' />
                        <input type='text' placeholder='Search Here'
                         onChange={handleSearchChange}
                         value={searchTerm}
                        />
                        <button>Search</button>
                    </div>
                    <div className='content_add_user'>
                        <span>Student</span>
                        <img src={user} alt='' />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Matricule</th>
                                <th>
                                   <div className='heade'>
                                   Name
                                    <img src={icon} alt='' />
                                   </div>
                                </th>
                                <th>
                                    <div className='heade'>
                                    Town
                                    <img src={icon} alt='' />
                                    </div>
                                </th>
                                <th>
                                   <div className='heade'>
                                      Date of Birth
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
                                            <td><div className='heades'> {item.matricule}</div> </td>                                       
                                            <td><div className='heades'>{item.name}</div></td>
                                            <td><div className='heades'>{item.town}</div></td>
                                            <td><div className='heades'>{item.date}</div></td>
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

export default Student